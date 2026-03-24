"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import Section from "../components/ui/Section";

/* ===========================
   Utilities & Hooks
=========================== */

/** MediaQuery-Hook (synchron zu Tailwind-Breakpoints) */
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean>(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return false;
    return window.matchMedia(query).matches;
  });

  React.useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mql = window.matchMedia(query);
    const handler = () => setMatches(mql.matches);
    handler();
    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, [query]);

  return matches;
}

/** Kombinierte In-View-Erkennung (IO + rAF-Fallback) – cross-browser stabil */
function useInViewport<T extends HTMLElement>(opts?: {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const rootMargin = opts?.rootMargin ?? "400px 0px";
    const threshold =
      typeof opts?.threshold === "number"
        ? opts?.threshold
        : Array.isArray(opts?.threshold)
        ? opts?.threshold
        : 0.01;

    let io: IntersectionObserver | null = null;
    let cancelled = false;

    // 1) IntersectionObserver
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setInView(true);
              io?.disconnect();
              break;
            }
          }
        },
        { root: opts?.root ?? null, rootMargin, threshold }
      );
      io.observe(el);
    }

    // 2) rAF-/Scroll-Fallback
    let rafId = 0;
    const check = () => {
      if (cancelled || !el) return;
      const rect = el.getBoundingClientRect();
      const vpH = window.innerHeight || document.documentElement.clientHeight;
      const vpW = window.innerWidth || document.documentElement.clientWidth;
      const margin = 400; // grober rootMargin-Ersatz
      const horiz = rect.left < vpW && rect.right > 0;
      const vert = rect.top < vpH + margin && rect.bottom > -margin;
      if (horiz && vert) {
        setInView(true);
        detach();
        return;
      }
      rafId = window.requestAnimationFrame(check);
    };

    const onScroll = () => {
      if (!inView) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = window.requestAnimationFrame(check);
      }
    };

    const attach = () => {
      rafId = window.requestAnimationFrame(check);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      window.addEventListener("orientationchange", onScroll);
      document.addEventListener("visibilitychange", onScroll);
    };
    const detach = () => {
      io?.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
      document.removeEventListener("visibilitychange", onScroll);
    };

    attach();
    return () => {
      cancelled = true;
      detach();
    };
  }, [opts?.root, opts?.rootMargin, opts?.threshold, inView]);

  return { ref, inView } as const;
}

/** Pointer-/Touch-Signale (iPadOS-Erkennung nur als Hint) */
function usePointerSignals() {
  const [signals, setSignals] = React.useState(() => ({
    hover: false,
    fine: false,
    anyFine: false,
    touchPoints:
      typeof navigator !== "undefined" ? navigator.maxTouchPoints || 0 : 0,
    isIPadOS: false,
  }));

  React.useEffect(() => {
    const mm = (q: string) =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia(q).matches;

    const isIPadOS =
      typeof navigator !== "undefined" &&
      navigator.platform === "MacIntel" &&
      (navigator as any).maxTouchPoints > 1;

    setSignals({
      hover: !!mm("(hover: hover)"),
      fine: !!mm("(pointer: fine)"),
      anyFine: !!mm("(any-pointer: fine)"),
      touchPoints:
        typeof navigator !== "undefined" ? navigator.maxTouchPoints || 0 : 0,
      isIPadOS,
    });
  }, []);

  return signals;
}

/** SSR-sicheres Layout-Effect */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

/* ===========================
   Types
=========================== */
interface ResultItem {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

type Category = "marketing" | "web";

interface CaseStudy {
  id: string;
  category: Category;
  title: string;
  subtitle: React.ReactNode;
  image?: { src: string; alt: string };
  url?: string;
  results: ResultItem[];
}

/* ===========================
   Websites + feste KPI-Werte
=========================== */
function hostnameFromUrl(url: string) {
  try {
    const u = new URL(url);
    return u.hostname.replace("www.", "");
  } catch {
    return url;
  }
}

const WEB_EMBED_NOTE =
  "Sie kannst Dir die Webseite direkt im Fenster anschauen. Alternativ klicke hier und öffne die Webseite in einem neuen Tab.";

const WEBSITE_KPIS: { url: string; projektTage: number; foerd: number }[] = [
  { url: "https://qomuniq.com/", projektTage: 27, foerd: 32 },
  { url: "https://kalida.at/", projektTage: 16, foerd: 51 },
  { url: "https://www.holzwerke-hermsdorf.de/", projektTage: 31, foerd: 42 },
  { url: "https://assetpro.cy/", projektTage: 14, foerd: 30 },
  { url: "https://herzensfrische.at/", projektTage: 30, foerd: 59 },
  { url: "https://www.ichzeit.at/", projektTage: 12, foerd: 35 },
  { url: "https://www.trisol.at/", projektTage: 25, foerd: 40 },
  { url: "https://www.restaurant-littleitaly.at/", projektTage: 20, foerd: 55 },
  { url: "https://www.hermapro.com/", projektTage: 18, foerd: 75 },
  { url: "https://bellasofia.at/", projektTage: 22, foerd: 33 },
  { url: "https://worldofboxspring.com/", projektTage: 14, foerd: 42 },
  { url: "https://www.ihr-friseur-villach.at/", projektTage: 15, foerd: 62 },
  { url: "https://www.supremeglanz.at/", projektTage: 23, foerd: 70 },
  { url: "https://fuxtecshop.ch/", projektTage: 20, foerd: 31 },
  { url: "https://medicalinks.at/", projektTage: 26, foerd: 47 },
  { url: "http://naturgefluester.at/", projektTage: 15, foerd: 42 },
  { url: "https://pv-profi.info/", projektTage: 14, foerd: 47 },
  { url: "https://www.malandro-fashion.com/", projektTage: 21, foerd: 50 },
  { url: "http://ibt-transporte.at/", projektTage: 23, foerd: 48 },
  { url: "https://www.zirbenwelt.at/", projektTage: 18, foerd: 32 },
  { url: "https://raumklimaservice.at/", projektTage: 13, foerd: 37 },
  { url: "https://www.gkt.at/", projektTage: 21, foerd: 32 },
  { url: "https://www.the24-7market.at/", projektTage: 19, foerd: 33 },
  { url: "https://colline-d-ulivi.com/", projektTage: 24, foerd: 38 },
  { url: "https://www.calypso.wien/", projektTage: 26, foerd: 71 },
  { url: "http://die-salzerei.at/", projektTage: 23, foerd: 35 },
  { url: "https://stampfl-bau.at/", projektTage: 23, foerd: 62 },
  { url: "https://www.lambretta-salzburg.at/", projektTage: 18, foerd: 72 },
  { url: "https://adamaris.de/", projektTage: 20, foerd: 50 },
  { url: "https://www.alarchitekt.at/", projektTage: 14, foerd: 49 },
  { url: "https://czinger-jakob.onepage.me/", projektTage: 17, foerd: 47 },
];

const WEBSITE_CASES: CaseStudy[] = WEBSITE_KPIS.map((item, i) => ({
  id: `web-site-${i + 1}`,
  category: "web",
  title: hostnameFromUrl(item.url),
  subtitle: WEB_EMBED_NOTE,
  url: item.url,
  results: [
    { label: "Projektzeitraum", value: item.projektTage, suffix: " Tage" },
    { label: "Status", value: 100, suffix: "% online" },
    { label: "Förderung", value: item.foerd, suffix: "%" },
  ],
}));

/* ===========================
   Data (Marketing + Web)
=========================== */
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mkt-1",
    category: "marketing",
    title: "173.000€ abgeschlossener Umsatz im Monat",
    subtitle:
      "Für einen digitalen Dienstleister durften wir die Marketing- und internen Vertriebsprozesse übernehmen.",
    image: { src: "/fallstudie.m1.jpg", alt: "Marketing Case 1" },
    results: [
      { label: "6-Monats Wachstum", value: 110, suffix: "%" },
      { label: "Kosten pro Anfrage", value: 11.34, suffix: "€" },
      { label: "Marketingausgaben", value: 9743, suffix: "€" },
    ],
  },
  {
    id: "mkt-2",
    category: "marketing",
    title: "Mit dem ersten Webinar zu 2.000€ Gewinn",
    subtitle:
      "Mit einer unserer Kundinnen im Fitnessbereich veranstalteten wir ein Webinar mit kleinem dreistelligen Marketingbudget.",
    image: { src: "/fallstudie.m2.jpg", alt: "Marketing Case 2" },
    results: [
      { label: "Hochpreis-Kunden", value: 2 },
      { label: "Return on Invest", value: 10, suffix: "x" },
      { label: "Systemvalidierung", value: 100, suffix: "%" },
    ],
  },
  {
    id: "mkt-3",
    category: "marketing",
    title: "Sechs neue Hochpreis-Kundinnen auf Autopilot",
    subtitle:
      "In der Weiterbildungsbranche durften wir einer unserer Kundinnen mit einem Webinar-on-Demand zu sechs neuen Teilnehmerinnen verhelfen (Wert je 1.100€).",
    image: { src: "/fallstudie.m3.jpg", alt: "Marketing Case 3" },
    results: [
      { label: "Zeitinvest pro Tag", value: 30, suffix: "Min" },
      { label: "Return on Adspend", value: 12, suffix: "x" },
      { label: "Webinarteilnehmer", value: 167 },
    ],
  },
  ...WEBSITE_CASES,
];

/* ===========================
   UI Bits
=========================== */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
}) {
  return (
    <header>
      {eyebrow && (
        <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 text-base md:text-lg">{subtitle}</p>
      )}
    </header>
  );
}

function ResultsStatic({ items }: { items: ResultItem[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((it, idx) => {
        const formatted = it.value.toLocaleString("de-DE");
        return (
          <div
            key={idx}
            className="min-w-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm overflow-hidden"
          >
            <div className="text-2xl md:text-3xl text-gray-900 break-words">
              {(it.prefix ?? "") + formatted + (it.suffix ?? "")}
            </div>
            <p className="mt-1 text-sm text-gray-600 break-words">{it.label}</p>
          </div>
        );
      })}
    </div>
  );
}

/* ===========================
   Slot-Queue (limit concurrency)
=========================== */
const IFRAMES_MAX_CONCURRENT = 3;
const iframeLoadQueue: Array<() => void> = [];
let iframeActiveLoads = 0;

function requestIframeSlot() {
  return new Promise<void>((resolve) => {
    const tryStart = () => {
      if (iframeActiveLoads < IFRAMES_MAX_CONCURRENT) {
        iframeActiveLoads++;
        resolve();
      } else {
        iframeLoadQueue.push(tryStart);
      }
    };
    tryStart();
  });
}
function releaseIframeSlot() {
  iframeActiveLoads = Math.max(0, iframeActiveLoads - 1);
  const next = iframeLoadQueue.shift();
  if (next) next();
}

/* ===========================
   AutoIframe (optional nutzbar)
=========================== */
const DESKTOP_BASE_W = 1280;
const DESKTOP_BASE_H = 800;

function AutoIframe({
  url,
  title,
  baseWidth = DESKTOP_BASE_W,
  baseHeight = DESKTOP_BASE_H,
  onLoad,
  onError,
  forceMode,
  srcOverride,
  overlay = false,
  hidden = false,
}: {
  url: string;
  title: string;
  baseWidth?: number;
  baseHeight?: number;
  onLoad?: React.ReactEventHandler<HTMLIFrameElement>;
  onError?: React.ReactEventHandler<HTMLIFrameElement>;
  forceMode?: "mobile" | "desktop";
  srcOverride?: string | null;
  overlay?: boolean;
  hidden?: boolean;
}) {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);
  const [scale, setScale] = React.useState(1);
  const [mode, setMode] = React.useState<"mobile" | "desktop" | null>(null);
  const { hover, fine, anyFine, touchPoints, isIPadOS } = usePointerSignals();

  const mobileReservedHeight = "clamp(420px, 75vh, 900px)";

  const suppressFocusFor = React.useCallback((ms: number) => {
    const start = typeof performance !== "undefined" ? performance.now() : 0;
    const loop = () => {
      if (!iframeRef.current) return;
      try {
        iframeRef.current.blur();
      } catch {}
      if (typeof performance !== "undefined" && performance.now() - start < ms) {
        requestAnimationFrame(loop);
      }
    };
    requestAnimationFrame(loop);
  }, []);

  useIsomorphicLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const decide = () => {
      if (forceMode) {
        if (forceMode === "desktop") {
          const w = el.clientWidth;
          setScale(Math.min(1, w / baseWidth));
        }
        setMode(forceMode);
        return;
      }
      const w = el.clientWidth;
      const enoughHeight =
        typeof window !== "undefined" ? window.innerHeight >= 640 : true;
      const hintFine = anyFine || fine || (hover && touchPoints === 0);
      const isDesktop =
        !isIPadOS && enoughHeight && (w >= 1024 || (w >= 900 && hintFine));
      setMode(isDesktop ? "desktop" : "mobile");
      setScale(isDesktop ? Math.min(1, w / baseWidth) : 1);
    };

    decide();
    const ro = new ResizeObserver(decide);
    ro.observe(el);
    window.addEventListener("orientationchange", decide);
    window.addEventListener("resize", decide);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", decide);
      window.removeEventListener("resize", decide);
    };
  }, [baseWidth, anyFine, fine, hover, touchPoints, isIPadOS, forceMode]);

  const iframeStyle: React.CSSProperties =
    mode === "desktop"
      ? {
          width: baseWidth,
          height: baseHeight,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          border: 0,
          display: "block",
          visibility: hidden ? "hidden" : "visible",
          pointerEvents: hidden ? "none" : "auto",
        }
      : mode === "mobile"
      ? {
          width: "100%",
          height: mobileReservedHeight,
          border: 0,
          display: "block",
          touchAction: "pan-x pan-y",
          visibility: hidden ? "hidden" : "visible",
          pointerEvents: hidden ? "none" : "auto",
        }
      : {
          width: "100%",
          height: mobileReservedHeight,
          border: 0,
          display: "block",
          visibility: hidden ? "hidden" : "visible",
          pointerEvents: hidden ? "none" : "auto",
        };

  const outerStyle: React.CSSProperties = overlay
    ? { position: "absolute", inset: 0 }
    : mode === "desktop"
    ? { height: Math.round(baseHeight * scale) }
    : { height: mobileReservedHeight };

  const handleLoad: React.ReactEventHandler<HTMLIFrameElement> = (e) => {
    try {
      (e.currentTarget as HTMLIFrameElement).blur();
    } catch {}
    try {
      iframeRef.current?.blur();
    } catch {}
    try {
      suppressFocusFor(500);
    } catch {}
    onLoad?.(e);
  };

  return (
    <div ref={wrapRef} className="relative w-full" style={outerStyle}>
      <iframe
        ref={iframeRef}
        tabIndex={-1}
        title={title}
        src={srcOverride ?? url}
        width={mode === "desktop" ? baseWidth : undefined}
        height={mode === "desktop" ? baseHeight : undefined}
        style={iframeStyle}
        loading="eager"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        referrerPolicy="no-referrer-when-downgrade"
        allow="fullscreen; autoplay; encrypted-media; clipboard-read; clipboard-write"
        onLoad={handleLoad}
        onError={onError}
      />
    </div>
  );
}

/* ===========================
   Hybrid-Lazy (Inline-Preload + Offscreen-Fallback)
=========================== */

/** StrictMode-sicherer Singleton-Offscreen-Root */
let __OFFSCREEN_ROOT__: HTMLDivElement | null = null;
function getOffscreenRoot() {
  if (typeof document === "undefined") return null;
  if (__OFFSCREEN_ROOT__ && document.body.contains(__OFFSCREEN_ROOT__)) {
    return __OFFSCREEN_ROOT__;
  }
  const holder = document.createElement("div");
  holder.id = "offscreen-iframe-root";
  holder.style.position = "fixed";
  holder.style.top = "-10000px";
  holder.style.left = "-10000px";
  holder.style.width = "1px";
  holder.style.height = "1px";
  holder.style.overflow = "hidden";
  document.body.appendChild(holder);
  __OFFSCREEN_ROOT__ = holder;
  return __OFFSCREEN_ROOT__;
}

function LazyAutoIframe({
  url,
  title,
  baseWidth = DESKTOP_BASE_W,
  baseHeight = DESKTOP_BASE_H,
  rootMargin = "400px 0px",
  forceMode,
}: {
  url: string;
  title: string;
  baseWidth?: number;
  baseHeight?: number;
  rootMargin?: string;
  forceMode?: "mobile" | "desktop";
}) {
  const isDesktop = forceMode === "desktop";
  const { ref, inView } = useInViewport<HTMLDivElement>({ rootMargin });

  // Containerhöhe stabil reservieren (kein Layout-Shift/Autoscroll)
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  // Host: hier wird das iframe (A: inline preload) sichtbar gemountet
  const hostRef = React.useRef<HTMLDivElement | null>(null);

  // Live-Refs
  const liveIframeRef = React.useRef<HTMLIFrameElement | null>(null);
  const preloadIframeRef = React.useRef<HTMLIFrameElement | null>(null);

  // Jump-Guard: Position vor dem Setzen von src / Übernahme
  const anchorTopRef = React.useRef<number | null>(null);

  const [reservedH, setReservedH] = React.useState<string>(() =>
    isDesktop ? `${baseHeight}px` : "clamp(420px, 75vh, 900px)"
  );

  // Lock, damit während des Ladevorgangs die Reservierung nicht flackert
  const [lockReserved, setLockReserved] = React.useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!isDesktop) {
      if (!lockReserved) setReservedH("clamp(420px, 75vh, 900px)");
      return;
    }
    const recalc = () => {
      if (lockReserved) return;
      const w = el.clientWidth || baseWidth;
      const scale = Math.min(1, w / baseWidth);
      setReservedH(`${Math.round(baseHeight * scale)}px`);
    };
    recalc();
    const ro = new ResizeObserver(recalc);
    ro.observe(el);
    window.addEventListener("resize", recalc);
    window.addEventListener("orientationchange", recalc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
      window.removeEventListener("orientationchange", recalc);
    };
  }, [isDesktop, baseWidth, baseHeight, lockReserved]);

  const [slotReady, setSlotReady] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [isInert, setIsInert] = React.useState(true);

  // Hybrid-Steuerung
  const [modeInline, setModeInline] = React.useState<"pending" | "running" | "done" | "failed">("pending");
  const [modeOffscreen, setModeOffscreen] = React.useState<"idle" | "running" | "done" | "failed">("idle");

  const hasSlotRef = React.useRef(false);
  const releasedRef = React.useRef(false);
  const releaseOnce = React.useCallback(() => {
    if (hasSlotRef.current && !releasedRef.current) {
      releasedRef.current = true;
      releaseIframeSlot();
    }
  }, []);

  // globaler Fokus-Guard über Capture-Listener, solange nicht geladen
  useEffect(() => {
    const onFocusIn = (e: FocusEvent) => {
      if (!loaded && containerRef.current && containerRef.current.contains(e.target as Node)) {
        try {
          (e.target as HTMLElement).blur();
        } catch {}
      }
    };
    document.addEventListener("focusin", onFocusIn, true);
    return () => document.removeEventListener("focusin", onFocusIn, true);
  }, [loaded]);

  // Layout/Scaling aufs iframe anwenden (Desktop oder Mobile)
  const applyLayout = React.useCallback(
    (el: HTMLIFrameElement | null) => {
      const host = containerRef.current;
      if (!el || !host) return;
      if (isDesktop) {
        const w = host.clientWidth || baseWidth;
        const scale = Math.min(1, w / baseWidth);
        el.style.width = `${baseWidth}px`;
        el.style.height = `${baseHeight}px`;
        el.style.transform = `scale(${scale})`;
        el.style.transformOrigin = "top left";
        el.style.touchAction = "";
      } else {
        el.style.transform = "";
        el.style.transformOrigin = "";
        el.style.width = "100%";
        el.style.height = "100%"; // füllt den reservierten Container
        el.style.touchAction = "pan-x pan-y";
      }
    },
    [isDesktop, baseWidth, baseHeight]
  );

  // Observer zur Live-Aktualisierung des Scales bei Desktop
  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;
    const ro = new ResizeObserver(() => applyLayout(liveIframeRef.current));
    ro.observe(host);
    const onRecalc = () => applyLayout(liveIframeRef.current);
    window.addEventListener("resize", onRecalc);
    window.addEventListener("orientationchange", onRecalc);
    onRecalc();
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onRecalc);
      window.removeEventListener("orientationchange", onRecalc);
    };
  }, [applyLayout]);

  // `inert` toggeln
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    if (isInert) {
      node.setAttribute("inert", "");
      node.setAttribute("aria-busy", "true");
    } else {
      node.removeAttribute("inert");
      node.removeAttribute("aria-busy");
    }
  }, [isInert]);

  // Slot anfordern + Hybrid-Flow starten
  useEffect(() => {
    let cancelled = false;
    let timeoutInline: number | null = null;
    let timeoutOffscreen: number | null = null;

    if (inView && !slotReady) {
      requestIframeSlot().then(() => {
        hasSlotRef.current = true;
        if (cancelled) {
          releaseOnce();
          return;
        }

        setSlotReady(true);
        setLockReserved(true);
        setIsInert(true);

        // Position vor Layout-Änderung merken
        try {
          anchorTopRef.current = containerRef.current?.getBoundingClientRect().top ?? null;
        } catch {}

        // ========== Strategie A: Inline-Preload im sichtbaren Host ==========
        setModeInline("running");
        const host = hostRef.current!;
        const inlineIframe = document.createElement("iframe");
        inlineIframe.setAttribute("title", title);
        inlineIframe.setAttribute("loading", "eager");
        inlineIframe.setAttribute("fetchpriority", "high");
        inlineIframe.setAttribute("sandbox", "allow-same-origin allow-scripts allow-forms allow-popups");
        inlineIframe.setAttribute("allow", "fullscreen; autoplay; encrypted-media; clipboard-read; clipboard-write");
        inlineIframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
        inlineIframe.tabIndex = -1;

        // Sichtbar im DOM, aber unsichtbar für den Nutzer
        inlineIframe.style.position = "absolute";
        inlineIframe.style.inset = "0";
        inlineIframe.style.border = "0";
        inlineIframe.style.display = "block";
        inlineIframe.style.opacity = "0";            // wichtig: nicht visibility:hidden
        inlineIframe.style.pointerEvents = "none";   // keine Interaktion
        inlineIframe.style.willChange = "opacity";   // sanftes Einblenden
        inlineIframe.style.background = "transparent";

        // Größe passend zum Container; Scale wird im applyLayout gesetzt
        inlineIframe.style.width = "100%";
        inlineIframe.style.height = "100%";

        // Blur-Loop (Fokus weghalten)
        const blurStart = typeof performance !== "undefined" ? performance.now() : 0;
        const blurLoop = () => {
          try { inlineIframe.blur(); } catch {}
          if (typeof performance !== "undefined" && performance.now() - blurStart < 600) {
            requestAnimationFrame(blurLoop);
          }
        };
        requestAnimationFrame(blurLoop);

        const finishOk = () => {
          if (cancelled) return;

          setLoaded(true);
          setFailed(false);
          setModeInline("done");
          liveIframeRef.current = inlineIframe;

          // Layout/Scale anwenden
          try { applyLayout(inlineIframe); } catch {}

          // Scroll-Delta kompensieren
          try {
            const before = anchorTopRef.current;
            const after = containerRef.current?.getBoundingClientRect().top ?? null;
            if (before !== null && after !== null) {
              const delta = after - before;
              if (Math.abs(delta) > 0) {
                window.scrollTo({
                  top: window.scrollY + delta,
                  left: window.scrollX,
                  behavior: "auto",
                });
              }
            }
          } catch {}

          // Einblenden & Interaktion zulassen
          inlineIframe.style.opacity = "1";
          inlineIframe.style.pointerEvents = "auto";

          setIsInert(false);
          setLockReserved(false);

          // Offscreen-Fallback abbrechen, falls parallel gestartet
          if (timeoutOffscreen) window.clearTimeout(timeoutOffscreen);

          releaseOnce();
        };

        const failInline = () => {
          if (cancelled || modeInline === "done") return;
          setModeInline("failed");
          // ========== Strategie B: Offscreen-Preload als Fallback ==========
          setModeOffscreen("running");
          const offRoot = getOffscreenRoot();
          if (!offRoot) return;

          const off = document.createElement("iframe");
          off.setAttribute("title", title);
          off.setAttribute("loading", "eager");
          off.setAttribute("fetchpriority", "high");
          off.setAttribute("sandbox", "allow-same-origin allow-scripts allow-forms allow-popups");
          off.setAttribute("allow", "fullscreen; autoplay; encrypted-media; clipboard-read; clipboard-write");
          off.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
          off.tabIndex = -1;

          off.style.border = "0";
          off.style.display = "block";
          off.style.pointerEvents = "none";
          off.width = String(isDesktop ? baseWidth : 800);
          off.height = String(isDesktop ? baseHeight : 600);

          const blurStart2 = typeof performance !== "undefined" ? performance.now() : 0;
          const blurLoop2 = () => {
            try { off.blur(); } catch {}
            if (typeof performance !== "undefined" && performance.now() - blurStart2 < 600) {
              requestAnimationFrame(blurLoop2);
            }
          };
          requestAnimationFrame(blurLoop2);

          const onOffLoaded = () => {
            if (cancelled) return;
            setModeOffscreen("done");
            setLoaded(true);
            setFailed(false);

            // ins Host übernehmen
            try {
              off.style.pointerEvents = "auto";
              host.innerHTML = "";
              host.appendChild(off);
              liveIframeRef.current = off;
              applyLayout(off);
            } catch {}

            // Delta kompensieren
            try {
              const before = anchorTopRef.current;
              const after = containerRef.current?.getBoundingClientRect().top ?? null;
              if (before !== null && after !== null) {
                const delta = after - before;
                if (Math.abs(delta) > 0) {
                  window.scrollTo({
                    top: window.scrollY + delta,
                    left: window.scrollX,
                    behavior: "auto",
                  });
                }
              }
            } catch {}

            setIsInert(false);
            setLockReserved(false);
            releaseOnce();
          };

          const onOffError = () => {
            if (cancelled) return;
            setModeOffscreen("failed");
            setFailed(true);
            setIsInert(false);
            setLockReserved(false);
            releaseOnce();
          };

          off.addEventListener("load", onOffLoaded, { once: true });
          off.addEventListener("error", onOffError, { once: true });

          offRoot.appendChild(off);
          off.src = url;

          // Sicherheits-Timeout für Offscreen (weit großzügiger)
          timeoutOffscreen = window.setTimeout(() => {
            if (!cancelled && modeOffscreen === "running") onOffError();
          }, 15000) as unknown as number;
        };

        // Inline-Eventhandler
        inlineIframe.addEventListener("load", finishOk, { once: true });
        inlineIframe.addEventListener("error", failInline, { once: true });

        // zuerst anhängen, dann src (besseres Ladeverhalten)
        host.appendChild(inlineIframe);
        applyLayout(inlineIframe);
        inlineIframe.src = url;

        // Timeout, nach dem wir auf Offscreen umschalten
        timeoutInline = window.setTimeout(() => {
          if (!cancelled && modeInline !== "done") failInline();
        }, 9000) as unknown as number; // 9s: genug für langsame Seiten, kurz genug für UX
      });
    }

    return () => {
      cancelled = true;
      try {
        if (timeoutInline) window.clearTimeout(timeoutInline);
        if (timeoutOffscreen) window.clearTimeout(timeoutOffscreen);
        preloadIframeRef.current?.remove();
        // Live-iframe belassen – React unmount räumt es ohnehin auf
      } catch {}
      if (!loaded) releaseOnce();
    };
  }, [
    inView,
    slotReady,
    loaded,
    url,
    forceMode,
    isDesktop,
    baseWidth,
    baseHeight,
    title,
    applyLayout,
    releaseOnce,
    modeInline,
    modeOffscreen,
  ]);

  const retry = () => {
    setFailed(false);
    setLoaded(false);
    setLockReserved(true);
    setIsInert(true);
    setModeInline("pending");
    setModeOffscreen("idle");
    try {
      liveIframeRef.current?.remove();
      preloadIframeRef.current?.remove();
      if (hostRef.current) hostRef.current.innerHTML = "";
    } catch {}
    setSlotReady(false); // triggert den Flow erneut
  };

  return (
    <div ref={ref} className="relative w-full">
      {/* Reservierter Container verhindert Layout-Shift / Auto-Scroll */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-gray-200"
        style={{
          height: reservedH,
          overflowAnchor: "none",
          contain: "layout paint",
        }}
      >
        {/* Overlay-Loading-Notiz */}
        {!failed && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity ${
              loaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-live="polite"
          >
            <div className="flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 shadow">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.25" />
                <path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-sm text-gray-700">Website lädt …</span>
            </div>
          </div>
        )}

        {/* Host für Inline-Preload (Strategie A) und finale Anzeige */}
        <div ref={hostRef} className="absolute inset-0" aria-hidden={!loaded} />

        {/* Fehlerzustand mit Retry & Link */}
        {slotReady && failed && (
          <div className="absolute inset-0 flex w-full items-center justify-center bg-white p-6 text-center">
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                Diese Webseite kann hier nicht eingebettet werden (CSP oder Fehler).
              </p>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={retry}
                  className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Erneut versuchen
                </button>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
                >
                  Im neuen Tab öffnen
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ===========================
   Case Study Section
=========================== */
function CaseStudySection({ cs, index }: { cs: CaseStudy; index: number }) {
  // Desktop-Definition synchron zu Tailwind (hier lg=1024px)
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const forcedMode: "desktop" | "mobile" = isDesktop ? "desktop" : "mobile";

  return (
    <section
      className="relative isolate"
      style={{ overflowAnchor: "none" }} // ganze Section vom Scroll Anchoring ausnehmen
    >
      <Section className="w-full px-4 py-16 md:py-20">
        <div
          className={`grid items-center gap-10 md:gap-16 md:grid-cols-2 ${
            index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          {/* Media */}
          <div className="relative">
            {cs.url ? (
              <LazyAutoIframe
                key={forcedMode} // remount bei Breakpoint-Wechsel
                url={cs.url}
                title={cs.title}
                forceMode={forcedMode}
              />
            ) : (
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-md ring-1 ring-gray-200">
                {cs.image && (
                  <Image
                    src={cs.image.src}
                    alt={cs.image.alt}
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(min-width: 768px) 40rem, 90vw"
                    priority={index === 0}
                  />
                )}
              </div>
            )}
          </div>

          {/* Text */}
          <div className="min-w-0">
            <SectionHeader
              eyebrow="Fallstudie"
              title={cs.title}
              subtitle={
                cs.url ? (
                  <>
                    Sie können sich die Webseite direkt im Fenster anschauen.
                    Alternativ{" "}
                    <a
                      href={cs.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      klicke hier
                    </a>{" "}
                    und öffne die Webseite in einem neuen Tab.
                  </>
                ) : (
                  cs.subtitle
                )
              }
            />
            <ResultsStatic items={cs.results} />
          </div>
        </div>
      </Section>

      <div className="pointer-events-none absolute inset-x-0 -z-10 h-40 bg-gradient-to-b from-gray-50 to-transparent" />
    </section>
  );
}

/* ===========================
   Segmented Control
=========================== */
function ViewToggle({
  value,
  onChange,
}: {
  value: Category;
  onChange: (v: Category) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full bg-gray-100 p-1 ring-1 ring-gray-200">
      {[
        { key: "web" as const, label: "Webseiten anzeigen" },
        { key: "marketing" as const, label: "Marketingkampagnen anzeigen" },
      ].map((opt) => {
        const active = value === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className={[
              "relative px-4 py-2 text-sm md:text-base rounded-full transition",
              active
                ? "bg-white shadow-sm ring-1 ring-gray-200 text-gray-900"
                : "text-gray-600 hover:text-gray-900",
            ].join(" ")}
            aria-pressed={active}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

/* ===========================
   Page
=========================== */
export default function CaseStudiesPage() {
  const [view, setView] = useState<Category>("web");
  const filtered = useMemo(
    () => CASE_STUDIES.filter((c) => c.category === view),
    [view]
  );

  return (
    <div
      data-scrollroot
      className="min-h-screen bg-white text-gray-900"
      style={{ overflowAnchor: "none" }}
    >
      <Header />

      {/* Hero */}
      <section className="relative isolate">
        <Section className="w-full px-4 pb-6 pt-14 md:pt-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900">
                  Fallstudien
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-gray-600 text-lg">
                Konkrete Beispiele und Projekte, die wir in der Vergangenheit
                begleiten durften. Haben Sie Fragen zu konkreten Projekten? Zögern Sie
                nicht, uns zu kontaktieren.
              </p>
            </div>

            <ViewToggle value={view} onChange={setView} />
          </div>
        </Section>
        <div className="pointer-events-none absolute inset-x-0 -z-10 h-40 bg-gradient-to-b from-white via-gray-50 to-transparent" />
      </section>

      <main style={{ overflowAnchor: "none" }}>
        {filtered.map((cs, i) => (
          <CaseStudySection key={cs.id} cs={cs} index={i} />
        ))}
      </main>

      <ContactCTA />
      <Footer />
    </div>
  );
}

/**
 * Anti-Autoscroll & robustes Laden:
 * - Strategie A: Inline-Preload im sichtbaren Container (opacity:0; pointer-events:none; Container inert)
 *   ⇒ Browser betrachtet iframe als sichtbar → zuverlässiger Start des Ladevorgangs.
 * - Strategie B: Offscreen-Preload (StrictMode-sicherer Singleton) als Fallback nach 9s.
 * - Reservierte Containerhöhe + `overflow-anchor:none` + Delta-Kompensation via window.scrollTo(..., 'auto').
 * - Fokus-Guard (Blur-Loop) und globaler focusin-Capture bis Load.
 * - Concurrency-Queue (max 3 gleichzeitige Loads), Retry vorhanden.
 * - Hinweis: Seiten mit `X-Frame-Options`/`CSP frame-ancestors` können grundsätzlich nicht geladen werden (unabhängig von der Technik).
 */
