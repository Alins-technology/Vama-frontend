/**
 * Build-time prerender (runs after `vite build` via `npm run build`).
 *
 * The site is a React SPA, so the raw HTML every URL returned was just
 * <div id="root"></div> with the same default <title> — crawlers that don't
 * run JavaScript (Ahrefs, many SEO tools, social previews) saw no H1, no
 * content and duplicate titles. This script renders every route to static
 * HTML with its own <title>, description, keywords and canonical.
 *
 * Output: dist/index.html for "/", dist/<path>.html for everything else
 * (served at the clean URL thanks to "cleanUrls": true in vercel.json).
 * dist/_spa.html keeps the empty shell for unknown URLs (404 page).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, blogSlugs } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

// Routes: everything in the sitemap + every blog post + pages not in the sitemap.
const sitemap = fs.readFileSync(path.join(root, "public", "sitemap.xml"), "utf-8");
const routes = new Set(["/", "/thank-you"]);
for (const m of sitemap.matchAll(/<loc>\s*https?:\/\/[^/<]+(\/[^<]*)?\s*<\/loc>/g)) {
  const p = (m[1] || "/").replace(/\/+$/, "") || "/";
  routes.add(p);
}
for (const slug of blogSlugs) routes.add(`/blog/${slug}`);

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// FAQPage structured data — homepage only, built from the FAQs actually shown
// on the homepage (src/data/homeContent.js) so the schema always matches the
// visible content, as Google requires.
const { faqs } = await import(pathToFileURL(path.join(root, "src", "data", "homeContent.js")).href);
const faqJsonLd = JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  null,
  2
).replace(/</g, "\\u003c");
const faqScript = `    <script type="application/ld+json">\n${faqJsonLd}\n    </script>\n  </head>`;

function setMeta(html, attr, key, value) {
  if (!value) return html;
  const tag = `<meta ${attr}="${key}" content="${esc(value)}" />`;
  const re = new RegExp(`<meta\\s+${attr}="${key}"[^>]*>`, "i");
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

// Empty SPA shell for URLs that aren't prerendered (vercel.json rewrite target).
fs.writeFileSync(path.join(dist, "_spa.html"), template);

let ok = 0;
const failed = [];
for (const route of [...routes].sort()) {
  try {
    const { html, head } = await render(route);
    let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    if (head.title) page = page.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(head.title)}</title>`);
    page = setMeta(page, "name", "description", head.description);
    page = setMeta(page, "name", "keywords", head.keywords);
    page = setMeta(page, "property", "og:title", head.title);
    page = setMeta(page, "property", "og:description", head.description);
    if (head.canonical) {
      page = page.replace("</head>", `    <link rel="canonical" href="${esc(head.canonical)}" />\n  </head>`);
    }
    if (route === "/") page = page.replace("</head>", faqScript);
    if (!/<h1[\s>]/.test(html)) console.warn(`  ! no <h1> on ${route}`);

    const out = route === "/" ? path.join(dist, "index.html") : path.join(dist, `${route.slice(1)}.html`);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, page);
    ok++;
  } catch (err) {
    failed.push(route);
    console.error(`  x ${route}: ${err.message}`);
  }
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered ${ok}/${routes.size} pages.`);
if (failed.length) {
  console.error(`Failed: ${failed.join(", ")}`);
  process.exit(1);
}
