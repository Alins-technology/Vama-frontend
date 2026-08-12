import { useState } from "react";
import Reveal from "../ui/Reveal";
import { Eyebrow } from "../ui/SectionHeading";
import { CheckCircle2, Send } from "lucide-react";
import { whatsappNumber } from "../../data/locations";

const services = [
  "Hair Transplant",
  "Hair Fall Treatment",
  "Skin Rejuvenation",
  "Acne Scar Treatment",
  "Laser Hair Reduction",
  "Botox / Fillers",
  "Weight Loss Programme",
];

export default function AppointmentCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", service: "" });

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      "New appointment request from VAMA website:",
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      `Interested in: ${form.service}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-brand-dark text-ivory">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
        <Reveal>
          <Eyebrow light>Book an appointment</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] md:text-[2.75rem]">
            Talk to our experts before you decide anything.
          </h2>
          <p className="mt-4 max-w-md text-ivory/70">
            A free first consultation — no pressure, just an honest read on what will
            actually work for your skin or hair, and what it involves.
          </p>
          <ul className="mt-6 space-y-3">
            {["Certified dermatologists & surgeons", "Transparent pricing, no hidden costs", "Personalised treatment roadmap"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-ivory/80">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" /> {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl bg-ivory p-6 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)] md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-brand" />
                <p className="font-display text-xl">Almost done!</p>
                <p className="text-sm text-ink-soft">
                  We've opened WhatsApp with your details ready — just hit send there to confirm your slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Your Name"
                    type="text"
                    placeholder="e.g. Priya Verma"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                  />
                  <Field
                    label="Mobile Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    value={form.mobile}
                    onChange={handleChange("mobile")}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    Select Service
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={handleChange("service")}
                    className="w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                  >
                    <option value="" disabled>Choose a treatment</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-brand-dark"
                >
                  Book Now on WhatsApp <Send className="h-4 w-4" />
                </button>
                <p className="text-center text-[11px] text-ink-soft/70">
                  By submitting, you agree to be contacted by VAMA Solution regarding your enquiry.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}
