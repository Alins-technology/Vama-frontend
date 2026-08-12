import { motion } from "framer-motion";
import { CalendarCheck, ChevronRight, Sparkle, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Hometop.jpg";

const stats = [
  ["6", "Clinics across North India"],
  ["4000+", "Hair transplants performed"],
  ["12+", "Years combined expertise"],
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark via-brand to-brand pb-24 pt-40 text-ivory md:pb-32 md:pt-48">
      {/* ambient shapes */}
      <motion.div
        className="pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full bg-ivory/20 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-light/20 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-rose/10 blur-[100px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* faint diagonal texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 90px)",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-28 hidden lg:block"
        animate={{ y: [0, -16, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkle className="h-8 w-8 text-gold-light" />
      </motion.div>

      <div className="container-page relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-light" />
            </span>
            Skin · Hair · Laser · Slimming
          </motion.span>

          <h1 className="mt-6 overflow-hidden font-display text-[2.6rem] leading-[1.05] md:text-6xl lg:text-[4rem]">
            <span className="mr-4 inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                Confidence
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                looks good
              </motion.span>
            </span>
            <span className="block overflow-hidden text-gold-light">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                on your skin &amp; hair.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-ivory/75 md:text-base"
          >
            VAMA Advanced Hair &amp; Skin Clinic brings advanced hair restoration, dermatology
            and aesthetic treatments to Noida, Indirapuram, Lajpat Nagar, Lucknow, Agra and Kanpur —
            with honest consultations and technology-led results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-lg shadow-brand-dark/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-xl"
            >
              <CalendarCheck className="h-4 w-4" /> Book a Free Consultation
            </Link>
            <Link
              to="/treatments/hair-treatment"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:text-gold-light"
            >
              Explore Treatments
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-ivory/15 pt-8"
          >
            {stats.map(([num, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <p className="font-display text-3xl text-gold-light">{num}</p>
                <p className="mt-1 max-w-[9rem] text-xs leading-snug text-ivory/60">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
          >
            <img
              src={heroImage}
              alt="Patient consultation at VAMA clinic"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* floating credential badges — replaces the fake "nearest clinic" card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ y: -4 }}
            className="absolute -left-6 bottom-10 hidden w-52 rounded-2xl bg-ivory p-4 text-ink shadow-xl sm:block"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                <Award className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="font-display text-base leading-tight">12+ Years</p>
                <p className="text-[11px] text-ink-soft">Combined expertise</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            whileHover={{ y: -4 }}
            className="absolute -right-4 top-8 hidden w-44 rounded-2xl bg-ivory p-4 text-ink shadow-xl sm:block"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-light text-gold">
                <Users className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="font-display text-base leading-tight">4000+</p>
                <p className="text-[11px] text-ink-soft">Happy patients</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}