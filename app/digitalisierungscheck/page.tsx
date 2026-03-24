"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  AlertTriangle,
  Target,
  Zap,
  ShieldCheck,
  BarChart3,
  Megaphone,
  Globe,
  Workflow,
  HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import Section from "../components/ui/Section";

/**
 * 360° Digitalisierungs-Check Subpage
 */

const ACCENT = "linear-gradient(135deg,#001DC5 0%,#00A7F9 100%)" as const;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pop = {
  hidden: { opacity: 0, scale: 0.98, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Panel({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"rounded-2xl border border-slate-200/70 bg-white shadow-sm " + className}>{children}</div>;
}

function AccentUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block pb-1.5 sm:pb-2">
      <span className="relative z-[1]">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[4px] sm:h-[6px] rounded-[2px] opacity-90"
        style={{ background: ACCENT }}
      />
    </span>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block bg-clip-text text-transparent"
      style={{
        background: ACCENT,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <motion.div variants={item} className="h-full">
      <Panel className="w-full h-full p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow">
        <div className="h-full flex items-start gap-4">
          <div className="shrink-0 rounded-xl p-3" style={{ background: ACCENT, color: "white" }}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-lg font-semibold leading-tight">{title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
          </div>
        </div>
      </Panel>
    </motion.div>
  );
}

function PrimaryLinkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 " +
        className
      }
      style={{ background: ACCENT }}
    >
      {children}
    </a>
  );
}

function OutlineLinkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium border border-slate-300 text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 " +
        className
      }
    >
      {children}
    </a>
  );
}

/** Flip-Card */
function FlipCard({
  index,
  title,
  desc,
  shouldFlip = false,
}: {
  index: number;
  title: string;
  desc: string;
  shouldFlip?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const stepNumber = index + 1;

  // Wenn shouldFlip true → Karte flippt einmal und bleibt so
  useEffect(() => {
    if (shouldFlip) {
      const timeout = setTimeout(() => setFlipped(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [shouldFlip]);

  const toggle = () => setFlipped((v) => !v);
  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="relative h-full" style={{ perspective: "1000px" }}>
      <button
        type="button"
        onClick={toggle}
        onKeyDown={onKey}
        aria-pressed={flipped}
        aria-label={`Schritt ${stepNumber} anzeigen`}
        className="block w-full focus:outline-none h-full"
      >
        <div
          className="relative h-40 sm:h-48 rounded-2xl transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-2xl grid place-items-center shadow-sm border border-slate-200/70"
            style={{
              background: ACCENT,
              color: "white",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="flex items-end gap-3">
              <span className="leading-none font-extrabold" style={{ fontSize: "72px", lineHeight: "0.9" }}>
                {stepNumber}.
              </span>
              <span className="pb-1 tracking-wide text-xs opacity-90">Schritt</span>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-2xl bg-white border border-slate-200/70 p-5 sm:p-6 shadow-sm grid place-items-center text-center"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div>
              <h3 className="text-base sm:text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

/** Prozess-Schritte */
function ProcessFlipSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });

  const steps = [
    {
      t: "Ist-Analyse",
      d: "Was ist da? Was fehlt? Wo verlieren Sie Geld oder Zeit? Wir prüfen bestehende Website, Ads, Funnel & Prozesse.",
    },
    {
      t: "Zielbild",
      d: "Wen möchten Sie erreichen? Mit welchem Angebot? Wir schärfen Botschaft, Nutzen & Positionierung.",
    },
    {
      t: "Kanäle wählen",
      d: "Website, Funnel, Google, Meta, LinkedIn oder Shop – wir wählen nur, was wirklich passt.",
    },
    {
      t: "Prioritäten & Fahrplan",
      d: "Klare Reihenfolge: Was macht jetzt Sinn? Was später? Woran messen wir Erfolg?",
    },
    {
      t: "Umsetzungsplan",
      d: "Ihr glasklarer Fahrplan für die digitale Neukundengewinnung.",
    },
  ];

  return (
    <div ref={ref}>
      <motion.ol
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5"
      >
        {steps.map((s, i) => (
          <motion.li key={s.t} variants={item} className="h-full">
            <FlipCard index={i} title={s.t} desc={s.d} shouldFlip={i === 0 && inView} />
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}

/** Hauptseite */
export default function DigitalCheckPage() {
  return (
    <div className="w-full overflow-x-clip">
      <Header />

      {/* Hero */}
      <Section className="w-full pt-12 sm:pt-16 pb-20 sm:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch"
        >
          {/* Left */}
          <motion.div variants={item} className="space-y-6 self-stretch">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.3] md:leading-[1.25] tracking-tight break-words">
              <GradientText>Starten Sie digital richtig</GradientText> ..{" "}
              <span className="font-normal sm:whitespace-nowrap">ohne Geld zu verbrennen.</span>
            </h1>
            <p className="text-lg text-slate-700">
              Wir prüfen Ihr Angebot mit einem <strong>360° Digitalisierungs-Check</strong>. Sie erhalten{" "}
              <strong>klare Empfehlungen</strong>, einen <strong>einfachen Plan</strong> und die{" "}
              <strong>nächsten Schritte</strong>, die wirklich Kunden bringen.
            </p>
            <div className="flex flex-wrap gap-3 min-w-0">
              <PrimaryLinkButton href="#termin">
                Kostenloses Erstgespräch sichern <ArrowUpRight className="h-5 w-5" />
              </PrimaryLinkButton>
              <OutlineLinkButton href="#prozess">So läuft’s ab</OutlineLinkButton>
            </div>

            {/* Mini-Benefits */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2" variants={container}>
              {[
                ["Sicherheit statt Bauchgefühl", "Entscheide mit Plan, nicht im Blindflug."],
                ["Einfach & klar", "Sie verstehen, wo Ihr Geld gut investiert ist."],
                ["Spare Zeit", "Sie wissen direkt, wie Sie starten sollten."],
                ["Effizient", "Angepasste Methoden & Strategien für Ihr Angebot."],
              ].map(([k, v]) => (
                <motion.div key={k} variants={pop} className="rounded-xl border border-slate-200/70 p-4 text-sm">
                  <div className="font-medium">{k}</div>
                  <div className="text-slate-600 mt-0.5">{v}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div variants={pop} className="w-full h-full self-stretch">
            <div className="relative w-full h-full overflow-hidden rounded-3xl border border-slate-200/70 shadow-sm">
              <img src="/digicheck.jpg" alt="360° Digitalisierungs-Check – Visual" className="w-full h-full object-cover" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
              />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6 max-w-[92%]">
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  „Dank dem Digitalisierungscheck weiß ich endlich, welche Kanäle tatsächlich erfolgversprechend sind, und habe zusätzlich
                  einen konkreten Umsetzungsplan.“
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Problem */}
      <Section className="w-full py-20 sm:py-24 bg-slate-50">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
          <motion.h2 variants={item} className="text-2xl sm:text-3xl font-semibold mb-8">
            <AccentUnderline>Viele starten falsch</AccentUnderline> – und zahlen drauf.
          </motion.h2>

          <motion.div variants={item}>
            <Panel className="p-5 sm:p-6 flex items-start gap-4 border-rose-200/60 bg-rose-50">
              <div className="shrink-0 rounded-xl p-3 bg-rose-500 text-white">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700">
                  <span>Die bittere Wahrheit</span>
                </div>
                <p className="text-sm mt-2 text-rose-900">
                  Über <strong>85 %</strong> der Unternehmen verlieren online Geld – weil sie ohne Klarheit starten und 08/15-Lösungen
                  kaufen.
                </p>
              </div>
            </Panel>
          </motion.div>

          <motion.div variants={container} className="mt-6 space-y-4">
            {[
              { icon: Globe, t: "Website ohne Plan", d: "Schick anzusehen, aber ohne Wirkung. Keine klare Botschaft, keine Leads, kein Umsatz." },
              { icon: Workflow, t: "Funnel ohne Strategie", d: "Teuer gebaut, aber nicht auf Ihr Angebot & Zielgruppe abgestimmt." },
              { icon: Megaphone, t: "Ads „weil alle es machen“", d: "Budget verpufft ohne klares Ziel und Sie verlieren den Glauben in 'Online Marketing'." },
              { icon: HelpCircle, t: "Zu viele Fachbegriffe", d: "Landingpage, SEO, Funnel … niemand erklärt, was wirklich Sinn macht." },
            ].map((f) => (
              <Feature key={f.t} icon={f.icon} title={f.t} desc={f.d} />
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Prozess */}
      <Section id="prozess" className="w-full py-20 sm:py-28">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
          <motion.h2 variants={item} className="text-2xl sm:text-3xl font-semibold mb-10">
            <AccentUnderline>Der 360° Digitalisierungs-Check</AccentUnderline> – Ihr konkreter Fahrplan für die digitale Welt.
          </motion.h2>
          <ProcessFlipSteps />
        </motion.div>
      </Section>

      {/* Ergebnis */}
      <Section className="w-full py-20 sm:py-24 bg-slate-50">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
          <motion.h2 variants={item} className="text-2xl sm:text-3xl font-semibold mb-8">
            <AccentUnderline>Ihr Ergebnis</AccentUnderline>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: ShieldCheck, t: "Klarheit statt Chaos", d: "Sie weißt, was wirkt – und warum." },
              { icon: Target, t: "Strategie statt Zufall", d: "Fokus auf Kanäle, die zu Dir und Deinem Angebot passen." },
              { icon: BarChart3, t: "Budget, das wirkt", d: "Sie erhalten Klarheit über mögliche Investments und wo Ihr Geld gut investiert ist." },
              { icon: Zap, t: "Messbare Schritte", d: "Ein konkreter Plan für Deinen digitalen Wachstum." },
            ].map((f) => (
              <Feature key={f.t} icon={f.icon} title={f.t} desc={f.d} />
            ))}
          </div>
        </motion.div>
      </Section>

      <div id="termin">
        <ContactCTA />
      </div>

      <Footer />
    </div>
  );
}
