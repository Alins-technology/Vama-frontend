import { ImageIcon } from "lucide-react";

/**
 * Stand-in for a real photo. Swap later by replacing this component's
 * usage with <img src="..." /> — every call site is a clearly labelled slot.
 */
export default function Placeholder({
  label = "Photo",
  ratio = "aspect-[4/5]",
  tone = "brand", // brand | gold | rose | ink
  className = "",
}) {
  const tones = {
    brand: "from-brand/25 via-brand/10 to-panel text-brand-dark",
    gold: "from-gold/30 via-gold-light/20 to-panel text-gold",
    rose: "from-rose/30 via-rose/10 to-panel text-ink-soft",
    ink: "from-ink/20 via-ink/5 to-panel text-ink",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${tones[tone]} ${ratio} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon className="h-6 w-6 opacity-60" strokeWidth={1.5} />
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] opacity-70">
          {label}
        </span>
      </div>
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
    </div>
  );
}
