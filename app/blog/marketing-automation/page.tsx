import BlogLayout from "@/app/components/ui/BlogLayout";


const toc = [
  { id: "einleitung", label: "Einleitung" },
  { id: "was-ist-automation", label: "Was ist Marketing Automation?" },
  { id: "workflows", label: "Automatisierungs-Workflows" },
  { id: "tools", label: "Tools & Plattformen" },
  { id: "implementierung", label: "Schritt-für-Schritt Implementierung" },
  { id: "fazit", label: "Fazit" },
];

const sources = [
  { label: "HubSpot: State of Marketing Automation 2024", url: "https://www.hubspot.com/marketing-statistics" },
  { label: "Salesforce: Marketing Automation Trends", url: "https://www.salesforce.com/resources" },
  { label: "ActiveCampaign: E-Mail Automation Guide", url: "https://www.activecampaign.com" },
];

export default function Page() {
  return (
    <BlogLayout
      title="Marketing Automation: Kunden gewinnen im Schlaf"
      subheadline="Wie Marketing Automation Ihnen ermöglicht, Leads automatisch zu pflegen und zu Kunden zu konvertieren."
      date={meta.date}
      readTime={meta.readTime!}
      image={meta.image!}
      imageAlt="Automatisierte Marketing-Workflows visualisiert"
      toc={toc}
      sources={sources}
    >
      <h2 id="einleitung">Einleitung</h2>
      <p>
        Stellen Sie sich vor: Ein potenzieller Kunde besucht Ihre Website, lädt einen Leitfaden herunter – und bekommt in den nächsten zwei Wochen automatisch genau die Informationen, die er braucht, um zu einem Kauf bereit zu sein. Das ist Marketing Automation in der Praxis.
      </p>

      <h2 id="was-ist-automation">Was ist Marketing Automation?</h2>
      <p>
        Marketing Automation bezeichnet den Einsatz von Software, um repetitive Marketingaufgaben zu automatisieren und Leads systematisch durch den Kaufprozess zu führen. Statt manuell E-Mails zu verschicken, richten Sie einmalig Workflows ein, die dann automatisch ablaufen.
      </p>
      <ul>
        <li>Automatische Willkommenssequenzen für neue Abonnenten</li>
        <li>Segmentierung nach Verhalten und Interessen</li>
        <li>Lead-Scoring zur Priorisierung von Kontakten</li>
        <li>Retargeting basierend auf Website-Verhalten</li>
      </ul>

      <h2 id="workflows">Automatisierungs-Workflows</h2>
      <p>
        Der klassische Nurturing-Workflow für ein KMU könnte so aussehen:
      </p>
      <ul>
        <li><strong>Tag 0:</strong> Willkommens-E-Mail mit Lead-Magnet-Download</li>
        <li><strong>Tag 2:</strong> Einblick in Ihre Arbeitsweise oder Fallstudie</li>
        <li><strong>Tag 5:</strong> FAQ oder häufige Einwände ansprechen</li>
        <li><strong>Tag 8:</strong> Testimonials und Social Proof</li>
        <li><strong>Tag 12:</strong> Soft-CTA: Erstgespräch buchen</li>
      </ul>

      <h2 id="tools">Tools & Plattformen</h2>
      <ul>
        <li><strong>ActiveCampaign:</strong> Stark für E-Mail-Automation und CRM-Integration</li>
        <li><strong>HubSpot:</strong> Umfassendes All-in-One-Tool, auch in der Free-Version mächtig</li>
        <li><strong>Mailchimp:</strong> Einsteigerfreundlich, für einfache Sequenzen ausreichend</li>
        <li><strong>Make (früher Integromat):</strong> Für komplexe Workflow-Automatisierungen</li>
      </ul>

      <h2 id="implementierung">Schritt-für-Schritt Implementierung</h2>
      <ul>
        <li>Zielgruppe und Kundenprozess definieren</li>
        <li>Lead-Magnet erstellen (kostenloser Download, Webinar etc.)</li>
        <li>E-Mail-Sequenz planen und schreiben</li>
        <li>Tool auswählen und einrichten</li>
        <li>Testen, messen, optimieren</li>
      </ul>

      <h2 id="fazit">Fazit</h2>
      <p>
        Marketing Automation ist kein Luxus für große Konzerne – auch KMU können mit überschaubarem Aufwand leistungsstarke Automatisierungen einrichten. Der Schlüssel: Beginnen Sie klein, mit einem einfachen Willkommens-Workflow, und erweitern Sie nach und nach.
      </p>
    </BlogLayout>
  );
}
