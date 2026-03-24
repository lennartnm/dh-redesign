"use client";

import Section from "./ui/Section";
import { useInView } from "@/lib/hooks";
import React from "react";

export default function FundingStamp() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (inView && !hasAnimated) setHasAnimated(true);
  }, [inView, hasAnimated]);

  const ease = { transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" } as React.CSSProperties;

  return (
    <Section className="relative isolate overflow-hidden w-full py-20 md:py-28 bg-white" containerClass="relative z-10 mx-auto max-w-4xl text-center px-6">
      {/* Subtle radial background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(3,62,220,0.04) 0%, transparent 70%)" }} />
      </div>

      <div ref={ref} className="relative z-10">
        <p
          className={`text-balance text-xl md:text-2xl text-gray-500 font-medium leading-relaxed transition-all duration-[1400ms] ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ ...ease }}
        >
          Gute Unternehmen gehen den Schritt zur Digitalisierung.
        </p>

        <p
          className={`mt-4 text-balance text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight transition-all duration-[1400ms] ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ ...ease, transitionDelay: hasAnimated ? "200ms" : "0ms" }}
        >
          Großartige Unternehmen{" "}
          <span className="font-accent italic text-[#033EDC]">profitieren zusätzlich</span>{" "}
          von Förderungen.
        </p>

        <p
          className={`mt-5 text-balance text-lg md:text-xl text-gray-600 transition-all duration-[1400ms] ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ ...ease, transitionDelay: hasAnimated ? "500ms" : "0ms" }}
        >
          Wir helfen Ihnen, großartig zu sein.
        </p>

        <div
          className={`mt-10 inline-flex items-center gap-2.5 mx-auto px-5 py-2.5 rounded-full ring-1 ring-emerald-600/25 bg-emerald-50 text-emerald-700 transition-all duration-[1400ms] ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ ...ease, transitionDelay: hasAnimated ? "900ms" : "0ms" }}
          aria-label="Förderantrag bewilligt"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
            <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
          </svg>
          <span className="text-sm font-semibold">Förderantrag bewilligt</span>
        </div>
      </div>
    </Section>
  );
}
