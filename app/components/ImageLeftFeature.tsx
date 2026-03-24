"use client";

import Section from "./ui/Section";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ImageLeftFeature({
  headline = "KI bei der Digitalisierungshilfe",
  subheadline = "Wir nutzen KI intern zur Effizienzsteigerung, Prozessoptimierung und Verbesserung unserer Kundenerfahrung. Sprechen Sie uns gerne an, um mehr zu erfahren. Haben Sie ein KI-Projekt geplant? Lassen Sie uns sprechen.",
  ctaLabel = "Jetzt Projekt anfragen",
  ctaHref = "#kontakt",
}: Props) {
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

  const benefits = [
    "Automatisierte Prozesse sparen Zeit und Ressourcen",
    "KI-gestützte Auswertung Ihrer Marketingdaten",
    "Personalisierte Kundenansprache in großem Maßstab",
  ];

  return (
    <Section id="ki-feature" className="py-24 bg-gray-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image left */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(-24px)",
              transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/ki3.jpg"
                alt="KI & Digitalisierung"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#033EDC]/10 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="relative -mt-8 ml-8">
              <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-lg">
                  🤖
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">KI-gestützt</p>
                  <p className="text-sm font-bold text-gray-900">Smarter. Schneller.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text right */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(24px)",
              transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.15s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.15s",
            }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-5">
              Künstliche Intelligenz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{headline}</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">{subheadline}</p>

            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#033EDC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-[10px] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg hover:-translate-y-px transition-all duration-200"
                style={{ backgroundImage: "linear-gradient(135deg,#033EDC 0%,#00A7F9 100%)" }}
              >
                {ctaLabel}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
