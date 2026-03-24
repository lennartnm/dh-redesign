"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// react-confetti greift auf window zu -> nur im Client rendern
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

function useWindowSize() {
  const [size, setSize] = React.useState({ width: 0, height: 0 });
  React.useEffect(() => {
    function onResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

export default function DankePage() {
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16">
        {width > 0 && height > 0 && (
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={280}
            gravity={0.25}
          />
        )}

        <section className="space-y-8">
          {/* Blauer Container (alles zentriert, inkl. Text & Button als Fließtext) */}
          <div className="w-full bg-blue-50 border border-blue-100 rounded-2xl px-8 md:px-12 py-12 shadow-sm text-center">
            <CheckCircleIcon className="w-16 h-16 text-blue-500 mb-4 mx-auto" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Vielen Dank für Deine Anfrage!
            </h1>

              <p className="text-lg text-gray-700 mt-8 max-w-2xl mx-auto">
              Wählen Sie nun Ihren Wunschtermin für unser unverbindliches und kostenloses Kennenlerngespräch, um mehr Informationen über Ihr Förderpotenzial zu erfahren.
            </p>

            {/* Calendly Embed direkt unter der Headline */}
            <div className="mt-8 max-w-3xl mx-auto">
              <iframe
                src="https://calendly.com/marko-digitalisierungshilfe/kennenlern-gesprach"
                className="w-full h-[700px] rounded-xl border border-blue-100"
                title="Kennenlerngespräch vereinbaren"
                frameBorder="0"
              />
            </div>

          

            {/* Fließtext, der zuvor unterhalb stand */}
            <div className="mt-8 space-y-4 max-w-2xl mx-auto text-center">
              <p className="text-base text-gray-700">
                <span className="font-semibold">Was jetzt passiert:</span> Wir prüfen Ihr
                Anliegen und die passenden Fördermöglichkeiten. Anschließend melden wir uns
                telefonisch bei Dir, besprechen die nächsten Schritte und geben Dir im Gespräch
                eine klare Empfehlung, wie wir Deine Ziele am besten erreichen – inklusive
                Fördercheck.
              </p>

              <p className="text-base text-gray-700">
                Bis dahin können Sie gern einen Blick in unsere{" "}
                <Link
                  href="/fallstudien"
                  className="text-blue-700 hover:text-blue-900 font-medium underline"
                >
                  Fallstudien
                </Link>{" "}
                werfen und sehen, wie wir ähnliche Projekte erfolgreich umgesetzt haben.
              </p>

              <div className="pt-2">
                <Link
                  href="/fallstudien"
                  className="inline-block rounded-md bg-blue-600 text-white px-6 py-3 text-base font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  aria-label="Schau Dir unsere Fallstudien an"
                >
                  Zu den Fallstudien
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
