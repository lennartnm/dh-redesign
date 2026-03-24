"use client";

import { useFoerderpotenzialModal } from "@/app/components/FoerderpotenzialModal";

export default function ContactCTA() {
  const { Modal, open } = useFoerderpotenzialModal({
    webhookUrl: "https://hook.eu2.make.com/ascayq7slbkiwl26ptcro40285dwcula",
    fbEventExtra: { source: "Kontakt-CTA" },
    successRedirect: "/termin-danke",
  });

  return (
    <>
      <Modal />
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center" style={{ backgroundImage: "linear-gradient(135deg,#033EDC 0%,#0050F0 60%,#00A7F9 100%)" }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 0%, transparent 50%)" }} aria-hidden />
            <div className="relative">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">Jetzt starten</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Bereit loszulegen?</h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
                Lassen Sie uns Ihr Förderpotenzial unverbindlich prüfen und gemeinsam den besten Weg finden.
              </p>
              <button
                type="button"
                onClick={open}
                className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-white text-[#033EDC] px-7 py-3.5 font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-px transition-all duration-200"
              >
                Jetzt kontaktieren
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
