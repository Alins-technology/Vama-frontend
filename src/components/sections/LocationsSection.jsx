import { MapPin, Phone, Mail, Star } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { locations } from "../../data/locations";

export default function LocationsSection() {
  return (
    <section className="relative overflow-hidden bg-panel py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-light/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-gold-light/40 blur-3xl" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Find Us"
          title="Our Locations"
          description="7 clinics across North India — walk in, or call ahead to book your slot."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative flex h-full flex-col rounded-2xl border border-line bg-ivory p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/10"
              >
                {loc.flagship && (
                  <span className="absolute -top-3 right-5 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ivory shadow">
                    <Star className="h-3 w-3 fill-current" /> Flagship
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ivory">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg text-ink">{loc.label}</h3>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  {loc.address}
                </p>

                <div className="mt-5 space-y-2 border-t border-line pt-4">
                  {loc.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-sm text-ink-soft transition-colors duration-300 hover:text-brand"
                    >
                      <Phone className="h-3.5 w-3.5 text-brand" />
                      {p}
                    </a>
                  ))}
                  {loc.email && (
                    <a
                      href={`mailto:${loc.email}`}
                      className="flex items-center gap-2 text-sm text-ink-soft transition-colors duration-300 hover:text-brand"
                    >
                      <Mail className="h-3.5 w-3.5 text-brand" />
                      {loc.email}
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}