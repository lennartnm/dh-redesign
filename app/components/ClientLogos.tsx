"use client";

import Section from "./ui/Section";
import Image from "next/image";

const logos = [
  "/logo_new.png",
  "/Bahnbau_Wels.webp",
  "/Injoy.webp",
  "/Next_Reality-2.webp",
  "/Post-2.webp",
  "/Rhomberg_Sersa.webp",
];

export default function ClientLogos() {
  const track = [...logos, ...logos];

  return (
    <Section className="py-14 border-y border-gray-100">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
        Ausgewählte Kunden &amp; Partner
      </p>

      <div className="marquee" role="region" aria-label="Kundenlogos, automatisch scrollend">
        <div className="marquee-track items-center gap-0" style={{ ["--dur" as any]: "60s" }}>
          {track.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="flex-shrink-0 px-10 py-2"
              aria-hidden={i >= logos.length}
            >
              <Image
                src={src}
                alt={src.split("/").pop()?.replace(/\.(webp|png)$/, "") || "Kundenlogo"}
                width={130}
                height={50}
                className="object-contain h-10 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
