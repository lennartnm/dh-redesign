import type { Metadata } from "next";
import LegalLayout from "@/app/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum | MMDS Digitalisierungshilfe GmbH",
  description: "Impressum der MMDS Digitalisierungshilfe GmbH – Unternehmensangaben, Informationspflicht laut ECG und Mediengesetz.",
  alternates: { canonical: "https://www.digitalisierungshilfe.at/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum" updatedDate="2025">
      <div
        itemScope
        itemType="https://schema.org/Organization"
        className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 md:p-8 mb-8"
      >
        <meta itemProp="name" content="MMDS Digitalisierungshilfe GmbH" />
        <div className="grid sm:grid-cols-2 gap-6">
          <dl>
            <dt>Firma</dt><dd>MMDS Digitalisierungshilfe GmbH</dd>
            <dt>Landesgericht</dt><dd>Wels</dd>
            <dt>Geschäftszweig</dt><dd>Webdesign und Marketing</dd>
            <dt>Inhaberin</dt><dd>Meike Steinbrecher</dd>
            <dt>UID</dt><dd>ATU80414268</dd>
          </dl>
          <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <dl>
              <dt>Adresse</dt>
              <dd><span itemProp="streetAddress">Roitham 44</span>, <span itemProp="postalCode">4612</span> <span itemProp="addressLocality">Scharten</span></dd>
              <dt>Telefon</dt>
              <dd><a href="tel:+436642253812" itemProp="telephone">+43 664 2253812</a></dd>
              <dt>E-Mail</dt>
              <dd><a href="mailto:office@digitalisierungshilfe.at" itemProp="email">office@digitalisierungshilfe.at</a></dd>
              <dt>Web</dt>
              <dd><a href="https://www.digitalisierungshilfe.at" itemProp="url">www.digitalisierungshilfe.at</a></dd>
            </dl>
          </address>
        </div>
        <p className="mt-4 text-xs text-gray-400">Informationspflicht laut ECG und Mediengesetz · WKO</p>
      </div>

      <h2>Verschwiegenheitserklärung</h2>
      <p>Auf Wunsch senden wir Ihnen gerne eine Verschwiegenheitserklärung zu.</p>

      <h2>Datenschutzhinweis</h2>
      <p>Persönliche Daten (Name, Adresse, E-Mail-Adresse und Ihr Anliegen) werden zum Zweck der Auftragsabwicklung mit unseren Kunden verarbeitet und nicht an Dritte weitergegeben.</p>
      <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem Endgerät des Nutzers spezifische, auf den Nutzer bezogene Informationen zu speichern, während er die Website nutzt. Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und Nutzeranzahl der Seiten zu ermitteln, Verhaltensweisen der Seitennutzung zu analysieren, aber auch unser Angebot kundenfreundlicher zu gestalten. Wenn Sie das nicht wünschen, sollten Sie Ihren Internetbrowser so einstellen, dass er die Annahme von Cookies verweigert.</p>

      <h2>Kontaktaufnahme</h2>
      <p>Durch die Nutzung unserer Internetseiten und bloße Kontaktaufnahme durch E-Mail, Telefon oder Telefax kommt kein Mandatsverhältnis zustande. Ohne weitergehende Vereinbarung sind Sie nicht zur Zahlung eines Honorars und wir nicht zur Aufnahme einer Tätigkeit verpflichtet.</p>

      <h2>Haftungsausschluss</h2>
      <p>Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.</p>

      <h2>Rücktritt durch den Anbieter</h2>
      <p>Der Anbieter ist berechtigt, vom Vertrag zurückzutreten, wenn die vereinbarten Leistungen aus Gründen, die der Anbieter nicht zu vertreten hat, nicht erbracht werden können, oder wenn der Kunde erforderliche Mitwirkungshandlungen trotz angemessener Fristsetzung nicht vornimmt.</p>
      <p>Tritt der Anbieter aus einem solchen Grund zurück, bei dem keine Pflichtverletzung des Kunden vorliegt, werden dem Kunden 100 % der geleisteten Anzahlung erstattet. Der Kunde wird über den Rücktritt und dessen Gründe unverzüglich informiert.</p>
    </LegalLayout>
  );
}
