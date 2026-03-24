"use client";

import { useState, useId, useMemo } from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";

type Review = {
  name: string;
  challenge: string;
  solution: string;
  amount: string;
  youtubeId: string;
};

const reviews: Review[] = [
  {
    name: "Petra Kern",
    challenge: "Zu wenig Sichtbarkeit im bestehenden Shop und in organischen Kanälen – neue Produkte fanden kaum Reichweite und Conversions blieben aus.",
    solution: "Relaunch mit klarer Informationsarchitektur, SEO-Basis und Conversion-Optimierungen; dazu eine Launch-Kampagne für schnelle erste Traktion.",
    amount: "3.164 €",
    youtubeId: "8yR0MV1J_2c",
  },
  {
    name: "Sarah Heilbrunner",
    challenge: "Zu wenige qualifizierte Leads für das Coaching-Programm; Cost-per-Acquisition war über bestehende Kanäle zu hoch.",
    solution: "Mehrstufiger Funnel (Lead-Magnet → Nurturing → Buchung) plus bezahlte Kampagnen mit laufendem Creative-Testing und Zielgruppen-Feinschliff.",
    amount: "4.320 €",
    youtubeId: "3DEYb6GtSIw",
  },
  {
    name: "Media Desk",
    challenge: "Digitalisierung des Geschäftsmodells: Manuelle, analoge Abläufe bremsten Wachstum und erzeugten Medienbrüche.",
    solution: "Maßgeschneiderte Beratung, Prozess-Mapping und Einführung passender Tools, um Workflows zu automatisieren und messbar zu machen.",
    amount: "1.900 €",
    youtubeId: "SkhgW8V6l28",
  },
];

function LiteYouTube({ id, label = "Video abspielen" }: { id: string; label?: string }) {
  const [playing, setPlaying] = useState(false);
  const btnId = useId();
  const thumbnail = useMemo(() => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, [id]);
  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams({ autoplay: "1", controls: "0", fs: "0", disablekb: "1", modestbranding: "1", rel: "0", playsinline: "1", iv_load_policy: "3", color: "white", hl: "de" });
    return `https://www.youtube-nocookie.com/embed/${id}?${params}`;
  }, [id]);

  return (
    <div className="group relative w-full aspect-video overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10">
      {!playing ? (
        <button
          id={btnId}
          type="button"
          className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#033EDC]"
          aria-label={label}
          onClick={() => setPlaying(true)}
        >
          <img src={thumbnail} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/30 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-3 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <svg className="h-5 w-5 text-[#033EDC]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              <span className="text-sm font-semibold text-gray-900">Abspielen</span>
            </span>
          </span>
        </button>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full block border-0"
          src={iframeSrc}
          title="YouTube video"
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={false}
        />
      )}
    </div>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

export default function Reviews() {
  return (
    <Section className="py-24 bg-gray-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-4">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Vertrauen Sie nicht uns – vertrauen Sie unseren Kunden.
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Echte Ergebnisse, echte Projekte, echte Förderungen.
          </p>
        </div>

        <div className="space-y-16">
          {reviews.map((r, i) => {
            const swap = i % 2 === 1;
            return (
              <motion.div
                key={i}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${swap ? "md:[&>*:first-child]:order-2" : ""}`}
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <motion.div variants={fadeIn}>
                  <LiteYouTube id={r.youtubeId} label={`Erfahrungsbericht von ${r.name} abspielen`} />
                </motion.div>

                <motion.div variants={stagger} className="self-center">
                  <motion.h3 variants={fadeIn} className="text-xl font-bold text-gray-900">{r.name}</motion.h3>

                  <motion.div variants={stagger} className="mt-6 space-y-5">
                    {[
                      { label: "Herausforderung", text: r.challenge },
                      { label: "Unsere Lösung", text: r.solution },
                      { label: "Geförderte Projektsumme", text: r.amount, highlight: true },
                    ].map(({ label, text, highlight }) => (
                      <motion.div key={label} variants={fadeIn}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">{label}</p>
                        <p className={`text-sm leading-relaxed ${highlight ? "text-2xl font-bold text-[#033EDC]" : "text-gray-600"}`}>{text}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeIn} className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
