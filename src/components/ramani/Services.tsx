import type { LucideIcon } from "lucide-react";
import { Flame, Fuel, Bath, Siren } from "lucide-react";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

const services: Service[] = [
  { icon: Flame, title: "Heizung", desc: "Installation & Wartung von der Wärmepumpe bis zur Gasbrennwerttherme.", tag: "Wärmepumpe · Gas" },
  { icon: Bath, title: "Bad & Sanitär", desc: "Komplette Badsanierung, Wasserinstallation, Armaturen und Anschlüsse.", tag: "Bäder · Wasser" },
  { icon: Fuel, title: "Gas-Service", desc: "Sichere Installation, Prüfung und Wartung Ihrer Gasanlagen nach Norm.", tag: "Sicher & geprüft" },
  { icon: Siren, title: "Notdienst", desc: "Reparatur, Leckortung und Soforthilfe bei Heizungs- oder Wasserschäden.", tag: "24/7 erreichbar" },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Alles rund um Heizung, Sanitär &amp; Wasser
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Ihr Meisterbetrieb für den kompletten Bereich der Haustechnik.
            Kompetent, sauber und zuverlässig.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-900/10">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-md shadow-gray-900/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    {s.tag}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
