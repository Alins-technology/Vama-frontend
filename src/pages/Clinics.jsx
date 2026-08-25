import Seo from "../components/Seo";
import PageHero from "../components/layout/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Divider from "../components/ui/Divider";
import ClinicsStats from "../components/sections/ClinicsStats";
import ClinicsExplorer from "../components/sections/ClinicsExplorer";
import ClinicsGrid from "../components/sections/ClinicsGrid";
import ClinicGallerySection from "../components/sections/ClinicGallerySection";
import AppointmentCTA from "../components/sections/AppointmentCTA";
import FAQSection from "../components/sections/FAQSection";
import { locations, serviceCities } from "../data/locations";

export default function Clinics() {
  return (
    <>
      <Seo
        title="Our Clinics"
        description={`Visit any of our ${locations.length} VAMA Advanced Hair & Skin clinics across ${serviceCities.join(", ")}. Find addresses, contact numbers and specialists at each location.`}
        keywords="VAMA clinic locations, hair skin clinic Noida, hair skin clinic Indirapuram, hair skin clinic Lajpat Nagar, hair skin clinic Agra, hair skin clinic Lucknow, hair skin clinic Kanpur, clinic near me"
      />

      <PageHero
        eyebrow="Our Clinics"
        title="One standard of care, across every city."
        crumbs={[{ label: "Clinics" }]}
      />

      <section className="bg-ivory py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="At a Glance"
            title="VAMA, near you"
            description="From a single Indirapuram clinic to a network across North India — the same specialists, protocols and standard of care wherever you walk in."
            align="center"
          />
          <div className="mt-12">
            <ClinicsStats />
          </div>
        </div>
      </section>

      <ClinicsExplorer />
      <Divider fromColor="var(--color-panel)" toColor="var(--color-ivory)" />
      <ClinicsGrid />
      <ClinicGallerySection />

      <AppointmentCTA />
      <FAQSection />
    </>
  );
}
