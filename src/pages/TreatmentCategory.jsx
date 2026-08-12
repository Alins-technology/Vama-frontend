import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import FAQSection from "../components/sections/FAQSection";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import { categories, treatmentsByCategory } from "../data/treatments";

export default function TreatmentCategory() {
  const { category } = useParams();
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return <Navigate to="/" replace />;

  const items = treatmentsByCategory(category);

  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title={cat.name}
        crumbs={[{ label: "Treatments" }, { label: cat.name }]}
      />

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow={cat.name} title={cat.tagline} align="center" />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 0.08}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="h-full">
                  <Link
                    to={`/treatments/${category}/${t.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line transition-shadow duration-300 hover:shadow-[0_24px_48px_-20px_rgba(22,36,31,0.3)]"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={t.image}
                        alt={t.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-brand">
                          {t.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.short}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {t.duration && (
                            <span className="rounded-full bg-panel px-2.5 py-1 text-[11px] font-medium text-ink-soft">
                              {t.duration}
                            </span>
                          )}
                          {t.sessions && (
                            <span className="rounded-full bg-panel px-2.5 py-1 text-[11px] font-medium text-ink-soft">
                              {t.sessions}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
                        Learn more{" "}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
      <FAQSection />
    </>
  );
}