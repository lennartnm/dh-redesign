'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { useConsent } from '@/app/components/consent/ConsentProvider';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = { measurementId?: string };

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics({ measurementId }: Props) {
  const { consent, ready } = useConsent();
  const GA_ID = measurementId || 'G-KNPVMQJQGL';

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Consent Mode v2: sehr restriktive Defaults (vor jedem anderen Script)
  const consentDefaults = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      ad_personalization: 'denied',
      ad_user_data: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      security_storage: 'granted'
    });
  `;

  // 1) Consent-Update, sobald der Consent-Provider "ready" ist oder sich ändert
  useEffect(() => {
    if (!ready || !window.gtag) return;

    // Mappe deine Consent-Flags auf Consent Mode v2
    window.gtag('consent', 'update', {
      analytics_storage: consent?.statistics ? 'granted' : 'denied',
      functionality_storage: consent?.necessary ? 'granted' : 'denied',
      security_storage: 'granted',
      ad_storage: consent?.marketing ? 'granted' : 'denied',
      ad_user_data: consent?.marketing ? 'granted' : 'denied',
      ad_personalization: consent?.marketing ? 'granted' : 'denied',
    });
  }, [ready, consent]);

  // 2) SPA-Pageviews: sende nur, wenn Statistik erlaubt
  useEffect(() => {
    if (!ready || !consent?.statistics || !window.gtag) return;

    const url =
      pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    // Manuelles Pageview-Event (send_page_view ist global deaktiviert)
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: url,
      // optional: send_to: GA_ID
    });
  }, [ready, consent?.statistics, pathname, searchParams]);

  return (
    <>
      {/* 0) Consent-Defaults immer zuerst */}
      <Script id="ga-consent-defaults" strategy="afterInteractive">
        {consentDefaults}
      </Script>

      {/* 1) GA4 Loader immer laden (Consent Mode steuert Speicherung) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* 2) GA4 Init: send_page_view deaktivieren, config nur einmal */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
