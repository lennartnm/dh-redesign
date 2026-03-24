// app/datenschutz/page.tsx
import type { Metadata } from "next";
import LegalLayout from "@/app/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Digitalisierungshilfe GmbH",
  description:
    "Datenschutzerklärung der Digitalisierungshilfe GmbH – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO, Ihren Rechten und unseren Schutzmaßnahmen.",
  alternates: { canonical: "https://www.digitalisierungshilfe.at/datenschutz" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Datenschutzerklärung | Digitalisierungshilfe GmbH",
    description:
      "Transparente Informationen gemäß DSGVO: Verarbeitungszwecke, Rechtsgrundlagen, Speicherdauer, Betroffenenrechte und eingesetzte Dienste.",
    url: "https://www.digitalisierungshilfe.at/datenschutz",
    siteName: "Digitalisierungshilfe",
    type: "website",
  },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
          <div>

          {/* Head Card */}
          <article
            className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 md:p-8 mb-8"
            itemScope
            itemType="https://schema.org/PrivacyPolicy"
          >
            <meta itemProp="name" content="Datenschutzerklärung – Digitalisierungshilfe GmbH" />

            <p className="text-gray-600 leading-relaxed">
              Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen
              besonders hohen Stellenwert für die Geschäftsleitung der Digitalisierungshilfe. Eine
              Nutzung der Internetseiten der Digitalisierungshilfe ist grundsätzlich ohne Angabe
              personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services
              unseres Unternehmens über unsere Internetseite in Anspruch nimmt, kann eine
              Verarbeitung personenbezogener Daten erforderlich werden. Ist hierfür keine
              gesetzliche Grundlage gegeben, holen wir eine Einwilligung der betroffenen Person ein.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Diese Datenschutzerklärung informiert die Öffentlichkeit über Art, Umfang und Zweck
              der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten sowie über
              die Betroffenenrechte. Wir haben zahlreiche technische und organisatorische Maßnahmen
              umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite
              verarbeiteten personenbezogenen Daten sicherzustellen. Internetbasierte
              Datenübertragungen können jedoch Sicherheitslücken aufweisen, sodass ein absoluter
              Schutz nicht gewährleistet werden kann. Daher steht es jeder betroffenen Person frei,
              uns personenbezogene Daten auch auf alternativen Wegen, z.&nbsp;B. telefonisch,
              zu übermitteln.
            </p>
          </article>

          {/* Inhaltsverzeichnis */}
          <nav aria-label="Inhaltsverzeichnis" className="mt-10">
            <div className="rounded-2xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Inhaltsverzeichnis</h2>
              <ol className="space-y-2 list-decimal pl-6">
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#begriffe">Begriffsbestimmungen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#verantwortlicher">Name und Anschrift des Verantwortlichen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#cookies">Cookies</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#server-logs">Erfassung von allgemeinen Daten und Informationen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#loeschung-sperrung">Routinemäßige Löschung und Sperrung</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#rechte">Rechte der betroffenen Person</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#facebook">Facebook</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#adsense">Google AdSense</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#remarketing">Google Remarketing</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#adwords">Google AdWords</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#matomo">Matomo</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#rechtsgrundlagen">Rechtsgrundlage der Verarbeitung</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#berechtigte-interessen">Berechtigte Interessen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#speicherdauer">Speicherdauer</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#bereitstellung">Bereitstellung personenbezogener Daten</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#automatisierte-entscheidungen">Automatisierte Entscheidungen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#newsletter">Newsletter</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#newsletter-tracking">Newsletter-Tracking</a></li>
              </ol>
            </div>
          </nav>

          <div className="mt-10 space-y-10">
            {/* 1. Begriffsbestimmungen */}
            <section id="begriffe">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">1. Begriffsbestimmungen</h2>
              <p className="mb-4">
                Die Datenschutzerklärung der Digitalisierungshilfe beruht auf den Begrifflichkeiten
                der Datenschutz-Grundverordnung (DS-GVO) und soll für Öffentlichkeit, Kunden und
                Geschäftspartner gut lesbar und verständlich sein. Nachfolgend verwendete Begriffe:
              </p>
              <div className="prose prose-slate max-w-none">
                <dl>
                  <dt className="font-semibold">a) personenbezogene Daten</dt>
                  <dd>
                    Alle Informationen über eine identifizierte oder identifizierbare natürliche
                    Person ("betroffene Person"), z. B. Name, Kennnummer, Standortdaten,
                    Online-Kennung oder besondere Merkmale.
                  </dd>
                  <dt className="font-semibold mt-4">b) betroffene Person</dt>
                  <dd>Jede identifizierte oder identifizierbare natürliche Person.</dd>
                  <dt className="font-semibold mt-4">c) Verarbeitung</dt>
                  <dd>
                    Jeder Vorgang mit personenbezogenen Daten (Erheben, Speichern, Verwenden,
                    Offenlegen, Löschen etc.), automatisiert oder nicht automatisiert.
                  </dd>
                  <dt className="font-semibold mt-4">d) Einschränkung der Verarbeitung</dt>
                  <dd>Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.</dd>
                  <dt className="font-semibold mt-4">e) Profiling</dt>
                  <dd>Automatisierte Verarbeitung zur Bewertung persönlicher Aspekte einer natürlichen Person.</dd>
                  <dt className="font-semibold mt-4">f) Pseudonymisierung</dt>
                  <dd>Verarbeitung, bei der Daten ohne zusätzliche Informationen nicht mehr einer Person zugeordnet werden können.</dd>
                  <dt className="font-semibold mt-4">g) Verantwortlicher</dt>
                  <dd>Stelle, die über Zwecke und Mittel der Verarbeitung entscheidet.</dd>
                  <dt className="font-semibold mt-4">h) Auftragsverarbeiter</dt>
                  <dd>Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</dd>
                  <dt className="font-semibold mt-4">i) Empfänger</dt>
                  <dd>Stelle, der personenbezogene Daten offengelegt werden.</dd>
                  <dt className="font-semibold mt-4">j) Dritter</dt>
                  <dd>Natürliche oder juristische Person oder Stelle außer betroffener Person, Verantwortlichem und Auftragsverarbeiter.</dd>
                  <dt className="font-semibold mt-4">k) Einwilligung</dt>
                  <dd>Freiwillige, informierte und unmissverständliche Willensbekundung zur Verarbeitung personenbezogener Daten.</dd>
                </dl>
              </div>
            </section>

            {/* 2. Verantwortlicher */}
            <section id="verantwortlicher">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h2>
              <article
                className="rounded-2xl border border-gray-200 p-6 md:p-8"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <meta itemProp="name" content="Digitalisierungshilfe GmbH" />
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-semibold">Firma</dt>
                      <dd>Digitalisierungshilfe GmbH</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Landesgericht</dt>
                      <dd>Wels</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Geschäftszweig</dt>
                      <dd>Webdesign und Marketing</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Inhaber</dt>
                      <dd>MMDS Consulting Ltd.</dd>
                    </div>
                  </dl>

                  <address
                    className="not-italic space-y-3"
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
                          <span itemProp="postalCode">4612</span>{" "}
                          <span itemProp="addressLocality">Scharten</span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Kontakt</div>
                      <ul className="space-y-1">
                        <li>
                          <a
                            className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                            href="tel:+436642253812"
                            itemProp="telephone"
                          >
                            +43 664 2253812
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
                            href="https://www.digitalisierungshilfe.at"
                            rel="external"
                            itemProp="url"
                          >
                            www.digitalisierungshilfe.at
                          </a>
                        </li>
                      </ul>
                    </div>
                  </address>
                </div>
              </article>
            </section>

            {/* 3. Cookies */}
            <section id="cookies">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">3. Cookies</h2>
              <p className="mb-4">
                Unsere Internetseiten verwenden Cookies. Cookies sind Textdateien, die über den
                Internetbrowser auf einem Endgerät gespeichert werden. Sie ermöglichen u. a. die
                Bereitstellung nutzerfreundlicher Services und die Wiedererkennung des verwendeten
                Browsers. Die Setzung von Cookies kann jederzeit über die Einstellungen des
                Browsers verhindert und bereits gesetzte Cookies gelöscht werden. Bei Deaktivierung
                stehen ggf. nicht alle Funktionen unserer Website zur Verfügung.
              </p>
            </section>

            {/* 4. Server-Logs */}
            <section id="server-logs">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">4. Erfassung von allgemeinen Daten und Informationen</h2>
              <p>
                Bei jedem Aufruf der Website werden allgemeine Daten in Server-Logfiles gespeichert
                (z. B. Browsertyp und -version, Betriebssystem, Referrer, aufgerufene Unterseiten,
                Datum und Uhrzeit, IP-Adresse, ISP sowie ähnliche Daten zur Gefahrenabwehr). Eine
                Zuordnung zu einer Person findet nicht statt. Die Daten dienen der korrekten
                Auslieferung und Optimierung unserer Inhalte, der Sicherstellung der
                Funktionsfähigkeit sowie der Rechtssicherheit im Falle von Cyberangriffen.
              </p>
            </section>

            {/* 5. Löschung/Sperrung */}
            <section id="loeschung-sperrung">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">5. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h2>
              <p>
                Wir verarbeiten und speichern personenbezogene Daten nur für den Zeitraum, der zur
                Zweckerreichung erforderlich ist oder der durch gesetzliche Vorgaben vorgesehen ist.
                Entfällt der Zweck oder läuft eine Frist ab, werden Daten gemäß den gesetzlichen
                Vorschriften gesperrt oder gelöscht.
              </p>
            </section>

            {/* 6. Rechte der betroffenen Person */}
            <section id="rechte">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">6. Rechte der betroffenen Person</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">a) Recht auf Bestätigung</h3>
                  <p>Sie können eine Bestätigung verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden.</p>
                </div>
                <div>
                  <h3 className="font-semibold">b) Recht auf Auskunft</h3>
                  <p>Sie haben das Recht auf unentgeltliche Auskunft über die zu Ihrer Person gespeicherten personenbezogenen Daten und weitere Informationen gemäß Art. 15 DSGVO.</p>
                </div>
                <div>
                  <h3 className="font-semibold">c) Recht auf Berichtigung</h3>
                  <p>Sie können die unverzügliche Berichtigung unrichtiger sowie die Vervollständigung unvollständiger Daten verlangen.</p>
                </div>
                <div>
                  <h3 className="font-semibold">d) Recht auf Löschung</h3>
                  <p>Unter den Voraussetzungen des Art. 17 DSGVO können Sie die unverzügliche Löschung verlangen.</p>
                </div>
                <div>
                  <h3 className="font-semibold">e) Recht auf Einschränkung der Verarbeitung</h3>
                  <p>Unter den Voraussetzungen des Art. 18 DSGVO können Sie die Einschränkung der Verarbeitung verlangen.</p>
                </div>
                <div>
                  <h3 className="font-semibold">f) Recht auf Datenübertragbarkeit</h3>
                  <p>Sie erhalten die Sie betreffenden Daten in einem strukturierten, gängigen und maschinenlesbaren Format bzw. wir übermitteln diese an einen anderen Verantwortlichen, soweit technisch machbar (Art. 20 DSGVO).</p>
                </div>
                <div>
                  <h3 className="font-semibold">g) Recht auf Widerspruch</h3>
                  <p>Sie können aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung nach Art. 6 Abs. 1 lit. e oder f DSGVO einlegen; dies gilt auch für Profiling.</p>
                </div>
                <div>
                  <h3 className="font-semibold">h) Automatisierte Entscheidungen einschließlich Profiling</h3>
                  <p>Sie haben das Recht, nicht einer ausschließlich auf automatisierter Verarbeitung beruhenden Entscheidung unterworfen zu werden, die rechtliche Wirkung entfaltet oder Sie erheblich beeinträchtigt.</p>
                </div>
                <div>
                  <h3 className="font-semibold">i) Recht auf Widerruf einer Einwilligung</h3>
                  <p>Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                </div>
              </div>
            </section>

            {/* 7. Facebook */}
            <section id="facebook">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">7. Datenschutzbestimmungen zu Einsatz und Verwendung von Facebook</h2>
              <p className="mb-4">
                Auf unserer Website sind Komponenten des sozialen Netzwerks Facebook integriert. Betreibergesellschaft ist die
                Facebook, Inc., 1 Hacker Way, Menlo Park, CA 94025, USA. Für Betroffene außerhalb der USA oder Kanada ist die
                Facebook Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland zuständig. Durch die Einbindung von Plugins kann
                Facebook den Besuch unserer Seiten Ihrem Facebook-Konto zuordnen, sofern Sie dort eingeloggt sind. Wenn Sie dies
                nicht wünschen, loggen Sie sich vor dem Besuch unserer Website bei Facebook aus.
              </p>
              <p>
                Weitere Informationen zu Zweck und Umfang der Datenerhebung, Verarbeitung und Nutzung durch Facebook sowie Einstellungen
                zum Schutz Ihrer Privatsphäre entnehmen Sie bitte den Datenschutzhinweisen von Facebook.
              </p>
            </section>

            {/* 8. Google AdSense */}
            <section id="adsense">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">8. Datenschutzbestimmungen zu Einsatz und Verwendung von Google AdSense</h2>
              <p className="mb-4">
                Wir verwenden Google AdSense, einen Dienst der Alphabet Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA.
                AdSense verwendet Cookies sowie Zählpixel, um die Nutzung der Website zu analysieren und interessenbezogene Werbung
                anzuzeigen. Dabei können personenbezogene Daten (einschließlich IP-Adresse) in die USA übertragen und dort
                gespeichert werden. Sie können Cookies in Ihrem Browser deaktivieren; dadurch können jedoch Funktionen eingeschränkt sein.
              </p>
            </section>

            {/* 9. Google Remarketing */}
            <section id="remarketing">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">9. Datenschutzbestimmungen zu Einsatz und Verwendung von Google Remarketing</h2>
              <p>
                Wir nutzen Google Remarketing (Google Ads). Der Dienst ermöglicht es, Nutzer mit Anzeigen anzusprechen, die unsere
                Website bereits besucht haben. Hierfür setzt Google Cookies, die eine Wiedererkennung des Browsers ermöglichen und
                interessenbezogene Werbung ausspielen. Sie können personalisierte Werbung in den Anzeigeneinstellungen Ihres
                Google-Kontos deaktivieren.
              </p>
            </section>

            {/* 10. Google AdWords */}
            <section id="adwords">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">10. Datenschutzbestimmungen zu Einsatz und Verwendung von Google‑AdWords</h2>
              <p>
                Gelangen Nutzer über eine Google-Anzeige auf unsere Website, wird von Google ein Conversion-Cookie gesetzt. Dieses dient
                der Erstellung von Besuchsstatistiken, ohne Nutzer zu identifizieren. Sie können Cookies in den Einstellungen Ihres
                Browsers deaktivieren oder löschen.
              </p>
            </section>

            {/* 11. Matomo */}
            <section id="matomo">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">11. Datenschutzbestimmungen zu Einsatz und Verwendung von Matomo</h2>
              <p className="mb-4">
                Wir setzen Matomo, ein Open-Source-Tool zur Webanalyse, ein. Die Software wird auf unserem Server betrieben; sensible
                Logdateien werden ausschließlich dort gespeichert. Matomo verwendet Cookies, um eine Analyse der Benutzung der Website
                zu ermöglichen. Dabei werden u. a. IP-Adresse, Zugriffszeit, Herkunftsort und Häufigkeit der Besuche erfasst. Die Daten
                werden nicht an Dritte weitergegeben. Sie können der Erfassung widersprechen, indem Sie ein Opt-Out-Cookie setzen. Nach
                Löschung/Formatierung/Neuinstallation des Endgeräts muss das Opt‑Out ggf. erneut vorgenommen werden.
              </p>
            </section>

            {/* 12. Rechtsgrundlagen */}
            <section id="rechtsgrundlagen">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">12. Rechtsgrundlage der Verarbeitung</h2>
              <p>
                Je nach Zweck stützen wir die Verarbeitung auf Art. 6 Abs. 1 lit. a (Einwilligung), lit. b (Vertrag/Anbahnung), lit. c
                (rechtliche Verpflichtung), lit. d (lebenswichtige Interessen) oder lit. f DSGVO (berechtigtes Interesse). Ein
                berechtigtes Interesse kann insbesondere vorliegen, wenn die betroffene Person Kunde ist (Erwägungsgrund 47 Satz 2).
              </p>
            </section>

            {/* 13. Berechtigte Interessen */}
            <section id="berechtigte-interessen">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">13. Berechtigte Interessen an der Verarbeitung</h2>
              <p>
                Verarbeiten wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, besteht unser berechtigtes Interesse in der
                Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens aller Mitarbeiter und Anteilseigner.
              </p>
            </section>

            {/* 14. Speicherdauer */}
            <section id="speicherdauer">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">14. Dauer der Speicherung</h2>
              <p>
                Die Speicherdauer richtet sich nach gesetzlichen Aufbewahrungsfristen. Nach Ablauf werden Daten routinemäßig gelöscht,
                sofern sie nicht mehr zur Vertragserfüllung oder -anbahnung erforderlich sind.
              </p>
            </section>

            {/* 15. Bereitstellung */}
            <section id="bereitstellung">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">15. Bereitstellung personenbezogener Daten</h2>
              <p>
                Die Bereitstellung personenbezogener Daten kann gesetzlich vorgeschrieben oder für einen Vertragsabschluss erforderlich
                sein. Vor der Bereitstellung können Sie sich an uns wenden; wir klären Sie einzelfallbezogen über Erforderlichkeit und
                Folgen einer Nichtbereitstellung auf.
              </p>
            </section>

            {/* 16. Automatisierte Entscheidungen */}
            <section id="automatisierte-entscheidungen">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">16. Bestehen einer automatisierten Entscheidungsfindung</h2>
              <p>
                Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.
              </p>
            </section>

            {/* 17. Newsletter */}
            <section id="newsletter">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">17. Abonnement unseres Newsletters</h2>
              <p className="mb-4">
                Nutzer können unseren Newsletter abonnieren. Voraussetzung ist eine gültige E‑Mail‑Adresse und die Registrierung zum
                Versand. Aus rechtlichen Gründen versenden wir eine Bestätigungsmail im Double‑Opt‑In‑Verfahren. Bei der Anmeldung
                speichern wir die IP‑Adresse, Datum und Uhrzeit der Anmeldung zur Nachvollziehbarkeit eines möglichen Missbrauchs.
              </p>
              <p>
                Die erhobenen personenbezogenen Daten werden ausschließlich für den Newsletterversand verwendet. Eine Abmeldung ist
                jederzeit möglich; die Einwilligung kann jederzeit widerrufen werden (Link im Newsletter oder direkte Kontaktaufnahme).
              </p>
            </section>

            {/* 18. Newsletter-Tracking */}
            <section id="newsletter-tracking">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">18. Newsletter‑Tracking</h2>
              <p>
                Unsere Newsletter enthalten Zählpixel, um statistische Auswertungen zu ermöglichen (z. B. ob eine E‑Mail geöffnet wurde
                oder welche Links aufgerufen wurden). Die so erhobenen Daten dienen der Optimierung unseres Newsletterdienstes und der
                inhaltlichen Anpassung. Sie können Ihre Einwilligung jederzeit widerrufen; nach Widerruf werden die Daten gelöscht.
              </p>
            </section>

            {/* Letzte Aktualisierung */}
            <p className="text-sm text-gray-500">Letzte Aktualisierung: {new Date().toLocaleDateString("de-AT")}</p>
          </div>
          </div>
    </LegalLayout>
  );
}
