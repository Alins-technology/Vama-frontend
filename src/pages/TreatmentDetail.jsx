import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2, Clock, Repeat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import Accordion from "../components/ui/Accordion";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import { categories, getTreatment, treatmentsByCategory } from "../data/treatments";
import { serviceCities } from "../data/locations";

export default function TreatmentDetail() {
  const { category, slug } = useParams();
  const cat = categories.find((c) => c.slug === category);
  const treatment = getTreatment(slug);
  if (!cat || !treatment || treatment.category !== category) return <Navigate to="/" replace />;

  const related = treatmentsByCategory(category).filter((t) => t.slug !== slug).slice(0, 3);

  const infoStats = [
    { icon: Clock, label: "Duration", value: treatment.duration },
    { icon: Repeat, label: "Sessions", value: treatment.sessions },
    { icon: ShieldCheck, label: "Downtime", value: treatment.downtime },
  ];

  const cityKeywords = serviceCities.map((city) => `${treatment.name} in ${city}`).join(", ");

  return (
    <>
      <Seo
        title={treatment.name}
        description={treatment.short}
        keywords={`${treatment.name}, ${treatment.name} cost, best ${treatment.name} clinic, ${cat.name}, ${cityKeywords}`}
      />
      <PageHero
        eyebrow={cat.name}
        title={treatment.name}
        crumbs={[{ label: "Treatments" }, { label: cat.name, to: `/treatments/${category}` }, { label: treatment.name }]}
      />

      {/* Overview + image */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* quick info bar */}
              <div className="mt-6 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-panel/40">
                {infoStats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-1.5 px-3 py-5 text-center">
                    <s.icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
                    <span className="text-[11px] uppercase tracking-wide text-ink-soft">{s.label}</span>
                    <span className="text-xs font-semibold text-ink">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Overview</span>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{treatment.name}</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{treatment.description}</p>

            <div className="mt-8">
              <h3 className="font-display text-xl text-ink">Key benefits</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {treatment.benefits.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-2.5 text-sm text-ink-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="mt-10 rounded-2xl bg-panel p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-brand/10"
            >
              <p className="font-display text-lg text-ink">Not sure this is the right fit?</p>
              <p className="mt-2 text-sm text-ink-soft">
                Book a free consultation and our specialists will walk you through what's realistic for your case.
              </p>
              <Link
                to="/contact-us"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      {treatment.process?.length > 0 && (
        <section className="relative overflow-hidden bg-panel py-20 md:py-28">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-light/50 blur-3xl" />
          <div className="container-page relative">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">How it works</span>
              <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">The Treatment Journey</h2>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {treatment.process.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex h-full flex-col rounded-2xl bg-ivory p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/10"
                  >
                    <span className="font-display text-4xl text-brand-light">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{step.description}</p>
                    {i < treatment.process.length - 1 && (
                      <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-line lg:block" />
                    )}
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment-specific FAQs */}
{treatment.faqs?.length > 0 && (
  <section className="bg-ivory py-20 md:py-28">
    <div className="container-page mx-auto max-w-3xl">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">FAQs</span>
        <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
          Questions about {treatment.name}
        </h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        <Accordion items={treatment.faqs} />
      </div>
    </div>
  </section>
)}

      {related.length > 0 && (
        <section className="bg-panel py-20 md:py-24">
          <div className="container-page">
            <Reveal>
              <h3 className="font-display text-2xl text-ink md:text-3xl">Related in {cat.name}</h3>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((t, i) => (
                <Reveal key={t.slug} delay={i * 0.08}>
                  <Link
                    to={`/treatments/${category}/${t.slug}`}
                    className="group block h-full rounded-2xl border border-line bg-ivory p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_-16px_rgba(22,36,31,0.3)]"
                  >
                    <p className="font-display text-lg text-ink transition-colors group-hover:text-brand">{t.name}</p>
                    <p className="mt-1.5 text-sm text-ink-soft">{t.short}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialsSection />
      <AppointmentCTA />
    </>
  );
}