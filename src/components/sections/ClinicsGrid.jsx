import { motion } from "framer-motion";
import { MapPin, Phone, Star, Navigation, MessageCircle } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { locations } from "../../data/locations";

function mapsHref(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
function whatsappHref(phone, label) {
  const digits = phone.replace(/\D/g, "");
  const text = `Hi, I'd like to book a consultation at the ${label}.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export default function ClinicsGrid() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="All Locations"
          title={`Every VAMA clinic, at a glance`}
          description={`${locations.length} clinics, one standard of care — browse the full list or jump straight to a city.`}
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => {
            return (
              <Reveal key={loc.slug} delay={(i % 6) * 0.07}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative flex h-full flex-col rounded-2xl border border-line bg-panel/30 p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/10"
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
                    <h3 className="font-display text-lg leading-tight text-ink">{loc.label}</h3>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{loc.address}</p>

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
                  </div>

                  <div className="mt-5 flex gap-2 border-t border-line pt-4">
                    <a
                      href={whatsappHref(loc.phones[0], loc.label)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`WhatsApp ${loc.label}`}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366]/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-[#128C4A] transition-colors duration-300 hover:bg-[#25D366] hover:text-ivory"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                    <a
                      href={mapsHref(loc.address)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Get directions to ${loc.label}`}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-light px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-brand-dark transition-colors duration-300 hover:bg-brand hover:text-ivory"
                    >
                      <Navigation className="h-3.5 w-3.5" /> Directions
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
