"use client";

import { useEffect, useState } from "react";
import Section from "./ui/Section";
import { useCounter, useInView } from "@/lib/hooks";

const stats = [
  { label: "Umgesetzte Projekte", to: 402, suffix: "+" },
  { label: "Ø Förderung pro Projekt", to: 2962, suffix: " €" },
  { label: "Kundenzufriedenheit", to: 98, suffix: "%" },
  { label: "Jahre Erfahrung", to: 8, suffix: "" },
];

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  return (
    <Section id="zahlen" className="py-20 relative overflow-hidden">
      {/* Subtle blue background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#033EDC] to-[#0050F0]" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase mb-4">
            Zahlen & Fakten
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Die Digitalisierungshilfe in Zahlen
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, i) => {
            const isSatisfaction = s.label.toLowerCase().includes("zufriedenheit");
            const isGrant = s.label.toLowerCase().includes("förderung");
            const rawVal = useCounter(started, s.to, 1800);

            let displayVal: string;
            if (isSatisfaction) displayVal = `${rawVal}%`;
            else if (isGrant) displayVal = `${rawVal.toLocaleString("de-DE")} €`;
            else displayVal = `${rawVal.toLocaleString("de-DE")}${s.suffix}`;

            return (
              <div key={i} className="text-center">
                <div className="text-[2.75rem] md:text-[3.5rem] font-bold text-white tabular-nums leading-none tracking-tight">
                  {displayVal}
                </div>
                <div className="mt-2 text-sm text-white/70 font-medium">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
