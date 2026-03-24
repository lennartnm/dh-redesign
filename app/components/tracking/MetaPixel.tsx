'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { useConsent } from '@/app/components/consent/ConsentProvider';

type Props = {
  pixelId?: string; // optional: überschreibt ENV/Fallback
};

export default function MetaPixel({ pixelId }: Props) {
  const { consent, ready } = useConsent();

  // Reihenfolge: prop -> ENV -> fester Fallback (deine ID)
  const id =
    pixelId ||
    process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ||
    '920433956040029';

  // nur rendern, wenn Marketing erlaubt & ID vorhanden
  const enabled = ready && consent.marketing && !!id;

  useEffect(() => {
    if (!enabled) return;
    // Basisevent PageView bei Route-Change
    const handler = () => {
      try { (window as any).fbq?.('track', 'PageView'); } catch {}
    };
    // App Router Navigationen: auf popstate hören
    window.addEventListener('popstate', handler);
    // initialer PageView
    handler();
    return () => window.removeEventListener('popstate', handler);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <Script id="fbq-base" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${id}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* Fallback Pixel */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

// Optionaler Helper
export function trackMeta(event: string, params?: Record<string, unknown>) {
  try { (window as any).fbq?.('track', event, params || {}); } catch {}
}
