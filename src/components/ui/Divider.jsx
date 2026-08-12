/**
 * The site's signature motif: a soft, organic "renewal" curve that
 * separates sections — echoing skin/scalp renewal rather than a hard rule.
 */
export default function Divider({ fromColor = "var(--color-ivory)", toColor = "var(--color-panel)", flip = false }) {
  return (
    <div className={`relative h-16 w-full overflow-hidden md:h-24 ${flip ? "rotate-180" : ""}`} style={{ backgroundColor: fromColor }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 h-full w-full"
      >
        <path
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,112 1440,56 L1440,120 L0,120 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
