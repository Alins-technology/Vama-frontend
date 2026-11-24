import { Link } from "react-router-dom";
import { treatmentIndex as treatments } from "../data/treatmentIndex";

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
  "face-lifting-treatment": ["face lifting", "facelift", "facial rejuvenation", "skin tightening"],
  "pigmentation-treatment": ["pigmentation", "pigmentation treatment", "dark spots", "uneven skin tone", "melasma"],
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
  // ---- added Nov 2026 with the new catalogue services ----
  "hair-thread-therapy": ["hair threads", "hair thread"],
  "scalp-micropigmentation": ["scalp micropigmentation"],
  "hair-mesotherapy": ["hair meso"],
  "hair-cupping-therapy": ["hair cupping", "cupping therapy"],
  "leech-therapy-for-hair": ["leech therapy", "jalaukavacharana"],
  "scalp-hydra-treatment": ["scalp hydra"],
  "exosome-hair-treatment": ["exosome therapy for hair"],
  "qr678-hair-treatment": ["qr678", "qr678 neo"],
  "lllt-hair-therapy": ["lllt", "low-level laser therapy", "low level laser therapy"],
  "high-frequency-treatment": ["high frequency therapy"],
  "carbon-laser-facial": ["carbon peel", "carbon facial", "carbon laser"],
  "co2-laser-treatment": ["co2 laser", "fractional co2 laser", "fractional co2"],
  "bb-glow-treatment": ["bb glow"],
  "photofacial": ["photo facial"],
  "rf-skin-tightening": ["rf skin tightening"],
  "hifu-treatment": ["hifu"],
  "exosome-facial": ["face exosome", "exosome facial"],
  "nctf-skin-booster": ["nctf", "nctf 135ha"],
  "face-mesotherapy": ["facial mesotherapy", "face meso"],
  "q-switch-laser": ["q-switch laser", "q-switched laser", "laser toning"],
  "laser-tattoo-removal": ["tattoo removal"],
  "microblading": ["microblading", "lip blush"],
  "thread-lift": ["thread lifts"],
  "chemical-peels": ["chemical peel"],
  "hyperhidrosis-treatment": ["hyperhidrosis", "excessive sweating"],
  "glutathione-drip": ["glutathione drips", "gluta drip"],
  "ear-lobe-repair": ["earlobe repair"],
  "fat-dissolving-mesotherapy": ["meso fat lipo", "injection lipolysis"],
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
