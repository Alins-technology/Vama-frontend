import { Link } from "react-router-dom";
import { treatments } from "../data/treatments";

/**
 * Auto-links treatment name mentions inside plain body copy (blog articles,
 * FAQ answers, etc.) to that treatment's own page — internal linking for SEO
 * (topical relevance + click-through), so editors don't have to hand-link
 * every "Hair Transplant" / "Botox" / "Acne Scar Treatment" mention.
 *
 * Only the FIRST mention of a given treatment within one call-site's shared
 * `linkedSlugs` Set gets linked (avoids link-stuffing a single article/FAQ
 * list); pass `excludeSlug` on a treatment's own page so it never links to
 * itself.
 */

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const treatmentBySlug = Object.fromEntries(treatments.map((t) => [t.slug, t]));

// Extra natural-language phrasings (beyond each treatment's formal `name`)
// that should also link to that treatment's page.
const ALIASES = {
  "acne-scar-treatment": ["acne scars", "acne scarring"],
  "anti-ageing-treatment": ["anti-ageing", "anti ageing", "anti-aging", "anti aging"],
  "mole-skin-tag-removal": ["mole and skin tag removal", "mole removal", "skin tag removal", "moles and skin tags"],
  "hydrafacial": ["hydra facial"],
  "korean-glass-skin": ["korean glass skin", "glass skin treatment", "glass skin"],
  "laser-hair-reduction": ["laser hair removal"],
  "filler": ["dermal filler", "dermal fillers", "facial fillers", "fillers"],
  "face-prp": ["facial prp", "prp for face"],
  "hair-transplant": ["hair transplant"],
  "hair-fall-treatment": ["hair fall"],
  "hair-replacement": ["hair patch", "hair wig", "hair replacement system"],
  "hair-prp": ["hair prp"],
  "dandruff-treatment": ["dandruff"],
  "gfc-hair-treatment": ["gfc therapy", "gfc"],
  "medical-weight-loss": ["weight loss programme", "weight loss program", "medical weight loss"],
  "obesity-treatment": ["obesity management", "obesity"],
  "inch-loss-treatment": ["inch-loss treatment", "inch loss"],
  "body-contouring": ["body sculpting"],
  "ems-body-sculpting": ["ems", "electrical muscle stimulation"],
  "weight-management": ["diet consultation", "weight-management"],
  "psoriasis-treatment": ["psoriasis"],
  "vitiligo-treatment": ["vitiligo"],
  "fungal-infection-treatment": ["fungal infection", "ringworm", "athlete's foot", "athletes foot"],
  "alopecia-treatment": ["alopecia areata", "alopecia"],
  "eczema-treatment": ["eczema", "atopic dermatitis"],
  "keloid-treatment": ["keloid", "keloids"],
  "lipoma-removal": ["lipoma", "lipomas"],
};

// Build { pattern -> slug } and one alternation regex, longest pattern first
// so e.g. "GFC Hair Treatment" wins over the shorter "GFC" alias at the same spot.
const patternToSlug = new Map();
for (const t of treatments) {
  patternToSlug.set(t.name.toLowerCase(), t.slug);
}
for (const [slug, aliases] of Object.entries(ALIASES)) {
  for (const alias of aliases) {
    if (!patternToSlug.has(alias.toLowerCase())) patternToSlug.set(alias.toLowerCase(), slug);
  }
}

const sortedPatterns = [...patternToSlug.keys()].sort((a, b) => b.length - a.length);
const MATCH_REGEX = new RegExp(`\\b(${sortedPatterns.map(escapeRegExp).join("|")})\\b`, "gi");

/**
 * @param {string} text
 * @param {{ excludeSlug?: string, linkedSlugs?: Set<string> }} [opts]
 *   `linkedSlugs` lets callers share one Set across multiple linkify() calls
 *   (e.g. every paragraph in an article) so each treatment links only once.
 * @returns {string|Array} original text, or an array of strings/<Link> nodes
 */
export function linkifyTreatments(text, opts = {}) {
  if (!text || typeof text !== "string") return text;
  const { excludeSlug, linkedSlugs = new Set() } = opts;

  MATCH_REGEX.lastIndex = 0;
  if (!MATCH_REGEX.test(text)) return text;
  MATCH_REGEX.lastIndex = 0;

  const nodes = [];
  let lastIndex = 0;
  let match;
  while ((match = MATCH_REGEX.exec(text))) {
    const matchedText = match[0];
    const slug = patternToSlug.get(matchedText.toLowerCase());
    const treatment = slug && treatmentBySlug[slug];
    if (!treatment || slug === excludeSlug || linkedSlugs.has(slug)) continue;

    nodes.push(text.slice(lastIndex, match.index));
    nodes.push(
      <Link
        key={`${slug}-${match.index}`}
        to={`/treatments/${treatment.category}/${treatment.slug}`}
        className="font-semibold text-brand underline decoration-brand/30 underline-offset-2 transition-colors hover:text-brand-dark"
      >
        {matchedText}
      </Link>
    );
    lastIndex = match.index + matchedText.length;
    linkedSlugs.add(slug);
  }
  nodes.push(text.slice(lastIndex));
  return nodes;
}
