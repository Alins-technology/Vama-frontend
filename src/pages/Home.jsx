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
      <AppointmentCTA />
      <FAQSection />
    </>
  );
}