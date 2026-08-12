import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { categories, treatmentsByCategory } from "../../data/treatments";
import vamaLogo from "../../assets/vamalogo.webp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSub(null);
  }, [pathname]);

  const linkBase = "text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300";
  const linkColor = scrolled
    ? "text-ink hover:text-brand"
    : "text-ivory hover:text-gold-light";
  const linkActiveColor = scrolled ? "text-brand" : "text-gold-light";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 shadow-[0_2px_24px_-4px_rgba(20,32,43,0.12)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            src={vamaLogo}
            alt="VAMA Advanced Hair & Skin Clinic"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActiveColor : linkColor}`}
            >
              {l.label}
            </NavLink>
          ))}

          <TreatmentsDropdown scrolled={scrolled} />

          {[
            { to: "/blog", label: "Blog" },
            { to: "/contact-us", label: "Contact Us" },
          ].map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActiveColor : linkColor}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact-us"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:-translate-y-0.5 ${
              scrolled
                ? "bg-brand text-ivory hover:bg-brand-dark"
                : "bg-ivory text-brand-dark hover:bg-brand-light"
            }`}
          >
            Book a Visit
          </Link>
        </div>

        <button
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${
            scrolled ? "border-ink/15 text-ink" : "border-ivory/30 text-ivory"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ivory lg:hidden"
          >
            <div className="container-page flex max-h-[75vh] flex-col gap-1 overflow-y-auto py-4">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link to={l.to} className="block rounded-lg px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand">
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <MobileSub
                label="Treatments"
                open={mobileSub === "treatments"}
                onToggle={() => setMobileSub(mobileSub === "treatments" ? null : "treatments")}
              >
                {categories.map((cat) => (
                  <div key={cat.slug} className="py-2">
                    <Link to={`/treatments/${cat.slug}`} className="text-sm font-semibold text-brand">
                      {cat.name}
                    </Link>
                    <div className="mt-1 flex flex-col gap-1 pl-3">
                      {treatmentsByCategory(cat.slug).map((t) => (
                        <Link
                          key={t.slug}
                          to={`/treatments/${cat.slug}/${t.slug}`}
                          className="py-1 text-sm text-ink-soft"
                        >
                          {t.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </MobileSub>

              {[
                { to: "/blog", label: "Blog" },
                { to: "/contact-us", label: "Contact Us" },
              ].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 2) * 0.04, duration: 0.25 }}
                >
                  <Link to={l.to} className="block rounded-lg px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand">
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/contact-us"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-brand-dark"
              >
                Book a Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------- Desktop mega menu: 3 categories only; submenu flyouts on hover ---------- */
function TreatmentsDropdown({ scrolled }) {
  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setActiveCat(null);
      }}
    >
      <button
        className={`flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
          scrolled ? "text-ink hover:text-brand" : "text-ivory hover:text-gold-light"
        }`}
      >
        Treatments
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex">
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 rounded-2xl border border-line bg-ivory py-3 shadow-[0_24px_48px_-16px_rgba(20,32,43,0.25)]"
          >
            {categories.map((cat) => (
              <div
                key={cat.slug}
                className="relative"
                onMouseEnter={() => setActiveCat(cat.slug)}
              >
                <Link
                  to={`/treatments/${cat.slug}`}
                  className={`flex w-full items-center justify-between gap-2 px-5 py-3.5 text-left text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    activeCat === cat.slug ? "bg-panel/60 text-brand" : "text-ink-soft hover:text-brand"
                  }`}
                >
                  {cat.name}
                  <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                </Link>

                {/* flyout submenu, appears only for the hovered category */}
                <AnimatePresence>
                  {activeCat === cat.slug && (
                    <motion.div
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-full top-0 ml-1 w-60 rounded-2xl border border-line bg-ivory p-4 shadow-[0_24px_48px_-16px_rgba(20,32,43,0.25)]"
                    >
                      <ul className="space-y-1">
                        {treatmentsByCategory(cat.slug).map((t) => (
                          <li key={t.slug}>
                            <Link
                              to={`/treatments/${cat.slug}/${t.slug}`}
                              className="block rounded-lg px-2 py-2 text-sm text-ink-soft transition-colors duration-200 hover:bg-panel/60 hover:text-brand"
                            >
                              {t.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSub({ label, open, onToggle, children }) {
  return (
    <div className="border-b border-line/70">
      <button onClick={onToggle} className="flex w-full items-center justify-between px-2 py-3 text-sm font-semibold text-ink">
        {label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex">
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-2 pb-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}