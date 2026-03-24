// app/agb/page.tsx
import type { Metadata } from "next";
import LegalLayout from "@/app/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "AGB | Digitalisierungshilfe GmbH",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) der Digitalisierungshilfe GmbH – Geltungsbereich, Leistungsumfang, Vertrag, Preise, Fristen, Haftung, Datenschutz, Urheberrecht und mehr.",
  alternates: { canonical: "https://www.digitalisierungshilfe.at/agb" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AGB | Digitalisierungshilfe GmbH",
    description:
      "Rechtliche Grundlagen unserer Zusammenarbeit: AGB der Digitalisierungshilfe GmbH.",
    url: "https://www.digitalisierungshilfe.at/agb",
    siteName: "Digitalisierungshilfe",
    type: "website",
  },
};

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">

      <main className="flex-1">
        <Section
          id="agb"
          className="py-20"
          containerClass="mx-auto max-w-7xl px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <article
            className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm"
            itemScope
            itemType="https://schema.org/TermsOfService"
          >
            <meta itemProp="name" content="AGB – Digitalisierungshilfe GmbH" />
            <p className="text-gray-600 leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen
              und Angebote der Digitalisierungshilfe GmbH. Mit der Inanspruchnahme unserer Leistungen
              erklärt sich der Kunde mit diesen AGB einverstanden. Die Inanspruchnahme der Leistung
              beginnt ab dem Tag, an dem die ersten Leistungen verbunden mit dem Angebot erbracht sind.
            </p>
          </article>

          {/* Inhaltsverzeichnis */}
          <nav aria-label="Inhaltsverzeichnis" className="mt-10">
            <div className="rounded-2xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Inhaltsverzeichnis</h2>
              <ol className="space-y-2 list-decimal pl-6">
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#geltungsbereich">Geltungsbereich</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#leistungsumfang">Leistungsumfang</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#vertragsabschluss">Vertragsabschluss</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#preise-zahlung">Preise und Zahlungsbedingungen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#projektverzoegerungen">Projektverzögerungen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#vertragsaenderungen">Vertragsänderungen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#foerderungen">Förderungen und Falschinformationen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#infos-projektstart">Fehlende Informationen und Projektstart</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#termine">Absage von Terminen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#haftung">Haftung</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#mitwirkung">Mitwirkungspflicht des Kunden</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#vertraulichkeit">Vertraulichkeit</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#datenschutz">Datenschutz</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#urheberrecht">Urheberrecht</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#schlussbestimmungen">Schlussbestimmungen</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#kuendigungsfrist">Kündigungsfrist für einen Auftrag</a></li>
              </ol>
            </div>
          </nav>

          <div className="mt-10 space-y-10">
            {/* 1. Geltungsbereich */}
            <section id="geltungsbereich">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">1. Geltungsbereich</h2>
              <p>
                Diese AGB gelten für alle Verträge, Dienstleistungen und Angebote der
                Digitalisierungshilfe GmbH. Mit der Inanspruchnahme unserer Leistungen erklärt sich der
                Kunde mit diesen AGB einverstanden. Die Inanspruchnahme beginnt mit dem Tag, an dem die
                ersten, mit dem Angebot verbundenen Leistungen erbracht werden.
              </p>
            </section>

            {/* 2. Leistungsumfang */}
            <section id="leistungsumfang">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">2. Leistungsumfang</h2>
              <p>
                Wir erbringen Dienstleistungen in den Bereichen Neukundengewinnung, digitale
                Transformation sowie die Erstellung von Websites, Landingpages u. Ä. Der konkrete
                Leistungsumfang ergibt sich aus dem jeweiligen Angebot.
              </p>
            </section>

            {/* 3. Vertragsabschluss */}
            <section id="vertragsabschluss">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">3. Vertragsabschluss</h2>
              <p>
                Ein Vertrag kommt durch Unterzeichnung eines schriftlichen Angebots oder durch eine
                schriftliche Auftragsbestätigung zustande. Änderungen oder Ergänzungen des Vertrages
                bedürfen der Schriftform.
              </p>
            </section>

            {/* 4. Preise und Zahlungsbedingungen */}
            <section id="preise-zahlung">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">4. Preise und Zahlungsbedingungen</h2>
              <p>
                Die im Angebot genannten Preise sind verbindlich. Zahlungen sind, sofern nicht anders
                schriftlich vereinbart, innerhalb von <strong>4 Tagen</strong> nach Rechnungserhalt ohne
                Abzug fällig.
              </p>
            </section>

            {/* 5. Projektverzögerungen */}
            <section id="projektverzoegerungen">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">5. Projektverzögerungen</h2>
              <p>
                Verzögert sich ein Projekt aufgrund von Umständen, die der Kunde zu vertreten hat (z. B.
                verspätete Bereitstellung von Informationen oder Daten), bleibt der gesamte Betrag
                dennoch fällig – unabhängig von Förderbestätigungen oder Nebenvereinbarungen. Dies gilt
                auch, wenn vereinbarte Fristen dadurch nicht eingehalten werden können. Die Frist
                beläuft sich auf <strong>2 Wochen</strong> durch Verschulden des Kunden.
              </p>
            </section>

            {/* 6. Vertragsänderungen */}
            <section id="vertragsaenderungen">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">6. Vertragsänderungen</h2>
              <p>
                Änderungen des Leistungsumfangs können schriftlich vereinbart werden, sofern beide
                Parteien zustimmen. Hierdurch entstehende Mehrkosten werden gesondert in Rechnung
                gestellt.
              </p>
            </section>

            {/* 7. Förderungen und Falschinformationen */}
            <section id="foerderungen">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">7. Förderungen und Falschinformationen</h2>
              <div className="space-y-3">
                <p>
                  <strong>a) Verbindlichkeit trotz unvollständiger Förderangaben / nicht eingerichtetes Förderkonto:</strong>
                  Stellt sich nachträglich heraus, dass im Förderantrag falsche oder unvollständige Angaben gemacht wurden,
                  bleibt der vereinbarte Betrag dennoch in voller Höhe fällig und ist laut Angebot zu begleichen. Dies betrifft
                  insbesondere fehlerhafte Angaben zu Gewerbeinformationen oder ähnlichem.
                </p>
                <p>
                  <strong>b) Fälligkeit bei Falschinformationen im Förderantrag:</strong> Wird der Förderantrag aufgrund
                  vom Kunden bereitgestellter falscher Informationen nicht genehmigt, ist die vollständige Rechnungssumme binnen
                  <strong>7 Tagen</strong> fällig – unabhängig davon, ob eine Förderbestätigung vorliegt.
                </p>
                <p>
                  <strong>c) Keine Verpflichtung zur Reduktion bei Nicht‑Genehmigung:</strong> Wird eine beantragte Förderung
                  nicht genehmigt, ist die Digitalisierungshilfe GmbH nicht verpflichtet, den nicht geförderten Betrag zu
                  reduzieren oder nachzulassen. Die volle vertraglich vereinbarte Summe bleibt bestehen.
                </p>
              </div>
            </section>

            {/* 8. Fehlende Informationen und Projektstart */}
            <section id="infos-projektstart">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">8. Fehlende Informationen und Projektstart</h2>
              <p>
                Werden notwendige Informationen (z. B. WKO‑Login‑Daten) nicht rechtzeitig – max. 10 Werktage nach
                Angebotsunterzeichnung – bereitgestellt, wird das Projekt dennoch gestartet. Der vereinbarte Betrag bleibt fällig,
                auch wenn dies zu Verzögerungen führt oder eine Förderung noch nicht bestätigt bzw. beantragt werden konnte.
              </p>
            </section>

            {/* 9. Absage von Terminen */}
            <section id="termine">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">9. Absage von Terminen</h2>
              <p>
                Wird ein Termin (z. B. Präsentation eines Erstentwurfs) vom Kunden abgesagt und kein Ersatztermin innerhalb von
                <strong> 48 Stunden</strong> vereinbart, bleibt der vereinbarte Betrag laut Angebot fällig.
              </p>
            </section>

            {/* 10. Haftung */}
            <section id="haftung">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">10. Haftung</h2>
              <p>
                Die Digitalisierungshilfe GmbH haftet – im gesetzlich zulässigen Umfang – nicht für mittelbare Schäden,
                entgangenen Gewinn, Folgeschäden oder Datenverluste. Zwingende Haftungen (z. B. bei Vorsatz) bleiben unberührt.
              </p>
            </section>

            {/* 11. Mitwirkungspflicht */}
            <section id="mitwirkung">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">11. Mitwirkungspflicht des Kunden</h2>
              <p>
                Der Kunde stellt alle für die Durchführung des Projekts notwendigen Informationen und Daten rechtzeitig (innerhalb
                von <strong>10 Werktagen</strong>) und vollständig zur Verfügung. Verzögerungen aufgrund fehlender Mitwirkung
                gehen zu Lasten des Kunden.
              </p>
            </section>

            {/* 12. Vertraulichkeit */}
            <section id="vertraulichkeit">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">12. Vertraulichkeit</h2>
              <p>
                Beide Parteien behandeln alle im Rahmen der Zusammenarbeit bekannt gewordenen vertraulichen Informationen streng
                vertraulich und geben diese nicht an Dritte weiter. Diese Verpflichtung gilt über das Vertragsende hinaus.
              </p>
            </section>

            {/* 13. Datenschutz */}
            <section id="datenschutz">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">13. Datenschutz</h2>
              <p>
                Der Kunde erklärt sich damit einverstanden, dass die Digitalisierungshilfe GmbH personenbezogene Daten zum Zweck der
                Vertragsabwicklung verarbeitet und nutzt. Weitere Informationen finden Sie in unserer
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500 ml-1" href="/datenschutz">Datenschutzerklärung</a>.
              </p>
            </section>

            {/* 14. Urheberrecht */}
            <section id="urheberrecht">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">14. Urheberrecht</h2>
              <p>
                Alle im Rahmen des Projekts erstellten Materialien, Konzepte und Entwürfe bleiben bis zur vollständigen Bezahlung
                Eigentum der Digitalisierungshilfe GmbH. Nach vollständiger Bezahlung erhält der Kunde die vereinbarten Nutzungsrechte.
              </p>
            </section>

            {/* 15. Schlussbestimmungen */}
            <section id="schlussbestimmungen">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">15. Schlussbestimmungen</h2>
              <p>
                Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform. Sollten einzelne Bestimmungen unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Erfüllungsort und Gerichtsstand ist der Sitz der
                Digitalisierungshilfe GmbH.
              </p>
            </section>

            {/* 16. Kündigungsfrist */}
            <section id="kuendigungsfrist">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">16. Kündigungsfrist für einen Auftrag</h2>
              <p>
                Jeder Auftrag kann von beiden Parteien unter Einhaltung einer Kündigungsfrist von <strong>14 Tagen</strong> vor dem
                vereinbarten Liefer- oder Leistungstermin schriftlich (E‑Mail oder Brief) gekündigt werden. Bei Kündigung innerhalb
                dieser Frist oder danach behält sich die Digitalisierungshilfe GmbH vor, bereits erbrachte Leistungen in Rechnung zu
                stellen. Zusätzlich kann – sofern nicht anders vereinbart – eine Stornogebühr in Höhe von
                <strong> 25 %</strong> des Auftragswertes anfallen.
              </p>
            </section>

            {/* Letzte Aktualisierung */}
            <p className="text-sm text-gray-500">Letzte Aktualisierung: {new Date().toLocaleDateString("de-AT")}</p>
          </div>
    </div>
    </LegalLayout>
  );
}
