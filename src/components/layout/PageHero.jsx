// Breadcrumb path (Home > ...) intentionally removed from all pages.
// `crumbs` prop is still accepted so existing pages don't break, but it is not rendered.
// eslint-disable-next-line no-unused-vars
export default function PageHero({ eyebrow, title, crumbs = [], as = "h1" }) {
  const words = title.split(" ");
  // Most pages have no other heading that repeats this title, so this banner
  // stays the page's one real <h1>. Treatment detail pages are the exception:
  // the Overview section below repeats this same text as the real content
  // heading, so those pages pass as="h2" here and render an <h1> there instead —
  // keeping exactly one <h1> per page without changing how anything looks.
  const HeadingTag = as;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark pb-16 pt-28 text-ivory md:pb-20 md:pt-32">
      {/* floating orbs — plain CSS loops (index.css), not framer-motion, so they
          don't keep the JS main thread busy; they also stay still on phones */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-72 w-72 rounded-full bg-gold/25 blur-[100px] animate-page-orb-a" />
      <div className="pointer-events-none absolute -bottom-20 left-[8%] h-64 w-64 rounded-full bg-rose/20 blur-[100px] animate-page-orb-b" />

      {/* faint diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 90px)",
        }}
      />

      <div className="container-page relative">
        {eyebrow && (
          <span
            className="page-hero-eyebrow mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light"
          >
            <span className="h-px w-6 bg-gold-light" />
            {eyebrow}
          </span>
        )}

        <HeadingTag className="max-w-2xl overflow-hidden font-display text-3xl leading-[1.08] md:text-5xl">
          {words.map((word, i) => (
            <span key={i} className="mr-3 inline-block overflow-hidden last:mr-0">
              {/* CSS entrance (hero-rise in index.css) instead of framer-motion, so
                  the heading is part of the prerendered page and shows on first
                  paint instead of waiting for the JavaScript to load */}
              <span className="hero-rise inline-block" style={{ animationDelay: `${0.1 + i * 0.06}s` }}>
                {word}
              </span>
              {/* real space so crawlers/screen readers read "Insights from our…" not "Insightsfromour…" */}
              {i < words.length - 1 && <span className="sr-only"> </span>}
            </span>
          ))}
        </HeadingTag>
      </div>

      {/* curved bottom edge — smaller now */}
      <svg
        className="absolute -bottom-1 left-0 w-full text-ivory"
        viewBox="0 0 1440 40"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: "30px" }}
      >
        <path
          d="M0 40C240 10 480 0 720 0C960 0 1200 10 1440 40V40H0V40Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}