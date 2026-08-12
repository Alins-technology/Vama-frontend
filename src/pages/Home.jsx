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