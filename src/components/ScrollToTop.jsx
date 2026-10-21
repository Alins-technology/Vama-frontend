import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Jumps to the top of the page on every route change.
 *
 * Two things can otherwise stop this from landing at the top:
 * 1. `html { scroll-behavior: smooth }` (index.css) — per spec, `scrollTo`'s
 *    "auto" behavior defers to that CSS, so a plain `scrollTo(0, 0)` becomes
 *    an *animated* scroll instead of an instant jump.
 * 2. On touch devices, tapping a link mid-scroll leaves momentum/inertia
 *    scrolling active, which can override or race a programmatic scroll —
 *    exactly the "click while still scrolling" case.
 *
 * Briefly forcing `scroll-behavior: auto` and `overflow: hidden` on the
 * root element kills both: it cancels any in-flight momentum scroll and
 * guarantees the jump to (0, 0) is instant, not animated.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRoute = useRef(true);

  // Meta Pixel: index.html fires PageView on the initial load. This is a
  // single-page app, so later in-app navigations don't reload the page —
  // fire PageView ourselves on each route change after the first.
  useEffect(() => {
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const prevScrollBehavior = html.style.scrollBehavior;
    const prevOverflow = html.style.overflow;

    html.style.scrollBehavior = "auto";
    html.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const id = requestAnimationFrame(() => {
      html.style.overflow = prevOverflow;
      html.style.scrollBehavior = prevScrollBehavior;
    });

    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
