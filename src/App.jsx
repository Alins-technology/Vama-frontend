import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import FloatingDock from "./components/layout/FloatingDock";
import ScrollToTop from "./components/ScrollToTop";

// Home stays in the main bundle (it's the landing page); every other route and
// the booking popup load on demand so visitors don't download code for pages
// they haven't opened.
import Home from "./pages/Home";
const Footer = lazy(() => import("./components/layout/Footer"));
const BookingPopup = lazy(() => import("./components/layout/BookingPopup"));
const About = lazy(() => import("./pages/About"));
const TreatmentCategory = lazy(() => import("./pages/TreatmentCategory"));
const TreatmentDetail = lazy(() => import("./pages/TreatmentDetail"));
const Clinics = lazy(() => import("./pages/Clinics"));
const ClinicLocationPage = lazy(() => import("./pages/ClinicLocationPage"));
const HairTransplantLocationPage = lazy(() => import("./pages/HairTransplantLocationPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollToTop />
      <Suspense fallback={null}>
        <BookingPopup />
      </Suspense>
      <Navbar />
      <FloatingDock />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/treatments/:category" element={<TreatmentCategory />} />
          <Route path="/treatments/:category/:slug" element={<TreatmentDetail />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/vamaclinics-in-indirapuram" element={<ClinicLocationPage citySlug="indirapuram" />} />
          <Route path="/vamaclinics-in-agra" element={<ClinicLocationPage citySlug="agra" />} />
          <Route path="/vamaclinics-in-lajpat-nagar" element={<ClinicLocationPage citySlug="lajpat-nagar" />} />
          <Route path="/vamaclinics-in-noida" element={<ClinicLocationPage citySlug="noida" />} />
          <Route path="/vamaclinics-in-lucknow" element={<ClinicLocationPage citySlug="lucknow" />} />
          <Route path="/vamaclinics-in-kanpur" element={<ClinicLocationPage citySlug="kanpur" />} />
          <Route path="/hair-transplant-in-indirapuram" element={<HairTransplantLocationPage citySlug="indirapuram" />} />
          <Route path="/hair-transplant-in-noida" element={<HairTransplantLocationPage citySlug="noida" />} />
          <Route path="/hair-transplant-in-lajpat-nagar" element={<HairTransplantLocationPage citySlug="lajpat-nagar" />} />
          <Route path="/hair-transplant-in-agra" element={<HairTransplantLocationPage citySlug="agra" />} />
          <Route path="/hair-transplant-in-lucknow" element={<HairTransplantLocationPage citySlug="lucknow" />} />
          <Route path="/hair-transplant-in-kanpur" element={<HairTransplantLocationPage citySlug="kanpur" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}