// app/cookies/page.tsx
import type { Metadata } from "next";
import LegalLayout from "@/app/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie‑Richtlinie (EU) | Digitalisierungshilfe GmbH",
  description:
    "Cookie‑Richtlinie (EU) der Digitalisierungshilfe GmbH – Infos zu verwendeten Cookies, Kategorien, Einwilligungen, Verwaltung und Rechten.",
  alternates: { canonical: "https://www.digitalisierungshilfe.at/cookies" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cookie‑Richtlinie (EU) | Digitalisierungshilfe GmbH",
    description:
      "Übersicht über technische, analytische und Marketing‑Cookies, Einwilligungsverwaltung und Rechte der Nutzer.",
    url: "https://www.digitalisierungshilfe.at/cookies",
    siteName: "Digitalisierungshilfe",
    type: "website",
  },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie-Richtlinie">
      <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Cookie‑Richtlinie (EU)</h1>

          <article
            className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <meta itemProp="name" content="Cookie‑Richtlinie – Digitalisierungshilfe GmbH" />

            <p className="text-gray-600 leading-relaxed">
              Diese Cookie‑Richtlinie wurde zuletzt am <strong>4. Juni 2025</strong> aktualisiert und gilt für Bürger
              und Einwohner mit ständigem Wohnsitz im Europäischen Wirtschaftsraum und der Schweiz.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Unsere Website, <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="https://digitalisierungshilfe.at">https://digitalisierungshilfe.at</a> (im Folgenden: „Website“)
              verwendet Cookies und ähnliche Technologien (der Einfachheit halber zusammen „Cookies“). Cookies
              werden außerdem von beauftragten Drittparteien platziert. Nachfolgend informieren wir Sie über die
              Verwendung von Cookies auf unserer Website.
            </p>
          </article>

          {/* Inhaltsverzeichnis */}
          <nav aria-label="Inhaltsverzeichnis" className="mt-10">
            <div className="rounded-2xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Inhaltsverzeichnis</h2>
              <ol className="space-y-2 list-decimal pl-6">
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#einfuehrung">Einführung</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#was-sind-cookies">Was sind Cookies?</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#skripte">Was sind Skripte?</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#web-beacons">Was ist ein Web‑Beacon?</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#cookie-kategorien">Cookie‑Kategorien</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#platzierte-cookies">Platzierte Cookies (Dienste)</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#einwilligung">Einwilligung & Verwaltung</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#aktivierung">Aktivierung/Deaktivierung & Löschen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#rechte">Deine Rechte</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#kontakt">Kontaktdaten</a></li>
              </ol>
            </div>
          </nav>

          <div className="mt-10 space-y-10">
            {/* 1. Einführung */}
            <section id="einfuehrung">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">1. Einführung</h2>
              <p>
                Wir nutzen Cookies, um unsere Website funktionsfähig zu halten, Nutzungen zu analysieren und ggf.
                Marketingmaßnahmen zu unterstützen.
              </p>
            </section>

            {/* 2. Was sind Cookies? */}
            <section id="was-sind-cookies">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">2. Was sind Cookies?</h2>
              <p>
                Ein Cookie ist eine kleine Textdatei, die mit Seiten einer Website versendet und vom Browser auf
                deinem Gerät gespeichert wird. Informationen daraus können bei späteren Besuchen an unsere Server
                oder die Server relevanter Drittanbieter zurückgesendet werden.
              </p>
            </section>

            {/* 3. Skripte */}
            <section id="skripte">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">3. Was sind Skripte?</h2>
              <p>
                Skripte sind Programmcode, der Funktionalität und Interaktivität ermöglicht. Er läuft auf unseren
                Servern oder auf deinem Gerät.
              </p>
            </section>

            {/* 4. Web‑Beacon */}
            <section id="web-beacons">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">4. Was ist ein Web‑Beacon?</h2>
              <p>
                Ein Web‑Beacon (Pixel‑Tag) ist ein kleines, meist unsichtbares Bildelement bzw. Textfragment, das zur
                Analyse von Website‑Traffic verwendet wird.
              </p>
            </section>

            {/* 5. Cookie‑Kategorien */}
            <section id="cookie-kategorien">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">5. Cookie‑Kategorien</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">5.1 Technische bzw. funktionelle Cookies</h3>
                  <p>
                    Gewährleisten grundlegende Funktionen und speichern u. a. Einstellungen. Diese Cookies können
                    ohne Einwilligung gesetzt werden.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">5.2 Analytische Cookies</h3>
                  <p>
                    Dienen der Optimierung des Nutzungserlebnisses. Wir bitten um deine Einwilligung, bevor wir
                    analytische Cookies setzen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">5.3 Werbe‑Cookies</h3>
                  <p>
                    Erlauben Einblicke in Kampagnenergebnisse. Besucher werden mit einer eindeutigen ID verknüpft;
                    es werden jedoch keine personenbezogenen Profile zur Ausspielung personalisierter Anzeigen
                    erstellt.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">5.4 Marketing‑/Tracking‑Cookies</h3>
                  <p>
                    Werden genutzt, um Nutzerprofile zu erstellen, Werbung anzuzeigen oder Nutzer über Websites
                    hinweg zu verfolgen. Diese Cookies setzen wir nur mit deiner Einwilligung.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Platzierte Cookies */}
            <section id="platzierte-cookies">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">6. Platzierte Cookies (Dienste)</h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Dienst</th>
                      <th className="px-4 py-3 font-semibold">Kategorie</th>
                      <th className="px-4 py-3 font-semibold">Zweck/Hinweis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-3">Elementor</td>
                      <td className="px-4 py-3">Statistik (anonym)</td>
                      <td className="px-4 py-3">Seitenaufbau/Design; anonyme Statistiken.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">WordPress</td>
                      <td className="px-4 py-3">Funktional</td>
                      <td className="px-4 py-3">Basisfunktionen und Benutzereinstellungen.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Google AdSense</td>
                      <td className="px-4 py-3">Marketing/Werbung</td>
                      <td className="px-4 py-3">Anzeigenbereitstellung, Messung von Kampagnen.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Complianz</td>
                      <td className="px-4 py-3">Funktional</td>
                      <td className="px-4 py-3">Consent‑Management (Cookie‑Banner & Präferenzen).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Sonstiges</td>
                      <td className="px-4 py-3">Gegenstand der Untersuchung</td>
                      <td className="px-4 py-3">Je nach Projekt; Details können variieren.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. Einwilligung & Verwaltung */}
            <section id="einwilligung">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">7. Einwilligung & Verwaltung</h2>
              <p className="mb-4">
                Beim ersten Besuch zeigen wir ein Pop‑Up mit einer Erklärung über Cookies. Mit Klick auf
                „Einstellungen speichern“ willigen Sie in die gewählten Kategorien ein. Sie können die Verwendung von
                Cookies über deinen Browser deaktivieren; dann kann die Website ggf. nicht vollumfänglich funktionieren.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <button
                  type="button"
                  className="cmplz-manage-consent rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
                >
                  Einwilligung verwalten
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
                  data-cc="show-preferencesModal"
                >
                  Präferenzen öffnen
                </button>
                <a
                  href="#cookie-kategorien"
                  className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 text-center"
                >
                  Kategorien ansehen
                </a>
                <a
                  href="/datenschutz"
                  className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 text-center"
                >
                  Zur Datenschutzerklärung
                </a>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-gray-200 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Funktional</div>
                  <div className="font-medium">Immer aktiv</div>
                </div>
                <div className="rounded-2xl border border-gray-200 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Statistiken</div>
                  <div className="font-medium">Opt‑in erforderlich</div>
                </div>
                <div className="rounded-2xl border border-gray-200 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Marketing</div>
                  <div className="font-medium">Opt‑in erforderlich</div>
                </div>
              </div>
            </section>

            {/* 8. Aktivierung/Deaktivierung */}
            <section id="aktivierung">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">8. Aktivierung/Deaktivierung & Löschen von Cookies</h2>
              <p className="mb-4">
                Sie können Cookies in Ihrem Browser automatisch oder manuell löschen, einzelne Cookies blockieren
                oder sich bei jeder Platzierung benachrichtigen lassen. Details findest du in der Hilfe deines Browsers.
              </p>
              <p>
                Hinweis: Bei Deaktivierung aller Cookies funktioniert die Website ggf. nicht korrekt. Nach Löschen
                von Cookies können diese bei erneutem Besuch wieder gesetzt werden.
              </p>
            </section>

            {/* 9. Rechte */}
            <section id="rechte">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">9. Deine Rechte in Bezug auf personenbezogene Daten</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recht auf Information über Zwecke, Verarbeitung und Speicherdauer</li>
                <li>Auskunftsrecht über gespeicherte personenbezogene Daten</li>
                <li>Recht auf Berichtigung, Ergänzung, Löschung oder Sperrung</li>
                <li>Recht auf Widerruf erteilter Einwilligungen</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht gegen die Verarbeitung</li>
              </ul>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte kontaktiere uns bitte über die unten angegebenen Kontaktdaten. Sie haben zudem
                das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
              </p>
            </section>

            {/* 10. Kontakt */}
            <section id="kontakt">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">10. Kontaktdaten</h2>
              <article
                className="rounded-2xl border border-gray-200 p-6 md:p-8"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <meta itemProp="name" content="MMDS Digitalisierungshilfe GmbH" />
                <address
                  className="not-italic space-y-2"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <div>
                    <div className="font-semibold">Adresse</div>
                    <div>
                      <span itemProp="streetAddress">Roitham 44</span>
                      <br />
                      <span>
                        <span itemProp="postalCode">4612</span> <span itemProp="addressLocality">Scharten</span>
                      </span>
                    </div>
                  </div>
                </address>
                <div className="mt-3">
                  <div className="font-semibold">Kontakt</div>
                  <ul className="space-y-1">
                    <li>
                      <a
                        className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                        href="https://digitalisierungshilfe.at"
                        itemProp="url"
                      >
                        https://digitalisierungshilfe.at
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                        href="mailto:office@digitalisierungshilfe.at"
                        itemProp="email"
                      >
                        office@digitalisierungshilfe.at
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                        href="tel:+436642253812"
                        itemProp="telephone"
                      >
                        +43 664 2253812
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <p className="text-sm text-gray-500 mt-4">
                Diese Cookie‑Richtlinie wurde mit cookiedatabase.org am <strong>20. Juli 2025</strong> synchronisiert.
              </p>
            </section>

            {/* Footer‑Hinweise */}
            <p className="text-sm text-gray-500">Letzte Aktualisierung: 4. Juni 2025</p>      </div>
      </div>
    </LegalLayout>
  );
}
