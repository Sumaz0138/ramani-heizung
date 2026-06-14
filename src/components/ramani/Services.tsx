import type { LucideIcon } from "lucide-react";
import {
  Flame,
  Gauge,
  Fuel,
  Droplets,
  Bath,
  Search,
  Wrench,
  Siren,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

const services: Service[] = [
  { icon: Flame, title: "Heizungsinstallation", desc: "Effiziente Heizsysteme bis zur Wärmepumpe.", tag: "Heizung" },
  { icon: Gauge, title: "Heizungswartung", desc: "Volle Leistung, niedrige Kosten, lange Lebensdauer.", tag: "Wartung" },
  { icon: Fuel, title: "Gas-Systemservice", desc: "Sichere Installation und Prüfung nach Norm.", tag: "Gas" },
  { icon: Droplets, title: "Wasserinstallation", desc: "Leitungen, Armaturen und Anschlüsse, sauber verlegt.", tag: "Wasser" },
  { icon: Bath, title: "Badsanierung", desc: "Ihr Traumbad aus einer Hand.", tag: "Sanitär" },
  { icon: Search, title: "Leckortung", desc: "Verdeckte Leckagen präzise und minimalinvasiv geortet.", tag: "Diagnose" },
  { icon: Wrench, title: "Rohrreparatur", desc: "Verstopfung oder Rohrbruch, schnell behoben.", tag: "Reparatur" },
  { icon: Siren, title: "Notreparaturen", desc: "Rund um die Uhr im Einsatz für Sie.", tag: "24/7 Notdienst" },
];

// Versatz pro Karte im Stapel (von hinten-oben-links nach vorne-unten-rechts)
const offsets = [
  "translate-x-0 translate-y-0",
  "translate-x-6 translate-y-3",
  "translate-x-12 translate-y-6",
  "translate-x-18 translate-y-9",
  "translate-x-24 translate-y-12",
  "translate-x-30 translate-y-15",
  "translate-x-36 translate-y-18",
  "translate-x-44 translate-y-24",
];

const baseCard =
  "[grid-area:stack] relative flex h-36 w-[20rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-gray-200 bg-white/80 px-4 py-3 shadow-md backdrop-blur-sm transition-all duration-500 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-white after:to-transparent after:content-[''] hover:border-orange-300 hover:bg-white hover:z-50 hover:-translate-y-2 [&>*]:flex [&>*]:items-center [&>*]:gap-2";

const dimmed =
  "grayscale before:absolute before:inset-0 before:rounded-xl before:bg-white/55 before:content-[''] before:transition-opacity before:duration-500 hover:grayscale-0 hover:before:opacity-0";

export default function Services() {
  return (
    <section id="leistungen" className="relative overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Alles rund um Heizung, Sanitär & Wasser"
          subtitle="Fahren Sie über die Karten: Jede Leistung kommt einzeln nach vorne."
        />

        <Reveal className="mt-16 flex justify-center">
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
