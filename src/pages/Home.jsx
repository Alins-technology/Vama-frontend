import Seo from "../components/Seo";
import HomeHero from "../components/sections/HomeHero";
import ServicesGrid from "../components/sections/ServicesGrid";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ApproachSteps from "../components/sections/ApproachSteps";
import ClinicGallerySection from "../components/sections/ClinicGallerySection";
import TeamSection from "../components/sections/TeamSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import FAQSection from "../components/sections/FAQSection";
import Divider from "../components/ui/Divider";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import ArticleBlocks from "../components/ui/ArticleBlocks";

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

export default function Home() {
  return (
    <>
      <Seo
        title="Advanced Hair, Skin, Weight Loss & Allergy Clinic"
        description="VAMA Advanced Hair & Skin Clinic offers hair transplant, skin treatments, weight loss programmes and allergy treatment across Noida, Indirapuram, Lajpat Nagar, Agra, Lucknow & Kanpur. Book a free consultation today."
        keywords="hair transplant clinic Noida, skin clinic Indirapuram, best dermatologist Ghaziabad, hair fall treatment, acne scar treatment, weight loss clinic, allergy treatment clinic, VAMA Advanced Hair & Skin Clinic"
      />
      <HomeHero />
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