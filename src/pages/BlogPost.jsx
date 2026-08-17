import { useParams, Link, Navigate } from "react-router-dom";
import { Clock } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import Placeholder from "../components/ui/Placeholder";
import ArticleBlocks from "../components/ui/ArticleBlocks";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import { blogPosts } from "../data/content";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo title={post.title} description={post.excerpt} keywords={`${post.title}, ${post.category}, VAMA Advanced Hair & Skin Clinic blog`} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
      />

      <article className="bg-ivory py-20 md:py-28">
        <div className="container-page mx-auto max-w-3xl">
          <Reveal>
            {post.image ? (
              <div className="overflow-hidden rounded-[1.75rem] bg-panel shadow-[0_20px_50px_-28px_rgba(22,36,31,0.35)]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-auto w-full object-contain"
                />
              </div>
            ) : (
              <Placeholder label={post.category} ratio="aspect-[16/9]" tone="brand" />
            )}
          </Reveal>

          <div className="mt-6 flex items-center gap-4 text-xs text-ink-soft/70">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
            <span>·</span>
            <span>{post.category}</span>
          </div>

          <div className="prose-content mt-6">
            {post.content ? (
              <ArticleBlocks blocks={post.content} />
            ) : (
              <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft">
                <p className="text-lg text-ink">{post.excerpt}</p>
                <p>
                  Every treatment decision should start with an honest diagnosis, not a sales pitch.
                  Our specialists walk through your history, lifestyle and goals before recommending
                  any procedure — because the right treatment for one person is rarely the right one
                  for another.
                </p>
                <p>
                  If this is something you're currently weighing, the most useful next step is usually
                  a short consultation rather than more research — a specialist can tell you in minutes
                  whether it's worth pursuing further.
                </p>
                <h3 className="font-display text-2xl text-ink">Key takeaways</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Get a proper diagnosis before committing to any treatment.</li>
                  <li>Ask about realistic timelines and expected results upfront.</li>
                  <li>Aftercare matters as much as the procedure itself.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="mt-12 rounded-2xl bg-panel p-6">
            <p className="font-display text-lg text-ink">Have a question about this?</p>
            <p className="mt-2 text-sm text-ink-soft">Talk to one of our specialists directly — no obligation.</p>
            <Link
              to="/contact-us"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-brand-dark"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-panel py-16 md:py-20">
        <div className="container-page">
          <h3 className="font-display text-2xl text-ink">More from the blog</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="rounded-2xl border border-line bg-ivory p-5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(22,36,31,0.3)]"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wide text-gold">{p.category}</span>
                <p className="mt-2 font-display text-lg text-ink">{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
