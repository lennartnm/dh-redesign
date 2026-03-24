"use client";

import Image from "next/image";
import Section from "./ui/Section";
import { useFoerderpotenzialModal } from "@/app/components/FoerderpotenzialModal";
import { motion, useReducedMotion } from "framer-motion";
import { Globe2, Megaphone, Lightbulb } from "lucide-react";

import heroDesktop from "@/public/hero_desktop_neu.jpg";
import heroMobile from "@/public/hero_dh_neu.jpg";

const featureCards = [
  {
    icon: Globe2,
    title: "Webentwicklung",
    sub: "Professionelle Webseiten, die Ihr Unternehmen optimal präsentieren.",
  },
  {
    icon: Lightbulb,
    title: "Beratung",
    sub: "Strategische Beratung für Ihren erfolgreichen Weg in die Digitalisierung.",
  },
  {
    icon: Megaphone,
    title: "Neukundengewinnung",
    sub: "Planbare Nachfrage durch performante Kampagnen und klare Angebote.",
  },
];

export default function Hero() {
  const { Modal, open } = useFoerderpotenzialModal({
    webhookUrl: "https://hooks.zapier.com/hooks/catch/19874454/u9iku47/",
    fbEventExtra: { source: "Hero" },
    successRedirect: "/termin-danke",
  });

  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
  } as const;

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] },
    },
  } as const;

  const cardItem = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : 24 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.4 + i * 0.12 },
    }),
  } as const;

  return (
    <Section className="relative !p-0">
      <Modal />

      {/* Full-bleed hero container */}
      <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        {/* Hero image - 16:9 on desktop */}
        <div className="relative w-full aspect-[2/3] md:aspect-[16/9]">
          <picture>
            <source media="(min-width: 768px)" srcSet={heroDesktop.src} />
            <Image
              src={heroMobile}
              alt="Digitalisierungshilfe Hero"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
            />
          </picture>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Content layer */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto max-w-7xl h-full px-6 md:px-10 flex flex-col md:flex-row items-end md:items-center justify-between pb-10 md:pb-0">

            {/* Left: headline + CTA */}
            <motion.div
              className="max-w-[560px] w-full"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={item}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase mb-6">
                  🇦🇹 Ihr Partner in Österreich
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-white font-bold text-[2rem] md:text-[3.25rem] leading-[1.12] tracking-tight"
              >
                Wir machen Ihr{" "}
                <span className="font-accent font-normal italic text-[#60a5fa]">Unternehmen</span>{" "}
                erfolgreich im Internet.
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 text-white/85 text-base md:text-lg leading-relaxed max-w-md"
              >
                Als <strong className="text-white font-semibold">Digitalisierungshilfe</strong> verhelfen wir Unternehmen in Österreich zu einem erfolgreichen Online-Auftritt und digitaler Kundenakquise.
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={open}
                  className="relative overflow-hidden rounded-[10px] text-white px-6 py-3 font-semibold shadow-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-px focus:outline-none"
                  style={{ backgroundImage: "linear-gradient(135deg,#033EDC 0%,#00A7F9 100%)" }}
                >
                  Projektvorhaben prüfen lassen
                </button>

                <a
                  href="/fallstudien"
                  className="rounded-[10px] bg-white/95 text-neutral-900 px-5 py-3 font-semibold transition-all duration-200 hover:bg-white shadow-md"
                >
                  Referenzen ansehen
                </a>
              </motion.div>

              <motion.div variants={item} className="mt-5 flex items-center gap-2 text-white/80">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#FBBF24" aria-hidden>
                      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 13.98 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm">80+ Bewertungen</span>
              </motion.div>
            </motion.div>

            {/* Right: floating feature cards - desktop only */}
            <div className="hidden md:flex flex-col gap-3 w-[280px] shrink-0 mb-[-2rem] mr-4">
              {featureCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    custom={i}
                    variants={cardItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/60 flex items-start gap-3"
                    style={{ transform: i === 1 ? "translateX(16px)" : "none" }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#033EDC]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{card.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">{card.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
