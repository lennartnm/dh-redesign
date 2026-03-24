"use client";

import React, { useEffect, useRef, useState } from "react";

export default function BetriebsurlaubHeader() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // ESC schließt Modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Fokus ins Modal setzen (minimal a11y)
  useEffect(() => {
    if (open) {
      // kurz warten, bis gerendert
      setTimeout(() => dialogRef.current?.focus(), 0);
    }
  }, [open]);

  return (
    <>
      {/* Sticky Banner */}
      <div
        className="sticky top-0 z-50 w-full border-b border-red-700 bg-red-600 text-white"
        role="region"
        aria-label="Betriebsurlaub Hinweis"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <p className="text-sm sm:text-base font-medium">
            Wir befinden uns im Betriebsurlaub und wünschen schöne Festtage.
          </p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="shrink-0 rounded-full bg-white/15 px-4 py-2 text-xs sm:text-sm font-semibold text-white
                       ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20 focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-white"
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            Mehr anzeigen
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Informationen zum Betriebsurlaub"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Schließen"
            onClick={() => setOpen(false)}
          />

          {/* Dialog */}
          <div
            ref={dialogRef}
            tabIndex={-1}
            className="relative mx-4 mb-4 sm:mb-0 w-full max-w-xl rounded-2xl bg-white p-5 sm:p-6 shadow-xl outline-none"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Betriebsurlaub – wichtige Infos
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label="Popup schließen"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Wir befinden uns aktuell im Betriebsurlaub von <strong>19.12.</strong> bis
                einschließlich <strong>07.01.</strong>
                <br />
                In diesem Zeitraum ist unser Büro nur eingeschränkt erreichbar.
              </p>

              <p>
                In dringenden Notfällen wenden Sie sich bitte an unseren Journaldienst unter:
                <br />
                <a
                  href="mailto:alina@digitalisierungshilfe.at"
                  className="mt-1 inline-flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2
                             font-semibold text-gray-900 ring-1 ring-gray-200 hover:bg-gray-100"
                >
                  <span aria-hidden>📧</span> alina@digitalisierungshilfe.at
                </a>
              </p>

              <p>
                Während der Weihnachtsfeiertage bitten wir um Verständnis, dass die
                Bearbeitungszeit bis zu <strong>24–48 Stunden</strong> betragen kann.
              </p>

              <p>
                Ab dem <strong>08.01.</strong> sind wir wieder wie gewohnt für Sie da und kümmern
                uns gerne um Ihr Anliegen.
              </p>

              <p>
                Wir wünschen Ihnen frohe Weihnachten und einen guten Start ins neue Jahr! 🎄✨
              </p>

              <p className="pt-2">
                Herzliche Grüße
                <br />
                <strong>Ihr Team der Digitalisierungshilfe</strong>
              </p>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700
                           ring-1 ring-gray-200 hover:bg-gray-50 focus:outline-none
                           focus-visible:ring-2 focus-visible:ring-red-500"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
