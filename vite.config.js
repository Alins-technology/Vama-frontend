import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Start the app only after the prerendered page has painted.
//
// Every page is prerendered to full HTML (scripts/prerender.mjs), so the content
// is already there before any JavaScript runs. With the normal
// <script type="module" src="..."> the browser evaluates the whole bundle as
// soon as HTML parsing ends, and on phones that ran *before* the hero text was
// painted in its web font, delaying mobile LCP by seconds. Here the bundle is
// still downloaded straight away (modulepreload, same priority as before), but
// it is only executed once the fonts are ready (capped at 1.5s) and one frame
// has been painted. Build-only: `npm run dev` is unchanged.
function startAfterFirstPaint() {
  return {
    name: 'vama-start-after-first-paint',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const re = /<script type="module" crossorigin src="([^"]+)"><\/script>/
        const match = html.match(re)
        if (!match) return html
        const src = match[1]
        const loader =
          `<link rel="modulepreload" crossorigin href="${src}">\n` +
          `    <script type="module">\n` +
          `      const start = () => requestAnimationFrame(() => setTimeout(() => import("${src}")));\n` +
          `      const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();\n` +
          `      Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1500))]).then(start, start);\n` +
          `    </script>`
        return html.replace(re, loader)
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), startAfterFirstPaint()],
})
