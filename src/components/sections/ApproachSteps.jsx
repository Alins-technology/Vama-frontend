import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  { step: "01", title: "Consultation", text: "A detailed conversation and skin/scalp analysis to understand your concern and goals." },
  { step: "02", title: "Diagnosis", text: "Our specialists identify the root cause — not just the symptom — before recommending anything." },
  { step: "03", title: "Personalised plan", text: "A treatment roadmap built around your skin type, lifestyle and desired timeline." },
  { step: "04", title: "Treatment & aftercare", text: "The procedure itself, followed by structured aftercare and progress check-ins." },
];

export default function ApproachSteps() {
  return (
    <section className="bg-panel py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Approach"
          title="A clear process, from first visit to final result."
          description="Four steps, one focus: getting you to a result that actually holds up — safely and predictably."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1} className="relative">
              <span className="font-display text-5xl text-brand/15">{s.step}</span>
              <h3 className="mt-3 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              {i < steps.length - 1 && (
                <span className="absolute right-[-1.1rem] top-6 hidden h-px w-8 bg-gradient-to-r from-brand/40 to-transparent md:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
