import BlogLayout from "@/app/components/ui/BlogLayout";

export const blogMeta = {
  title: "SEO für Unternehmen: Mehr Sichtbarkeit ohne Werbebudget",
  date: "2025-03-01",
  image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80",
  excerpt: "Die wichtigsten SEO-Hebel, die auch kleinere Unternehmen sofort umsetzen können.",
  readTime: "7 min",
};

const toc = [
  { id: "einleitung", label: "Einleitung" },
  { id: "on-page-seo", label: "On-Page SEO" },
  { id: "technisches-seo", label: "Technisches SEO" },
  { id: "local-seo", label: "Local SEO" },
  { id: "content-seo", label: "Content SEO" },
  { id: "fazit", label: "Fazit" },
];

const sources = [
  { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  { label: "Ahrefs: SEO Statistics 2024", url: "https://ahrefs.com/blog/seo-statistics/" },
  { label: "Moz: The Beginner's Guide to SEO", url: "https://moz.com/beginners-guide-to-seo" },
];

export default function Page() {
  return (
    <BlogLayout
      title="SEO für Unternehmen: Mehr Sichtbarkeit ohne Werbebudget"
      subheadline="Die wichtigsten SEO-Hebel, die auch kleinere Unternehmen sofort umsetzen können."
      date={meta.date}
      readTime={meta.readTime!}
      image={meta.image!}
      imageAlt="SEO und Suchmaschinenoptimierung Konzept"
      toc={toc}
      sources={sources}
    >
      <h2 id="einleitung">Einleitung</h2>
      <p>
        Suchmaschinenoptimierung (SEO) ist einer der nachhaltigsten Hebel im digitalen Marketing. Während bezahlte Werbung aufhört zu wirken, sobald das Budget endet, bringen gut platzierte Seiten in Google dauerhaft organischen Traffic – ohne laufende Kosten. Für österreichische KMU ist SEO deshalb besonders attraktiv.
      </p>

      <h2 id="on-page-seo">On-Page SEO</h2>
      <p>
        On-Page SEO umfasst alle Maßnahmen, die direkt auf Ihrer Website umgesetzt werden. Die wichtigsten Elemente:
      </p>
      <ul>
        <li><strong>Title Tags:</strong> Jede Seite braucht einen eindeutigen, keyword-optimierten Titel (max. 60 Zeichen)</li>
        <li><strong>Meta-Beschreibungen:</strong> 150–160 Zeichen, überzeugend formuliert, mit klarem Mehrwert</li>
        <li><strong>Überschriften-Struktur:</strong> H1 (einmalig), H2, H3 sauber hierarchisch einsetzen</li>
        <li><strong>Interne Verlinkung:</strong> Relevante Seiten miteinander verknüpfen</li>
        <li><strong>Bilder optimieren:</strong> Alt-Texte, komprimierte Dateigröße, beschreibende Dateinamen</li>
      </ul>

      <h2 id="technisches-seo">Technisches SEO</h2>
      <p>
        Technische Faktoren beeinflussen, ob Google Ihre Seiten überhaupt korrekt indexiert:
      </p>
      <ul>
        <li><strong>Ladezeit:</strong> Seiten unter 2 Sekunden laden; Google Core Web Vitals beachten</li>
        <li><strong>Mobile-First:</strong> Responsive Design ist kein Nice-to-have, sondern Pflicht</li>
        <li><strong>HTTPS:</strong> SSL-Zertifikat für jede Website</li>
        <li><strong>Sitemap & robots.txt:</strong> Google korrekt durch Ihre Seitenstruktur führen</li>
      </ul>

      <h2 id="local-seo">Local SEO</h2>
      <p>
        Für lokale Unternehmen in Österreich ist Local SEO oft die wirkungsvollste Maßnahme. Wenn jemand „Elektriker Wien" oder „Steuerberater Graz" sucht, möchten Sie ganz oben erscheinen.
      </p>
      <ul>
        <li>Google Business Profile vollständig ausfüllen und regelmäßig pflegen</li>
        <li>NAP-Konsistenz (Name, Adresse, Telefon) über alle Online-Verzeichnisse</li>
        <li>Lokale Keywords auf der Website verwenden</li>
        <li>Kundenbewertungen aktiv einsammeln und beantworten</li>
      </ul>

      <h2 id="content-seo">Content SEO</h2>
      <p>
        Google belohnt Seiten, die echte Antworten auf echte Fragen geben. Ein regelmäßig gepflegter Blog mit hilfreichen Artikeln zu Ihren Themen baut langfristig Autorität auf und zieht organischen Traffic an.
      </p>
      <blockquote>
        „Content is King – aber nur, wenn er wirklich hilft." – Google Search Quality Guidelines
      </blockquote>

      <h2 id="fazit">Fazit</h2>
      <p>
        SEO ist kein Sprint, sondern ein Marathon. Die ersten Ergebnisse sieht man oft erst nach 3–6 Monaten. Aber: Wer früh beginnt, baut einen Wettbewerbsvorteil auf, der schwer aufzuholen ist. Starten Sie mit On-Page-Optimierungen und Google Business Profile – diese Maßnahmen sind schnell umsetzbar und haben sofortige Wirkung.
      </p>
    </BlogLayout>
  );
}
