import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

import dhananjay from "../../assets/doctors/Dhananjay.jpg";
import prerna from "../../assets/doctors/Prerna.jpg";
import neeraj from "../../assets/doctors/neeraj.jpg";
import tuhina from "../../assets/doctors/Tuhina.jpg";
import suman from "../../assets/doctors/Suman.jpg";
import nabam from "../../assets/doctors/Nabam.jpg";
import anjali from "../../assets/doctors/Anjali.jpg";
import shivani from "../../assets/doctors/shivani.jpg";
import archana from "../../assets/doctors/Archana.jpg";
import bushra from "../../assets/doctors/Bushra.jpg";

const doctors = [
  {
    name: "Dr. Dhananjay",
    role: "MD Dermatologist",
    branch: "Noida Branch",
    photo: dhananjay,
  },
  {
    name: "Dr. Prerna",
    role: "Cosmetologist",
    branch: "Lucknow Branch",
    photo: prerna,
  },
  {
    name: "Dr. Neeraj",
    role: "Specialist",
    branch: "Lajpat Nagar Branch",
    photo: neeraj,
  },
  {
    name: "Dr. Tuhina",
    role: "MD Dermatologist",
    branch: "Indirapuram Branch",
    photo: tuhina,
  },
  {
    name: "Dr. Suman",
    role: "Specialist",
    branch: "",
    photo: suman,
  },
  {
    name: "Dr. Sadia Sadaf",
    role: "BUMS, MD Dermatologist",
    branch: "Lucknow Branch (On Call)",
    photo: null,
  },
  {
    name: "Dr. Nabam Nunia",
    role: "MBBS, Cosmetologist & Trichologist",
    branch: "Agra Branch",
    photo: nabam,
  },
  {
    name: "Dr. Anjali",
    role: "BDS, Cosmetologist",
    branch: "Kanpur Branch",
    photo: anjali,
  },
  {
    name: "Dr. Shivani",
    role: "BDS, Cosmetologist",
    branch: "Kanpur Branch",
    photo: shivani,
  },
  {
    name: "Dr. Archana Singh",
    role: "MBBS, MD Dermatologist",
    branch: "Lajpat Nagar Branch",
    photo: archana,
  },
  {
    name: "Dr. Bushra Shahid",
    role: "MBBS, MD Dermatologist",
    branch: "Noida Branch",
    photo: bushra,
  },
];

export default function TeamSection() {
  return (
    <section id="our-team" className="bg-panel py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Meet the doctors"
          title="Certified, experienced, and genuinely invested"
          description="Every doctor and specialist at VAMA is trained, certified, and reviewed regularly against clinical outcomes — not just years on paper."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.08}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[380px] cursor-pointer overflow-hidden rounded-3xl border border-line shadow-[0_4px_20px_-8px_rgba(20,32,43,0.08)]"
    >
      {/* photo background */}
      {member.photo ? (
        <motion.img
          src={member.photo}
          alt={member.name}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-light/40 text-sm font-semibold uppercase tracking-wide text-brand">
          Photo coming soon
        </div>
      )}

      {/* dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

      {/* default label — name + role + branch, always visible at bottom */}
      <motion.div
        animate={{ opacity: hovered ? 0 : 1, y: hovered ? 10 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-5 left-5 right-5 rounded-xl bg-ivory px-4 py-3 shadow-sm"
      >
        <p className="font-display text-base text-ink">{member.name}</p>
        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold">{member.role}</p>
        {member.branch && (
          <p className="mt-0.5 text-[11px] text-ink-soft">{member.branch}</p>
        )}
      </motion.div>

      {/* hover reveal content */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
        transition={{ duration: 0.35, delay: hovered ? 0.08 : 0 }}
        className="absolute inset-0 flex flex-col justify-end p-6"
      >
        <p className="font-display text-xl text-gold-light">{member.name}</p>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-ivory/80">{member.role}</p>
        {member.branch && (
          <p className="mt-1 text-sm text-ivory/70">{member.branch}</p>
        )}
      </motion.div>
    </motion.div>
  );
}