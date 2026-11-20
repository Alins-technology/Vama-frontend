import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarCheck, Play, X } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { InstagramIcon } from "../ui/SocialIcons";
import { reels, instagramUrl } from "../../data/reels";

// One reel card. The muted preview only loads + plays while the card is
// actually on screen (IntersectionObserver), so 6–8 reels don't all download
// at once and hurt page speed / ad landing-page experience.
function ReelCard({ reel, onOpen, hidden }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={() => onOpen(reel)}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : 0}
      aria-label={`Play video: ${reel.title}`}
      className="group/card relative aspect-[9/16] w-[190px] shrink-0 overflow-hidden rounded-[1.5rem] bg-ink shadow-[0_18px_40px_-20px_rgba(22,36,31,0.55)] sm:w-[220px] md:w-[250px]"
    >
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster || undefined}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/10" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover/card:opacity-100">
        <Play className="h-5 w-5 fill-white" />
      </span>
      <p className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-left text-[13px] font-semibold leading-snug text-ivory">
        {reel.title}
      </p>
    </button>
  );
}

// Full-screen player with sound + controls when a reel is tapped.
function ReelModal({ reel, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={reel.title}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-[380px]" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
        >
          <X className="h-5 w-5" />
        </button>
        <video
          src={reel.src}
          poster={reel.poster || undefined}
          controls
          autoPlay
          playsInline
          className="aspect-[9/16] max-h-[82vh] w-full rounded-[1.5rem] bg-black object-contain"
        />
        <p className="mt-3 text-center font-display text-lg text-ivory">{reel.title}</p>
      </div>
    </div>
  );
}

export default function ReelsSection() {
  const [active, setActive] = useState(null);
  const [touchPaused, setTouchPaused] = useState(false);

  if (!reels?.length) return null;

  // List is rendered twice so the strip can loop seamlessly (-50% = one full set).
  const loop = [...reels, ...reels];
  // ~5s per reel keeps it a slow, readable drift. Tweak to taste.
  const duration = `${reels.length * 5}s`;
  const paused = touchPaused || !!active;

  return (
    <section id="reels" className="overflow-hidden bg-panel pt-20 pb-6 md:pt-28 md:pb-8">
      <div className="container-page">
        <SectionHeading
          eyebrow="Watch Real Results"
          title="See VAMA in action"
          description="Treatments, patient journeys and a look inside our clinics — straight from our team."
        />
      </div>

      <Reveal delay={0.1}>
        <div
          className="reels-mask group/strip mt-12"
          onTouchStart={() => setTouchPaused(true)}
          onTouchEnd={() => setTouchPaused(false)}
        >
          <div
            className="reels-track flex w-max gap-4 md:gap-5"
            style={{
              animationDuration: duration,
              animationPlayState: paused ? "paused" : undefined,
            }}
          >
            {loop.map((reel, i) => (
              <ReelCard
                key={`${reel.src}-${i}`}
                reel={reel}
                onOpen={setActive}
                hidden={i >= reels.length}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Primary action keeps ad visitors on the site (booking); Instagram is
          secondary so paid traffic isn't sent off to another app. */}
      <div className="container-page mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          to="/contact-us"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-dark"
        >
          <CalendarCheck className="h-4 w-4" />
          Book a Free Consultation
        </Link>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand underline-offset-4 hover:underline"
        >
          <InstagramIcon className="h-4 w-4" />
          More videos on Instagram
        </a>
      </div>

      {active && <ReelModal reel={active} onClose={() => setActive(null)} />}
    </section>
  );
}
