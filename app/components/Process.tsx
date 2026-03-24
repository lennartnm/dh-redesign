"use client";

import Section from "./ui/Section";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    image: "/Schritt1.webp",
    number: "01",
    title: "Kostenloses Erstgespräch",
    desc: "Im kostenlosen Erstgespräch analysieren wir, wo Sie aktuell stehen, wie wir Sie am besten unterstützen können und welche konkreten Schritte Sie zum Erfolg führen.",
  },
  {
    image: "/Schritt2.webp",
    number: "02",
    title: "Beratung und Strategieentwicklung",
    desc: "Gemeinsam mit Ihnen entwickeln wir eine maßgeschneiderte Digitalisierungsstrategie, die perfekt zu Ihrem Unternehmen passt.",
  },
  {
    image: "/Schritt3.webp",
    number: "03",
    title: "Umsetzung für das beste Ergebnis",
    desc: "Gemeinsam setzen wir die Strategie um und ermöglichen Ihnen das beste Ergebnis zu einem fairen Preis, mit Unterstützung durch staatliche Förderungen.",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { setVisible(true); io.unobserve(e.target); } });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    io.observe(el);
    const t = setTimeout(() => setVisible(true), 900 + index * 180);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(0.23,1,0.32,1) ${index * 0.13}s, transform 0.8s cubic-bezier(0.23,1,0.32,1) ${index * 0.13}s`,
      }}
      className="flex flex-col h-full"
    >
      <div className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm text-[#033EDC] text-sm font-bold shadow-md">
              {step.number}
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">{step.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <Section id="prozess" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-4">
            Unser Prozess
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            So arbeiten wir mit Ihnen
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Drei klare Schritte, die Ihr Unternehmen digital voranbringen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <StepCard key={s.title} step={s} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
