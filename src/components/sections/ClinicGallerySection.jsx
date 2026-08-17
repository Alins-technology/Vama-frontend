import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

import reception from "../../assets/Clinic/Reception.jpg";
import consultation from "../../assets/Clinic/consultation.jpg";
import interior from "../../assets/Clinic/interior.jpg";
import waitingLounge from "../../assets/Clinic/Waiting-lounge.jpg";
import procedure from "../../assets/Clinic/procedure.jpg";
import laser from "../../assets/Clinic/laser.jpg";
import skincareCorner from "../../assets/Clinic/Skincarecorner.jpg";

function GalleryImg({ src, label, className = "" }) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <img src={src} alt={label} className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ivory">{label}</p>
      </div>
    </div>
  );
}

export default function ClinicGallerySection() {
  return (
    <section id="our-gallery" className="bg-ivory py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Our Space" title="Inside the clinic" />

        <div className="mt-12 grid grid-cols-2 gap-4 auto-rows-[7rem] sm:auto-rows-[8.5rem] md:grid-cols-4 md:auto-rows-[9rem]">
          <Reveal className="group col-span-2 row-span-2 overflow-hidden rounded-[1.75rem]">
            <GalleryImg src={reception} label="Reception" className="transition-transform duration-500 ease-out group-hover:scale-110" />
          </Reveal>
          <Reveal delay={0.05} className="group col-span-1 row-span-1 overflow-hidden rounded-[1.75rem]">
            <GalleryImg src={consultation} label="Consultation room" className="transition-transform duration-500 ease-out group-hover:scale-110" />
          </Reveal>
          <Reveal delay={0.1} className="group col-span-1 row-span-1 overflow-hidden rounded-[1.75rem]">
            <GalleryImg src={interior} label="Treatment suite" className="transition-transform duration-500 ease-out group-hover:scale-110" />
          </Reveal>
          <Reveal delay={0.15} className="group col-span-2 row-span-1 overflow-hidden rounded-[1.75rem]">
            <GalleryImg src={waitingLounge} label="Waiting lounge" className="transition-transform duration-500 ease-out group-hover:scale-110" />
          </Reveal>

          <Reveal delay={0.2} className="group col-span-1 row-span-1 overflow-hidden rounded-[1.75rem]">
            <GalleryImg src={procedure} label="Procedure room" className="transition-transform duration-500 ease-out group-hover:scale-110" />
          </Reveal>
          <Reveal delay={0.25} className="group col-span-1 row-span-1 overflow-hidden rounded-[1.75rem]">
            <GalleryImg src={laser} label="Laser room" className="transition-transform duration-500 ease-out group-hover:scale-110" />
          </Reveal>
          <Reveal delay={0.3} className="group col-span-2 row-span-1 overflow-hidden rounded-[1.75rem] md:col-span-2">
            <GalleryImg src={skincareCorner} label="Skin care corner" className="transition-transform duration-500 ease-out group-hover:scale-110" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}