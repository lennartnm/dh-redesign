// app/blog/webseite-vs-landingpage/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/ui/Section";
import ContactCTA from "../../components/ContactCTA";
// Falls vorhanden: gemeinsames Modal-Portal wie auf der funktionierenden Seite
// Passe den Pfad ggf. an Ihr Projekt an

/**
 * Metadaten für Social/OG und die Blog-Übersicht.
 * Ihre Blog-Liste liest (mod as any).meta || (mod as any).metadata,
 * daher exportieren wir beides.
 */
export const metadata: Metadata = {
  title: "Webseite vs. Landingpage: Was brauchst Sie wirklich?",
  description:
    "Einfache Entscheidungshilfe: Begriffe, Unterschiede, Methode, Vergleichstabelle, Praxis-Setup, SEO & Tracking – inkl. Quick-Start-Checkliste.",
  openGraph: {
    images: [
      {
        url: "/webseite-cover.jpg",
        width: 1600,
        height: 900,
        alt: "Cover: Webseite vs. Landingpage",
      },
    ],
  },
  other: {
    date: "2025-10-18",
    excerpt:
      "Webseite für Vertrauen & SEO, Landingpage für direkte Conversions. Methode, Vergleich, Praxis-Setup & Quick-Start.",
    image: "/webseite-cover.jpg",
  },
};

// Schlankes Meta-Objekt für die Blog-Übersicht

const toc = [
  { id: "einleitung", label: "Einleitung" },
  { id: "begriffe", label: "Begriffe & Unterschiede" },
  { id: "methode", label: "Entscheidungsmethode" },
  { id: "vergleich", label: "Vergleich auf einen Blick" },
  { id: "praxis", label: "Praxis: Struktur, SEO & Tracking" },
  { id: "fazit", label: "Fazit & Quick-Start" },
] as const;

const h2 =
  "scroll-mt-24 mt-10 mb-4 text-2xl md:text-3xl font-bold leading-tight text-neutral-900";

export default function Page() {
  return (
    <>
      {/* (Optional) zentrales Modal-Portal — entfernt, falls nicht vorhanden */}

      {/* Skip-Link für bessere Accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Zum Inhalt springen
      </a>

      <Header />

      <main id="content" className="min-h-screen scroll-smooth">
        {/* FULL-WIDTH HERO */}
        <Section className="py-0">
          <div className="relative">
            <div className="-mx-[calc(50vw-50%)]">
              <div className="relative h-[36vh] w-[100vw] md:h-[48vh]">
                {/* Next/Image für bessere Performance, responsive & LCP */}
                <Image
                  src="/webseite-cover.jpg"
                  alt="Titelbild: Webseite vs. Landingpage"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0">
              <Section className="pointer-events-auto py-6 text-white md:py-10">
                <div className="max-w-3xl">
                  <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                    Webseite vs. Landingpage: Was brauchst Sie wirklich?
                  </h1>
                  <p className="mt-3 text-sm opacity-90 md:text-base">
                    Veröffentlicht am{" "}
                    <time dateTime="2025-10-18">18. Oktober 2025</time>
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </Section>

        {/* Inhalt + TOC */}
        <Section className="py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* TOC */}
            <aside className="md:col-span-1">
              <nav
                aria-label="Inhaltsverzeichnis"
                className="rounded-xl border bg-white/60 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/50 md:sticky md:top-24"
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
                <h2 id="einleitung" className={h2}>
                  Einleitung
                </h2>
                <div className="space-y-4 leading-relaxed text-neutral-800">
                  <p>
                    Brauchst Sie eine komplette <strong>Webseite</strong> oder reicht
                    eine fokussierte <strong>Landingpage</strong>? Die Antwort hängt davon ab,{" "}
                    <em>was</em> Sie erreichen willst, <em>wie</em> Sie Traffic erzeugst und{" "}
                    <em>wieviel</em> Zeit/Budget Sie für Aufbau und Pflege hast. Dieser
                    Guide führt Sie anfängerfreundlich durch Definitionen,
                    Unterschiede, Entscheidungskriterien, Beispiele und Checklisten.
                  </p>
                  <p>
                    Kurzfassung: Eine <em>Webseite</em> ist Ihr digitales Zuhause mit
                    mehreren Unterseiten und Navigationsstruktur. Eine{" "}
                    <em>Landingpage</em> ist eine einzelne, zielgerichtete Seite für{" "}
                    <strong>eine einzige Aktion</strong> (z. B. Anfrage, Kauf,
                    Webinar-Anmeldung). Häufig funktioniert eine{" "}
                    <strong>Hybrid-Strategie</strong>: schlanke Website als Fundament +
                    konvertierende Landingpages für Kampagnen.
                  </p>
                </div>

                <h2 id="begriffe" className={h2}>
                  Begriffe & Unterschiede
                </h2>
                <div className="space-y-4 leading-relaxed text-neutral-800">
                  <ul className="list-inside list-disc space-y-2">
                    <li>
                      <strong>Webseite:</strong> Mehrere Seiten (Start, Angebot, Über
                      uns, Kontakt, Blog, Rechtliches). Ziel:{" "}
                      <em>Marke erklären</em>, <em>Vertrauen aufbauen</em>,{" "}
                      <em>SEO-Sichtbarkeit</em>.
                    </li>
                    <li>
                      <strong>Landingpage:</strong> Eine Seite ohne Ablenkung. Ziel:{" "}
                      <em>eine Conversion</em> (Lead, Kauf, Termin). Ideal für Ads,
                      Newsletter, Social Kampagnen.
                    </li>
                  </ul>
                  <p>
                    Merksatz: <em>Webseiten informieren breit – Landingpages konvertieren spitz.</em>
                  </p>
                </div>

                <h2 id="methode" className={h2}>
                  Entscheidungsmethode
                </h2>
                <div className="space-y-4 leading-relaxed text-neutral-800">
                  <p>Triff Ihre Wahl in drei Schritten:</p>
                  <ol className="list-inside list-decimal space-y-3">
                    <li>
                      <strong>Ziel definieren:</strong> Möchten Sie{" "}
                      <em>auffindbar sein</em> (SEO/Brand) → Website. Möchten Sie{" "}
                      <em>sofort Conversions</em> aus Traffic (Ads/Newsletter) →
                      Landingpage.
                    </li>
                    <li>
                      <strong>Angebots-Komplexität prüfen:</strong> Mehrere
                      Leistungen/Personas? → Website mit klaren Pfaden. Ein klares
                      Angebot? → Landingpage first.
                    </li>
                    <li>
                      <strong>Ressourcen checken:</strong> Keine Zeit für viele
                      Inhalte? Starte mit einer <em>1-Pager-Website</em> +{" "}
                      <em>1 Landingpage</em> für die Top-Conversion.
                    </li>
                  </ol>

                  <div className="mt-6 rounded-xl border bg-neutral-50 p-4">
                    <p className="font-medium">Mini-Entscheidungsbaum</p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700">
                      <li>
                        Sie schaltest Ads auf <em>ein</em> Angebot →{" "}
                        <strong>Landingpage</strong>.
                      </li>
                      <li>
                        Sie brauchst Reputation, Google-Sichtbarkeit & Vertrauen →{" "}
                        <strong>Webseite</strong>.
                      </li>
                      <li>
                        Sie willst beides? → <strong>Hybrid</strong>: schlanke Website +
                        dedizierte Landingpages pro Angebot/Kampagne.
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 id="vergleich" className={h2}>
                  Vergleich auf einen Blick
                </h2>
                <div className="space-y-4 leading-relaxed text-neutral-800">
                  <div className="overflow-hidden rounded-xl border">
                    <table className="w-full text-sm md:text-base">
                      <thead className="bg-neutral-50 text-left">
                        <tr>
                          <th className="p-3">Kriterium</th>
                          <th className="p-3">Webseite</th>
                          <th className="p-3">Landingpage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-3">Ziel</td>
                          <td className="p-3">Marke, Information, SEO, Vertrauen</td>
                          <td className="p-3">Eine Conversion (Lead/Kauf/Termin)</td>
                        </tr>
                        <tr>
                          <td className="p-3">Struktur</td>
                          <td className="p-3">Mehrere Seiten, Navigation</td>
                          <td className="p-3">Single Page, keine Ablenkung</td>
                        </tr>
                        <tr>
                          <td className="p-3">Aufwand</td>
                          <td className="p-3">Höher (Texte, Bilder, Recht, Blog)</td>
                          <td className="p-3">Geringer (ein klarer Flow)</td>
                        </tr>
                        <tr>
                          <td className="p-3">SEO</td>
                          <td className="p-3">Stark (Themen-Cluster, Blog)</td>
                          <td className="p-3">Begrenzt (Rankt selten breit)</td>
                        </tr>
                        <tr>
                          <td className="p-3">Conversion</td>
                          <td className="p-3">Gut, aber verstreut über Pfade</td>
                          <td className="p-3">Sehr hoch bei Ziel-Traffic</td>
                        </tr>
                        <tr>
                          <td className="p-3">Kampagnen-Fit</td>
                          <td className="p-3">Startpunkt, Infos, Vertrauen</td>
                          <td className="p-3">Perfekt für Ads/Newsletter</td>
                        </tr>
                        <tr>
                          <td className="p-3">Skalierung</td>
                          <td className="p-3">Wächst mit Content/SEO</td>
                          <td className="p-3">Wächst mit Traffic-Budget</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="rounded-xl border bg-neutral-50 p-4">
                    <p className="font-medium">Typische Einsatzszenarien</p>
                    <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold">Webseite</p>
                        <ul className="mt-1 list-inside list-disc space-y-1 text-neutral-700">
                          <li>Beratung/Agentur mit mehreren Leistungen</li>
                          <li>Lokale Unternehmen (Vertrauen, Google My Business)</li>
                          <li>Personal Brand + Content/Blog/Referenzen</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Landingpage</p>
                        <ul className="mt-1 list-inside list-disc space-y-1 text-neutral-700">
                          <li>Ein Kurs/Produkt/Lead-Magnet</li>
                          <li>Event/Workshop/Webinar-Anmeldung</li>
                          <li>Gezielte Ads auf ein Angebot</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 id="praxis" className={h2}>
                  Praxis: Struktur, SEO & Tracking
                </h2>
                <div className="space-y-4 leading-relaxed text-neutral-800">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border p-4">
                      <p className="font-semibold">Mindest-Struktur Webseite</p>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-neutral-700">
                        <li>Startseite (Nutzen, Positionierung, Social Proof)</li>
                        <li>Leistungen/Angebot (klar pro Persona)</li>
                        <li>Über mich/Team (Vertrauen, Werte)</li>
                        <li>Kontakt/Termin (einfache Anfrage)</li>
                        <li>Rechtliches (Impressum, Datenschutz)</li>
                        <li>Optional: Blog/Case Studies/FAQ</li>
                      </ol>
                    </div>
                    <div className="rounded-xl border p-4">
                      <p className="font-semibold">Mindest-Struktur Landingpage</p>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-neutral-700">
                        <li>Hook/Headline + Subline (Problemlösung klar)</li>
                        <li>Beweis (Trust-Badges, Zahlen, Logos, Zitate)</li>
                        <li>Nutzen-Abschnitte (3–5 Kernvorteile)</li>
                        <li>Offer-Breakdown (Was bekomme ich, für wen, Preis/Bonus)</li>
                        <li>CTA-Blöcke mehrfach (überall sichtbar)</li>
                        <li>FAQ + Einwände</li>
                      </ol>
                    </div>
                  </div>

                  <div className="rounded-xl border bg-white p-4">
                    <p className="font-semibold">SEO-Hinweise</p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700">
                      <li>
                        <strong>Website:</strong> Themen-Cluster, interne Verlinkung,
                        FAQ-Schema, PageSpeed.
                      </li>
                      <li>
                        <strong>Landingpage:</strong> Fokus-Keyword + passende Ad-Copy,
                        wenig Ablenkung, schnelle Ladezeit.
                      </li>
                      <li>
                        <strong>Technik:</strong> Title/Meta/OG-Tags, saubere
                        H-Struktur, Bild-Komprimierung.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border bg-white p-4">
                    <p className="font-semibold">Tracking & KPIs</p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700">
                      <li>
                        <strong>Website:</strong> Organischer Traffic, Top-Seiten,
                        Verweildauer, Kontakt-Anfragen.
                      </li>
                      <li>
                        <strong>Landingpage:</strong> Conversion-Rate (Ziel: 3–10%+ je
                        nach Angebot), CPL/CPA, Scroll-Tiefe.
                      </li>
                      <li>
                        <strong>Setups:</strong> UTMs, Events (CTA-Klicks/Form Submit),
                        A/B-Tests für Headline/CTA.
                      </li>
                    </ul>
                  </div>

                  <p>
                    Tipp: Starte klein, aber <em>messbar</em>. Eine solide
                    1-Pager-Website + 1 performante Landingpage schlägt oft die
                    „perfekte“ Website, die nie fertig wird.
                  </p>
                </div>

                <h2 id="fazit" className={h2}>
                  Fazit & Quick-Start
                </h2>
                <div className="space-y-4 leading-relaxed text-neutral-800">
                  <p>
                    Sie brauchst nicht „alles“. Baue, was Ihr Ziel stützt: Für{" "}
                    <em>Vertrauen & Auffindbarkeit</em> die <strong>Webseite</strong>;
                    für <em>direkte Ergebnisse</em> die <strong>Landingpage</strong>. Die
                    beste Praxis ist meist eine <strong>Kombination</strong>.
                  </p>
                  <div className="rounded-xl border bg-neutral-50 p-4">
                    <p className="font-medium">Checkliste (heute starten)</p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700">
                      <li>Value-Prop in 1–2 Sätzen formulieren</li>
                      <li>Website-1-Pager mit den 5 Pflichtsektionen</li>
                      <li>Landingpage für Ihr stärkstes Angebot</li>
                      <li>1 Tracking-Ziel pro Seite definieren und testen</li>
                      <li>In 2-Wochen-Sprints Headlines/CTAs testen</li>
                    </ul>
                  </div>
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
                      <Link href="#vergleich" className="underline underline-offset-2">
                        Zum Vergleich (Tabelle)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </Section>

        {/* KONTAKT-SECTION (gleiches Verhalten wie auf Ihren anderen Seiten) */}
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
