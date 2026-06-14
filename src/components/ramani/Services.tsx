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
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: Flame,
    title: "Heizungsinstallation",
    desc: "Moderne, effiziente Heizsysteme von der Wärmepumpe bis zur Gasbrennwerttherme.",
  },
  {
    icon: Gauge,
    title: "Heizungswartung",
    desc: "Regelmäßige Wartung für volle Leistung, niedrige Kosten und lange Lebensdauer.",
  },
  {
    icon: Fuel,
    title: "Gas-Systemservice",
    desc: "Sichere Installation, Prüfung und Wartung Ihrer Gasleitungen und -geräte.",
  },
  {
    icon: Droplets,
    title: "Wasserinstallation",
    desc: "Trinkwasser- und Abwasserleitungen, Armaturen und Anschlüsse, sauber verlegt.",
  },
  {
    icon: Bath,
    title: "Badsanierung",
    desc: "Ihr Traumbad aus einer Hand: Planung, Sanitär, Fliesen und Komfort.",
  },
  {
    icon: Search,
    title: "Leckortung",
    desc: "Präzise Ortung verdeckter Leckagen mit moderner Messtechnik, minimalinvasiv.",
  },
  {
    icon: Wrench,
    title: "Rohrreparatur",
    desc: "Verstopfungen, undichte Stellen oder Rohrbruch, schnell und dauerhaft behoben.",
  },
  {
    icon: Siren,
    title: "Notreparaturen",
    desc: "Heizungsausfall oder Wasserschaden? Unser Notdienst ist rund um die Uhr da.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Alles rund um Heizung, Sanitär & Wasser"
          subtitle="Ein Ansprechpartner für den kompletten Bereich der Haustechnik. Kompetent, sauber und zuverlässig."
        />

        <div className="mt-14 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.08}>
                <div className="group flex h-44 -skew-y-[6deg] select-none flex-col justify-between rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:skew-y-0 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/15">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-orange-400 shadow-md shadow-orange-500/30">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <p className="text-lg font-semibold text-gray-900">{s.title}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
