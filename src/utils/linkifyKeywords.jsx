import { Link } from "react-router-dom";
import { linkifyTreatments } from "./linkifyTreatments";

const LINK_CLASS =
  "font-semibold text-brand underline decoration-brand/30 underline-offset-2 transition-colors hover:text-brand-dark";

/**
 * Hand-placed keyword links for blog copy (SEO anchor text -> a specific URL).
 *
 * A block can carry `links: [{ text, to }]`. Each `text` is linked at its FIRST
 * occurrence inside that block's text (exact, case-sensitive match).
 *   - `to` starting with "/"     -> internal <Link> (SPA navigation)
 *   - `to` starting with "http"  -> external <a target="_blank" rel="noopener noreferrer">
 *
 * The plain-text stretches between the hand-placed links still go through
 * linkifyTreatments, so the automatic treatment linking keeps working.
 */
export function linkifyKeywords(text, links, opts = {}) {
  if (!text || typeof text !== "string" || !links || !links.length) {
    return linkifyTreatments(text, opts);
  }

  // Locate each keyword; skip any that are missing or overlap an earlier one.
  const spots = [];
  for (const link of links) {
    const index = text.indexOf(link.text);
    if (index === -1) continue;
    const end = index + link.text.length;
    if (spots.some((s) => index < s.end && end > s.index)) continue;
    spots.push({ ...link, index, end });
  }
  spots.sort((a, b) => a.index - b.index);

  const nodes = [];
  let cursor = 0;
  spots.forEach((s, n) => {
    if (s.index > cursor) nodes.push(...[].concat(linkifyTreatments(text.slice(cursor, s.index), opts)));
    const external = /^https?:\/\//i.test(s.to);
    nodes.push(
      external ? (
        <a key={`kw-${n}`} href={s.to} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
          {s.text}
        </a>
      ) : (
        <Link key={`kw-${n}`} to={s.to} className={LINK_CLASS}>
          {s.text}
        </Link>
      )
    );
    cursor = s.end;
  });
  if (cursor < text.length) nodes.push(...[].concat(linkifyTreatments(text.slice(cursor), opts)));
  return nodes;
}
