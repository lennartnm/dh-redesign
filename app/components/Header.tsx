"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useFoerderpotenzialModal } from "@/app/components/FoerderpotenzialModal";
import { createPortal } from "react-dom";

type NavItem = { label: string; href: string; external?: boolean };

const NAV_LINKS: NavItem[] = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über Uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/fallstudien" },
  { label: "Wissen", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const { Modal, open } = useFoerderpotenzialModal({
    webhookUrl: "https://hook.eu2.make.com/ascayq7slbkiwl26ptcro40285dwcula",
    fbEventExtra: { source: "Header" },
    successRedirect: "/termin-danke",
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => { setOpenMenu(false); }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    openMenu
      ? root.classList.add("overflow-hidden", "touch-none")
      : root.classList.remove("overflow-hidden", "touch-none");
  }, [openMenu]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => setOpenMenu(false);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const isActive = useMemo(
    () => (href: string) => (href.startsWith("/") && !href.includes("#") ? pathname === href : false),
    [pathname]
  );

  const MOBILE_LINKS: NavItem[] = useMemo(() => [{ label: "Startseite", href: "/" }, ...NAV_LINKS], []);

  return (
    <header
      role="banner"
      className={`w-full sticky top-0 z-[200] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {mounted && typeof document !== "undefined"
        ? createPortal(
            <div style={{ position: "relative", zIndex: 1200 }}>
              <Modal />
            </div>,
            document.body
          )
        : null}

      {/* Mobile bar */}
      <div className="md:hidden sticky top-0 w-full z-[980]" style={{ backgroundImage: "linear-gradient(135deg,#033EDC 0%,#00A7F9 100%)" }}>
        <div className="h-14 flex items-center" style={{ paddingTop: "env(safe-area-inset-top)" }}>
          <div className="mx-auto max-w-7xl w-full px-4">
            <div className="flex items-center justify-between">
              <a
                href="tel:+436642253812"
                className="inline-flex items-center gap-2 text-white/95"
                aria-label="Anrufen: +43 664 2253812"
                style={{ marginLeft: "max(0.875rem, env(safe-area-inset-left))" }}
              >
                <PhoneIcon />
                <span className="whitespace-nowrap text-[15px] font-medium leading-none">+43 664 2253812</span>
              </a>
              <button
                type="button"
                onClick={() => setOpenMenu(true)}
                aria-label="Menü öffnen"
                aria-expanded={openMenu}
                className="h-11 w-11 grid place-items-center"
                style={{ marginRight: "max(0.875rem, env(safe-area-inset-right))" }}
              >
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="hidden md:flex items-center h-[68px] gap-8">
          <Link href="/" className="flex-shrink-0" aria-label="Startseite">
            <Image
              src="/digi_logo.png"
              alt="Digitalisierungshilfe Logo"
              width={44}
              height={44}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="flex items-center gap-1 ml-2" aria-label="Hauptnavigation">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-[#033EDC] bg-blue-50/70"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-[#033EDC] to-[#00A7F9]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="tel:+436642253812"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
              aria-label="Anrufen: +43 664 2253812"
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="whitespace-nowrap">+43 664 2253812</span>
            </a>

            <button
              type="button"
              onClick={open}
              className="relative overflow-hidden rounded-[10px] text-white px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#033EDC]/30"
              style={{ backgroundImage: "linear-gradient(135deg,#033EDC 0%,#00A7F9 100%)" }}
              aria-label="Förderpotenzial prüfen"
            >
              <span className="relative z-10">Förderpotenzial prüfen</span>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <button
        type="button"
        aria-hidden={!openMenu}
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0 z-[990] bg-black/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          openMenu ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-hidden={!openMenu}
        className={`fixed top-0 right-0 h-svh w-[82%] max-w-sm z-[995] md:hidden bg-white transition-transform duration-300 ease-out shadow-2xl ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="h-full flex flex-col" aria-label="Mobile Navigation">
          <div className="px-5 pt-5 pb-4 flex items-center justify-between border-b border-gray-100">
            <Link href="/" onClick={() => setOpenMenu(false)}>
              <Image src="/digi_logo.png" alt="Logo" width={36} height={36} className="h-9 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setOpenMenu(false)}
              aria-label="Menü schließen"
              className="h-10 w-10 grid place-items-center rounded-xl hover:bg-gray-100 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto py-3 px-3">
            {MOBILE_LINKS.map((item, idx) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpenMenu(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-medium text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <span>{item.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-100 p-4 space-y-3">
            <button
              type="button"
              onClick={() => { setOpenMenu(false); open(); }}
              className="relative overflow-hidden inline-flex w-full items-center justify-center rounded-[10px] text-white px-4 py-3 text-sm font-semibold shadow-md"
              style={{ backgroundImage: "linear-gradient(135deg,#033EDC 0%,#00A7F9 100%)" }}
            >
              Förderpotenzial prüfen
            </button>

            <a
              href="tel:+436642253812"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>+43 664 2253812</span>
            </a>
          </div>
        </nav>
      </aside>
    </header>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
      <rect y="0" width="22" height="2.5" rx="1.25" fill="white" />
      <rect y="6.5" width="16" height="2.5" rx="1.25" fill="white" />
      <rect y="13" width="22" height="2.5" rx="1.25" fill="white" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M15 5L5 15M5 5l10 10" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
