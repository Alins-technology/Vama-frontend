import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, CheckCircle2, MessageCircle, X } from "lucide-react";
import { whatsappNumber } from "../../data/locations";

/**
 * Site-wide "Book an Appointment" popup. Shows once per fresh page load
 * (first visit or a browser refresh) — it lives at the App level so it
 * mounts once and stays dismissed while navigating between routes, but
 * reappears on the next real reload. Not persisted to localStorage on
 * purpose, per spec: "on refresh or first open".
 */
const services = [
  "Hair Transplant",
  "Hair Fall Treatment",
  "Skin Rejuvenation",
  "Acne Scar Treatment",
  "Laser Hair Reduction",
  "Botox / Fillers",
  "Weight Loss Programme",
];

const SHOW_DELAY_MS = 1200;

export default function BookingPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", service: "" });

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      "New appointment request from VAMA website:",
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      form.service ? `Interested in: ${form.service}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-popup-title"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/60 p-4 py-8 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto flex max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-[1.75rem] bg-ivory shadow-[0_40px_80px_-24px_rgba(0,0,0,0.5)]"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/15 text-ivory backdrop-blur-sm transition-colors duration-300 hover:bg-ivory/30"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            {/* header */}
            <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark px-7 pb-8 pt-8 text-ivory">
              <motion.div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/25 blur-3xl"
                animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute -bottom-10 left-0 h-32 w-32 rounded-full bg-rose/15 blur-3xl"
                animate={{ x: [0, -10, 0], y: [0, 8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />

              <span className="relative inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light">
                <CalendarCheck className="h-3.5 w-3.5" /> Free Consultation
              </span>
              <h2 id="booking-popup-title" className="relative mt-4 max-w-[90%] font-display text-2xl leading-snug md:text-[1.7rem]">
                Book your appointment at VAMA
              </h2>
              <p className="relative mt-2 max-w-[88%] text-sm leading-relaxed text-ivory/75">
                Talk to our specialists — no pressure, just an honest read on what will actually work for your skin or hair.
              </p>
            </div>

            {/* body */}
            <div className="overflow-y-auto px-7 py-7">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                  <p className="font-display text-lg text-ink">Almost done!</p>
                  <p className="text-sm text-ink-soft">
                    We've opened WhatsApp with your details ready — just hit send there to confirm your slot.
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-brand-dark"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <Field
                    label="Your Name"
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
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      Interested In
                    </label>
                    <select
                      value={form.service}
                      onChange={handleChange("service")}
                      className="w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                    >
                      <option value="">Select a treatment (optional)</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-brand-dark"
                  >
                    Book Now on WhatsApp <MessageCircle className="h-4 w-4" />
                  </button>
                  <p className="text-center text-[11px] text-ink-soft/70">
                    By submitting, you agree to be contacted by VAMA regarding your enquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
