import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "../ui/SocialIcons";
import { primaryEmail, primaryPhone } from "../../data/locations";
import { treatmentsByCategory } from "../../data/treatments";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-ivory/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink">
              <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none">
                <path d="M9 22c0-8 5-13 13-13-1 8-6 13-13 13Z" fill="currentColor" />
              </svg>
            </span>
            <span className="font-display text-xl text-ivory">VAMA</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
            Vama Advanced Hair &amp; Skin Clinic, nestled at the heart of Indirapuram, Ghaziabad — a warm,
            welcoming space for advanced hair, skin, laser and aesthetic care across six cities.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/vamaadvancedhairandskinclinic/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 transition-colors hover:border-gold hover:text-gold"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/vamaskinandhairclinic/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 transition-colors hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title="Skin Treatment">
          {treatmentsByCategory("skin-treatment")
            .slice(0, 6)
            .map((t) => (
              <Link key={t.slug} to={`/treatments/skin-treatment/${t.slug}`}>
                {t.name}
              </Link>
            ))}
        </FooterCol>

        <FooterCol title="Hair Treatment">
          {treatmentsByCategory("hair-treatment")
            .slice(0, 6)
            .map((t) => (
              <Link key={t.slug} to={`/treatments/hair-treatment/${t.slug}`}>
                {t.name}
              </Link>
            ))}
        </FooterCol>

        <FooterCol title="Quick Links">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <a href="/#our-team">Our Team</a>
          <Link to="/contact-us">Contact Us</Link>
        </FooterCol>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <span>© {year} Vama Advanced Hair &amp; Skin Clinic. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Indirapuram, Ghaziabad
            </span>
            <a href={`tel:${primaryPhone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-gold">
              <Phone className="h-3.5 w-3.5" /> {primaryPhone}
            </a>
            <a href={`mailto:${primaryEmail}`} className="inline-flex items-center gap-1.5 hover:text-gold">
              <Mail className="h-3.5 w-3.5" /> {primaryEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{title}</h4>
      <div className="mt-4 flex flex-col gap-2.5 text-sm text-ivory/65 [&_a]:transition-colors [&_a:hover]:text-gold">
        {children}
      </div>
    </div>
  );
}