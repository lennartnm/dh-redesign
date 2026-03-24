import { useEffect, useRef, useState } from "react";

/** Fires when element enters viewport */
export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => e && setInView(e.isIntersecting),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15, ...(options || {}) }
    );
    io.observe(el);
    return () => io.unobserve(el);
  }, [options]);

  return { ref, inView };
}

/** Smooth counter once in view */
export function useCounter(shouldStart: boolean, to: number, ms = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / ms, 1);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [shouldStart, to, ms]);
  return val;
}
