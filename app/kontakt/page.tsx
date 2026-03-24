'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/ui/Section";

type Anfragegrund = 'Projektanfrage' | 'Presseanfrage' | 'Supportanfrage' | 'Sonstige';

const WEBHOOK_URL = 'https://hook.eu2.make.com/e6v1sjhp9f7m8osqcvx8deu36fnzl6hn';


type Status = 'idle' | 'loading' | 'success' | 'error';

type FieldErrors = Partial<Record<
  'grund' | 'vorname' | 'nachname' | 'telefon' | 'email' | 'nachricht' | 'consent',
  string
>>;

export default function KontaktPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errGlobal, setErrGlobal] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [mounted, setMounted] = useState(false);

  const [grund, setGrund] = useState<Anfragegrund>('Projektanfrage');
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [nachricht, setNachricht] = useState('');
  const [consent, setConsent] = useState(false);

  const [hp, setHp] = useState('');
  const startRef = useRef<number>(Date.now());
  const sentRef = useRef(false);

  const metaExtra = useMemo(() => {
    if (typeof window === 'undefined') return {};
    const url = new URL(window.location.href);
    const utm: Record<string, string> = {};
    ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(k => {
      const v = url.searchParams.get(k);
      if (v) utm[k] = v;
    });
    return {
      utm: Object.keys(utm).length ? utm : undefined,
      referrer: document.referrer || undefined,
    };
  }, []);

  useEffect(() => setMounted(true), []);

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (!grund) e.grund = 'Bitte Grund auswählen.';
    if (!vorname.trim()) e.vorname = 'Bitte Vornamen eingeben.';
    if (!nachname.trim()) e.nachname = 'Bitte Nachnamen eingeben.';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email = 'Bitte gültige E-Mail eingeben.';
    if (!telefon.trim()) {
      e.telefon = 'Bitte Telefonnummer eingeben.';
    } else if (!/^[\d+()\/\s-]{6,}$/.test(telefon)) {
      e.telefon = 'Bitte gültige Telefonnummer.';
    }
    if (!nachricht.trim()) e.nachricht = 'Bitte eine kurze Nachricht eingeben.';
    if (nachricht.length > 2000) e.nachricht = 'Max. 2000 Zeichen.';
    if (!consent) e.consent = 'Bitte Einwilligung bestätigen.';
    return e;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrGlobal(null);
    setErrors({});

    const elapsed = Date.now() - startRef.current;
    if (hp || elapsed < 1200) {
      setStatus('success'); 
      resetForm();
      return;
    }

    const v = validate();
    if (Object.keys(v).length) {
      setStatus('error');
      setErrors(v);
      setErrGlobal('Bitte markierte Felder prüfen.');
      return;
    }

    if (sentRef.current) return; 
    sentRef.current = true;

    const payload = {
      grund, vorname, nachname, telefon, email, nachricht,
      meta: {
        page: '/kontakt',
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : '',
        ts: new Date().toISOString(),
        ...metaExtra,
      },
    };

    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      });

      clearTimeout(t);

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `Webhook antwortete mit Status ${res.status}`);
      }

      setStatus('success');
      resetForm();
    } catch (err: any) {
      console.error('Kontakt submit failed:', err);
      setStatus('error');
      setErrGlobal(err?.message || 'Senden fehlgeschlagen. Bitte später erneut versuchen.');
      sentRef.current = false;
    }
  }

  function resetForm() {
    setGrund('Projektanfrage');
    setVorname(''); setNachname(''); setTelefon(''); setEmail(''); setNachricht('');
    setConsent(false); setHp('');
    setErrors({});
    startRef.current = Date.now();
    sentRef.current = false;
  }

  if (!mounted) return null;

  return (
    <>
      <Header />

      <Section>
        <div aria-live="polite" className="sr-only">
          {status === 'loading' && 'Wird gesendet…'}
          {status === 'success' && 'Nachricht erfolgreich gesendet.'}
          {status === 'error' && 'Es ist ein Fehler aufgetreten.'}
        </div>

        <div className="my-8">
          <h1 className="m-0 text-[clamp(2rem,3vw,3rem)] font-bold leading-tight text-slate-900">
            Kontaktiere uns
          </h1>
          <p className="mt-2 text-[15px] text-slate-600">
            Wir freuen uns über deine Nachricht – egal ob Projekt, Presse, Support oder etwas ganz anderes.
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="grid gap-4">
          <label className="sr-only">
            Website
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
            />
          </label>

          <Field label="Grund der Anfrage" error={errors.grund}>
            <div className="relative group">
              <select
                id="grund"
                aria-invalid={!!errors.grund}
                aria-describedby={errors.grund ? 'err-grund' : undefined}
                value={grund}
                onChange={(e) => setGrund(e.target.value as Anfragegrund)}
                required
                className={inputClasses('select')}
              >
                {(['Projektanfrage','Presseanfrage','Supportanfrage','Sonstige'] as Anfragegrund[])
                  .map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
              <Chevron />
            </div>
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Vorname" error={errors.vorname} htmlFor="vorname">
              <input
                id="vorname" type="text" value={vorname} onChange={(e) => setVorname(e.target.value)}
                required aria-invalid={!!errors.vorname} aria-describedby={errors.vorname ? 'err-vorname' : undefined}
                className={inputClasses()}
                placeholder="Max"
              />
            </Field>
            <Field label="Nachname" error={errors.nachname} htmlFor="nachname">
              <input
                id="nachname" type="text" value={nachname} onChange={(e) => setNachname(e.target.value)}
                required aria-invalid={!!errors.nachname} aria-describedby={errors.nachname ? 'err-nachname' : undefined}
                className={inputClasses()}
                placeholder="Mustermann"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Telefon" error={errors.telefon} htmlFor="telefon">
              <input
                id="telefon" type="tel" inputMode="tel" autoComplete="tel"
                value={telefon} onChange={(e) => setTelefon(e.target.value)}
                required
                aria-invalid={!!errors.telefon} aria-describedby={errors.telefon ? 'err-telefon' : undefined}
                className={inputClasses()}
                placeholder="+43 …"
              />
            </Field>
            <Field label="E-Mail" error={errors.email} htmlFor="email">
              <input
                id="email" type="email" inputMode="email" autoComplete="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined}
                className={inputClasses()}
                placeholder="max@firma.at"
              />
            </Field>
          </div>

          <Field
            label="Nachricht"
            error={errors.nachricht}
            htmlFor="nachricht"
          >
            <textarea
              id="nachricht" rows={6} value={nachricht} onChange={(e) => setNachricht(e.target.value)}
              required
              aria-invalid={!!errors.nachricht} aria-describedby={errors.nachricht ? 'err-nachricht' : undefined}
              className={inputClasses('textarea')}
              placeholder="Worum geht’s genau?"
              maxLength={2000}
            />
            <div className="mt-1 text-[12px] text-slate-500">
              {nachricht.length}/2000
            </div>
          </Field>

          {/* ✅ Korrigierte Checkbox */}
          <div className="mt-1">
            <label className="group relative flex cursor-pointer select-none items-start gap-3 text-[13px] text-slate-800">
              <span
                className="
                  relative flex h-5 w-5 shrink-0 items-center justify-center
                  rounded-md border border-slate-300 bg-white shadow-sm transition
                  hover:border-slate-400
                  focus-within:border-[#5e8cff]
                  focus-within:shadow-[0_0_0_4px_rgba(3,62,220,0.12)]
                "
              >
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? 'err-consent' : undefined}
                  required
                  className="
                    peer absolute inset-0 cursor-pointer appearance-none rounded-md opacity-0
                  "
                />

                {/* Hintergrund */}
                <span
                  className="
                    absolute inset-0 rounded-md border border-slate-300 bg-white
                    peer-checked:border-[#5e8cff]
                    peer-checked:bg-[#5e8cff]
                    transition-all duration-150 ease-in-out
                  "
                />

                {/* Haken */}
                <svg
                  className="
                    pointer-events-none absolute h-3.5 w-3.5 text-white opacity-0
                    transition-opacity duration-150 ease-in-out
                    peer-checked:opacity-100
                  "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>

              <span>
                Ich bin einverstanden, dass meine Angaben zur Kontaktaufnahme gespeichert und verarbeitet werden. 
                Weitere Infos in der{' '}
                <a
                  href="/datenschutz"
                  className="underline decoration-slate-300 hover:decoration-slate-500"
                >
                  Datenschutzerklärung
                </a>.
              </span>
            </label>

            {errors.consent && (
              <p id="err-consent" className="mt-1 rounded border border-red-200 bg-red-50 px-2 py-1 text-[12px] text-red-700">
                {errors.consent}
              </p>
            )}
          </div>

          {status === 'error' && errGlobal && (
            <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[13px] text-red-700">
              {errGlobal}
            </p>
          )}

          {status === 'success' && (
            <p role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-[13px] text-emerald-800">
              Danke! Deine Nachricht wurde gesendet.
            </p>
          )}

          <div className="mt-1 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={status === 'loading'}
              aria-busy={status === 'loading'}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white shadow-lg transition disabled:opacity-70 bg-gradient-to-br from-[#033EDC] to-[#00A7F9]"
            >
              {status === 'loading' ? 'Wird gesendet …' : 'Nachricht senden'}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center justify-center rounded-xl border border-[#e1e6f9] bg-gradient-to-b from-[#fbfcff] to-[#f7f9ff] px-4 py-3 text-[15px] transition hover:border-[#cfd8ff]"
            >
              Zurücksetzen
            </button>
          </div>
        </form>
      </Section>

      <Footer />
    </>
  );
}

/** ---------- kleine UI-Hilfen ---------- */

function Field({
  label,
  children,
  error,
  htmlFor,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  htmlFor?: string;
  hint?: string;
}) {
  const errId = error ? `err-${(htmlFor || label).toLowerCase()}` : undefined;
  return (
    <label className="grid gap-2 text-[13px] text-slate-800" htmlFor={htmlFor}>
      <span>{label}</span>
      {children}
      {hint && !error && <span className="text-[12px] text-slate-500">{hint}</span>}
      {error && (
        <p id={errId} className="rounded border border-red-200 bg-red-50 px-2 py-1 text-[12px] text-red-700">
          {error}
        </p>
      )}
    </label>
  );
}

function inputClasses(kind: 'input' | 'textarea' | 'select' = 'input') {
  const base =
    'w-full rounded-xl border border-[#e1e6f9] bg-gradient-to-b from-[#fbfcff] to-[#f7f9ff] px-4 py-3 text-[15px] outline-none transition ' +
    'focus:border-[#7ea8ff] focus:shadow-[0_0_0_4px_rgba(3,62,220,0.12)]';

  if (kind === 'select') {
    return [
      'w-full rounded-xl pr-12 appearance-none',
      'border border-[#e1e6f9] shadow-sm',
      'bg-white/90 supports-[backdrop-filter]:bg-white/70 backdrop-blur',
      'px-4 py-3 text-[15px] outline-none transition',
      'hover:border-[#d6defa]',
      'focus:border-[#5e8cff] focus:shadow-[0_0_0_6px_rgba(3,62,220,0.10)]',
      'aria-[invalid=true]:border-red-300 aria-[invalid=true]:focus:shadow-[0_0_0_6px_rgba(220,38,38,0.10)]'
    ].join(' ');
  }

  if (kind === 'textarea') return base + ' resize-vertical';
  return base;
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20" aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
    >
      <path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
