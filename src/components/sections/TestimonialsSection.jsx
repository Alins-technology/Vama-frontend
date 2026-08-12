import { Quote, Star } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/content";

export default function TestimonialsSection() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client Stories"
          title="What our patients say"
          description="Real feedback from people who trusted us with their skin and hair."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl bg-ivory p-6 shadow-[0_16px_40px_-24px_rgba(22,36,31,0.35)]">
                <Quote className="h-6 w-6 text-gold" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">"{t.quote}"</p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="font-display text-base text-ink">{t.name}</p>
                  <p className="text-xs uppercase tracking-wide text-ink-soft/70">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}