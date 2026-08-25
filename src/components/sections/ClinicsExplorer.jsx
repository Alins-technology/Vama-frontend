import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Star, Navigation, MessageCircle, PhoneCall } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { locations } from "../../data/locations";

function mapsHref(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
function telHref(phone) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
function whatsappHref(phone, label) {
  const digits = phone.replace(/\D/g, "");
  const text = `Hi, I'd like to book a consultation at the ${label}.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

// Node coordinates for the desktop route diagram — a gentle wave through the
// viewBox, one point per clinic. Purely decorative / illustrative, not a real map.
function useRoutePoints(count, width = 1400, height = 280) {
  return useMemo(() => {
    const gap = width / (count + 1);
    return Array.from({ length: count }, (_, i) => {
      const x = gap * (i + 1);
      const wave = Math.sin(i * 1.05 + 0.3);
      const y = height / 2 + wave * (height * 0.32);
      return { x, y };
    });
  }, [count, width, height]);
}

export default function ClinicsExplorer() {
  const [activeSlug, setActiveSlug] = useState(
    locations.find((l) => l.flagship)?.slug ?? locations[0].slug
  );
  const active = locations.find((l) => l.slug === activeSlug) ?? locations[0];
  const points = useRoutePoints(locations.length);

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");

  return (
    <section className="relative overflow-hidden bg-panel py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-light/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold-light/40 blur-3xl" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Explore"
          title="Pick a city, meet your clinic."
          description="Tap a stop on the route (or a city below) to see its address, contact details and the specialists stationed there."
          align="center"
        />

        {/* ---- Desktop route diagram ---- */}
        <Reveal delay={0.1} className="mx-auto mt-14 hidden max-w-5xl md:block">
          <div className="relative w-full" style={{ aspectRatio: "1400 / 280" }}>
            <svg
              viewBox="0 0 1400 280"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <defs>
                <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-brand)" />
                  <stop offset="100%" stopColor="var(--color-gold)" />
                </linearGradient>
              </defs>

              {/* base route, draws itself in on scroll */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.35}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* flowing accent on top — perpetual motion cue */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="var(--color-gold)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeDasharray="2 22"
                initial={{ pathLength: 0, strokeDashoffset: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                animate={{ strokeDashoffset: [0, -48] }}
                transition={{
                  pathLength: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
                  strokeDashoffset: { duration: 1.8, repeat: Infinity, ease: "linear", delay: 1.6 },
                }}
              />

              {points.map((p, i) => {
                const loc = locations[i];
                const isActive = loc.slug === activeSlug;
                return (
                  <g key={loc.slug}>
                    {loc.flagship && (
                      <circle cx={p.x} cy={p.y} r={16} className="fill-gold/20 animate-ping" style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
                    )}
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r={isActive ? 12 : 9}
                      className="cursor-pointer"
                      fill={isActive ? "var(--color-brand)" : "var(--color-ivory)"}
                      stroke={isActive ? "var(--color-gold)" : "var(--color-brand)"}
                      strokeWidth={isActive ? 4 : 3}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: 1.25 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.9 + i * 0.1, ease: "backOut" }}
                      onClick={() => setActiveSlug(loc.slug)}
                    />
                  </g>
                );
              })}
            </svg>

            {points.map((p, i) => {
              const loc = locations[i];
              const isActive = loc.slug === activeSlug;
              return (
                <button
                  key={loc.slug}
                  onClick={() => setActiveSlug(loc.slug)}
                  style={{ left: `${(p.x / 1400) * 100}%`, top: `${(p.y / 280) * 100}%` }}
                  className="absolute -translate-x-1/2 translate-y-4 whitespace-nowrap px-1 text-center"
                >
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wide transition-colors duration-300 ${
                      isActive ? "text-brand" : "text-ink-soft hover:text-brand"
                    }`}
                  >
                    {loc.city}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ---- Mobile: horizontal scroll of pills (route diagram is desktop-only) ---- */}
        <div className="-mx-5 mt-10 flex snap-x gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-10 md:flex-wrap md:justify-center md:overflow-visible md:px-0">
          {locations.map((loc) => {
            const isActive = loc.slug === activeSlug;
            return (
              <button
                key={loc.slug}
                onClick={() => setActiveSlug(loc.slug)}
                className="relative shrink-0 snap-start rounded-full px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-300"
              >
                {isActive && (
                  <motion.span
                    layoutId="clinicPillBg"
                    className="absolute inset-0 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-ivory" : "text-ink-soft hover:text-brand"}`}>
                  {loc.city}
                  {loc.flagship && <Star className="ml-1 inline h-3 w-3 fill-current align-[-1px]" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* ---- Detail panel ---- */}
        <div className="relative mx-auto mt-10 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid overflow-hidden rounded-[2rem] border border-line bg-ivory shadow-[0_30px_60px_-24px_rgba(20,32,43,0.2)] lg:grid-cols-[1.05fr_1fr]"
            >
              <div className="relative flex h-64 flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark p-6 lg:h-full lg:p-8">
                <motion.div
                  className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full bg-gold/25 blur-3xl"
                  animate={{ x: [0, 20, 0], y: [0, 16, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-rose/25 blur-3xl"
                  animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
                <div
                  className="pointer-events-none absolute inset-0 text-ivory opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(115deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 90px)",
                  }}
                />

                <div className="relative flex items-center justify-between">
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ivory/10 text-gold-light backdrop-blur-sm"
                  >
                    <MapPin className="h-7 w-7" strokeWidth={1.5} />
                  </motion.span>
                  {active.flagship && (
                    <span className="flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ivory shadow">
                      <Star className="h-3 w-3 fill-current" /> Flagship
                    </span>
                  )}
                </div>

                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                    {active.city}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-ivory md:text-3xl">{active.label}</h3>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 p-6 md:p-8">
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <p className="text-sm leading-relaxed text-ink-soft">{active.address}</p>
                  </div>

                  <div className="space-y-2 border-t border-line pt-4">
                    {active.phones.map((p) => (
                      <a
                        key={p}
                        href={telHref(p)}
                        className="flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 hover:text-brand"
                      >
                        <Phone className="h-3.5 w-3.5 text-brand" /> {p}
                      </a>
                    ))}
                    {active.email && (
                      <a
                        href={`mailto:${active.email}`}
                        className="flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 hover:text-brand"
                      >
                        <Mail className="h-3.5 w-3.5 text-brand" /> {active.email}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 border-t border-line pt-5">
                  <a
                    href={telHref(active.phones[0])}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ivory transition-colors duration-300 hover:bg-brand-dark"
                  >
                    <PhoneCall className="h-3.5 w-3.5" /> Call Now
                  </a>
                  <a
                    href={whatsappHref(active.phones[0], active.label)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ivory transition-colors duration-300 hover:opacity-90"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                  <a
                    href={mapsHref(active.address)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
                  >
                    <Navigation className="h-3.5 w-3.5" /> Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
