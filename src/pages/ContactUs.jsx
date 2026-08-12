import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import FAQSection from "../components/sections/FAQSection";
import { primaryEmail } from "../data/locations";

const WHATSAPP_NUMBER = "919289758206"; // +91 92897 58206, no + or spaces

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      "New enquiry from VAMA website:",
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      form.email ? `Email: ${form.email}` : null,
      `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setSubmitted(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact Us" title="We'd love to hear from you." crumbs={[{ label: "Contact Us" }]} />

      <section className="bg-panel py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Get in touch" title="Send us a message" />
            <div className="mt-6 space-y-4">
              <a href={`mailto:${primaryEmail}`} className="flex items-center gap-3 rounded-xl bg-ivory p-4 text-sm text-ink-soft hover:text-brand">
                <Mail className="h-4 w-4 text-brand" /> {primaryEmail}
              </a>
              <a href="tel:9289758206" className="flex items-center gap-3 rounded-xl bg-ivory p-4 text-sm text-ink-soft hover:text-brand">
                <Phone className="h-4 w-4 text-brand" /> +91 92897 58206
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-ivory p-6 shadow-[0_20px_50px_-24px_rgba(22,36,31,0.3)] md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                  <p className="font-display text-xl text-ink">Almost done!</p>
                  <p className="text-sm text-ink-soft">
                    We've opened WhatsApp with your message ready — just hit send there to reach us.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand hover:text-brand-dark"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Name"
                      placeholder="Your full name"
                      required
                      value={form.name}
                      onChange={handleChange("name")}
                    />
                    <Field
                      label="Mobile No."
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={form.mobile}
                      onChange={handleChange("mobile")}
                    />
                  </div>
                  <Field
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange("email")}
                  />
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you'd like help with..."
                      value={form.message}
                      onChange={handleChange("message")}
                      className="w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-brand-dark"
                  >
                    Submit Now <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection />
    </>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}