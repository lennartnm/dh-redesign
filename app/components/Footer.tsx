"use client";

import Image from "next/image";
import Link from "next/link";

const LEGAL_LINKS = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
  { label: "Cookie-Richtlinie", href: "/cookie-richtlinie" },
];

const LEISTUNGEN_LINKS = [
  { label: "Webentwicklung", href: "/#leistungen" },
  { label: "Beratung", href: "/#leistungen" },
  { label: "Neukundengewinnung", href: "/#leistungen" },
  { label: "Fallstudien", href: "/fallstudien" },
];

const WISSEN_LINKS = [
  { label: "Blog & Wissen", href: "/blog" },
  { label: "Digitalisierungscheck", href: "/digitalisierungscheck" },
];

const KONTAKT_LINKS = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Über Uns", href: "/ueber-uns" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-gray-950 text-gray-400">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Startseite" className="inline-block mb-5">
              <Image
                src="/digi_logo.png"
                alt="Digitalisierungshilfe Logo"
                width={44}
                height={44}
                className="h-10 w-auto object-contain brightness-200"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-[200px]">
              Digitale Sichtbarkeit und Neukundengewinnung für KMU in Österreich.
            </p>
            <a
              href="tel:+436642253812"
              className="mt-5 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z" />
              </svg>
              +43 664 2253812
            </a>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Leistungen
            </h3>
            <ul className="space-y-2.5">
              {LEISTUNGEN_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wissen */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Wissen
            </h3>
            <ul className="space-y-2.5">
              {WISSEN_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Unternehmen
            </h3>
            <ul className="space-y-2.5">
              {KONTAKT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("open-cookie-banner"))}
                  className="text-sm text-gray-500 hover:text-white transition-colors text-left"
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {year} Digitalisierungshilfe. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-700">Ihr Partner für digitales Wachstum in Österreich</span>
            <span className="text-lg">🇦🇹</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
