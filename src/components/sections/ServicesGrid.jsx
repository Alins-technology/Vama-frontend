import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const featured = [
  { name: "Hair Transplant", category: "hair-treatment", slug: "hair-transplant", tone: "brand" },
  { name: "Acne Scar Treatment", category: "skin-treatment", slug: "acne-scar-treatment", tone: "gold" },
  { name: "Anti-Ageing Treatment", category: "skin-treatment", slug: "anti-ageing-treatment", tone: "rose" },
  { name: "Hair Fall Treatment", category: "hair-treatment", slug: "hair-fall-treatment", tone: "brand" },
  { name: "Skin Rejuvenation", category: "skin-treatment", slug: "skin-rejuvenation", tone: "gold" },
  { name: "Hair Replacement", category: "hair-treatment", slug: "hair-replacement", tone: "rose" },
  { name: "Laser Hair Reduction", category: "skin-treatment", slug: "laser-hair-reduction", tone: "brand" },
  { name: "Hair PRP", category: "hair-treatment", slug: "hair-prp", tone: "gold" },
  { name: "HydraFacial", category: "skin-treatment", slug: "hydrafacial", tone: "rose" },
  { name: "Dandruff Treatment", category: "hair-treatment", slug: "dandruff-treatment", tone: "brand" },
];

const toneStyles = {
  brand: "bg-brand text-ivory group-hover:bg-brand-dark",
  gold: "bg-gold text-ink group-hover:bg-gold-light",
  rose: "bg-rose text-ink group-hover:bg-[#c88f88]",
};

export default function ServicesGrid() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Hair & skin care, under one roof."
            description="From diagnosis to aftercare — every treatment is designed around your specific skin or hair profile."
          />
          <Link
            to="/treatments/skin-treatment"
            className="hidden items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark md:inline-flex"
          >
            View all treatments <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 5) * 0.06}>
              <Link
                to={`/treatments/${s.category}/${s.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-panel/30 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_20px_40px_-16px_rgba(22,36,31,0.3)]"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-display transition-colors ${toneStyles[s.tone]}`}>
                  {s.name.charAt(0)}
                </div>
                <div className="mt-8">
                  <p className="font-display text-lg leading-snug text-ink">{s.name}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-ink-soft/70 transition-colors group-hover:text-brand">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
