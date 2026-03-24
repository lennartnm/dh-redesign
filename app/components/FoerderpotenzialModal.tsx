"use client";

import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

export type FoerderModalProps = {
  fbEventExtra?: Record<string, unknown>;
  successRedirect?: string;
  webhookUrl?: string;
};

const AT_STATES = [
  "Burgenland", "Kärnten", "Niederösterreich", "Oberösterreich",
  "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien",
] as const;

function fbLead(payload: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    try { (window as any).fbq("track", "Lead", payload); } catch {}
  }
}

type InnerProps = FoerderModalProps & { isOpen: boolean; onClose: () => void };

function FoerderpotenzialModalInner({ fbEventExtra, successRedirect = "/termin-danke", isOpen, onClose }: InnerProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [bundesland, setBundesland] = useState("");
  const [projekt, setProjekt] = useState("");
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hp, setHp] = useState("");

  useEffect(() => setMounted(true), []);

  // Lock scroll when open
  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.classList.add("overflow-hidden");
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [isOpen]);

  const reset = () => { setBundesland(""); setProjekt(""); setVorname(""); setNachname(""); setEmail(""); setTelefon(""); setErr(null); setHp(""); };

  const validate = () => {
    if (!bundesland) return "Bitte wählen Sie Ihr Bundesland aus.";
    if (!vorname.trim()) return "Bitte geben Sie Ihren Vornamen an.";
    if (!nachname.trim()) return "Bitte geben Sie Ihren Nachnamen an.";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    if (!telefon.trim()) return "Bitte geben Sie Ihre Telefonnummer an.";
    return null;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (hp) { setErr("Anfrage blockiert."); return; }
    const v = validate();
    if (v) { setErr(v); return; }
    setLoading(true);

    const payload = {
      source: "FoerderpotenzialModal",
      bundesland, projekt: projekt || null,
      vorname, nachname, email, telefon,
      submittedAt: new Date().toISOString(),
      ...(fbEventExtra || {}),
    };

    fbLead({ content_name: "Foerderpotenzial", content_category: "Lead", state: bundesland, email, phone: telefon, ...fbEventExtra });

    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !(json as any)?.ok) throw new Error((json as any)?.error || `HTTP ${res.status}`);
      reset(); onClose();
      router.push(successRedirect);
      router.refresh?.();
    } catch (e: any) {
      setErr(e?.message || "Unbekannter Fehler beim Senden.");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted || !isOpen) return null;

  const inputClass = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-[#033EDC] focus:bg-white focus:ring-2 focus:ring-[#033EDC]/15";
  const labelClass = "block text-xs font-semibold text-gray-600 mb-1.5";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-auto"
      onClick={onClose}
    >
      <div
        role="document"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[92dvh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-7 py-5 flex items-start justify-between gap-4 rounded-t-3xl">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-[#033EDC] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l2.5 2.5L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#033EDC]">Kostenlos & unverbindlich</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              Förderpotenzial Ihres Projekts prüfen
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Tragen Sie sich unverbindlich ein – wir analysieren Ihren Bedarf im Detail.
            </p>
          </div>
          <button
            aria-label="Schließen"
            onClick={onClose}
            className="flex-shrink-0 h-9 w-9 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-400 hover:text-gray-600"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} noValidate className="px-7 py-6 space-y-4">
          {/* Honeypot */}
          <label className="sr-only">
            Website
            <input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} name="website" />
          </label>

          {/* Bundesland */}
          <div>
            <label className={labelClass}>Bundesland in Österreich *</label>
            <div className="relative">
              <select
                value={bundesland}
                onChange={(e) => setBundesland(e.target.value)}
                required
                className={`${inputClass} appearance-none pr-10 cursor-pointer`}
              >
                <option value="" disabled>Bitte auswählen …</option>
                {AT_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Projekt */}
          <div>
            <label className={labelClass}>Worum geht es bei Ihrem Projekt? <span className="text-gray-400 font-normal">(optional)</span></label>
            <textarea
              rows={3}
              value={projekt}
              onChange={(e) => setProjekt(e.target.value)}
              placeholder="z.B. neue Webseite, Onlineshop, Neukundengewinnung …"
              className={`${inputClass} resize-y`}
            />
          </div>

          {/* Name row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Vorname *</label>
              <input type="text" value={vorname} onChange={(e) => setVorname(e.target.value)} placeholder="Maria" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Nachname *</label>
              <input type="text" value={nachname} onChange={(e) => setNachname(e.target.value)} placeholder="Muster" required className={inputClass} />
            </div>
          </div>

          {/* E-Mail */}
          <div>
            <label className={labelClass}>E-Mail-Adresse *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="maria@unternehmen.at" inputMode="email" autoComplete="email" required className={inputClass} />
          </div>

          {/* Telefon */}
          <div>
            <label className={labelClass}>Telefonnummer *</label>
            <input type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} placeholder="+43 …" inputMode="tel" autoComplete="tel" required className={inputClass} />
          </div>

          {/* Error */}
          {err && (
            <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3">
              <svg className="flex-shrink-0 mt-0.5 text-red-500" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M8 5v4M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <p className="text-sm text-red-700">{err}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="w-full flex items-center justify-center gap-2 rounded-xl text-white px-5 py-3.5 font-bold text-sm shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ backgroundImage: "linear-gradient(135deg,#033EDC 0%,#00A7F9 100%)" }}
          >
            {loading ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeOpacity="0.3"/><path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
                Wird gesendet …
              </>
            ) : (
              <>
                Jetzt Förderpotenzial prüfen
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            Keine Verpflichtung · DSGVO-konform · Kostenlose Erstberatung
          </p>
        </form>
      </div>
    </div>
  );
}

const FoerderpotenzialModalNoSSR = dynamic(
  () => Promise.resolve(FoerderpotenzialModalInner),
  { ssr: false }
);

export function useFoerderpotenzialModal(props: FoerderModalProps = {}) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  const Modal = useMemo(() => {
    return function ModalImpl() {
      return <FoerderpotenzialModalNoSSR {...props} isOpen={isOpen} onClose={close} />;
    };
  }, [isOpen, close, props]);

  return { Modal, open, close, isOpen };
}
