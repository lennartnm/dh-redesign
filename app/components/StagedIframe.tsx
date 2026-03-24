"use client";

import React from "react";

const DESKTOP_BASE_W = 1280;
const DESKTOP_BASE_H = 800;

function useInViewport<T extends HTMLElement>(rootMargin = "400px 0px") {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setInView(true);
      },
      { root: null, rootMargin, threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, inView } as const;
}

export default function StagedIframe({
  url,
  title,
  forceMode, // "desktop" | "mobile"
  baseWidth = DESKTOP_BASE_W,
  baseHeight = DESKTOP_BASE_H,
}: {
  url: string;
  title: string;
  forceMode: "desktop" | "mobile";
  baseWidth?: number;
  baseHeight?: number;
}) {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const hostRef = React.useRef<HTMLDivElement | null>(null);
  const stagedRef = React.useRef<HTMLIFrameElement | null>(null);
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const { ref: ioRef, inView } = useInViewport<HTMLDivElement>();

  // reservierte Höhe (verhindert Layout-Shift)
  const [reservedH, setReservedH] = React.useState<string>(() =>
    forceMode === "desktop" ? `${baseHeight}px` : "clamp(420px, 75vh, 900px)"
  );

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (forceMode !== "desktop") {
      setReservedH("clamp(420px, 75vh, 900px)");
      return;
    }
    const recalc = () => {
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
  }, [forceMode, baseWidth, baseHeight]);

  // Off-screen staging root (einmalig)
  const stagingRoot = React.useMemo(() => {
    if (typeof document === "undefined") return null;
    const node = document.createElement("div");
    Object.assign(node.style, {
      position: "fixed",
      left: "-100vw",
      top: "0",
      width: "1px",
      height: "1px",
      visibility: "hidden",
      pointerEvents: "none",
    } as CSSStyleDeclaration);
    document.body.appendChild(node);
    return node;
  }, []);
  React.useEffect(() => {
    return () => {
      if (stagingRoot?.parentNode) stagingRoot.parentNode.removeChild(stagingRoot);
    };
  }, [stagingRoot]);

  // Laden: erst Off-screen, dann in sichtbaren Host verschieben
  React.useEffect(() => {
    if (!inView || !stagingRoot || stagedRef.current || failed) return;

    const iframe = document.createElement("iframe");
    stagedRef.current = iframe;

    iframe.title = title;
    iframe.tabIndex = -1;
    (iframe as any).inert = true; // bis zum Swap nicht fokussierbar
    iframe.setAttribute("loading", "eager");
    iframe.setAttribute(
      "sandbox",
      "allow-same-origin allow-scripts allow-forms allow-popups"
    );
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    iframe.setAttribute(
      "allow",
      "fullscreen; autoplay; encrypted-media; clipboard-read; clipboard-write"
    );

    Object.assign(iframe.style, {
      width: forceMode === "desktop" ? `${baseWidth}px` : "100%",
      height: forceMode === "desktop" ? `${baseHeight}px` : "100%",
      border: "0",
      display: "block",
    } as CSSStyleDeclaration);

    const handleLoad = () => {
      setLoaded(true);
      setFailed(false);
      if (hostRef.current) {
        hostRef.current.innerHTML = "";
        hostRef.current.appendChild(iframe);
        (iframe as any).inert = false; // jetzt interaktiv
      }
    };
    const handleError = () => {
      setFailed(true);
      setLoaded(false);
      try { stagingRoot.removeChild(iframe); } catch {}
      stagedRef.current = null;
    };

    iframe.addEventListener("load", handleLoad, { once: true });
    iframe.addEventListener("error", handleError, { once: true });

    stagingRoot.appendChild(iframe);
    // Wichtig: src NACH dem Anhängen setzen
    iframe.src = url;

    return () => {
      iframe.removeEventListener("load", handleLoad);
      iframe.removeEventListener("error", handleError);
      if (stagingRoot.contains(iframe) && !loaded) {
        try { stagingRoot.removeChild(iframe); } catch {}
      }
    };
  }, [inView, stagingRoot, url, title, failed, forceMode, baseWidth, baseHeight, loaded]);

  return (
    <div ref={ioRef} className="relative w-full">
      <div
        ref={wrapperRef}
        className="relative w-full overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-gray-200"
        style={{
          height: reservedH,
          overflowAnchor: "none",
          contain: "layout paint",
        }}
      >
        {/* sichtbarer Host – bekommt das bereits geladene iframe */}
        <div
          ref={hostRef}
          className="absolute inset-0"
          style={{ pointerEvents: loaded ? "auto" : "none" }}
        />

        {/* Overlay-Spinner */}
        {!failed && (
          <div
            className={`absolute inset-0 grid place-items-center transition-opacity ${
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

        {/* Fehlerzustand */}
        {failed && (
          <div className="absolute inset-0 flex w-full items-center justify-center bg-white p-6 text-center">
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                Diese Webseite kann hier nicht eingebettet werden (CSP oder Fehler).
              </p>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setFailed(false);
                    setLoaded(false);
                    stagedRef.current = null; // neuer Versuch
                  }}
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
