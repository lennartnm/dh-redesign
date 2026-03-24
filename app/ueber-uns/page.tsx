// app/ueber-uns/page.tsx  (Next.js App Router)
import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Section from "../components/ui/Section";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Über uns – Digitalisierungshilfe",
  description:
    "Mehr über die Digitalisierungshilfe - Ihr Partner für erfolgreiche digitale Kundenakquise.",
};

// --- Reveal Wrapper (Server Component) ---
function Reveal({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      data-reveal
      data-reveal-delay={String(delay)}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(10px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />

      {/* --- Styles (server-safe) --- */}
      <style>{`
        /* Initialzustand */
        [data-reveal] {
          opacity: 0;
          transform: translateY(10px);
        }

        /* CSS-Fallback-Animation */
        .reveal-prep {
          will-change: opacity, transform;
        }
        .reveal-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition-property: opacity, transform, filter;
          transition-duration: 500ms;
          transition-timing-function: cubic-bezier(0.16,1,0.3,1);
        }

        /* Optionaler leichter Blur – nur wenn performant */
        .reveal-blur-start { filter: blur(1px); }
        .reveal-blur-end { filter: blur(0); }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>

      {/* 1) Split-Hero */}
      <Section className="py-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-center">
            <Reveal delay={0}>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900">
                  Wir bauen Sichtbarkeit, die verkauft.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 text-neutral-600 text-lg">
                Als Digitalisierungshilfe begleiten wir Österreichs KMU & Selbstständige zu mehr Sichtbarkeit, qualifizierten Anfragen und optimal genutzten Förderungen.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Webseiten",
                "Landingpages",
                "Meta, Google & LinkedIn Anzeigen",
                "Künstliche Intelligenz",
              ].map((t, i) => (
                <Reveal key={t} delay={0.24 + i * 0.12}>
                  <span className="rounded-full border border-neutral-300 bg-white/70 backdrop-blur px-3 py-1 text-xs">
                    {t}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bildspalte */}
          <Reveal delay={0.72}>
            <div
              className="
                relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm
                aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto lg:min-h-[480px]
              "
            >
              <Image
                src="/Schritt3.webp"
                alt="Digitalisierungshilfe – Team bei der Arbeit"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
                priority
              />
              {/* Overlay-Label */}
              <div className="absolute inset-x-0 bottom-0">
                <div className="h-28 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                  <h2 className="text-white text-lg font-medium">Digitalisierungshilfe</h2>
                  <p className="text-white/80 text-sm mt-1">Ihr Erfolg ist unser Ziel.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 2) Drei Kern-Versprechen */}
      <Section className="py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Fokus auf Ergebnisse",
              body:
                "Wir planen rückwärts von klaren Zielen: Leads, Umsatz, Besucher – was immer für Sie zählt.",
            },
            {
              title: "Einfach. Verständlich.",
              body:
                "Wir erklären unsere Strategie, Optimierungen und unser Vorgehen leicht verständlich.",
            },
            {
              title: "Verantwortung & Zahlen",
              body:
                "Wir haben alle Zahlen im Überblick. Denn online gilt: Wer mehr weiß, gewinnt.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <div className="relative rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur overflow-hidden shadow-sm">
                {/* Highlight-Leiste in #0367EC */}
                <div className="h-[5px] w-full bg-[#0367EC]" />
                <div className="prose prose-neutral max-w-none">
                  <h3 className="text-xl font-semibold tracking-tight mt-5 mx-5">{c.title}</h3>
                  <p className="text-sm text-neutral-600 mt-2 mx-5 mb-6">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3) Prozess – Timeline */}
      <Section className="py-12">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">So arbeiten wir</h2>
          <ol className="mt-8">
            {[
              { k: "1", t: "Erstgespräch", d: "Wir hören zu, verstehen Ziele & Rahmenbedingungen." },
              { k: "2", t: "Strategie", d: "Gemeinsam finden wir die für Dich sinnvollste und effektivste Strategie." },
              { k: "3", t: "Förderpotenzial", d: "Wir nutzen unsere Förderexpertise in Österreich und identifizieren passende Gelder." },
              { k: "4", t: "Umsetzung", d: "Ihr Digitalprojekt wird professionell und ergebnisorientiert umgesetzt." },
            ].map((s, idx, arr) => (
              <Reveal key={s.k} delay={idx * 0.12}>
                <li className="relative group pl-12 pb-8 last:pb-0">
                  <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-neutral-300 bg-white font-semibold text-sm">
                    {s.k}
                  </span>
                  <div
                    className={`absolute left-4 top-8 bottom-0 w-px bg-neutral-200 ${
                      idx === arr.length - 1 ? "hidden" : "block"
                    }`}
                  />
                  <h3 className="text-lg font-medium tracking-tight">{s.t}</h3>
                  <p className="text-sm text-neutral-600 mt-1 max-w-2xl">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* 5) Full-bleed Bildstreifen */}
      <Section className="py-2">
        <Reveal delay={0}>
          <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="relative aspect-[21/9]">
              <Image
                src="/digitalisierungshilfe-team.jpg"
                alt="Arbeitsatmosphäre"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </Reveal>
      </Section>

      <ContactCTA />
      <Footer />

      {/* --- Script: IntersectionObserver + WAAPI mit Fallback & Safeguards --- */}
      <Script id="reveal-init" strategy="afterInteractive">{`
(function(){
  if (typeof window === 'undefined') return;

  var d = document;
  var supportsWAAPI = typeof Element !== 'undefined' && Element.prototype && typeof Element.prototype.animate === 'function';
  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Heuristik: Low-End-Geräte → kein Blur
  var deviceMemory = navigator.deviceMemory || 0;
  var cores = navigator.hardwareConcurrency || 2;
  var lowEnd = (deviceMemory && deviceMemory <= 4) || cores <= 4;

  function prep(el){
    el.classList.add('reveal-prep');
    if (!lowEnd) el.classList.add('reveal-blur-start');
  }

  function cleanup(el){
    el.classList.remove('reveal-prep','reveal-blur-start','reveal-blur-end');
    el.style.willChange = '';
  }

  function animateInWAAPI(el){
    el.style.willChange = 'opacity, transform';
    var delaySec = parseFloat(el.getAttribute('data-reveal-delay') || '0');

    var frames = !lowEnd
      ? [
          { opacity: 0, transform: 'translateY(10px)', filter: 'blur(1px)' },
          { opacity: 1, transform: 'translateY(0)',    filter: 'blur(0)'   }
        ]
      : [
          { opacity: 0, transform: 'translateY(10px)' },
          { opacity: 1, transform: 'translateY(0)'    }
        ];

    var anim = el.animate(frames, {
      duration: 550,
      delay: Math.max(0, delaySec) * 1000,
      easing: 'cubic-bezier(0.16,1,0.3,1)',
      fill: 'forwards'
    });

    anim.onfinish = function(){ cleanup(el); };
    anim.oncancel  = function(){ cleanup(el); };
  }

  function animateInCSS(el){
    el.style.willChange = 'opacity, transform';
    if (!lowEnd) el.classList.add('reveal-blur-start');

    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        if (!lowEnd) el.classList.add('reveal-blur-end');
        el.classList.add('reveal-in');
        setTimeout(function(){ cleanup(el); }, 650);
      });
    });
  }

  function reveal(el){
    if (el.__revealed) return;
    el.__revealed = true;

    if (prefersReduced) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
      return;
    }

    prep(el);

    try { supportsWAAPI ? animateInWAAPI(el) : animateInCSS(el); }
    catch(e){ animateInCSS(el); }
  }

  function init(){
    var items = Array.prototype.slice.call(d.querySelectorAll('[data-reveal]'));
    if (!items.length) return;

    var io = new IntersectionObserver(function(entries){
      var toReveal = [];
      entries.forEach(function(entry){
        if (entry.isIntersecting) toReveal.push(entry.target);
      });
      if (!toReveal.length) return;

      requestAnimationFrame(function(){
        toReveal.forEach(function(el){
          reveal(el);
          io.unobserve(el);
        });
      });
    }, { threshold: 0.15, rootMargin: '20% 0px -5% 0px' });

    items.forEach(function(el){ io.observe(el); });

    // Kickstart: falls Elemente schon sichtbar sind (ohne IO-Entry)
    items.forEach(function(el){
      var r = el.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.85 && r.bottom > 0) {
        reveal(el);
        io.unobserve(el);
      }
    });

    // Hydration/Streaming-Nachzügler
    var root = d.querySelector('main') || d.body;
    var mo = new MutationObserver(function(muts){
      muts.forEach(function(m){
        Array.prototype.slice.call(m.addedNodes || []).forEach(function(n){
          if (!(n instanceof Element)) return;
          var candidates = n.matches && n.matches('[data-reveal]') ? [n] :
            Array.prototype.slice.call(n.querySelectorAll ? n.querySelectorAll('[data-reveal]') : []);
          candidates.forEach(function(el){
            if (el.__revealed) return;
            io.observe(el);
          });
        });
      });
    });
    mo.observe(root, { childList: true, subtree: true });

    // Sicherheitsnetz
    setTimeout(function(){
      Array.prototype.slice.call(d.querySelectorAll('[data-reveal]')).forEach(function(el){
        if (!el.__revealed) io.observe(el);
      });
    }, 3000);
  }

  // Sicher nach Hydration starten
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    requestAnimationFrame(init);
  } else {
    document.addEventListener('DOMContentLoaded', function(){ requestAnimationFrame(init); }, { once: true, passive: true });
  }
})();
      `}</Script>
    </main>
  );
}
