import { Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  Scissors,
  Zap,
  Scale,
  Star,
} from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";
import ArticleBlocks from "../components/ui/ArticleBlocks";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import { locations, serviceCities } from "../data/locations";
import { getClinicPage } from "../data/clinicPages";

function mapsHref(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
function telHref(phone) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
function whatsappHref(phone, label) {
  const digits = phone.replace(/\D/g, "");
  const text = `Hi, I'd like to book a consultation at the ${label}.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

// One accent per treatment category — reuses the site's existing brand / gold /
// rose tone system (see ServicesGrid) plus ink for the fourth (weight) category,
// so every clinic page reads as the same colour-coded rhythm: Skin → gold,
// Hair → brand teal, Laser → rose, Weight → ink.
const CATEGORY_STYLE = {
  skin: { icon: Sparkles, chip: "bg-gold text-ivory", tint: "bg-gold-light/40", ring: "border-gold/30" },
  hair: { icon: Scissors, chip: "bg-brand text-ivory", tint: "bg-brand-light/50", ring: "border-brand/30" },
  laser: { icon: Zap, chip: "bg-rose text-ink", tint: "bg-rose/15", ring: "border-rose/40" },
  weight: { icon: Scale, chip: "bg-ink text-ivory", tint: "bg-panel", ring: "border-ink/15" },
};

export default function ClinicLocationPage({ citySlug }) {
  const page = getClinicPage(citySlug);
  const location = locations.find((l) => l.slug === citySlug);
  if (!page || !location) return <Navigate to="/clinics" replace />;

  const keywords = `VAMA Clinics ${location.city}, skin clinic ${location.city}, hair clinic ${location.city}, hair transplant ${location.city}, laser hair reduction ${location.city}, weight loss clinic ${location.city}, ${serviceCities.join(", ")}`;

  return (
    <>
      <Seo titleOverride={page.seoTitle} description={page.metaDescription} keywords={keywords} />

      <PageHero
        eyebrow="VAMA Clinics"
        title={page.heroTitle}
        crumbs={[{ label: "Clinics", to: "/clinics" }, { label: location.city }]}
      />

      {/* Intro + clinic info card */}
      <section className="bg-ivory py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <Reveal>
            <div className="space-y-4">
              {page.intro.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-ink-soft first:text-lg first:text-ink">
                  {p}
                </p>
              ))}
            </div>

            {/* quick category nav */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {page.categories.map((cat) => {
                const style = CATEGORY_STYLE[cat.key];
                return (
                  <a
                    key={cat.key}
                    href={`#${cat.key}-${page.slug}`}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-transform duration-300 hover:-translate-y-0.5 ${style.chip}`}
                  >
                    <style.icon className="h-3.5 w-3.5" /> {cat.label}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-panel/30 shadow-sm">
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark p-6 text-ivory">
                <motion.div
                  className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-gold/25 blur-3xl"
                  animate={{ x: [0, 16, 0], y: [0, 12, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ivory/10 text-gold-light backdrop-blur-sm">
                    <MapPin className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  {location.flagship && (
                    <span className="flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ivory shadow">
                      <Star className="h-3 w-3 fill-current" /> Flagship
                    </span>
                  )}
                </div>
                <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                  {location.city}
                </p>
                <h3 className="relative mt-1 font-display text-xl leading-snug">{location.label}</h3>
              </div>

              <div className="space-y-5 p-6">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <p className="text-sm leading-relaxed text-ink-soft">{location.address}</p>
                </div>

                <div className="space-y-2 border-t border-line pt-4">
                  {location.phones.map((p) => (
                    <a
                      key={p}
                      href={telHref(p)}
                      className="flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 hover:text-brand"
                    >
                      <Phone className="h-3.5 w-3.5 text-brand" /> {p}
                    </a>
                  ))}
                  {location.email && (
                    <a
                      href={`mailto:${location.email}`}
                      className="flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 hover:text-brand"
                    >
                      <Mail className="h-3.5 w-3.5 text-brand" /> {location.email}
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 border-t border-line pt-5">
                  <a
                    href={telHref(location.phones[0])}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-ivory transition-colors duration-300 hover:bg-brand-dark"
                  >
                    <PhoneCall className="h-3.5 w-3.5" /> Call
                  </a>
                  <a
                    href={whatsappHref(location.phones[0], location.label)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-ivory transition-colors duration-300 hover:opacity-90"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                  <a
                    href={mapsHref(location.address)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-line px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
                  >
                    <Navigation className="h-3.5 w-3.5" /> Directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category sections — colour-coded: skin (gold) / hair (brand) / laser (rose) / weight (ink) */}
      {page.categories.map((cat) => {
        const style = CATEGORY_STYLE[cat.key];
        return (
          <section key={cat.key} id={`${cat.key}-${page.slug}`} className={`scroll-mt-24 ${style.tint} py-16 md:py-20`}>
            <div className="container-page">
              <Reveal>
                <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${style.chip}`}>
                  <style.icon className="h-3.5 w-3.5" /> {cat.label}
                </span>
                <h2 className="mt-4 font-display text-2xl text-ink md:text-3xl">{cat.sectionTitle}</h2>
                {cat.intro && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{cat.intro}</p>}
              </Reveal>

              <div className={`prose-content mt-8 rounded-3xl border ${style.ring} bg-ivory/70 p-6 md:p-10`}>
                <ArticleBlocks blocks={cat.blocks} />
              </div>
            </div>
          </section>
        );
      })}

      {/* Why choose this clinic */}
      <section className="bg-ivory py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>Why VAMA</Eyebrow>
            <h2 className="mt-4 font-display text-2xl text-ink md:text-3xl">
              Why Choose VAMA Clinics in {location.city}?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{page.whyChoose.intro}</p>
            {page.whyChoose.note && (
              <p className="mt-4 rounded-xl border border-line bg-panel/50 px-4 py-3 text-sm text-ink-soft">
                {page.whyChoose.note}
              </p>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {page.whyChoose.points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-2.5 rounded-xl border border-line bg-panel/40 p-4 text-sm leading-relaxed text-ink-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Common concerns — colour-matched to the treatment categories above */}
      {page.concerns && (
        <section className="bg-panel py-16 md:py-20">
          <div className="container-page">
            <Reveal>
              <Eyebrow>At a Glance</Eyebrow>
              <h2 className="mt-4 font-display text-2xl text-ink md:text-3xl">
                Common Skin, Hair & Body Concerns in {location.city}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { key: "skin", title: "Skin Concerns", items: page.concerns.skin },
                { key: "hair", title: "Hair Concerns", items: page.concerns.hair },
                { key: "weight", title: "Weight & Body Concerns", items: page.concerns.weight },
              ].map(
                (group, i) =>
                  group.items?.length > 0 && (
                    <Reveal key={group.key} delay={i * 0.08}>
                      <div className="h-full rounded-2xl border border-line bg-ivory p-6">
                        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${CATEGORY_STYLE[group.key].chip}`}>
                          {group.title}
                        </span>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-line bg-panel/60 px-3 py-1.5 text-xs text-ink-soft"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Bespoke extra sections (e.g. Agra / Kanpur consideration checklists) */}
      {page.extraSections?.map((section, i) => (
        <section key={section.heading} className={i % 2 === 0 ? "bg-ivory py-16 md:py-20" : "bg-panel py-16 md:py-20"}>
          <div className="container-page mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-2xl text-ink md:text-3xl">{section.heading}</h2>
            </Reveal>
            <div className="prose-content mt-6">
              <ArticleBlocks blocks={section.blocks} />
            </div>
          </div>
        </section>
      ))}

      {/* Closing */}
      <section className="bg-brand-dark py-16 text-ivory md:py-20">
        <div className="container-page mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl">{page.closing.heading}</h2>
            <div className="mx-auto mt-5 max-w-2xl space-y-4">
              {page.closing.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-ivory/80">
                  {p}
                </p>
              ))}
            </div>
            <Link
              to="/contact-us"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-brand-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Book a Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />
      <AppointmentCTA />
    </>
  );
}
