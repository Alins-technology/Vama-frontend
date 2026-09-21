import { lazy, Suspense } from "react";
import Seo from "../components/Seo";
import HomeHero from "../components/sections/HomeHero";

// Everything below the hero loads as a separate chunk so the first paint
// doesn't wait on it.
const HomeBelowFold = lazy(() => import("../components/sections/HomeBelowFold"));

export default function Home() {
  return (
    <>
      <Seo
        title="Advanced Hair, Skin, Weight Loss & Allergy Clinic"
        description="VAMA Advanced Hair & Skin Clinic offers hair transplant, skin treatments, weight loss programmes and allergy treatment across Noida, Indirapuram, Lajpat Nagar, Agra, Lucknow & Kanpur. Book a free consultation today."
        keywords="hair transplant clinic Noida, skin clinic Indirapuram, best dermatologist Ghaziabad, hair fall treatment, acne scar treatment, weight loss clinic, allergy treatment clinic, VAMA Advanced Hair & Skin Clinic"
      />
      <HomeHero />
      <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
        <HomeBelowFold />
      </Suspense>
    </>
  );
}
