"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useFoerderpotenzialModal } from "@/app/components/FoerderpotenzialModal";

type TocItem = { id: string; label: string };
type Source = { label: string; url: string };

type Props = {
  title: string;
  subheadline: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  toc: TocItem[];
  sources: Source[];
  children: React.ReactNode;
};

export default function BlogLayout({ title, subheadline, date, readTime, image, imageAlt, toc, sources, children }: Props) {
  const { Modal, open } = useFoerderpotenzialModal({
    webhookUrl: "https://hook.eu2.make.com/ascayq7slbkiwl26ptcro40285dwcula",
    fbEventExtra: { source: "Blog" },
    successRedirect: "/termin-danke",
  });

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0% -60% 0%" }
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  const dateFormatted = new Intl.DateTimeFormat("de-DE", { year: "numeric", month: "long", day: "2-digit" }).format(new Date(date));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Modal />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <div className="relative w-full aspect-[16/7] md:aspect-[21/7] overflow-hidden bg-gray-900">
          <Image src={image} alt={imageAlt} fill className="object-cover opacity-60" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="mx-auto max-w-4xl">
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 text-sm mb-6 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Alle Artikel
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">{title}</h1>
              <p className="mt-4 text-white/75 text-lg max-w-2xl">{subheadline}</p>
              <div className="mt-5 flex items-center gap-3 text-white/60 text-sm">
                <span>{dateFormatted}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span>{readTime} Lesezeit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex gap-14 items-start">
            {/* Sticky TOC sidebar */}
            <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Inhalt</p>
              <nav>
                <ul className="space-y-1">
                  {toc.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={`block text-sm py-1.5 px-3 rounded-lg transition-all duration-150 ${
                          activeId === id
                            ? "bg-blue-50 text-[#033EDC] font-semibold"
                            : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Article body */}
            <article className="flex-1 min-w-0 max-w-3xl">
              <div className="prose-content">{children}</div>

              {/* Sources */}
              {sources.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Quellenverzeichnis</h2>
                  <ul className="space-y-2">
                    {sources.map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                        <span className="flex-shrink-0 font-mono text-xs text-gray-400 mt-0.5">[{i + 1}]</span>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#033EDC] hover:underline break-all">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-3xl overflow-hidden relative" style={{ backgroundImage: "linear-gradient(135deg,#033EDC 0%,#0050F0 50%,#00A7F9 100%)" }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 0%, transparent 50%)" }} />
                <div className="relative p-8 md:p-10 text-center">
                  <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">Nächster Schritt</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Prüfen Sie jetzt Ihr Förderpotenzial
                  </h3>
                  <p className="mt-3 text-white/80 max-w-lg mx-auto">
                    Erhalten Sie eine kostenlose, unverbindliche Einschätzung, welche Förderungen für Ihr Digitalisierungsprojekt in Frage kommen.
                  </p>
                  <button
                    type="button"
                    onClick={open}
                    className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-white text-[#033EDC] px-6 py-3 font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-px transition-all duration-200"
                  >
                    Förderpotenzial prüfen – kostenlos
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .prose-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0f1117;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.25;
          scroll-margin-top: 6rem;
        }
        .prose-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f1117;
          margin-top: 1.75rem;
          margin-bottom: 0.6rem;
        }
        .prose-content p {
          color: #4a5568;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
        }
        .prose-content ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.25rem;
        }
        .prose-content ul li {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          color: #4a5568;
          font-size: 1.05rem;
          line-height: 1.8;
          align-items: flex-start;
        }
        .prose-content ul li::before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #033EDC;
          flex-shrink: 0;
          margin-top: 0.65em;
        }
        .prose-content strong { font-weight: 700; color: #0f1117; }
        .prose-content a { color: #033EDC; text-decoration: underline; text-underline-offset: 3px; }
        .prose-content table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.95rem; }
        .prose-content th { background: #f8f9fb; font-weight: 600; color: #0f1117; padding: 0.75rem 1rem; border: 1px solid #e4e7ed; text-align: left; }
        .prose-content td { padding: 0.75rem 1rem; border: 1px solid #e4e7ed; color: #4a5568; vertical-align: top; }
        .prose-content tr:nth-child(even) td { background: #fafafa; }
        .prose-content blockquote {
          border-left: 4px solid #033EDC;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          background: #f0f4ff;
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: #333;
        }
      `}</style>
    </div>
  );
}
