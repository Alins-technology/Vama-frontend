import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 up to `target` once `start` becomes true.
 * Used for the stat counters on the Clinics page.
 */
export default function useCountUp(target, { duration = 1.4, start = false } = {}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef();
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(target * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  return value;
}
