import { Navigate, Link } from "react-router-dom";
import { Scissors, MapPin, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import ArticleBlocks from "../components/ui/ArticleBlocks";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import { hairTransplantPages, getHairTransplantPage } from "../data/hairTransplantPages";
import { locations } from "../data/locations";

export default function HairTransplantLocationPage({ citySlug }) {
  const page = getHairTransplantPage(citySlug);
  if (!page) return <Navigate to="/treatments/hair-treatment/hair-transplant" replace />;

  const location = locations.find((l) => l.slug === citySlug);
  const otherCities = hairTransplantPages.filter((p) => p.slug !== citySlug);

  return (
    <>
      <Seo titleOverride={page.seoTitle} description={page.metaDescription} keywords={page.keywords} />

      <PageHero
        eyebrow="Hair Transplant"
        title={page.h1}
        crumbs={[
          { label: "Hair Transplant", to: "/treatments/hair-treatment/hair-transplant" },
          { label: page.city },
        ]}
      />

      {/* Article body — colour-coded to match the site's "hair" category (brand teal) */}
      <section className="bg-ivory py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ivory">
              <Scissors className="h-3.5 w-3.5" /> Hair Restoration in {page.city}
            </span>
          </Reveal>

          <div className="prose-content mt-8 rounded-3xl border border-brand/30 bg-panel/30 p-6 md:p-10">
            <ArticleBlocks blocks={page.blocks} />
          </div>
        </div>
      </section>

      {/* Why choose Vama */}
      <section className="bg-panel py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl text-ink md:text-3xl">Why Choose Vama Clinics?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Vama Clinics takes a personalized approach to hair restoration. Treatment planning considers your
              hair-loss pattern, donor area, scalp condition, and long-term goals rather than recommending the
              same procedure to every patient. If you are considering a Hair Transplant in {page.city}, schedule
              a consultation to understand your options and make an informed decision.
            </p>
            {location?.pagePath && (
              <Link
                to={location.pagePath}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                <MapPin className="h-4 w-4" /> View our {page.city} clinic
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      {/* Cross-links to the other five city pages — internal linking so these pages
          aren't orphaned and Google can discover them through normal crawling. */}
      <section className="bg-ivory py-14">
        <div className="container-page">
          <Reveal>
            <h3 className="text-center font-display text-xl text-ink">Hair Transplant in Other Cities</h3>
          </Reveal>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {otherCities.map((p) => (
              <Link
                key={p.slug}
                to={p.path}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink-soft transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                {p.city} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-brand-dark py-16 text-ivory md:py-20">
        <div className="container-page mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl">Book Your Consultation</h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ivory/80">
              Concerned about thinning hair, baldness, or a receding hairline? Contact Vama Clinics to discuss
              your condition and explore suitable hair-restoration options in {page.city}.
            </p>
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
