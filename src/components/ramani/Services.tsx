import type { LucideIcon } from "lucide-react";
import { Flame, Fuel, Bath, Siren, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

const services: Service[] = [
  { icon: Flame, title: "Heizung", desc: "Installation & Wartung", tag: "Wärmepumpe · Gas" },
  { icon: Bath, title: "Bad & Sanitär", desc: "Sanierung & Installation", tag: "Bäder · Wasser" },
  { icon: Fuel, title: "Gas-Service", desc: "Prüfung nach Norm", tag: "Sicher & geprüft" },
  { icon: Siren, title: "Notdienst", desc: "Reparatur & Leckortung", tag: "24/7 erreichbar" },
];

// Versatz + feste Z-Reihenfolge pro Karte (hinten-oben-links nach vorne-unten-rechts)
const offsets = [
  "translate-x-0 translate-y-0 z-10",
  "translate-x-12 translate-y-6 z-20",
  "translate-x-24 translate-y-12 z-30",
  "translate-x-36 translate-y-18 z-40",
];

const baseCard =
  "[grid-area:stack] relative flex h-36 w-[18rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-gray-200 bg-white px-4 py-3 shadow-md transition-all duration-500 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[18rem] after:bg-gradient-to-l after:from-white after:to-transparent after:content-[''] hover:border-orange-300 [&>*]:flex [&>*]:items-center [&>*]:gap-2";

const dimmed =
  "grayscale before:absolute before:inset-0 before:rounded-xl before:bg-white/55 before:content-[''] before:transition-opacity before:duration-500 hover:grayscale-0 hover:before:opacity-0";

export default function Services() {
  return (
    <section id="leistungen" className="relative overflow-hidden bg-white py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        {/* Links: Text */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
            Unsere Leistungen
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Alles rund um Heizung, Sanitär &amp; Wasser
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
            Ein Ansprechpartner für den kompletten Bereich der Haustechnik.
            Kompetent, sauber und zuverlässig. Fahren Sie über die Karten, um die
            einzelnen Leistungen zu entdecken.
          </p>
          <a
            href="#kontakt"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-[1.04]"
          >
            Angebot anfordern
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>

        {/* Rechts: animiertes Karten-Deck */}
        <Reveal direction="left" className="flex justify-center lg:justify-end">
          <div className="grid place-items-center [grid-template-areas:'stack']">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isFront = i === services.length - 1;
              return (
                <div
                  key={s.title}
                  className={cn(baseCard, offsets[i], !isFront && dimmed)}
                >
                  <div>
                    <span className="relative inline-flex rounded-full bg-gradient-to-br from-orange-500 to-orange-400 p-1.5">
                      <Icon className="size-4 text-white" aria-hidden="true" />
                    </span>
                    <p className="text-lg font-semibold text-gray-900">{s.title}</p>
                  </div>
                  <p className="whitespace-nowrap text-sm text-gray-600">{s.desc}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-orange-500">
                    {s.tag}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
