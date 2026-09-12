import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, Send } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import FAQSection from "../components/sections/FAQSection";
import LocationsSection from "../components/sections/LocationsSection";
import { primaryEmail, primaryPhone } from "../data/locations";

const WHATSAPP_NUMBER = "918882911433"; // +91 88829 11433, no + or spaces

export default function ContactUs() {
  const navigate = useNavigate();
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
    // Send the lead to WhatsApp in a background tab, then move the visitor
    // themselves to a proper Thank You page instead of leaving them on a
    // WhatsApp screen.
    window.open(url, "_blank", "noopener,noreferrer");

    navigate("/thank-you", { state: { waLink: url } });
  };

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with VAMA Advanced Hair & Skin Clinic. Visit or call our clinics in Noida, Indirapuram, Lajpat Nagar, Agra, Lucknow & Kanpur, or book a free consultation online."
        keywords="contact VAMA clinic, hair skin clinic near me, VAMA clinic Noida address, VAMA clinic Indirapuram phone number, book consultation dermatologist"
      />
      <PageHero eyebrow="Contact Us" title="We'd love to hear from you." crumbs={[{ label: "Contact Us" }]} />

      <section className="bg-panel py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Get in touch" title="Send us a message" />
            <div className="mt-6 space-y-4">
              <a href={`mailto:${primaryEmail}`} className="flex items-center gap-3 rounded-xl bg-ivory p-4 text-sm text-ink-soft hover:text-brand">
                <Mail className="h-4 w-4 text-brand" /> {primaryEmail}
              </a>
              <a href={`tel:${primaryPhone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl bg-ivory p-4 text-sm text-ink-soft hover:text-brand">
                <Phone className="h-4 w-4 text-brand" /> {primaryPhone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-ivory p-6 shadow-[0_20px_50px_-24px_rgba(22,36,31,0.3)] md:p-8">
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
            </div>
          </Reveal>
        </div>
      </section>

      <LocationsSection />
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