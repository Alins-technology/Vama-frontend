import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CalendarCheck, CheckCircle2, MessageCircle, Phone, PhoneCall, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import Reveal from "../components/ui/Reveal";
import { primaryPhone, whatsappNumber } from "../data/locations";

const STEPS = [
  {
    title: "Our team reviews it",
    text: "Your details land straight in our WhatsApp so a specialist can look at what you need.",
  },
  {
    title: "We call or message you back",
    text: "Usually within a few hours — to confirm the best slot and answer any quick questions.",
  },
  {
    title: "You visit for your free consultation",
    text: "No pressure, just an honest read on what will actually work for you.",
  },
];

/**
 * Shown right after any lead form (Booking Popup, Appointment CTA, Contact Us)
 * is submitted. The WhatsApp tab with the pre-filled message opens in the
 * background at the same time — this page is what the visitor actually
 * lands on and looks at, so it needs to reassure them the enquiry went
 * through even if they never notice the WhatsApp tab.
 */
export default function ThankYou() {
  const location = useLocation();
  const [waLink, setWaLink] = useState(location.state?.waLink || "");

  useEffect(() => {
    if (location.state?.waLink) setWaLink(location.state.waLink);
  }, [location.state]);

  const fallbackWaLink = waLink || `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi VAMA, I'd like to book a free consultation.")}`;

  return (
    <>
      <Seo
        title="Thank You"
        description="Thanks for reaching out to VAMA Advanced Hair & Skin Clinic. Your enquiry has been received."
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark text-ivory">
        <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-rose/15 blur-3xl" />

        <div className="container-page relative flex flex-col items-center px-6 py-20 text-center md:py-28">
          <Reveal>
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory/15 backdrop-blur-sm">
              <CheckCircle2 className="h-9 w-9 text-gold-light" />
            </span>
            <h1 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
              Thank you — your request is in!
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-ivory/80 md:text-base">
              We've received your details and sent them straight to our team on WhatsApp.
              Keep an eye on WhatsApp for a message from us — or reach us directly below.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={fallbackWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-brand-dark shadow-lg transition-colors hover:bg-ivory/90"
              >
                <MessageCircle className="h-4 w-4" /> Open WhatsApp
              </a>
              <a
                href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 rounded-full border border-ivory/40 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
              >
                <PhoneCall className="h-4 w-4" /> Call {primaryPhone}
              </a>
            </div>
            <p className="mt-3 text-xs text-ivory/60">
              Didn't see a WhatsApp tab open? Tap "Open WhatsApp" above to send your message directly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-panel py-16 md:py-20">
        <div className="container-page">
          <Reveal>
            <span className="mx-auto flex w-fit items-center gap-2 rounded-full border border-line bg-ivory px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              <Sparkles className="h-3.5 w-3.5" /> What happens next
            </span>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-ivory p-6 shadow-[0_20px_50px_-30px_rgba(22,36,31,0.3)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light font-display text-lg text-brand">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-3 text-center">
              <CalendarCheck className="h-6 w-6 text-brand" />
              <p className="text-sm text-ink-soft">
                In a hurry? You can also call us directly — we're happy to help right away.
              </p>
              <a
                href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                <Phone className="h-4 w-4" /> {primaryPhone}
              </a>
              <Link
                to="/"
                className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-soft hover:text-brand"
              >
                Back to Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
