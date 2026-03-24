import Section from "./ui/Section";
import Image from "next/image";

type Member = { name: string; role: string; img: string; mail: string };

const team: Member[] = [
  { name: "David", role: "Gründer | Marketing & KI Beratung", img: "/David_Steinbrecher.webp", mail: "david@digitalisierungshilfe.at" },
  { name: "Matthias", role: "Gründer & Head of Fulfillment", img: "/Matthias_Meindlhumer.webp", mail: "matthias@digitalisierungshilfe.at" },
  { name: "Lennart", role: "Marketing Partner", img: "/Lennart_Niehausmeier.webp", mail: "lennart@digitalisierungshilfe.at" },
  { name: "Marko", role: "Vertriebsleiter", img: "/Marko_Grabez.webp", mail: "marko@digitalisierungshilfe.at" },
  { name: "Clara", role: "Assistenz der Geschäftsführung", img: "/Clara_Jansch.webp", mail: "clara@digitalisierungshilfe.at" },
  { name: "Michael", role: "Programmierung & KI", img: "/Michael_Benedikter_.webp", mail: "michael@digitalisierungshilfe.at" },
  { name: "Michael", role: "Customer Success Manager", img: "/Michael_Zarre.webp", mail: "michael@digitalisierungshilfe.at" },
  { name: "Kevin", role: "Programmierung & Webdesign", img: "/Kevin_Bolter.webp", mail: "kevin@digitalisierungshilfe.at" },
  { name: "Flavius", role: "Vertrieb", img: "/Flavius_Ghiea.webp", mail: "flavius@digitalisierungshilfe.at" },
  { name: "Lisa", role: "Vertrieb", img: "/lisa.jpg", mail: "office@digitalisierungshilfe.at" },
  { name: "Meike", role: "Management & Finanzen", img: "/Meike_Steinbrecher.webp", mail: "meike@digitalisierungshilfe.at" },
  { name: "Nina", role: "Projektmanagement", img: "/Nina_Weixelbaumer.webp", mail: "nina@digitalisierungshilfe.at" },
];

export default function Team() {
  return (
    <Section id="team" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#033EDC] text-xs font-semibold tracking-widest uppercase mb-4">
            Unser Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Das Team für Ihren Erfolg
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Erfahrene Experten für digitales Marketing, Webentwicklung und Förderberatung – alles aus einer Hand.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <div
              key={`${m.img}-${i}`}
              className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-20 h-20 mb-4 flex-shrink-0">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover rounded-full ring-2 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300"
                  sizes="80px"
                  priority={i < 4}
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm">{m.name}</h3>
              <p className="text-gray-500 text-xs mt-1 leading-snug">{m.role}</p>
              <a
                href={`mailto:${m.mail}`}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#033EDC] hover:text-blue-700 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="12" height="9" rx="1.5"/><path d="M2 4l6 5 6-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                E-Mail
              </a>
            </div>
          ))}

          {/* Recruiting card */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-blue-100 bg-blue-50/40 p-5 text-center hover:border-blue-200 hover:bg-blue-50/60 transition-all duration-300">
            <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 ring-2 ring-blue-100 flex items-center justify-center text-2xl">
              ✨
            </div>
            <h3 className="font-bold text-gray-900 text-sm">Sie?</h3>
            <p className="text-gray-500 text-xs mt-1 leading-snug">Wir sind auf der Suche nach Talenten</p>
            <a
              href="mailto:office@digitalisierungshilfe.at"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#033EDC] hover:text-blue-700 transition-colors"
            >
              Bewerben
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
