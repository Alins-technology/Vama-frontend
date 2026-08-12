import Reveal from "./Reveal";

export function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-gold-light" : "text-gold"
      }`}
    >
      <span className={`h-px w-6 ${light ? "bg-gold-light" : "bg-gold"}`} />
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-display text-3xl leading-[1.1] md:text-[2.6rem] ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[15px] leading-relaxed md:text-base ${light ? "text-ivory/75" : "text-ink-soft"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
