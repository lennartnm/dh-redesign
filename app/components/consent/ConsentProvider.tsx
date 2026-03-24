'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type ConsentCategory = 'necessary' | 'preferences' | 'statistics' | 'marketing';
export type ConsentState = Record<ConsentCategory, boolean>;

const STORAGE_KEY = 'consent.v1';

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,        // immer true, nicht abwählbar
  preferences: false,
  statistics: false,
  marketing: false,
};

type ConsentContextValue = {
  consent: ConsentState;
  setConsent: (next: ConsentState) => void;
  updateConsent: (patch: Partial<ConsentState>) => void;
  ready: boolean; // sobald vom Storage geladen
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentState>(DEFAULT_CONSENT);
  const [ready, setReady] = useState(false);

  // load persisted
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ConsentState;
        setConsentState({ ...DEFAULT_CONSENT, ...parsed, necessary: true });
      }
    } catch {}
    setReady(true);
  }, []);

  // persist + update Consent Mode v2
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {}

    // Google Consent Mode v2 bridge (falls gtag geladen ist)
    // Default auf "denied", dann je nach Consent freigeben.
    const hasGtag = typeof window !== 'undefined' && (window as any).gtag;
    if (hasGtag) {
      (window as any).gtag('consent', 'update', {
        ad_personalization: consent.marketing ? 'granted' : 'denied',
        ad_user_data: consent.marketing ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        analytics_storage: consent.statistics ? 'granted' : 'denied',
        functionality_storage: consent.preferences ? 'granted' : 'denied',
        security_storage: 'granted', // notwendig
      });
    }
  }, [consent, ready]);

  const setConsent = (next: ConsentState) => {
    setConsentState({ ...next, necessary: true });
  };

  const updateConsent = (patch: Partial<ConsentState>) => {
    setConsentState(prev => ({ ...prev, ...patch, necessary: true }));
  };

  const value = useMemo<ConsentContextValue>(() => ({
    consent, setConsent, updateConsent, ready
  }), [consent, ready]);

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error('useConsent must be used within <ConsentProvider>');
  return ctx;
}
