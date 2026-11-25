/**
 * Server entry used ONLY at build time by scripts/prerender.mjs.
 * Renders a route to static HTML so search engines / SEO crawlers (Ahrefs etc.)
 * that don't run JavaScript still see the real page: <h1>, content, title, meta.
 * The browser still loads the normal React app (src/main.jsx) on top of it.
 */
import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { HeadContext } from "./components/Seo.jsx";
import { blogPosts } from "./data/content.js";
import { treatments, categories } from "./data/treatments.js";

export const blogSlugs = blogPosts.map((p) => p.slug);

export async function render(url) {
  const head = {};
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <HeadContext.Provider value={head}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>,
    {
      // Write every section inline. By default React moves any section larger
      // than ~12 KB (most page bodies here) into a hidden <div hidden id="S:0">
      // plus an inline $RC() script, and React 19 only reveals those ~300ms
      // after the first paint — so the main content of inner pages showed up
      // late (slower mobile LCP). For a static prerender there is nothing to
      // stream progressively, so keep it all in place.
      progressiveChunkSize: Number.MAX_SAFE_INTEGER,
    }
  );
  let html = "";
  for await (const chunk of prelude) html += chunk;
  return { html, head };
}

// ---------------------------------------------------------------------------
// Per-page SEO extras used by scripts/prerender.mjs: Open Graph image/type
// (link previews on WhatsApp, Facebook, LinkedIn) and page-specific JSON-LD
// (BreadcrumbList, BlogPosting, FAQPage). Everything is built from the same data
// the page renders, so the structured data always matches the visible content.
// ---------------------------------------------------------------------------
const SITE = "https://www.vamaclinics.com";
const DEFAULT_OG_IMAGE = `${SITE}/Hometop-960.webp`;
const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

// Very small images can be inlined by Vite as data: URIs — those can't be used
// as a share preview, so fall back to the default image in that case.
const absolute = (url) =>
  !url || url.startsWith("data:") ? undefined : /^https?:/.test(url) ? url : `${SITE}${url}`;

// "25 Nov 2026" -> "2026-11-25" (undefined if the format is anything else)
function isoDate(text) {
  const m = /^(\d{1,2}) ([A-Z][a-z]{2}) (\d{4})$/.exec(text || "");
  if (!m || !MONTHS[m[2]]) return undefined;
  return `${m[3]}-${String(MONTHS[m[2]]).padStart(2, "0")}-${m[1].padStart(2, "0")}`;
}

function faqSchema(items) {
  const valid = (items || []).filter((f) => f && f.q && f.a);
  if (!valid.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: valid.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function pageSeo(url) {
  const crumbs = [{ name: "Home", item: `${SITE}/` }];
  const graph = [];
  let ogType = "website";
  let ogImage = DEFAULT_OG_IMAGE;
  let m;

  if ((m = url.match(/^\/treatments\/([^/]+)\/([^/]+)$/))) {
    const cat = categories.find((c) => c.slug === m[1]);
    const t = treatments.find((x) => x.category === m[1] && x.slug === m[2]);
    if (cat && t) {
      crumbs.push({ name: cat.name, item: `${SITE}/treatments/${cat.slug}` }, { name: t.name, item: `${SITE}${url}` });
      ogImage = absolute(t.image) || ogImage;
      const faq = faqSchema(t.faqs);
      if (faq) graph.push(faq);
    }
  } else if ((m = url.match(/^\/treatments\/([^/]+)$/))) {
    const cat = categories.find((c) => c.slug === m[1]);
    if (cat) crumbs.push({ name: cat.name, item: `${SITE}${url}` });
  } else if (url === "/blog") {
    crumbs.push({ name: "Blog", item: `${SITE}/blog` });
  } else if ((m = url.match(/^\/blog\/([^/]+)$/))) {
    const post = blogPosts.find((p) => p.slug === m[1]);
    if (post) {
      crumbs.push({ name: "Blog", item: `${SITE}/blog` }, { name: post.title, item: `${SITE}${url}` });
      ogType = "article";
      ogImage = absolute(post.image) || ogImage;
      const published = isoDate(post.date);
      graph.push({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        image: ogImage,
        ...(published ? { datePublished: published, dateModified: published } : {}),
        author: { "@type": "Organization", name: "VAMA Clinics", url: `${SITE}/` },
        publisher: { "@id": `${SITE}/#organization` },
        mainEntityOfPage: `${SITE}${url}`,
        articleSection: post.category,
      });
      const faqBlock = (post.content || []).find((b) => b.type === "faq");
      const faq = faqSchema(faqBlock && faqBlock.items);
      if (faq) graph.push(faq);
    }
  }

  if (crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })),
    });
  }

  return {
    ogType,
    ogImage,
    jsonLd: graph.length ? { "@context": "https://schema.org", "@graph": graph } : null,
  };
}
