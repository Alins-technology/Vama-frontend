import { CheckCircle2, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import LocationsSection from "../components/sections/LocationsSection";
import ArticleBlocks from "../components/ui/ArticleBlocks";

import aboutImage from "../assets/Clinic/Reception.jpg";

const aboutStoryBlocks = [
  {
    type: "lead",
    text: "VAMA Advanced Hair & Skin Clinic was built around a simple belief: people deserve honest, expert care for their hair and skin concerns, delivered without pressure or exaggerated promises. What started as a single clinic has grown into a trusted name across Noida, Indirapuram, Lajpat Nagar, Agra, Lucknow, and Kanpur — but our approach to patient care has stayed the same.",
  },
  {
    type: "paragraph",
    text: "We bring together experienced doctors, dermatologists, and aesthetic specialists under one roof, offering hair transplant and restoration, dermatology, laser treatments, weight management, and allergy care. Rather than treating each concern in isolation, we look at the full picture — because hair loss, skin health, and overall wellbeing are often connected.",
  },
  {
    type: "paragraph",
    text: "Every consultation at VAMA Clinics begins the same way: with a genuine conversation about your history, concerns, and goals. We explain your options clearly, including their limitations, before recommending any treatment. If something isn't the right fit for you, we'll say so — our priority is your wellbeing, not a quick sale.",
  },
  {
    type: "paragraph",
    text: "We also invest in modern equipment and updated techniques across our hair, skin, and laser services, paired with clear aftercare guidance so results are supported well beyond the treatment room.",
  },
  {
    type: "paragraph",
    text: "Being present across six cities means quality hair and skin care doesn't have to come with a long commute. Whether you're visiting us for your first consultation or returning years later as your needs change, our team is built to support you through different stages of your care journey.",
  },
  {
    type: "paragraph",
    text: "At VAMA Clinics, we measure success not by promises made, but by patients who leave better informed, properly cared for, and confident in the decisions they've made about their own health.",
  },
  {
    type: "paragraph",
    text: "Visit your nearest VAMA Advanced Hair & Skin Clinic today, or reach out to schedule a consultation.",
  },
  { type: "link", text: "Schedule a Consultation", to: "/contact-us" },
];

const whyPoints = [
  "Experienced hair & skin specialists",
  "Advanced technology & modern equipment",
  "Personalised treatment plans",
  "Safe, hygienic & ethical practices",
  "Natural-looking results",
  "Affordable treatment packages",
  "Comprehensive aftercare support",
  "Trusted by thousands of happy patients",
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Meet VAMA Advanced Hair & Skin Clinic — certified dermatologists, cosmetologists & trichologists delivering safe, ethical hair, skin, weight loss & allergy care across Noida, Indirapuram, Lajpat Nagar, Agra, Lucknow & Kanpur."
        keywords="about VAMA clinic, hair and skin clinic Ghaziabad, dermatology team Noida, best hair transplant doctors, aesthetic clinic Indirapuram"
      />
      <PageHero
        eyebrow="About Us"
        title="A decade of honest, science-led care."
        crumbs={[{ label: "About Us" }]}
      />

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/5] overflow-hidden rounded-[2rem]"
            >
              <img
                src={aboutImage}
                alt="Doctors at VAMA clinic"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Who we are"
              title="Vama Advanced Hair & Skin Clinic"
              description="A pioneer in hair and skin care treatments, serving thousands of patients every year. We keep safety, transparency and effective results as our highest priority in every procedure — using the latest techniques and tools for outcomes that are quick, painless and scarless."
            />
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">
              Our team of certified doctors and professionals is genuinely invested in improving
              your quality of life. Whether you're dealing with hair loss, acne scars, pigmentation,
              ageing skin or unwanted body hair, we design a treatment plan around your specific
              concern — not a one-size-fits-all package.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-light/40 blur-3xl" />
        <div className="container-page relative grid gap-8 md:grid-cols-2">
          <Reveal>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-ivory p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/10"
            >
              <Target className="h-8 w-8 text-brand" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-2xl text-ink">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                To transform lives by providing advanced hair and skin solutions that restore
                confidence, enhance beauty and improve overall well-being.
              </p>
            </motion.div>
          </Reveal>
          <Reveal delay={0.12}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-ivory p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/10"
            >
              <Eye className="h-8 w-8 text-brand" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-2xl text-ink">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                To become India's most trusted hair and skin care brand by delivering exceptional
                patient experiences and clinically proven results.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Why VAMA" title="Why choose VAMA Solution?" align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {whyPoints.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "var(--color-brand)" }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3 rounded-xl border border-line bg-panel/30 px-5 py-4 transition-colors duration-300"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm text-ink-soft">{p}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-page mx-auto max-w-3xl">
          <SectionHeading eyebrow="Our Story" title="A clinic built for the long term" align="center" />
          <Reveal delay={0.1}>
            <div className="prose-content mt-10">
              <ArticleBlocks blocks={aboutStoryBlocks} />
            </div>
          </Reveal>
        </div>
      </section>

      <LocationsSection />

      <WhyChooseUs />
      <TestimonialsSection />
      <AppointmentCTA />
    </>
  );
}