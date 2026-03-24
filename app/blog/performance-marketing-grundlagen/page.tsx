import BlogLayout from "@/app/components/ui/BlogLayout";

export const blogMeta = {
  title: "Performance Marketing: Grundlagen und KPIs",
  date: "2025-01-28",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  excerpt: "Was Performance Marketing bedeutet, welche KPIs wirklich zählen und wie Sie messbar wachsen.",
  readTime: "9 min",
};

const toc = [
  { id: "einleitung", label: "Einleitung" },
  { id: "definition", label: "Definition & Abgrenzung" },
  { id: "kpis", label: "Die wichtigsten KPIs" },
  { id: "kanäle", label: "Kanäle im Überblick" },
  { id: "budget", label: "Budget & ROAS" },
  { id: "fazit", label: "Fazit" },
];

const sources = [
  { label: "IAB Europe: Performance Marketing 2024", url: "https://iabeurope.eu" },
  { label: "Google Think with Google: Performance Max", url: "https://www.thinkwithgoogle.com" },
  { label: "Meta Blueprint: Ads Performance", url: "https://www.facebook.com/business/learn" },
];

export default function Page() {
  return (
    <BlogLayout
      title="Performance Marketing: Grundlagen und KPIs"
      subheadline="Was Performance Marketing bedeutet, welche KPIs wirklich zählen und wie Sie messbar wachsen."
      date={meta.date}
      readTime={meta.readTime!}
      image={meta.image!}
      imageAlt="Marketing-Dashboards und KPI-Analyse"
      toc={toc}
      sources={sources}
    >
      <h2 id="einleitung">Einleitung</h2>
      <p>
        Performance Marketing ist der datengetriebene Ansatz im digitalen Marketing. Jeder investierte Euro wird gemessen, jede Kampagne auf Ergebnis optimiert. Im Gegensatz zu klassischer Markenwerbung zahlen Sie nur für messbare Aktionen: Klicks, Leads, Käufe.
      </p>

      <h2 id="definition">Definition & Abgrenzung</h2>
      <p>
        Performance Marketing umfasst alle digitalen Marketingmaßnahmen, bei denen Vergütung und Optimierung direkt an messbare Ergebnisse geknüpft sind. Dazu gehören:
      </p>
      <ul>
        <li>Suchmaschinenwerbung (SEA / Google Ads)</li>
        <li>Social Media Advertising (Meta, LinkedIn, TikTok)</li>
        <li>Affiliate Marketing</li>
        <li>E-Mail-Marketing mit Conversion-Tracking</li>
      </ul>

      <h2 id="kpis">Die wichtigsten KPIs</h2>
      <table>
        <thead><tr><th>KPI</th><th>Bedeutung</th><th>Zielbereich</th></tr></thead>
        <tbody>
          <tr><td>CTR</td><td>Click-Through-Rate</td><td>2–5 % (je nach Kanal)</td></tr>
          <tr><td>CPC</td><td>Cost-per-Click</td><td>€0,50 – €5,00</td></tr>
          <tr><td>CPL</td><td>Cost-per-Lead</td><td>€10 – €100</td></tr>
          <tr><td>ROAS</td><td>Return on Ad Spend</td><td>Min. 3:1</td></tr>
          <tr><td>CAC</td><td>Customer Acquisition Cost</td><td>Max. 1/3 LTV</td></tr>
        </tbody>
      </table>

      <h2 id="kanäle">Kanäle im Überblick</h2>
      <p>
        Die Wahl des Kanals hängt von Ihrer Zielgruppe, Ihrem Produkt und Ihrem Budget ab. Für lokale österreichische KMU empfiehlt sich oft der Start mit Google Ads (Suchnachfrage abfangen) kombiniert mit Meta Ads für Retargeting.
      </p>

      <h2 id="budget">Budget & ROAS</h2>
      <p>
        Eine häufige Frage: Wie viel Budget brauche ich? Als Faustregel: Planen Sie mindestens 3 Monate Testphase ein und budgetieren Sie so, dass Sie ausreichend Daten für Optimierungen sammeln können. Ein ROAS von 3:1 bedeutet: Für jeden investierten Euro erhalten Sie 3 Euro zurück.
      </p>

      <h2 id="fazit">Fazit</h2>
      <p>
        Performance Marketing ist kein Hexenwerk – aber es braucht Geduld, Datendisziplin und kontinuierliche Optimierung. Unternehmen, die konsequent messen und optimieren, erzielen langfristig deutlich bessere Ergebnisse als jene, die Kampagnen einmalig schalten und sich dann nicht mehr darum kümmern.
      </p>
    </BlogLayout>
  );
}
