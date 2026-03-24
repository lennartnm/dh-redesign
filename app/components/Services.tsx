"use client";

import Section from "./ui/Section";
import { Globe2, Lightbulb, Megaphone, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  sub: string;
  points: string[];
};

const services: ServiceItem[] = [
  {
    icon: Globe2,
    title: "Webentwicklung",
    sub: "Professionelle Webseiten, die Ihr Unternehmen optimal im digitalen Raum präsentieren.",
    points: [
      "Responsive Design für alle Geräte",
      "Suchmaschinenoptimiert (SEO)",
      "Benutzerfreundliche Oberflächen",
      "Individuelle Lösungen für Ihre Branche",
    ],
  },
  {
    icon: Lightbulb,
    title: "Beratung",
    sub: "Strategische Beratung für Ihren erfolgreichen Weg in die Digitalisierung.",
    points: [
      "Digitale Strategie-Entwicklung",
      "Prozessoptimierung",
      "Wettbewerbsanalyse",
      "Individuelle Digitalisierungsfahrpläne",
    ],
  },
  {
    icon: Megaphone,
    title: "Neukundengewinnung",
    sub: "Planbare Nachfrage durch performante Kampagnen und klare Angebote.",
    points: ["Angebotserstellung", "Meta Anzeigen", "Google Anzeigen", "LinkedIn Anzeigen"],
  },
];

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Icon = item.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setVisible(true); io.unobserve(e.target); }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    io.observe(el);
    // Fallback
    const t = setTimeout(() => setVisible(true), 800 + index * 150);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(24px)`,
        transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 0.12}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 0.12}s`,
      }}
      className="group flex flex-col h-full"
    >
      <div className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_4px_8px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1">
        {/* Icon */}
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 ring-1 ring-blue-100">
          <Icon className="h-6 w-6 text-[#033EDC]" aria-hidden />
        </div>

        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">{item.sub}</p>

        <ul className="mt-5 space-y-2.5 flex-1">
          {item.points.map((p, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
              <span className="mt-[5px] flex-shrink-0 h-1.5 w-1.5 rounded-full bg-[#033EDC]/60" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <Section id="leistungen" className="py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Was wir für Sie leisten
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Wir bringen Ihr Unternehmen digital nach vorn – klar, schnell und zielorientiert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {services.map((s, i) => (
            <ServiceCard key={s.title} item={s} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
