"use client";

import Section from "./ui/Section";
import { useState } from "react";

const faqs = [
  {
    q: "Wie funktioniert die Förderung – und wie viel können Sie sich sparen?",
    a: "Wir prüfen im Erstgespräch, ob passende Förderungen für Sie möglich sind. Für von uns betreute Projekte ist die gesamte Förderabwicklung kostenlos.",
  },
  {
    q: "Wie läuft der Förderantrag ab?",
    a: "Das übernehmen wir als Umsetzungspartner im kompletten Umfang für Sie – stressfrei und erfolgsbasiert.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Wir können Projekte im Branchenvergleich schnell und zuverlässig umsetzen. Haben Sie ein dringendes Projekt? Lassen Sie uns jetzt sprechen!",
  },
  {
    q: "Welche Branchen können von einer Förderung profitieren?",
    a: "Die Förderung ist relevant für kleine und mittelgroße Unternehmen mit weniger als 250 Mitarbeitern und Sitz in Österreich.",
  },
  {
    q: "Wie starten wir zusammen?",
    a: "Buchen Sie Ihre kostenlose Erstberatung über unsere Webseite – wir finden gemeinsam den besten Weg für Sie und Ihr Projekt.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq" className="py-24 bg-gray-50/60">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-gray-500">
            Alles, was Sie über unsere Arbeit und das Thema Förderung wissen müssen.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-100 bg-blue-50/40 shadow-sm"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm md:text-base leading-snug ${isOpen ? "text-[#033EDC]" : "text-gray-800"}`}>
                    {f.q}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[#033EDC] text-white rotate-45" : "bg-gray-100 text-gray-500"}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M7 2v10M2 7h10" />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "200px" : "0" }}
                >
                  <p className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
