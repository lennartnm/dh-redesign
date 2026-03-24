// app/blog/das-perfekte-freebie/page.tsx
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/ui/Section";
import ContactCTA from "../../components/ContactCTA";

// ✅ Metadaten – für <head>, Social Sharing usw.
export const metadata = {
  title: "Das perfekte Freebie: Auswahl, Struktur & Aufgabe",
  description:
    "Wie Sie das richtige Freebie auswählst, schlau strukturierst und als Brücke zu deinem Angebot nutzt – mit Quick-Wins statt Überfrachtung.",
  openGraph: {
    images: [
      {
        url: "/freebie-cover.jpg", // nutzt Bild aus /public
        width: 1600,
        height: 900,
        alt: "Cover: Das perfekte Freebie",
      },
    ],
  },
  // frei nutzbares Feld; Ihre Index-Seite kann hier Datum/Excerpt/Bild abholen
  other: {
    date: "2025-10-18",
    excerpt:
      "Das richtige Freebie wählen, intelligent strukturieren und als Brücke zum Angebot nutzen – kompakt und praxisnah.",
    image: "/freebie-cover.jpg",
  },
} as const;

// ✅ Zusätzliches, schlankes Meta-Objekt für die Blog-Übersicht (/app/blog/page.tsx)
export const meta = {
  title: "Das perfekte Freebie: Auswahl, Struktur & Aufgabe",
  date: "2025-10-18", // ISO-Format empfohlen
  image: "/freebie-cover.jpg", // liegt in /public
  excerpt:
    "Das richtige Freebie wählen, intelligent strukturieren und als Brücke zum Angebot nutzen – kompakt und praxisnah.",
} as const;

export default function Page() {
  const h2 =
    "scroll-mt-24 mt-10 mb-4 text-2xl md:text-3xl font-bold leading-tight text-neutral-900";
  const h3 = "mt-6 mb-2 text-xl md:text-2xl font-semibold text-neutral-900";
  const lead = "text-neutral-800 leading-relaxed";

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* HERO */}
        <Section className="py-0">
          <div className="relative">
            <div className="-mx-[calc(50vw-50%)]">
              <div className="relative h-[36vh] w-[100vw] md:h-[48vh]">
                {/* Vorschaubild */}
                {/* Wenn Sie Next/Image willst, kannst Sie das <img> durch <Image> ersetzen */}
                <img
                  src="/freebie-cover.jpg"
                  alt="Titelbild: Freebie Auswahl und Struktur"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0">
              <Section className="pointer-events-auto text-white py-6 md:py-10">
                <div className="max-w-3xl">
                  <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                    Das perfekte Freebie: Auswahl, Struktur & Aufgabe
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

        {/* CONTENT */}
        <Section className="py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* TOC */}
            <aside className="md:col-span-1">
              <nav className="rounded-xl border bg-white/60 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/50 md:sticky md:top-24">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-500">
                  Inhaltsverzeichnis
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    { id: "einleitung", label: "Einleitung" },
                    { id: "aufgabe", label: "Aufgabe eines Freebies" },
                    { id: "auswahl", label: "Die richtige Auswahl" },
                    { id: "struktur", label: "Struktur & Inhalt" },
                    { id: "mindset", label: "Mindset-Shift & Psychologie" },
                    { id: "funnel", label: "Funnel, Follow-up & Offer" },
                    { id: "kpis", label: "KPIs & Optimierung" },
                    { id: "beispiele", label: "Beispiele: Formate & Hooks" },
                    { id: "fazit", label: "Fazit & Checkliste" },
                  ].map((item) => (
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

            {/* ARTICLE */}
            <article className="md:col-span-3">
              <div className="w-full">
                <h2 id="einleitung" className={h2}>Einleitung</h2>
                <div className={`space-y-4 ${lead}`}>
                  <p>
                    Ein <strong>Freebie</strong> ist ein kleines, kostenloses Hilfsmittel: zum Beispiel eine Checkliste, ein kurzer Leitfaden, eine Vorlage, ein Mini-Video oder ein Tool. Es soll Ihren Wunschkund:innen <em>schnell</em> helfen und ihnen zeigen, wie Sie arbeitest. Dadurch lernen sie Sie kennen und vertrauen Ihnen leichter.
                  </p>
                  <p>
                    Wichtig: Ein Freebie ist <em>kein</em> dickes E-Book und auch kein versteckter Werbeflyer. Es ist eine <strong>Abkürzung</strong> zu einem kleinen Erfolg. Wenn Menschen diesen Erfolg erleben, verstehen sie, warum Ihr eigentliches Angebot (Kurs, Dienstleistung, Produkt) der nächste sinnvolle Schritt ist.
                  </p>
                  <p>
                    In diesem Artikel erklären wir <strong>einfach und ausführlich</strong>: Was ein Freebie ist, welche Aufgaben es hat, wie Sie das richtige Thema findest, wie Sie es aufbaust, wie Sie es per E-Mail begleitetes und welche einfachen Zahlen (KPIs) Sie im Blick behältst. Dazu kommen viele <strong>Beispiele</strong> für Formate und Hooks.
                  </p>
                </div>

                <h2 id="aufgabe" className={h2}>Aufgabe eines Freebies</h2>
                <div className={`space-y-4 ${lead}`}>
                  <p>Ein gutes Freebie erfüllt drei Aufgaben. Stell Ihnen das wie eine kleine Reise vor:</p>
                  <ol className="list-inside list-decimal space-y-2">
                    <li>
                      <strong>Start: Ein aktuelles Problem lösen.</strong><br />
                      Menschen laden Ihr Freebie herunter, wenn es <em>jetzt</em> hilft. Beispiel: „Vorlage für die erste Instagram-Woche“, „Checkliste für die erste Yogastunde zu Hause“, „10 Fragen für Ihr Bau-Erstgespräch“.
                    </li>
                    <li>
                      <strong>Weg: Schnell zum Ergebnis führen.</strong><br />
                      Niemand möchte stundenlang lesen. Ziele auf <strong>10–60 Minuten</strong>. Am Ende soll etwas <em>fertig</em> sein: eine Liste, ein Text, ein Plan, eine Entscheidung.
                    </li>
                    <li>
                      <strong>Ziel: Den nächsten Schritt zeigen.</strong><br />
                      Wer gemerkt hat „Das funktioniert!“, ist offen für mehr. Sag freundlich, wie es weitergeht – z. B. ein Gespräch, ein Starter-Kurs, eine Vorlage-Sammlung oder ein Service-Paket.
                    </li>
                  </ol>
                  <div className="p-4 bg-amber-50 border rounded">
                    <p className="font-medium">Merke:</p>
                    <p>Weniger Theorie, mehr <strong>machen</strong>. Ein kleines, sichtbares Ergebnis schlägt 30 Seiten Text.</p>
                  </div>
                </div>

                <h2 id="auswahl" className={h2}>Die richtige Auswahl</h2>
                <div className={`space-y-4 ${lead}`}>
                  <p>So findest Sie ein gutes Thema – ganz ohne Marketing-Jargon:</p>
                  <ol className="list-inside list-decimal space-y-2">
                    <li><strong>Was nervt Ihre Zielgruppe heute?</strong> (zu wenig Ideen, keine Struktur, Angst vor Fehlern, zu viel Auswahl)</li>
                    <li><strong>Was löst Sie in &lt; 60 Min.?</strong> (erste Schritte, Entscheidungshilfe, fertige Vorlage)</li>
                    <li><strong>Was passt danach zu deinem Angebot?</strong> (Ihr Kurs, Ihr Beratungsgespräch, Ihr Produkt)</li>
                  </ol>
                  <h3 className={h3}>Beispiele nach Branche</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Fotografie:</strong> „Shooting-Plan für Mitarbeiterfotos in 30 Min.“ + Checkliste für Outfit & Location → Angebot: Firmen-Shooting.</li>
                    <li><strong>Yoga/Wellness:</strong> „5-Tage-Mini-Routine (täglich 10 Min.)“ → Angebot: Einsteigerkurs.</li>
                    <li><strong>Handwerk/Bauen:</strong> „Erstgespräch-Leitfaden: 12 Fragen an Ihren Installateur“ → Angebot: Vor-Ort-Beratung.</li>
                    <li><strong>Marketing:</strong> „3 Post-Vorlagen für diese Woche“ → Angebot: Content-Betreuung.</li>
                    <li><strong>Kräuter/Ernährung:</strong> „7 einfache Kräuter in Ihrer Küche“ inkl. Einkaufszettel → Angebot: Workshop/Ausbildung.</li>
                  </ul>
                  <h3 className={h3}>Do’s & Don’ts</h3>
                  <ul className="list-inside list-disc space-y-1">
                    <li><strong>Do:</strong> Ein Problem, ein Ergebnis, klare Schritte.</li>
                    <li><strong>Do:</strong> Viele Beispiele und Platz zum Ausfüllen.</li>
                    <li><strong>Don’t:</strong> Enzyklopädie schreiben. Niemand liest das zu Ende.</li>
                    <li><strong>Don’t:</strong> Nur verkaufen. Erst helfen, dann einladen.</li>
                  </ul>
                </div>

                <h2 id="struktur" className={h2}>Struktur & Inhalt</h2>
                <div className={`space-y-4 ${lead}`}>
                  <p>Folge dieser einfachen Reihenfolge. Sie passt für PDF, Notion-Template oder Video:</p>
                  <ol className="list-inside list-decimal space-y-2">
                    <li><strong>Versprechen in 1 Satz:</strong> „In 30 Min. hast Sie X.“</li>
                    <li><strong>Kurz erklären:</strong> Warum diese Schritte helfen (60 Sekunden).</li>
                    <li><strong>3–5 klare Schritte:</strong> Mit Checkboxen und Beispielen.</li>
                    <li><strong>Ergebnis prüfen:</strong> Vorher/Nachher-Feld, kleiner Score, Foto.</li>
                    <li><strong>Tipps:</strong> 3 typische Fehler + 3 Abkürzungen.</li>
                    <li><strong>Brücke zum Angebot:</strong> „Wenn das gut tat, hilft Ihnen mein Angebot bei Y.“</li>
                    <li><strong>CTA:</strong> Ein Button/Link. Nur <em>ein</em> nächster Schritt.</li>
                  </ol>
                  <h3 className={h3}>Mini-Beispiel (Checkliste)</h3>
                  <p>
                    <strong>Versprechen:</strong> „In 20 Min. hast Sie 3 Instagram-Posts fertig.“<br/>
                    <strong>Schritte:</strong> 1) Thema wählen (Liste mit 10 Ideen), 2) Vorlage kopieren, 3) Text einsetzen, 4) Bild wählen, 5) Termin planen.<br/>
                    <strong>Ergebnis prüfen:</strong> Screenshot Ihrer 3 geplanten Posts.<br/>
                    <strong>Brücke:</strong> „Willst Sie 4 Wochen Content in 90 Min.? Hier ist mein Starter-Paket.“
                  </p>
                </div>

                <h2 id="mindset" className={h2}>Mindset-Shift & Psychologie</h2>
                <div className={`space-y-4 ${lead}`}>
                  <p>Ein Freebie soll sich gut anfühlen und Mut machen. So erreichst Sie das:</p>
                  <ul className="list-inside list-disc space-y-2">
                    <li><strong>Zeig: Es ist machbar.</strong> Kleine Aufgaben, die wirklich jeder schafft.</li>
                    <li><strong>Gib Beweise:</strong> Mini-Erfolgsgeschichte oder Screenshot.</li>
                    <li><strong>Bitte um Mini-Commitment:</strong> „Heute 15 Min. investieren.“</li>
                    <li><strong>Lob & Bestärkung:</strong> „Super, Schritt 1 ist geschafft!“</li>
                  </ul>
                </div>

                <h2 id="funnel" className={h2}>Funnel, Follow-up & Offer</h2>
                <div className={`space-y-4 ${lead}`}>
                  <p>Nach dem Download begleitest Sie per E-Mail. Ganz unkompliziert:</p>
                  <ol className="list-inside list-decimal space-y-2">
                    <li><strong>Mail 1 – Lieferung:</strong> Link + 3 Schritte starten. (Betreff: „Ihr Freebie ist da – los geht’s in 3 Schritten“)</li>
                    <li><strong>Mail 2 – Motivation:</strong> 1 Tipp + kleines Beispiel. (Betreff: „Noch 10 Min. bis zum Ergebnis“)</li>
                    <li><strong>Mail 3 – Einordnung:</strong> Häufiger Fehler & einfache Lösung. (Betreff: „Das übersehen viele…“)</li>
                    <li><strong>Mail 4 – Ausblick:</strong> Wie es in 30 Tagen aussehen kann. (Betreff: „Stell Ihnen vor: In 4 Wochen…“)</li>
                    <li><strong>Mail 5 – Angebot:</strong> Freundliche Einladung + klarer CTA. (Betreff: „Passt gut zu dir: [Angebot]“)</li>
                  </ol>
                  <p>
                    Tipp: Verwende überall die gleiche Sprache wie im Freebie. So fühlt sich alles aus einem Guss an.
                  </p>
                </div>

                <h2 id="kpis" className={h2}>KPIs & Optimierung</h2>
                <div className={`space-y-4 ${lead}`}>
                  <p>Sie brauchst keine tiefen Zahlenkenntnisse. Reicht, wenn Sie folgende Werte grob prüfst:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Opt-in-Rate (Landingpage):</strong> Wie viele tragen sich ein? <em>25–45 %</em> ist gut. Darunter? Überschrift besser machen, weniger Formularfelder.</li>
                    <li><strong>Öffnungen Mail 1:</strong> Wie viele öffnen die Mail mit dem Freebie? <em>55–75 %</em> sind normal. Teste Absendername & Betreff.</li>
                    <li><strong>Aktivierung:</strong> Nutzen die Leute das Freebie? Wenn wenige: 1-Minuten-Anleitung oder GIF einbauen.</li>
                    <li><strong>Klick zum Angebot:</strong> Klicken nach der Nutzung einige zum Angebot? Wenn nicht: Brücke einfacher formulieren.</li>
                  </ul>
                  <div className="p-4 bg-white rounded border">
                    <p className="font-medium">Mini-Plan (2 Wochen):</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>3 neue Headlines testen.</li>
                      <li>2 Betreffzeilen für Mail 1 testen.</li>
                      <li>CTA klarer machen („Jetzt 20-Min-Call buchen“).</li>
                    </ol>
                  </div>
                </div>

                <h2 id="beispiele" className={h2}>Beispiele: Formate & Hooks</h2>
                <div className={`space-y-4 ${lead}`}>
                  <h3 className={h3}>Einfache Freebie-Formate (mit Zweck)</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Checkliste</strong> – perfekt für „Bin ich bereit? Habe ich alles?“</li>
                    <li><strong>Mini-Workbook</strong> – kleine Aufgaben zum Ausfüllen.</li>
                    <li><strong>Vorlagen/Prompts</strong> – sofort kopieren und nutzen.</li>
                    <li><strong>5-Tage-Mini-Kurs</strong> – jeden Tag 10–15 Min. Fortschritt.</li>
                    <li><strong>Kurzes Video</strong> – Bildschirmaufnahme mit Schritt-für-Schritt.</li>
                    <li><strong>Planer/Template</strong> – z. B. Content-Kalender, Budgetplan, Wochenplan.</li>
                  </ul>
                  <h3 className={h3}>Hook-Ideen (Überschriften zum Anbeißen)</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>„In 30 Minuten hast Sie <em>[Ergebnis]</em> – ohne <em>[Hürde]</em>.“</li>
                    <li>„3 Vorlagen, die Ihnen heute noch Zeit sparen.“</li>
                    <li>„Die 7 Sätze, mit denen Kund:innen schneller Ja sagen.“</li>
                    <li>„Audit-Check: 12 Punkte, die 80 % Ihrer <em>[Problemklasse]</em> lösen.“</li>
                  </ul>
                  <h3 className={h3}>Kurz-Fall (realistisch)</h3>
                  <p><strong>Vorher:</strong> 18 % Opt-in. <strong>Nachher:</strong> 37 % nach neuer Headline, 2 Feldern statt 4 und einer 1-Minuten-Anleitung (GIF).</p>
                </div>

                <h2 id="fazit" className={h2}>Fazit & Checkliste</h2>
                <div className={`space-y-4 ${lead}`}>
                  <p>
                    Ein gutes Freebie ist <strong>klein, praktisch und schnell</strong>. Es hilft sofort und zeigt klar, wie es weitergeht. So entsteht Vertrauen – und Lust auf Ihr Angebot.
                  </p>
                  <h3 className={h3}>Schnell-Check vor dem Veröffentlichen</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Trifft das Thema einen akuten Bedarf?</li>
                    <li>Schaffen Nutzer:innen in &lt; 60 Min. ein sichtbares Ergebnis?</li>
                    <li>Gibt es 3–5 klare Schritte mit Checkboxen?</li>
                    <li>Ist eine kurze Anleitung/Beispiel enthalten?</li>
                    <li>Führt ein <em>einziger</em> CTA freundlich zum nächsten Schritt?</li>
                  </ul>
                  <p>
                    Willst Sie Ihr Freebie mit mir zusammen bauen (Thema, Aufbau, E-Mails)?{" "}
                    <Link href="#kontakt" className="underline underline-offset-2">
                      Melde Sie kurz
                    </Link>{" "}
                    – ich gebe Ihnen ehrliches, einfaches Feedback.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </Section>

        {/* Kontakt-CTA als eigene Client-Komponente (Modal & Button) */}
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
