"use client",

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

type Props = {
  title: string;
  updatedDate?: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, updatedDate, children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page header */}
        <div className="border-b border-gray-100 py-14 bg-gray-50/50">
          <div className="mx-auto max-w-4xl px-6">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-5">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Zurück zur Startseite
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{title}</h1>
            {updatedDate && (
              <p className="mt-3 text-sm text-gray-400">Zuletzt aktualisiert: {updatedDate}</p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="legal-content">
            {children}
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .legal-content h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f1117;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          padding-top: 2.5rem;
          border-top: 1px solid #f1f3f7;
        }
        .legal-content h2:first-child {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }
        .legal-content h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #1a202c;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .legal-content p {
          color: #4a5568;
          line-height: 1.75;
          margin-bottom: 1rem;
          font-size: 0.9375rem;
        }
        .legal-content ul, .legal-content ol {
          color: #4a5568;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .legal-content li {
          line-height: 1.75;
          margin-bottom: 0.25rem;
          font-size: 0.9375rem;
        }
        .legal-content a {
          color: #033EDC;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .legal-content strong {
          font-weight: 600;
          color: #1a202c;
        }
        .legal-content dl {
          display: grid;
          grid-template-columns: max-content 1fr;
          gap: 0.25rem 1.5rem;
          margin-bottom: 1rem;
        }
        .legal-content dt {
          font-weight: 600;
          color: #1a202c;
          font-size: 0.9375rem;
        }
        .legal-content dd {
          color: #4a5568;
          font-size: 0.9375rem;
        }
        .legal-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1rem;
          font-size: 0.9375rem;
        }
        .legal-content th {
          background: #f8f9fb;
          font-weight: 600;
          color: #1a202c;
          padding: 0.625rem 1rem;
          border: 1px solid #e4e7ed;
          text-align: left;
        }
        .legal-content td {
          padding: 0.625rem 1rem;
          border: 1px solid #e4e7ed;
          color: #4a5568;
          vertical-align: top;
        }
      `}</style>
    </div>
  );
}
