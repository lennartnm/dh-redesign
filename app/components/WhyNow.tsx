"use client";

import Section from "./ui/Section";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const studies = [
  {
    headline: "USA: Digitale Werbung so stark wie noch nie",
    sub: "Branchenbericht von IAB/PwC: Unternehmen gaben 2024 rund 259 Mrd. US-$ für Online-Werbung aus – ca. +15 % vs. 2023.",
    href: "https://www.iab.com/insights/internet-advertising-revenue-report-full-year-2024/",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Marketing Dashboard",
  },
  {
    headline: "Europa: Über die Hälfte der Werbegelder ist jetzt digital",
    sub: "IAB Europe AdEx 2024: Digitale Werbung wächst um rund 16 % auf 118,9 Mrd. €. Zwei Drittel aller Werbeausgaben fließen ins Internet.",
    href: "https://iabeurope.eu/knowledge_hub/iab-europe-adex-benchmark-2024-report/",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Datenanalyse Europa",
  },
  {
    headline: "Unternehmen erhöhen Werbebudgets – wenn der Erfolg messbar ist",
    sub: "Nielsen 2024: Rund zwei Drittel des Budgets gehen in digitale Kanäle. 72 % der Marketer planen mehr Ausgaben.",
    href: "https://www.nielsen.com/insights/2024/maximizing-roi-in-a-fragmented-world-nielsen-annual-marketing-report/",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    imgAlt: "ROI und Wachstum",
  },
];

function StudyCard({ study, index }: { study: typeof studies[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 0.12}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 0.12}s`,
      }}
    >
      <a
        href={study.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <Image src={study.img} alt={study.imgAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-gray-900 text-base leading-snug">{study.headline}</h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{study.sub}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#033EDC]">
            Studie lesen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function WhyNow() {
  return (
    <Section className="py-24 bg-gray-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-4">
            Marktdaten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Warum jetzt der richtige Zeitpunkt ist
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Aktuelle Studien zeigen: Die Digitalisierung ist kein Trend – sie ist die neue Realität. Unternehmen, die jetzt investieren, sichern sich einen dauerhaften Wettbewerbsvorteil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((s, i) => <StudyCard key={i} study={s} index={i} />)}
        </div>
      </div>
    </Section>
  );
}
