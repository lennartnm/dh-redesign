"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Megaphone,
  Settings,
  Database,
  ClipboardCheck,
  Puzzle,
  Users2,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import Section from "../components/ui/Section";

/**
 * Offline → Online Subpage
 * - Feine Unterstreichung (mobile-fest)
 * - Prozess als Flip-Cards: Front = "1. Schritt" (mit Punkt, S groß)
 * - Karte 1 dreht sich automatisch beim Sichtbarwerden
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
  return (
    <div
      className={
        "rounded-2xl border border-slate-200/70 bg-white shadow-sm " + className
      }
    >
      {children}
    </div>
  );
}

function AccentUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline box-decoration-clone bg-[linear-gradient(135deg,#001DC5_0%,#00A7F9_100%)] bg-no-repeat 
      [background-position:0_100%] [background-size:100%_3px] sm:[background-size:100%_5px] pb-1 sm:pb-1.5"
    >
      {children}
    </span>
  );
}

function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={
        "font-bold bg-[linear-gradient(135deg,#001DC5_0%,#00A7F9_100%)] bg-clip-text text-transparent " +
        className
      }
    >
      {children}
    </span>
  );
}

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <motion.div variants={item}>
      <Panel className="w-full p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4">
          <div
            className="shrink-0 rounded-xl p-3"
            style={{ background: ACCENT, color: "white" }}
          >
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

// FlipCard mit autoFlip für Schritt 1
function FlipCard({
  index,
  title,
  desc,
  autoFlip = false,
}: {
  index: number;
  title: string;
  desc: string;
  autoFlip?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const stepNumber = index + 1;

  useEffect(() => {
    if (autoFlip) {
      const timeout = setTimeout(() => setFlipped(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [autoFlip]);

  const toggle = () => setFlipped((v) => !v);
  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      <button
        type="button"
        onClick={toggle}
        onKeyDown={onKey}
        aria-pressed={flipped}
        aria-label={`Schritt ${stepNumber} anzeigen`}
        className="block w-full focus:outline-none"
      >
        <div
          className="relative h-40 sm:h-48 rounded-2xl transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Vorderseite */}
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
              <span
                className="leading-none font-extrabold"
                style={{ fontSize: "72px", lineHeight: "0.9" }}
              >
                {stepNumber}.
              </span>
              <span className="pb-1 tracking-wide text-xs opacity-90">Schritt</span>
            </div>
          </div>

          {/* Rückseite */}
          <div
            className="absolute inset-0 rounded-2xl bg-white border border-slate-200/70 p-5 sm:p-6 shadow-sm flex flex-col justify-center"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <h3 className="text-base sm:text-lg font-semibold leading-snug">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            <p className="sr-only">Klicken zum Umdrehen</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function ProcessFlipSteps() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    { t: "Sichere Migration", d: "Wir ziehen Inhalte und Daten sauber um. Nichts geht verloren." },
    { t: "Was braucht Ihr Unternehmen?", d: "Landingpage, Webseite, Funnel, Social Media – Was macht wirklich Sinn?" },
    { t: "Neukundenakquise mit Plan", d: "Wir testen Kanäle (Google, Social, E-Mail) und investieren nur dort, wo Anfragen entstehen." },
    { t: "Kanal-Identifikation", d: "Wir messen, welcher Kanal liefert." },
    { t: "Digitaler Vertrieb", d: "Wir verhelfen Dir zu einem sinnvollen System." },
    { t: "Angebot schärfen", d: "Digitales Marketing erfordert ständige Optimierung. Wir denken Angebot und Positionierung neu." },
    { t: "Transparente Zahlen", d: "Klare Messungen: Anfragen, Umsatz und mehr. Sie sehen, was sich lohnt." },
    { t: "Skalierung", d: "Das validierte System wird auf neue Kanäle, Zielgruppen und Angebote ausgeweitet." },
  ];

  return (
    <div ref={sectionRef}>
      <motion.ol
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        {steps.map((s, i) => (
          <motion.li key={s.t} variants={item}>
            <FlipCard index={i} title={s.t} desc={s.d} autoFlip={i === 0 && isInView} />
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}

export default function OfflineToOnlinePage() {
  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <Section className="w-full pt-12 sm:pt-16 pb-20 sm:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch"
        >
          <motion.div variants={item} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.3] md:leading-[1.25] tracking-tight">
              Von <GradientText>Offline zu Online</GradientText> ..{" "}
              <span className="whitespace-nowrap font-medium">
                und weiter nach oben.
              </span>
            </h1>
            <p className="text-lg text-slate-700 max-w-none">
              Wir bringen Ihr Geschäft sicher ins Netz – und sorgen dafür, dass es dort wächst.
              Migration, Website, Neukunden, passende Kanäle, digitaler Vertrieb & ein passendes Angebot.
              Klar, messbar, und individuell.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrimaryLinkButton href="#kontakt">
                Unverbindlich anfragen <ArrowUpRight className="h-5 w-5" />
              </PrimaryLinkButton>
              <OutlineLinkButton href="#vorgehen">
                So arbeiten wir <Rocket className="h-5 w-5" />
              </OutlineLinkButton>
            </div>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
              variants={container}
            >
              {[
                ["Schneller Start", "Wir denken in Wochen, nicht Monaten."],
                ["Planbare Kunden", "vom Klick bis Abschluss"],
                ["Messbarer Effekt", "Ziele & Zahlen"],
                ["Alles aus einer Hand", "Website · Angebot · Akquise"],
              ].map(([k, v]) => (
                <motion.div
                  key={k}
                  variants={pop}
                  className="rounded-xl border border-slate-200/70 p-4 text-sm"
                >
                  <div className="font-medium">{k}</div>
                  <div className="text-slate-600 mt-0.5">{v}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={pop} className="w-full h-full self-stretch">
            <div className="w-full h-full overflow-hidden rounded-3xl border border-slate-200/70 shadow-sm relative">
              <img
                src="/offline.jpg"
                alt="Von Offline zu Online – Visual"
                className="w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 p-4 sm:p-5">
                <p className="max-w-[780px] text-white text-sm sm:text-base leading-snug">
                  „Die Digitalisierungshilfe hat uns geholfen, unser bestehendes Geschäfts erfolgreich ins Internet zu bringen.“
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Vielleicht kennst du das */}
      <Section className="w-full py-20 sm:py-24 bg-slate-50">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full"
        >
          <motion.h2 variants={item} className="text-2xl sm:text-3xl font-semibold mb-8">
            <AccentUnderline>Vielleicht kennen Sie das</AccentUnderline>:
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Puzzle, t: "Unklarer Auftritt", d: "Ihre Website sagt nicht deutlich, was Sie anbieten." },
              { icon: Users2, t: "Zu wenig Anfragen", d: "Besucher kommen, aber es passiert wenig." },
              { icon: Megaphone, t: "Falsche Kanäle", d: "Budget versickert in Inseraten ohne klares Ergebnis." },
              { icon: Database, t: "Datenchaos", d: "Kontakte überall, kein System, das für Dich arbeitet." },
              { icon: ClipboardCheck, t: "Unscharfes Angebot", d: "Das Offline-Angebot wird 1:1 online übernommen." },
              { icon: Settings, t: "Technikstress", d: "Migration, Tools, Tracking – alles wirkt kompliziert." },
            ].map((f) => (
              <Feature key={f.t} icon={f.icon} title={f.t} desc={f.d} />
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Schritte */}
      <Section id="vorgehen" className="w-full py-20 sm:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full"
        >
          <motion.h2 variants={item} className="text-2xl sm:text-3xl font-semibold mb-10">
            <AccentUnderline>So machen wir es – Schritt für Schritt</AccentUnderline>
          </motion.h2>
          <ProcessFlipSteps />
        </motion.div>
      </Section>

      {/* Vorteile */}
      <Section className="w-full py-20 sm:py-24 bg-slate-50">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full"
        >
          <motion.h2 variants={item} className="text-2xl sm:text-3xl font-semibold mb-8">
            <AccentUnderline>Ihre Vorteile</AccentUnderline>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["Schneller Start, wenig Aufwand", "Wir führen, Sie entscheiden."],
              ["Mehr passende Anfragen", "Fokus auf Menschen, die wirklich kaufen wollen."],
              ["Weniger Streuverlust", "Budget fließt nur in Kanäle mit Wirkung."],
              ["Alles aus einer Hand", "Website, CRM, Akquise, Angebot – perfekt verzahnt."],
              ["Planbare Kunden", "Vom ersten Klick bis zum Abschluss klar strukturiert."],
              ["Messbar & einfach", "Jede Maßnahme hat ein Ziel und eine Zahl."],
            ].map(([t, d]) => (
              <motion.div key={t as string} variants={item}>
                <Panel className="w-full p-6 rounded-2xl border border-slate-200/70">
                  <h3 className="text-base font-semibold mb-1">{t}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{d}</p>
                </Panel>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <div id="kontakt">
        <ContactCTA />
      </div>
      <Footer />
    </div>
  );
}
