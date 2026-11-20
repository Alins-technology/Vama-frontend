import ServicesGrid from "./ServicesGrid";
import WhyChooseUs from "./WhyChooseUs";
import ReelsSection from "./ReelsSection";
import TeamSection from "./TeamSection";
import TestimonialsSection from "./TestimonialsSection";
import AppointmentCTA from "./AppointmentCTA";
import FAQSection from "./FAQSection";
import Divider from "../ui/Divider";

// Home is kept short for ad traffic: services → why us → video proof →
// doctors → reviews → book. "Our approach", the clinic photo gallery and the
// long "About VAMA" text now live on the About Us page.
export default function HomeBelowFold() {
  return (
    <>
      <ServicesGrid />
      <WhyChooseUs />
      <Divider fromColor="var(--color-ivory)" toColor="var(--color-panel)" />
      <ReelsSection />
      <TeamSection />
      <Divider fromColor="var(--color-panel)" toColor="var(--color-ivory)" />
      <TestimonialsSection />
      <AppointmentCTA />
      <FAQSection />
    </>
  );
}
