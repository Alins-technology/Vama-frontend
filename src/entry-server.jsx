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
    </StrictMode>
  );
  let html = "";
  for await (const chunk of prelude) html += chunk;
  return { html, head };
}
