import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import Placeholder from "../components/ui/Placeholder";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import { blogPosts } from "../data/content";

const tones = ["brand", "gold", "rose"];

// Blog page filter tabs — "value" must match the `category` field in src/data/content.js
const categories = [
  { label: "All", value: "All" },
  { label: "Hair", value: "Hair" },
  { label: "Skin", value: "Skin" },
  { label: "Weight Loss", value: "Weight Loss" },
  { label: "Allergy", value: "Allergy" },
];

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("category");
  const active = categories.some((c) => c.value === requested) ? requested : "All";
  const visiblePosts = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  const selectCategory = (value) => {
    if (value === "All") setSearchParams({}, { replace: true });
    else setSearchParams({ category: value }, { replace: true });
  };

  return (
    <>
      <Seo
        title="Blog"
        titleOverride="VAMA Clinics Blog | Skin, Hair, Weight Loss & Wellness"
        description="Explore VAMA Clinics blogs for expert insights on hair, skin, weight loss, laser treatments, and wellness, with practical tips and guidance."
        keywords="hair transplant blog, skin care tips, hair fall treatment blog, VAMA Advanced Hair & Skin Clinic blog, dermatology articles Noida"
      />
      <PageHero eyebrow="Blog" title="Insights from our specialists." crumbs={[{ label: "Blog" }]} />

      <section className="bg-ivory py-16 md:py-24">
        <div className="container-page mb-10 flex flex-wrap justify-center gap-2.5 md:mb-12" role="tablist" aria-label="Blog categories">
          {categories.map((c) => {
            const count = c.value === "All" ? blogPosts.length : blogPosts.filter((p) => p.category === c.value).length;
            const isActive = active === c.value;
            return (
              <button
                key={c.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCategory(c.value)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-brand bg-brand text-ivory"
                    : "border-line bg-ivory text-ink-soft hover:border-brand hover:text-brand"
                }`}
              >
                {c.label}
                <span className={`text-xs font-medium ${isActive ? "text-ivory/80" : "text-ink-soft/60"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.length === 0 && (
            <p className="col-span-full text-center text-sm text-ink-soft">No blogs in this category yet.</p>
          )}
          {visiblePosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(22,36,31,0.3)]"
              >
                {post.image ? (
                  <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-panel">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <Placeholder label={post.category} ratio="aspect-[16/10]" tone={tones[i % 3]} className="rounded-none" />
                )}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-gold">{post.category}</span>
                    <h3 className="mt-2 font-display text-xl leading-snug text-ink">{post.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink-soft/70">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                      {post.date && <span>· {post.date}</span>}
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
