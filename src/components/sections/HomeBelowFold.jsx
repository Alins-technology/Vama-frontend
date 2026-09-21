import ServicesGrid from "./ServicesGrid";
import WhyChooseUs from "./WhyChooseUs";
import ApproachSteps from "./ApproachSteps";
import ClinicGallerySection from "./ClinicGallerySection";
import TeamSection from "./TeamSection";
import TestimonialsSection from "./TestimonialsSection";
import AppointmentCTA from "./AppointmentCTA";
import FAQSection from "./FAQSection";
import Divider from "../ui/Divider";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import ArticleBlocks from "../ui/ArticleBlocks";

const homeIntroBlocks = [
  {
    type: "lead",
    text: "Hair loss, skin concerns, stubborn weight, and allergies rarely show up one at a time — and they rarely have a one-size-fits-all fix. At VAMA Advanced Hair & Skin Clinic, we bring together experienced specialists, advanced medical technology, and a genuinely personalized approach to help you address these concerns with clarity, not guesswork.",
  },
  {
    type: "paragraph",
    text: "With clinics across Noida, Indirapuram, Lajpat Nagar, Agra, Lucknow, and Kanpur, VAMA has grown into one of the few clinics in the region offering hair, skin, weight management, and allergy care under one roof — so you don't have to piece together your care across multiple providers.",
  },
  {
    type: "paragraph",
    text: "Environmental factors genuinely affect skin and hair health — pollution, dust, and hard water are common concerns across Delhi NCR and UP cities. Rather than offering the same generic advice everywhere, our specialists factor in your local environment and lifestyle when building a treatment plan, alongside your medical history and specific concerns.",
  },
  { type: "link", text: "Read our full story", to: "/about-us" },
];


export default function HomeBelowFold() {
  return (
    <>
      <ServicesGrid />
      <WhyChooseUs />
      <Divider fromColor="var(--color-ivory)" toColor="var(--color-panel)" />
      <ApproachSteps />
      <Divider fromColor="var(--color-panel)" toColor="var(--color-ivory)" />
      <ClinicGallerySection />
      <Divider fromColor="var(--color-ivory)" toColor="var(--color-panel)" />
      <TeamSection />
      <Divider fromColor="var(--color-panel)" toColor="var(--color-ivory)" />
      <TestimonialsSection />
      <Divider fromColor="var(--color-ivory)" toColor="var(--color-panel)" />

      <section className="bg-panel py-20 md:py-28">
        <div className="container-page mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="About VAMA"
            title="VAMA Advanced Hair & Skin"
            align="center"
          />
          <Reveal delay={0.1}>
            <div className="prose-content mt-10">
              <ArticleBlocks blocks={homeIntroBlocks} />
            </div>
          </Reveal>
        </div>
      </section>

      <AppointmentCTA />
      <FAQSection />
    </>
  );
}
