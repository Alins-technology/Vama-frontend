import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Accordion from "./Accordion";

/**
 * Renders a blog/article body from a simple content-block schema, styled to
 * match the rest of the site (font-display headings, gold accents, brand
 * checklist bullets). Used by BlogPost.jsx — add new posts by giving them
 * a `content` array in src/data/content.js, no new page/template needed.
 *
 * Block shapes:
 *   { type: "lead", text }                  opening paragraph, larger + darker
 *   { type: "paragraph", text }             regular body copy
 *   { type: "heading", text }               section heading (h2)
 *   { type: "subheading", text }            sub-section heading (h3)
 *   { type: "list", items: [] }             checklist-style bullet list
 *   { type: "steps", items: [] }            numbered sequential steps
 *   { type: "table", headers: [], rows: [[]] }  comparison table
 *   { type: "link", text, to }              internal CTA link (site route)
 *   { type: "timeline", items: [{ label, text }] }  labelled phases (e.g. recovery timeline)
 *   { type: "faq", items: [{ q, a }] }      accordion-style Q&A (reuses ui/Accordion)
 */
export default function ArticleBlocks({ blocks = [] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <p key={i} className="text-lg leading-relaxed text-ink">
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h2
                key={i}
                className="mt-10 border-l-2 border-gold pl-4 font-display text-2xl leading-snug text-ink first:mt-0 md:text-[1.75rem]"
              >
                {block.text}
              </h2>
            );

          case "subheading":
            return (
              <h3 key={i} className="mt-6 font-display text-lg text-ink">
                {block.text}
              </h3>
            );

          case "list":
            return (
              <ul key={i} className="grid gap-2.5 py-1 sm:grid-cols-2">
                {block.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.04 }}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            );

          case "steps":
            return (
              <ol key={i} className="grid gap-4 py-1 sm:grid-cols-2">
                {block.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.06 }}
                    className="flex items-start gap-3 rounded-xl border border-line bg-panel/40 p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-ivory">
                      {j + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                  </motion.li>
                ))}
              </ol>
            );

          case "table":
            return (
              <div key={i} className="my-2 overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-panel">
                      {block.headers.map((h) => (
                        <th
                          key={h}
                          className="border-b border-line px-4 py-3 font-display text-sm font-medium text-ink"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="odd:bg-ivory even:bg-panel/30">
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={`border-b border-line px-4 py-3 last:border-r-0 ${
                              c === 0 ? "font-semibold text-ink" : "text-ink-soft"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "timeline":
            return (
              <div key={i} className="grid gap-4 py-1 sm:grid-cols-2 lg:grid-cols-4">
                {block.items.map(({ label, text }, j) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.08 }}
                    className="rounded-2xl border border-line bg-panel/40 p-4"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gold">{label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
                  </motion.div>
                ))}
              </div>
            );

          case "faq":
            return (
              <div key={i} className="pt-1">
                <Accordion items={block.items} />
              </div>
            );

          case "link":
            return (
              <Link
                key={i}
                to={block.to}
                className="group inline-flex items-center gap-1.5 font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                {block.text}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            );

          case "paragraph":
          default:
            return (
              <p key={i} className="text-[15px] leading-relaxed text-ink-soft">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
