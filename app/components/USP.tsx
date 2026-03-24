"use client";
import Section from "./ui/Section";

const rows = [
  {
    us: {
      title: "Strategische Beratung & Fördercheck",
      desc: "Passende Förderungen, klare Maßnahmen – Sie starten mit Plan und Budgetvorteil.",
    },
    others: {
      title: "Website-Baukasten",
      desc: "Schnell eingerichtet, oft unflexibel und schwer erweiterbar.",
    },
  },
  {
    us: {
      title: "Individuelles Design & Performance",
      desc: "Kein Einheitslook: präzises Design, schnelle Ladezeiten, bessere Conversion.",
    },
    others: {
      title: "Template-Look",
      desc: "Wirkt wie viele andere – schwächt die Markenwirkung.",
    },
  },
  {
    us: {
      title: "Transparente Ergebnisse",
      desc: "KPI-Ziele und verständliche Reports – Sie sehen jederzeit, was wirkt.",
    },
    others: {
      title: "Unklare Scope-Änderungen",
      desc: "Leistungen verschieben sich, Kosten steigen – am Ende bleibt Unklarheit.",
    },
  },
];

export default function USP() {
  return (
    <Section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-4">
            Warum wir?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Der Unterschied, der zählt
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Unser Ansatz im direkten Vergleich – damit Sie wissen, worauf Sie sich einlassen.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-card">
          {/* Header row */}
          <div className="grid md:grid-cols-2 bg-gray-50 border-b border-gray-100">
            <div className="px-6 py-4 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="w-7 h-7 rounded-lg bg-[#033EDC] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-gray-900">Digitalisierungshilfe</span>
            </div>
            <div className="px-6 py-4 flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3l8 8M11 3l-8 8" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-medium text-gray-500">Typische Alternativen</span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 ${i < rows.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              {/* Us column */}
              <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-gray-100 bg-blue-50/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#033EDC]/10 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#033EDC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{row.us.title}</p>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{row.us.desc}</p>
                  </div>
                </div>
              </div>

              {/* Others column */}
              <div className="px-6 py-5 bg-white">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2l6 6M8 2l-6 6" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 text-sm">{row.others.title}</p>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{row.others.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
