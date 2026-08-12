import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingDock from "./components/layout/FloatingDock";
import BookingPopup from "./components/layout/BookingPopup";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import TreatmentCategory from "./pages/TreatmentCategory";
import TreatmentDetail from "./pages/TreatmentDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollToTop />
      <BookingPopup />
      <Navbar />
      <FloatingDock />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/treatments/:category" element={<TreatmentCategory />} />
          <Route path="/treatments/:category/:slug" element={<TreatmentDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}