import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";
import { ConsentProvider } from "@/app/components/consent/ConsentProvider";
import CookieBanner from "@/app/components/consent/CookieBanner";

export const metadata = {
  title: "Digitalisierungshilfe – Digitale Sichtbarkeit für Ihr Unternehmen",
  description: "Professionelle Webentwicklung, digitales Marketing und Förderberatung für KMU in Österreich.",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-VFG1TZNGP9";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
          window.updateGtagConsent = function(granted) {
            gtag('consent', 'update', {
              'analytics_storage': granted ? 'granted' : 'denied',
              'ad_storage': 'denied'
            });
          };
        `}</Script>
        <ConsentProvider>
          {children}
          <CookieBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
