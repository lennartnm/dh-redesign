"use client";

import Hero from "./components/Hero";
import Header from "./components/Header";
import LogoMarquee from "./components/LogoMarquee";
import Services from "./components/Services";
import FundingStamp from "./components/FundingStamp";
import USP from "./components/USP";
import Stats from "./components/Stats";
import ClientLogos from "./components/ClientLogos";
import Reviews from "./components/Reviews";
import WhyNow from "./components/WhyNow";
import Process from "./components/Process";
import Team from "./components/Team";
import ImageLeftFeature from "./components/ImageLeftFeature";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BlogPreview from "./components/BlogPreview";
import { useFoerderpotenzialModal } from "@/app/components/FoerderpotenzialModal";

export default function Page() {
  const { Modal, open } = useFoerderpotenzialModal({
    webhookUrl: "https://hook.eu2.make.com/ascayq7slbkiwl26ptcro40285dwcula",
    fbEventExtra: { source: "Kontakt" },
    successRedirect: "/termin-danke",
  });

  return (
    <>
      <Modal />
      <Header />
      <Hero />
      <LogoMarquee />
      <Services />
      <FundingStamp />
      <USP />
      <Stats />
      <ClientLogos />
      <Reviews />
      <WhyNow />
      <Process />
      <ImageLeftFeature />
      <Team />
      <BlogPreview />
      <FAQ />

      {/* Kontakt CTA */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-6">
            Jetzt starten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Bereit, Ihr Unternehmen digital voranzubringen?
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Lassen Sie uns Ihr Förderpotenzial unverbindlich prüfen und gemeinsam den richtigen Weg in die Digitalisierung finden.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              onClick={open}
              className="relative overflow-hidden rounded-[10px] text-white px-8 py-4 text-base font-semibold shadow-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-px"
              style={{ backgroundImage: "linear-gradient(135deg,#033EDC 0%,#00A7F9 100%)" }}
            >
              Förderpotenzial prüfen
            </button>
            <a
              href="/kontakt"
              className="rounded-[10px] bg-white border border-gray-200 text-gray-800 px-8 py-4 text-base font-semibold shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
