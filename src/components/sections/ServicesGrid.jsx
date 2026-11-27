import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Droplets, FlaskConical, ScanFace, Snowflake, Sparkles, Sun, Zap } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

import hairTransplantImg from "../../assets/services/hair-transplant.webp";
import acneScarImg from "../../assets/services/acne-scar.webp";
import antiAgeingImg from "../../assets/services/anti-ageing.webp";
import hairFallImg from "../../assets/services/hair-fall.webp";
import skinRejuvenationImg from "../../assets/services/skin-rejuvenation.webp";
import pigmentationImg from "../../assets/services/pigmentation.webp";
import hairReplacementImg from "../../assets/services/hair-replacement.webp";
import laserHairReductionImg from "../../assets/services/laser-hair-reduction.webp";
import hairPrpImg from "../../assets/services/hair-prp.webp";
import hydrafacialImg from "../../assets/services/hydrafacial.webp";
import dandruffImg from "../../assets/services/dandruff.webp";
import gfcImg from "../../assets/services/gfc.webp";

/* Line icons in the lucide style for hair services (lucide has no hair follicle icon). */
function FollicleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 17h5M16 17h5" />
      <path d="M8 17c0 2.2 1.8 4 4 4s4-1.8 4-4" />
      <path d="M12 17c-1.2-3.5-.6-8 1.5-11.5M15 17c-.6-3 0-6.5 1.8-9.5" />
    </svg>
  );
}

function HeadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 20v-3.5a7 7 0 1 1 9.5-6.5" />
      <path d="M6.5 9.5C8 6.5 11 5.5 14 6.5c1.6.6 2.8 1.8 3.5 3.5" />
      <path d="M17.5 10c0 2-.5 3.5-1.5 4.5V20" />
    </svg>
  );
}

const featured = [
  { name: "Hair Transplant", category: "hair-treatment", slug: "hair-transplant", img: hairTransplantImg, Icon: FollicleIcon },
  { name: "Acne Scar Treatment", category: "skin-treatment", slug: "acne-scar-treatment", img: acneScarImg, Icon: ScanFace },
  { name: "Anti-Ageing Treatment", category: "skin-treatment", slug: "anti-ageing-treatment", img: antiAgeingImg, Icon: Sparkles },
  { name: "Hair Fall Treatment", category: "hair-treatment", slug: "hair-fall-treatment", img: hairFallImg, Icon: FollicleIcon },
  { name: "Skin Rejuvenation", category: "skin-treatment", slug: "skin-rejuvenation", img: skinRejuvenationImg, Icon: Sparkles },
  { name: "Pigmentation Treatment", category: "skin-treatment", slug: "pigmentation-treatment", img: pigmentationImg, Icon: Sun },
  { name: "Hair Replacement", category: "hair-treatment", slug: "hair-replacement", img: hairReplacementImg, Icon: HeadIcon },
  { name: "Laser Hair Reduction", category: "skin-treatment", slug: "laser-hair-reduction", img: laserHairReductionImg, Icon: Zap },
  { name: "Hair PRP", category: "hair-treatment", slug: "hair-prp", img: hairPrpImg, Icon: Droplet },
  { name: "HydraFacial", category: "skin-treatment", slug: "hydrafacial", img: hydrafacialImg, Icon: Droplets },
  { name: "Dandruff Treatment", category: "hair-treatment", slug: "dandruff-treatment", img: dandruffImg, Icon: Snowflake },
  { name: "GFC Hair Treatment", category: "hair-treatment", slug: "gfc-hair-treatment", img: gfcImg, Icon: FlaskConical },
];

function ServiceCard({ s }) {
  const { Icon } = s;
  return (
    <Link
      to={`/treatments/${s.category}/${s.slug}`}
      className="group relative flex h-44 flex-col overflow-hidden rounded-2xl border border-line/80 bg-white p-4 shadow-[0_12px_30px_-20px_rgba(20,32,43,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_24px_44px_-20px_rgba(7,123,128,0.45)] sm:h-48 sm:p-5"
    >
      <div className="absolute inset-y-0 right-0 w-[58%] overflow-hidden">
        <img
          src={s.img}
          alt=""
          aria-hidden="true"
          width="300"
          height="380"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-white/0" />
      </div>

      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-light/80 text-brand ring-1 ring-brand/15 backdrop-blur-sm transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="relative mt-3 max-w-[70%] font-display text-[15px] leading-tight text-ink sm:text-[17px]">
        {s.name}
      </h3>

      <span className="relative mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-ink shadow-[0_4px_14px_-6px_rgba(20,32,43,0.35)] ring-1 ring-line transition-colors duration-300 group-hover:bg-brand group-hover:text-white group-hover:ring-brand sm:text-xs">
        Learn More
        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-brand-light/60 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-32 h-80 w-80 rounded-full bg-panel blur-3xl" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Our Services"
          title="Hair & skin care, under one roof."
          description="From diagnosis to aftercare — every treatment is designed around your specific skin or hair profile."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 6) * 0.05}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 sm:gap-6">
          <span aria-hidden="true" className="h-px w-12 bg-gradient-to-r from-transparent to-brand/50 sm:w-28" />
          <Link
            to="/treatments/skin-treatment"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(7,123,128,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark sm:px-9"
          >
            View All Treatments
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <span aria-hidden="true" className="h-px w-12 bg-gradient-to-l from-transparent to-brand/50 sm:w-28" />
        </div>
      </div>
    </section>
  );
}
