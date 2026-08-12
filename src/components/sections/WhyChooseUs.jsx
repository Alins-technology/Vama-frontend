import { Award, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

import interior from "../../assets/Clinic/interior.jpg";
import consultation from "../../assets/Clinic/consultation.jpg";

const points = [
  {
    icon: Award,
    title: "Experienced doctors",
    text: "It's the experience and judgement of the doctor that matters most — our team has treated thousands of cases.",
  },
  {
    icon: Sparkles,
    title: "Latest technology",
    text: "FDA-cleared lasers and diagnostic equipment for accuracy, reliability and consistent outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Safe treatment",
    text: "Every protocol follows strict clinical safety standards, from consultation to aftercare.",
  },
  {
    icon: Stethoscope,
    title: "Complete diagnosis",
    text: "We look at the full picture before recommending any treatment — no guesswork, no upselling.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] translate-y-8 overflow-hidden rounded-3xl">
              <img src={interior} alt="Clinic interior" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-3xl">
              <img src={consultation} alt="Consultation room" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-ink p-5 text-ivory shadow-xl">
            <p className="font-display text-2xl">6 Cities</p>
            <p className="text-xs uppercase tracking-wide text-ivory/60">Noida · Indirapuram · Lajpat Nagar · Lucknow · Agra · Kanpur</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why Choose VAMA"
            title="Care built around accurate diagnosis, not quick upsells."
            description="Our Indirapuram clinic sits at the heart of Ghaziabad, Noida — designed to be a warm, welcoming space where every visit feels unhurried. Call us on +91 92897 58206 to know more."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-line bg-panel/40 p-5 transition-colors hover:border-brand/40 hover:bg-panel">
                  <p.icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                  <h3 className="mt-3 font-display text-lg text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}