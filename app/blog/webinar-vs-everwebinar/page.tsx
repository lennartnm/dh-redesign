// app/blog/webinar-vs-ever-webinar/page.tsx


import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/ui/Section";
import ContactCTA from "../../components/ContactCTA";

// ✅ Metadaten für <head> & Social (Open Graph) + für die Blogübersicht
export const metadata = {
  title: "Webinar vs. Ever-Webinar (On-Demand): Was passt besser zu Ihnen?",
  description:
    "Klare, anfängerfreundliche Entscheidungshilfe: Live-Webinar vs. On-Demand (Ever-Webinar) – inkl. Methode, Tabelle, Praxis-Setup & KPIs.",
  openGraph: {
    images: [
      {
        url: "/webinar-cover.jpg", // Bild liegt in /public
        width: 1600,
        height: 900,
        alt: "Cover: Webinar vs. Ever-Webinar",
      },
    ],
  },
  other: {
    date: "2025-10-17",
    excerpt:
      "Live punktet mit Nähe, On-Demand mit Skalierung. Hier ist die einfache Methode + Vergleichstabelle, Praxis-Setup und Quick-Start.",
    image: "/webinar-cover.jpg",
  },
} as const;

// ✅ Schlankes Meta-Objekt für die Blogübersicht (/app/blog/page.tsx)

// Table of contents
const toc = [
  { id: "einleitung", label: "Einleitung" },
  { id: "hintergrund", label: "Begriffe & Unterschiede" },
  { id: "methode", label: "Entscheidungsmethode" },
  { id: "ergebnisse", label: "Vergleich auf einen Blick" },
  { id: "diskussion", label: "Praxis: Tools, Setup & KPIs" },
  { id: "fazit", label: "Fazit & Quick-Start" },
];

const h2Classes =
  "scroll-mt-24 mt-10 mb-4 text-2xl md:text-3xl font-bold leading-tight text-neutral-900";

/**
 * Fixed page component
 * - Wraps content into a proper React component with a default export
 * - Keeps TOC + anchors working
 * - Maintains full-bleed hero with gradient overlay
 */
export default function WebinarVsEverWebinarPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* FULL-WIDTH HERO — Ansatz: Full-bleed via negative margins (100vw-Hack) */}
        <Section className="py-0">
          <div className="relative">
            {/* Full-bleed Bild innerhalb von Section durch -mx + 100vw */}
            <div className="-mx-[calc(50vw-50%)]">
              <div className="relative h-[36vh] w-[100vw] md:h-[48vh]">
                <img
                  src="/webinar-cover.jpg"
                  alt="Titelbild: Webinar vs. Ever-Webinar (On-Demand)"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
              </div>
            </div>

            {/* Headline als Teil von Section-Breite, overlay am unteren Rand */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0">
              <Section className="pointer-events-auto text-white py-6 md:py-10">
                <div className="max-w-3xl">
                  <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                    Webinar vs. Ever-Webinar (On-Demand): Was passt besser zu Ihnen?
                  </h1>
                  <p className="mt-3 text-sm opacity-90 md:text-base">
                    Veröffentlicht am{" "}
                    <time dateTime="2025-10-17">17. Oktober 2025</time>
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </Section>

        {/* Inhalt + TOC — Section steuert Breite & Padding */}
        <Section className="py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* TOC */}
            <aside className="md:col-span-1">
              <nav
                className="rounded-xl border bg-white/60 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/50 md:sticky md:top-24"
                aria-label="Inhaltsverzeichnis"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-500">
                  Inhaltsverzeichnis
                </p>
                <ul className="space-y-2 text-sm">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`#${item.id}`}
                        className="inline-block rounded px-1 py-0.5 text-neutral-700 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-neutral-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Artikel */}
            <article className="md:col-span-3">
              <div className="w-full">
                <h2 id="einleitung" className={h2Classes}>
                  Einleitung
                </h2>
                <div className="space-y-4 text-neutral-800 leading-relaxed">
                  <p>
                    Sie wollen Wissen vermitteln, Leads gewinnen oder ein Angebot verkaufen – und fragen Sie sich: <strong>Live-Webinar</strong>{" "}
                    oder <strong>Ever-Webinar (On-Demand)</strong>? In diesem Artikel bekommst Sie eine klare, anfängerfreundliche Entscheidungshilfe mit Beispielen, Checklisten und einem direkten Vergleich.
                  </p>
                  <p>
                    Kurz gesagt: <em>Live</em> punktet mit Nähe und Energie,{" "}
                    <em>On-Demand</em> mit Skalierbarkeit und Tempo. Häufig ist die beste Lösung eine <strong>Kombi-Strategie</strong>: live validieren, anschließend automatisieren.
                  </p>
                </div>

                <h2 id="hintergrund" className={h2Classes}>
                  Begriffe & Unterschiede
                </h2>
                <div className="space-y-4 text-neutral-800 leading-relaxed">
                  <p>
                    Damit wir vom Gleichen sprechen, hier die wichtigsten Definitionen – ohne Marketing-Buzzwords:
                  </p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>
                      <strong>Webinar (Live):</strong> Ein Termin mit festem Datum/Uhrzeit. Sie präsentierst live, beantwortest Fragen im Chat oder per Q&amp;A. Ideal für <em>Vertrauen</em>, <em>Interaktion</em> und <em>höhere Abschlussraten</em> bei Premium-Angeboten.
                    </li>
                    <li>
                      <strong>Ever-Webinar / Webinar on Demand:</strong> Ihre Aufzeichnung läuft „immer“. Interessierte starten sofort oder nach kurzer Wartezeit. Perfekt für <em>skalierbares Lead-Wachstum</em>, <em>24/7-Verfügbarkeit</em> und <em>messbare Funnel-Performance</em>.
                    </li>
                  </ul>
                  <p>
                    Wichtig: „Ever-Webinar“ ist ein gängiger Begriff für dauerhafte On-Demand-Webinare. Technisch spricht man von <em>automatisierten</em> oder <em>zeitversetzten</em> Webinaren.
                  </p>
                </div>

                <h2 id="methode" className={h2Classes}>
                  Entscheidungsmethode
                </h2>
                <div className="space-y-4 text-neutral-800 leading-relaxed">
                  <p>Nutze diese einfache Methode in drei Schritten, um Sie zu entscheiden:</p>
                  <ol className="list-inside list-decimal space-y-3">
                    <li>
                      <strong>Ziel klären:</strong> Willst Sie <em>schnell Reichweite</em> (On-Demand) oder <em>tiefe Beziehung</em> (Live)?
                    </li>
                    <li>
                      <strong>Ticketpreis/Angebot prüfen:</strong> Unter ca. 500–1.000 € funktioniert On-Demand meist sehr gut. Bei hochpreisigen 1:1- oder Gruppen-Programmen überzeugt Live die Unentschlossenen.
                    </li>
                    <li>
                      <strong>Ressourcen checken:</strong> Hast Sie Zeit/Team für regelmäßige Live-Termine? Falls nein: starten Sie On-Demand und ergänze <em>regelmäßige Live Q&amp;As</em> als Vertrauensbooster.
                    </li>
                  </ol>

                  {/* Mini-Entscheidungsbaum */}
                  <div className="mt-6 rounded-xl border bg-neutral-50 p-4">
                    <p className="font-medium">Mini-Entscheidungsbaum</p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700">
                      <li>
                        Sie brauchst planbare Leads &lt; 14 Tagen → <strong>On-Demand</strong>.
                      </li>
                      <li>
                        Sie launcht ein neues, teureres Programm → <strong>Live</strong> (mit Q&amp;A).
                      </li>
                      <li>
                        Sie wollen beides? → <strong>Hybrid</strong>: Live testen → Recording optimieren → als On-Demand skalieren.
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 id="ergebnisse" className={h2Classes}>
                  Vergleich auf einen Blick
                </h2>
                <div className="space-y-4 text-neutral-800 leading-relaxed">
                  <div className="overflow-hidden rounded-xl border">
                    <table className="w-full text-sm md:text-base">
                      <thead className="bg-neutral-50 text-left">
                        <tr>
                          <th className="p-3">Kriterium</th>
                          <th className="p-3">Live-Webinar</th>
                          <th className="p-3">Ever-Webinar (On-Demand)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-3">Aufwand</td>
                          <td className="p-3">Vorbereitung + Termin + Moderation</td>
                          <td className="p-3">Einmalige Produktion, danach Updates</td>
                        </tr>
                        <tr>
                          <td className="p-3">Tempo</td>
                          <td className="p-3">Batchweise, an Terminen</td>
                          <td className="p-3">Sofort abrufbar, 24/7</td>
                        </tr>
                        <tr>
                          <td className="p-3">Conversion</td>
                          <td className="p-3">Höher bei Premium (Vertrauen)</td>
                          <td className="p-3">Sehr gut für Low/Mid-Ticket, skalierbar</td>
                        </tr>
                        <tr>
                          <td className="p-3">Interaktion</td>
                          <td className="p-3">Live-Chat, Q&amp;A, Spontan</td>
                          <td className="p-3">Chat/Kommentare simuliert oder asynchron</td>
                        </tr>
                        <tr>
                          <td className="p-3">Skalierung</td>
                          <td className="p-3">Begrenzt durch Termine</td>
                          <td className="p-3">Sehr hoch (Paid/Organic Traffic)</td>
                        </tr>
                        <tr>
                          <td className="p-3">Daten &amp; Tests</td>
                          <td className="p-3">Feedback qualitativ</td>
                          <td className="p-3">A/B-Tests, Metriken, schnelle Iteration</td>
                        </tr>
                        <tr>
                          <td className="p-3">No-Shows</td>
                          <td className="p-3">Höher (Terminabhängig)</td>
                          <td className="p-3">Gering (Start jederzeit)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="rounded-xl border bg-neutral-50 p-4">
                    <p className="font-medium">Typische Einsatzszenarien</p>
                    <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold">Live-Webinar</p>
                        <ul className="mt-1 list-inside list-disc space-y-1 text-neutral-700">
                          <li>High-Ticket-Coaching, Mentoring, B2B-Services</li>
                          <li>Produkt-Launches, Community-Events</li>
                          <li>Sales-Gespräche im Anschluss gewünscht</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">On-Demand</p>
                        <ul className="mt-1 list-inside list-disc space-y-1 text-neutral-700">
                          <li>Lead-Magnet mit hoher Reichweite</li>
                          <li>Evergreen-Funnel für Kurse/Mid-Ticket</li>
                          <li>Internationales Publikum/verschiedene Zeitzonen</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 id="diskussion" className={h2Classes}>
                  Praxis: Tools, Setup &amp; KPIs
                </h2>
                <div className="space-y-4 text-neutral-800 leading-relaxed">
                  <p>
                    Gute Nachricht: Sie brauchst <em>keinen</em> Overkill-Tech-Stack. Starte schlank und erweitere nach Bedarf.
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border p-4">
                      <p className="font-semibold">Live-Setup (einfach)</p>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-neutral-700">
                        <li>Anmelde-Seite (Landingpage + Formular)</li>
                        <li>E-Mail-Reminder (24h/2h/10min vor Start)</li>
                        <li>Präsentation (Slides + Q&amp;A-Block)</li>
                        <li>Call-to-Action (Link/Calendly/Checkout)</li>
                      </ol>
                    </div>
                    <div className="rounded-xl border p-4">
                      <p className="font-semibold">On-Demand-Setup (einfach)</p>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-neutral-700">
                        <li>Aufzeichnung (30–60 Min, klarer Spannungsbogen)</li>
                        <li>Player-Seite mit Kapitel-Sprungmarken</li>
                        <li>Autom. E-Mail-Sequenz (Nurture + Angebot)</li>
                        <li>Tracking (UTMs, Zielvorhaben, Events)</li>
                      </ol>
                    </div>
                  </div>
                  <div className="rounded-xl border bg-white p-4">
                    <p className="font-semibold">Wichtige KPIs</p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700">
                      <li>
                        <strong>Opt-in-Rate</strong> der Landingpage (Richtwert 25–45%)
                      </li>
                      <li>
                        <strong>View-Through-Rate</strong> bis zum Pitch (Ziel: &gt;40%)
                      </li>
                      <li>
                        <strong>CTA-Clickrate</strong> (2–10% je nach Angebot)
                      </li>
                      <li>
                        <strong>Show-Up-Rate</strong> (Live: 25–40%, On-Demand: &gt;60%)
                      </li>
                      <li>
                        <strong>Cost per Lead</strong> &amp; <strong>ROAS</strong> bei Paid Traffic
                      </li>
                    </ul>
                  </div>
                  <p>
                    Tipp: Zeichne Ihr <em>bestes</em> Live-Webinar auf, schneide es leicht (Hook, klare Kapitel, präziser Pitch) und nutzen Sie es als On-Demand-Version. So verbindest Sie Authentizität mit Skalierung.
                  </p>
                </div>

                <h2 id="fazit" className={h2Classes}>
                  Fazit &amp; Quick-Start
                </h2>
                <div className="space-y-4 text-neutral-800 leading-relaxed">
                  <p>
                    Es gibt kein „entweder oder“. Wenn Sie <em>schnell</em> wachsen willst, beginne mit <strong>On-Demand</strong> und plane regelmäßige <strong>Live-Q&amp;As</strong>. Wenn Sie ein <em>hochpreisiges</em> Angebot verkaufst, starten Sie <strong>Live</strong>, sammle Fragen/Einwände – und baue danach eine <strong>Evergreen-Version</strong>.
                  </p>
                  <div className="rounded-xl border bg-neutral-50 p-4">
                    <p className="font-medium">Checkliste für Ihren Start (heute machbar)</p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700">
                      <li>
                        Hook/Titel formulieren: <em>„In 45 Min. zu [Ergebnis] ohne [Hürde]“</em>
                      </li>
                      <li>Gliederung mit 3–5 Kapiteln + klarer Call-to-Action</li>
                      <li>Landingpage + E-Mail-Sequence anlegen</li>
                      <li>Einmal aufnehmen (ruhige Umgebung, gutes Mikro)</li>
                      <li>Tracking testen, erste Ads/Posts live</li>
                    </ul>
                  </div>
                  <p>
                    Bonus: Nutze Feedback und Daten, um <em>alle 2–4 Wochen</em> kleine Iterationen zu machen (Hook, Beweisführung, CTA). So steigen View-Through-Rate und Sales nachhaltig.
                  </p>
                </div>

                {/* Callout */}
                <div className="mt-10 rounded-xl border bg-neutral-50 p-4 text-sm">
                  <p className="font-medium">Weiterführend</p>
                  <ul className="list-inside list-disc text-neutral-700">
                    <li>
                      <Link href="#methode" className="underline underline-offset-2">
                        Zur Entscheidungsmethode springen
                      </Link>
                    </li>
                    <li>
                      <Link href="#ergebnisse" className="underline underline-offset-2">
                        Zum Vergleich (Tabelle)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </Section>

        {/* Kontakt */}
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
