import BlogLayout from "@/app/components/ui/BlogLayout";

export const meta = {
  title: "Customer Journey Optimierung: Den Weg zum Kauf verstehen",
  date: "2025-03-18",
  image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1600&q=80",
  excerpt: "Wie Sie die Customer Journey Ihrer Kunden kartieren und jeden Touchpoint für mehr Conversions optimieren.",
  readTime: "11 min",
};

const toc = [
  { id: "einleitung", label: "Einleitung" },
  { id: "was-ist-journey", label: "Was ist die Customer Journey?" },
  { id: "phasen", label: "Die 5 Phasen" },
  { id: "mapping", label: "Journey Mapping" },
  { id: "optimierung", label: "Optimierung je Phase" },
  { id: "fazit", label: "Fazit" },
];

const sources = [
  { label: "McKinsey: The Consumer Decision Journey", url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-consumer-decision-journey" },
  { label: "Forrester Research: Customer Experience Index", url: "https://www.forrester.com" },
  { label: "Think with Google: Messy Middle Research", url: "https://www.thinkwithgoogle.com/intl/en-154/consumer-insights/consumer-journey/navigating-purchase-behavior-and-decision-making/" },
];

export default function Page() {
  return (
    <BlogLayout
      title="Customer Journey Optimierung: Den Weg zum Kauf verstehen"
      subheadline="Wie Sie die Customer Journey kartieren und jeden Touchpoint für mehr Conversions optimieren."
      date={meta.date}
      readTime={meta.readTime!}
      image={meta.image!}
      imageAlt="Visualisierte Customer Journey Map"
      toc={toc}
      sources={sources}
    >
      <h2 id="einleitung">Einleitung</h2>
      <p>
        Kunden kaufen selten beim ersten Kontakt. Sie durchlaufen eine Reise – von der ersten Wahrnehmung Ihrer Marke bis zur Kaufentscheidung und darüber hinaus. Diese Reise zu verstehen und zu optimieren ist eine der wirkungsvollsten Maßnahmen, um Ihre Marketing-Effizienz zu steigern.
      </p>

      <h2 id="was-ist-journey">Was ist die Customer Journey?</h2>
      <p>
        Die Customer Journey beschreibt alle Interaktionen (Touchpoints), die ein Interessent oder Kunde mit Ihrem Unternehmen hat – von der Werbeanzeige über die Website bis zum Kundendienst nach dem Kauf. Eine vollständige Journey umfasst oft 7–12 Touchpoints.
      </p>

      <h2 id="phasen">Die 5 Phasen</h2>
      <ul>
        <li><strong>Awareness:</strong> Der potenzielle Kunde wird auf Ihr Unternehmen aufmerksam (Werbung, SEO, Empfehlung)</li>
        <li><strong>Consideration:</strong> Er vergleicht Alternativen und recherchiert Ihr Angebot</li>
        <li><strong>Decision:</strong> Er entscheidet sich und führt die Kaufaktion durch</li>
        <li><strong>Retention:</strong> Nach dem Kauf: Wie binden Sie ihn langfristig?</li>
        <li><strong>Advocacy:</strong> Zufriedene Kunden empfehlen Sie weiter</li>
      </ul>

      <h2 id="mapping">Journey Mapping</h2>
      <p>
        Eine Customer Journey Map ist eine visuelle Darstellung dieser Reise aus Kundenperspektive. Sie zeigt Gedanken, Gefühle und Aktionen in jeder Phase – und damit die Lücken und Probleme in Ihrer aktuellen Customer Experience.
      </p>
      <blockquote>
        „Unternehmen, die systematisch Customer Journey Maps einsetzen, verzeichnen 54 % höhere Marketing-ROI." – Forrester Research
      </blockquote>

      <h2 id="optimierung">Optimierung je Phase</h2>
      <ul>
        <li><strong>Awareness:</strong> SEO, Content Marketing, Social Ads, Empfehlungsprogramme</li>
        <li><strong>Consideration:</strong> Detaillierte Produktseiten, Vergleiche, Kundenbewertungen, FAQ</li>
        <li><strong>Decision:</strong> Klare CTAs, einfacher Checkout, Garantien, Sicherheitssignale</li>
        <li><strong>Retention:</strong> Onboarding-E-Mails, Treueprogramme, proaktiver Support</li>
        <li><strong>Advocacy:</strong> Bewertungsanfragen, Empfehlungsprogramme, Community-Aufbau</li>
      </ul>

      <h2 id="fazit">Fazit</h2>
      <p>
        Die Customer Journey zu optimieren bedeutet, Ihr Marketing aus Kundenperspektive zu denken. Welche Fragen hat Ihr Interessent in jeder Phase? Welche Ängste? Was hilft ihm weiter? Wer diese Fragen systematisch beantwortet, gewinnt nicht nur mehr Kunden – sondern bessere, loyalere Kunden.
      </p>
    </BlogLayout>
  );
}
