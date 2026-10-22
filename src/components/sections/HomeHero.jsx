import { CalendarCheck, ChevronRight, Sparkle, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import hero480 from "../../assets/Hometop-480.webp";
import hero640 from "../../assets/Hometop-640.webp";
import hero720 from "../../assets/Hometop-720.webp";
import hero960 from "../../assets/Hometop-960.webp";

const stats = [
  ["8", "Clinics across North India"],
  ["4000+", "Hair transplants performed"],
  ["12+", "Years combined expertise"],
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark via-brand to-brand pb-24 pt-40 text-ivory md:pb-32 md:pt-48">
      {/* ambient shapes — plain CSS animations, not framer-motion (see index.css:
          these loop forever, so keeping them off the JS main thread matters
          a lot for Total Blocking Time on throttled mobile CPUs) */}
      <div className="pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full bg-ivory/20 blur-3xl animate-blob-a" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-light/20 blur-3xl animate-blob-b" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-rose/10 blur-[100px] animate-blob-pulse" />

      {/* faint diagonal texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 90px)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-28 hidden animate-sparkle lg:block"
      >
        <Sparkle className="h-8 w-8 text-gold-light" />
      </div>

      <div className="container-page relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span
            className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-light" />
            </span>
            Skin · Hair · Laser · Slimming
          </span>

          <h1 className="mt-6 overflow-hidden font-display text-[2.6rem] leading-[1.05] md:text-6xl lg:text-[4rem]">
            <span className="mr-4 inline-block overflow-hidden">
              <span className="hero-rise inline-block" style={{ animationDelay: "0.15s" }}>
                Confidence
              </span>
            </span>
            <span className="sr-only"> </span>
            <span className="inline-block overflow-hidden">
              <span className="hero-rise inline-block" style={{ animationDelay: "0.25s" }}>
                looks good
              </span>
            </span>
            <span className="sr-only"> </span>
            <span className="block overflow-hidden text-gold-light">
              <span className="hero-rise inline-block" style={{ animationDelay: "0.38s" }}>
                on your skin &amp; hair.
              </span>
            </span>
          </h1>

          <p
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-ivory/75 md:text-base"
          >
            VAMA Advanced Hair &amp; Skin Clinic brings advanced hair restoration, dermatology
            and aesthetic treatments to Noida, Indirapuram, Lajpat Nagar, Lucknow, Agra, Kanpur and Ghaziabad —
            with honest consultations and technology-led results.
          </p>

          <div
            className="hero-fade-up mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-lg shadow-brand-dark/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-xl"
            >
              <CalendarCheck className="h-4 w-4" /> Book a Free Consultation
            </Link>
            <Link
              to="/treatments/hair-treatment"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:text-gold-light"
            >
              Explore Treatments
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div
            className="hero-fade-up mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-ivory/15 pt-8"
            style={{ animationDelay: "0.65s" }}
          >
            {stats.map(([num, label]) => (
              <div
                key={label}
                className="transition-transform duration-300 hover:-translate-y-[3px]"
              >
                <p className="font-display text-3xl text-gold-light">{num}</p>
                <p className="mt-1 max-w-[9rem] text-xs leading-snug text-ivory/60">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="aspect-[4/5] transition-transform duration-[400ms] ease-out hover:scale-[1.015] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
          >
            <img
              src={hero960}
              srcSet={`${hero480} 480w, ${hero640} 640w, ${hero720} 720w, ${hero960} 960w`}
              sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
              width="960"
              height="1280"
              fetchPriority="high"
              decoding="async"
              alt="Patient consultation at VAMA clinic"
              className="h-full w-full object-cover"
            />
          </div>

          {/* floating credential badges — replaces the fake "nearest clinic" card */}
          <div
            style={{ animationDelay: "0.8s" }}
            className="hero-slide-l absolute -left-6 bottom-10 hidden w-52 rounded-2xl bg-ivory p-4 text-ink shadow-xl sm:block"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                <Award className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="font-display text-base leading-tight">12+ Years</p>
                <p className="text-[11px] text-ink-soft">Combined expertise</p>
              </div>
            </div>
          </div>

          <div
            style={{ animationDelay: "0.95s" }}
            className="hero-slide-r absolute -right-4 top-8 hidden w-44 rounded-2xl bg-ivory p-4 text-ink shadow-xl sm:block"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-light text-gold">
                <Users className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="font-display text-base leading-tight">4000+</p>
                <p className="text-[11px] text-ink-soft">Happy patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}