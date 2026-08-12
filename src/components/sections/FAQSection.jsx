import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import Reveal from "../ui/Reveal";
import { faqs } from "../../data/content";

export default function FAQSection({ items = faqs, title = "Frequently asked questions" }) {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title={title}
          description="Can't find what you're looking for? Reach out and our team will get back to you directly."
        />
        <Reveal delay={0.1}>
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
