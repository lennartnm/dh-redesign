'use client';

import React, { useEffect, useState } from 'react';
import { useConsent, type ConsentState } from '@/app/components/consent/ConsentProvider';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-[15px] font-semibold transition focus:outline-none focus-visible:ring-4 ring-[#7ea8ff]/40';
  const styles = {
    primary: base + ' text-white shadow-lg bg-gradient-to-br from-[#033EDC] to-[#00A7F9]',
    secondary: base + ' border border-[#e1e6f9] bg-gradient-to-b from-[#fbfcff] to-[#f7f9ff] text-slate-900',
    ghost: base + ' text-slate-700 hover:bg-slate-100',
  } as const;

  return (
    <button type="button" className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

const DECIDED_KEY = 'cookie_decided_v1';

export default function CookieBanner() {
  const { consent, setConsent, updateConsent, ready } = useConsent();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [local, setLocal] = useState<ConsentState>(consent);

  // Sync lokaler Zustand mit globalem Consent
  useEffect(() => {
    setLocal(consent);
  }, [consent]);

  // Banner nur zeigen, wenn noch keine Entscheidung (unabhängig von Provider-Defaults)
  useEffect(() => {
    if (!ready) return;
    const decided = typeof window !== 'undefined' && localStorage.getItem(DECIDED_KEY) === '1';
    setOpen(!decided);
  }, [ready]);

  // *** NEU: Öffnen per Footer-Link / global ***
  useEffect(() => {
    // globale Helper-Funktion
    (window as any).openCookieBanner = () => {
      setOpen(true);
      setDetails(true); // öffnet direkt die Details
    };

    // Custom Event
    const onOpen = () => {
      setOpen(true);
      setDetails(true);
    };
    window.addEventListener('open-cookie-banner', onOpen);

    return () => {
      try {
        delete (window as any).openCookieBanner;
      } catch {}
      window.removeEventListener('open-cookie-banner', onOpen);
    };
  }, []);

  if (!open) return null;

  const markDecided = () => {
    try {
      localStorage.setItem(DECIDED_KEY, '1');
    } catch {
      // Ignorieren (z.B. Safari Private Mode)
    }
  };

  const acceptAll = () => {
    const next: ConsentState = {
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    };
    setConsent(next);
    markDecided();
    setOpen(false);
  };

  const denyAll = () => {
    const next: ConsentState = {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    };
    setConsent(next);
    markDecided();
    setOpen(false);
  };

  const saveSelection = () => {
    // necessary bleibt immer true
    updateConsent({ ...local, necessary: true });
    markDecided();
    setOpen(false);
  };

  const Toggle = ({
    label,
    sub,
    value,
    onChange,
    disabled,
  }: {
    label: string;
    sub?: string;
    value: boolean;
    onChange: (v: boolean) => void;
    disabled?: boolean;
  }) => (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-[#e1e6f9] bg-gradient-to-b from-[#fbfcff] to-[#f7f9ff] p-4">
      <div className="text-sm">
        <div className="font-semibold text-slate-800">
          {label}
          {disabled && ' (immer aktiv)'}
        </div>
        {sub && <div className="text-slate-600">{sub}</div>}
      </div>
      <label className="relative inline-flex cursor-pointer items-center select-none" aria-label={label}>
        <input
          type="checkbox"
          className="peer sr-only"
          checked={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          aria-checked={value}
        />
        <div className="h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-[#00A7F9]" />
        <div className="absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
      </label>
    </div>
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-[9998] flex justify-center p-3 md:p-4"
    >
      <div
        className="w-full max-w-5xl rounded-t-2xl md:rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 p-4 sm:p-6 md:p-8"
        style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 1rem)' }}
      >
        {/* Header + Actions */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 md:gap-6 items-start">
          <div className="md:pr-6">
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold leading-tight text-slate-900">
              Cookies &amp; Tracking
            </h2>
            <p className="mt-1 text-sm md:text-[15px] text-slate-600">
              Wir verwenden Cookies für grundlegende Funktionen sowie optional für Präferenzen, Statistik und Marketing.
              Sie können Ihre Auswahl jederzeit anpassen. Mehr in unserer{' '}
              <a className="underline decoration-slate-300 hover:decoration-slate-500" href="/datenschutz">
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 md:items-end">
            <div className="flex flex-col md:flex-row md:flex-wrap gap-2 w-full md:w-auto">
              <Button onClick={acceptAll} className="w-full md:w-auto">
                Alle akzeptieren
              </Button>
              <Button variant="secondary" onClick={denyAll} className="w-full md:w-auto">
                Nur notwendige
              </Button>
              <Button
                variant="ghost"
                onClick={() => setDetails((v) => !v)}
                aria-expanded={details}
                aria-controls="cookie-details"
                className="w-full md:w-auto"
              >
                {details ? 'Details ausblenden' : 'Details anzeigen'}
              </Button>
            </div>
            <nav aria-label="Rechtliches" className="mt-1 text-center md:text-right text-[13px] text-slate-600">
              <ul className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 gap-y-1">
                <li>
                  <a href="/impressum" className="underline decoration-slate-300 hover:decoration-slate-500">
                    Impressum
                  </a>
                </li>
                <li className="text-slate-300">•</li>
                <li>
                  <a href="/datenschutz" className="underline decoration-slate-300 hover:decoration-slate-500">
                    Datenschutz
                  </a>
                </li>
                <li className="text-slate-300">•</li>
                <li>
                  <a href="/agb" className="underline decoration-slate-300 hover:decoration-slate-500">
                    AGB
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-slate-100" />

        {details && (
          <div id="cookie-details" className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <Toggle
              label="Notwendig"
              sub="Erforderlich für grundlegende Funktionen der Website."
              value={true}
              onChange={() => {}}
              disabled
            />
            <Toggle
              label="Präferenzen"
              sub="Merkt sich Einstellungen wie Sprache oder Region."
              value={local.preferences}
              onChange={(v) => setLocal((prev) => ({ ...prev, preferences: v }))}
            />
            <Toggle
              label="Statistik"
              sub="Hilft uns zu verstehen, wie Besucher unsere Website nutzen (anonym)."
              value={local.statistics}
              onChange={(v) => setLocal((prev) => ({ ...prev, statistics: v }))}
            />
            <Toggle
              label="Marketing"
              sub="Wird verwendet, um Inhalte/Anzeigen zu personalisieren."
              value={local.marketing}
              onChange={(v) => setLocal((prev) => ({ ...prev, marketing: v }))}
            />

            <div className="md:col-span-2 mt-1 flex flex-col md:flex-row md:flex-wrap gap-2">
              <Button onClick={saveSelection} variant="secondary" className="w-full md:w-auto">
                Auswahl speichern
              </Button>
              <Button onClick={acceptAll} className="w-full md:w-auto">
                Alle akzeptieren
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
