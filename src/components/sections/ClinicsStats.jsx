import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Stethoscope, Sparkles } from "lucide-react";
import useCountUp from "../../utils/useCountUp";
import { locations, serviceCities } from "../../data/locations";
import { treatments } from "../../data/treatments";

const stats = [
  { icon: Building2, value: locations.length, suffix: "", label: "Clinics" },
  { icon: MapPin, value: serviceCities.length, suffix: "", label: "Cities" },
  { icon: Stethoscope, value: 25, suffix: "+", label: "Specialists" },
  { icon: Sparkles, value: treatments.length, suffix: "+", label: "Treatments" },
];

function StatItem({ icon: Icon, value, suffix, label, delay }) {
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, { start: started });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-center gap-2 rounded-2xl border border-line bg-panel/40 px-6 py-7 text-center shadow-sm transition-colors duration-300 hover:border-brand/40 hover:bg-panel"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ivory">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <p className="mt-1 font-display text-4xl text-ink md:text-[2.75rem]">
        {count}
        {suffix}
      </p>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">{label}</p>
    </motion.div>
  );
}

export default function ClinicsStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s, i) => (
        <StatItem key={s.label} {...s} delay={i * 0.1} />
      ))}
    </div>
  );
}
