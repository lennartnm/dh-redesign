import BlogLayout from "@/app/components/ui/BlogLayout";

export const blogMeta = {
  title: "Landingpage-Psychologie: Wie Sie Besucher überzeugen",
  date: "2025-03-08",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
  excerpt: "Psychologische Prinzipien, die hinter erfolgreichen Landingpages stecken – und wie Sie sie nutzen.",
  readTime: "8 min",
};

const toc = [
  { id: "einleitung", label: "Einleitung" },
  { id: "cialdini", label: "Cialdinis Prinzipien" },
  { id: "social-proof", label: "Social Proof richtig einsetzen" },
  { id: "above-the-fold", label: "Above the Fold" },
  { id: "cta-psychologie", label: "Psychologie des CTA" },
  { id: "fazit", label: "Fazit" },
];

const sources = [
  { label: "Cialdini, R.: Influence – The Psychology of Persuasion", url: "https://www.cialdini.com" },
  { label: "Baymard Institute: UX Research auf E-Commerce-Seiten", url: "https://baymard.com" },
  { label: "Nielsen Norman Group: Landingpage Best Practices", url: "https://www.nngroup.com/articles/landing-page-ux/" },
];

export default function Page() {
  return (
    <BlogLayout
      title="Landingpage-Psychologie: Wie Sie Besucher überzeugen"
      subheadline="Psychologische Prinzipien, die hinter erfolgreichen Landingpages stecken – und wie Sie sie nutzen."
      date={meta.date}
      readTime={meta.readTime!}
      image={meta.image!}
      imageAlt="Person analysiert eine Website auf einem Bildschirm"
      toc={toc}
      sources={sources}
    >
      <h2 id="einleitung">Einleitung</h2>
      <p>
        Eine Landingpage hat eine einzige Aufgabe: den Besucher zu einer spezifischen Aktion zu bewegen. Das klingt einfach – ist es aber nicht. Menschen treffen Entscheidungen selten rein rational. Psychologische Mechanismen spielen eine entscheidende Rolle. Wer diese versteht, kann Landingpages bauen, die wirklich konvertieren.
      </p>

      <h2 id="cialdini">Cialdinis Prinzipien</h2>
      <p>
        Robert Cialdini hat in seinem Buch „Influence" sechs universelle Überzeugungsprinzipien beschrieben, die auch im Online-Marketing hochrelevant sind:
      </p>
      <ul>
        <li><strong>Reziprozität:</strong> Geben Sie zuerst etwas (Gratisinhalt, Tool), bevor Sie etwas verlangen</li>
        <li><strong>Knappheit:</strong> Limitierte Angebote oder Plätze erhöhen den wahrgenommenen Wert</li>
        <li><strong>Autorität:</strong> Zertifikate, Auszeichnungen und Expertenstatus erhöhen das Vertrauen</li>
        <li><strong>Sympathie:</strong> Menschen kaufen von Menschen – zeigen Sie Ihr Team</li>
        <li><strong>Konsistenz:</strong> Kleine Ja's führen zu großen Ja's (Micro-Commitments)</li>
        <li><strong>Soziale Bewährtheit:</strong> Was andere gut finden, muss gut sein</li>
      </ul>

      <h2 id="social-proof">Social Proof richtig einsetzen</h2>
      <p>
        Bewertungen und Testimonials sind wirksam – aber nur wenn sie glaubwürdig sind. Konkrete, spezifische Aussagen ("Wir haben 40 % mehr Anfragen erhalten") überzeugen mehr als allgemeine Lobeshymnen. Echte Fotos und vollständige Namen erhöhen die Überzeugungskraft deutlich.
      </p>

      <h2 id="above-the-fold">Above the Fold</h2>
      <p>
        Der Bereich, den Besucher sehen, ohne zu scrollen, ist die wichtigste Immobilie Ihrer Landingpage. Hier muss innerhalb von 3 Sekunden klar werden: Was bieten Sie an? Für wen? Und warum jetzt? Ein klares Headline-Subheadline-CTA-Schema ist bewährt.
      </p>

      <h2 id="cta-psychologie">Psychologie des CTA</h2>
      <p>
        Die Formulierung des Call-to-Action entscheidet über Erfolg oder Misserfolg. Testen Sie immer mehrere Varianten:
      </p>
      <ul>
        <li>„Jetzt kostenlos starten" vs. „Anmelden"</li>
        <li>„Förderpotenzial prüfen" vs. „Kontakt aufnehmen"</li>
        <li>Erste Person: „Ich möchte mehr erfahren" konvertiert oft besser als zweite Person</li>
      </ul>

      <h2 id="fazit">Fazit</h2>
      <p>
        Erfolgreiche Landingpages sind kein Zufall. Sie basieren auf psychologischem Verständnis und kontinuierlichem Testen. Die gute Nachricht: Viele dieser Prinzipien lassen sich sofort und ohne großes Budget umsetzen.
      </p>
    </BlogLayout>
  );
}
