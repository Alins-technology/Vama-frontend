import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const rootEl = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Pages are prerendered to static HTML at build time (scripts/prerender.mjs),
// so in production #root already has the page markup — hydrate it instead of
// re-rendering from scratch. In `npm run dev` #root is empty, so render normally.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
