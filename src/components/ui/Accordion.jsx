import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { linkifyTreatments } from "../../utils/linkifyTreatments";

/**
 * `linkedSlugs` — pass a Set shared with surrounding content (e.g. an
 * article) so a treatment already linked there doesn't get re-linked here.
 * Omit it to track dedup locally to this accordion instance.
 * `excludeSlug` — the current page's own treatment, so its FAQs don't
 * self-link.
 */
export default function Accordion({ items, linkedSlugs, excludeSlug }) {
  const [open, setOpen] = useState(0);
  const slugs = linkedSlugs || new Set();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="py-5">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg text-ink md:text-xl">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-panel text-brand"
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pt-3 text-[15px] leading-relaxed text-ink-soft">
                    {linkifyTreatments(item.a, { linkedSlugs: slugs, excludeSlug })}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
