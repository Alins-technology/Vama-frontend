import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import Placeholder from "../components/ui/Placeholder";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import { blogPosts } from "../data/content";

const tones = ["brand", "gold", "rose"];

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        description="Expert insights on hair transplant, skin treatments, weight loss and allergy care from VAMA Advanced Hair & Skin Clinic's specialists in Noida, Indirapuram, Lajpat Nagar, Agra, Lucknow & Kanpur."
        keywords="hair transplant blog, skin care tips, hair fall treatment blog, VAMA Advanced Hair & Skin Clinic blog, dermatology articles Noida"
      />
      <PageHero eyebrow="Blog" title="Insights from our specialists." crumbs={[{ label: "Blog" }]} />

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
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
