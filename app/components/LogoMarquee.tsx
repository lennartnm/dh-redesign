// components/LogoMarquee.tsx
"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Section from "./ui/Section";

type Props = {
  speedPxPerSec?: number; // Pixel/Sekunde
  fadeEdges?: boolean;    // weicher Rand-Blend
  logoHeight?: number;    // Zielhöhe der Logos in px (Default 40)
};

const FILES = [
  "google-partner.png",
  "meta-business-partner.png",
  "kmu.png",
  "consultant-badge.png",
  "austria-trusted-expertise.png",
];

export default function LogoMarquee({
  speedPxPerSec = 50,
  fadeEdges = true,
  logoHeight = 40,
}: Props) {
  const trackARef = useRef<HTMLDivElement | null>(null);
  const trackBRef = useRef<HTMLDivElement | null>(null);
  const trackCRef = useRef<HTMLDivElement | null>(null);

  const animARef = useRef<Animation | null>(null);
  const animBRef = useRef<Animation | null>(null);
  const animCRef = useRef<Animation | null>(null);

  // Dateien liegen in /public ⇒ Pfad beginnt mit "/"
  const logos = useMemo(() => FILES.map((f) => `/${f}`), []);

  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) return;

    const a = trackARef.current;
    const b = trackBRef.current;
    const c = trackCRef.current;
    if (!a || !b || !c) return;

    const start = () => {
      animARef.current?.cancel();
      animBRef.current?.cancel();
      animCRef.current?.cancel();

      const width = a.scrollWidth; // Breite EINES Tracks
      if (!width || !Number.isFinite(width)) return;

      const durationMs = Math.max(width / speedPxPerSec, 0.001) * 1000;

      // Startpositionen: 0, width, 2*width
      a.style.transform = `translateX(0px)`;
      b.style.transform = `translateX(${width}px)`;
      c.style.transform = `translateX(${2 * width}px)`;

      // Helper: animiert einen Track von startX → startX - width (linear, unendlich)
      const animateTrack = (el: HTMLDivElement, startX: number) =>
        el.animate(
          [
            { transform: `translateX(${startX}px)` },
            { transform: `translateX(${startX - width}px)` },
          ],
          { duration: durationMs, iterations: Infinity, easing: "linear" }
        );

      animARef.current = animateTrack(a, 0);
      animBRef.current = animateTrack(b, width);
      animCRef.current = animateTrack(c, 2 * width);
    };

    // Sicherstellen, dass Bilder decodiert sind (korrekte Breiten)
    const imgs = Array.from(a.querySelectorAll("img"));
    const ensureDecoded = Promise.all(
      imgs.map((img) => (img.decode ? img.decode().catch(() => {}) : Promise.resolve()))
    );

    let ro: ResizeObserver | null = null;
    let rafId: number | null = null;

    const schedule = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(start);
    };

    ensureDecoded.then(schedule);

    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(schedule);
      ro.observe(a);
    } else {
      schedule();
    }

    return () => {
      animARef.current?.cancel();
      animBRef.current?.cancel();
      animCRef.current?.cancel();
      animARef.current = null;
      animBRef.current = null;
      animCRef.current = null;
      if (ro) ro.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speedPxPerSec]);

  // Hover: pausieren/fortsetzen
  const onMouseEnter = () => {
    animARef.current?.pause();
    animBRef.current?.pause();
    animCRef.current?.pause();
  };
  const onMouseLeave = () => {
    animARef.current?.play();
    animBRef.current?.play();
    animCRef.current?.play();
  };

  const size = logoHeight; // Zielhöhe
  const commonImg =
    "filter grayscale opacity-80 transition-opacity duration-200 hover:opacity-100";

  const renderLogo = (src: string, i: number, withPriority = false) => {
    return (
      <div key={`${src}-${i}`} className="flex-shrink-0 px-5" title={`Logo ${i + 1}`}>
        <Image
          src={src}
          alt={`Logo ${i + 1}`}
          width={size}
          height={size}
          sizes={`${size}px`}
          style={{ height: size, width: "auto" }}
          className={`${commonImg} object-contain`}
          quality={100}
          priority={withPriority}
          draggable={false}
          decoding="async"
          fetchPriority={withPriority ? "high" : "auto"}
        />
      </div>
    );
  };

  return (
    <Section className="bg-white py-10">
      <div
        className="relative overflow-hidden"
        aria-hidden
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={
          fadeEdges
            ? {
                WebkitMaskImage:
                  "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 10%, #000 90%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 10%, #000 90%, rgba(0,0,0,0) 100%)",
              }
            : undefined
        }
      >
        {/* Track A */}
        <div ref={trackARef} className="absolute left-0 top-0 flex h-full items-center">
          {logos.map((src, i) => renderLogo(src, i, i < 3))}
        </div>

        {/* Track B */}
        <div ref={trackBRef} className="absolute left-0 top-0 flex h-full items-center">
          {logos.map((src, i) => renderLogo(src, i))}
        </div>

        {/* Track C */}
        <div ref={trackCRef} className="absolute left-0 top-0 flex h-full items-center">
          {logos.map((src, i) => renderLogo(src, i))}
        </div>

        {/* Spacer, damit der Container Höhe bekommt */}
        <div className="invisible flex items-center" style={{ height: `${size * 3}px` }}>
          {logos.map((_, i) => (
            <div key={`S-${i}`} className="px-5" />
          ))}
        </div>
      </div>
    </Section>
  );
}
