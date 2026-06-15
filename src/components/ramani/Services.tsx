import type { LucideIcon } from "lucide-react";
import { Flame, Fuel, Bath, Siren, Camera } from "lucide-react";
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
  "translate-x-14 translate-y-7 z-20",
  "translate-x-28 translate-y-14 z-30",
  "translate-x-42 translate-y-21 z-40",
];

const baseCard =
  "[grid-area:stack] relative flex h-40 w-[21rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-gray-200 bg-white px-5 py-4 shadow-md transition-all duration-500 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent after:opacity-100 after:transition-opacity after:content-[''] hover:z-50 hover:-translate-y-3 hover:border-gray-300 hover:after:opacity-0 [&>*]:flex [&>*]:items-center [&>*]:gap-2";

const dimmed =
  "grayscale before:absolute before:inset-0 before:rounded-xl before:bg-white/55 before:content-[''] before:transition-opacity before:duration-500 hover:grayscale-0 hover:before:opacity-0";

export default function Services() {
  return (
    <section id="leistungen" className="relative overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Überschrift */}
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Alles rund um Heizung, Sanitär &amp; Wasser
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Ihr Meisterbetrieb für den kompletten Bereich der Haustechnik.
            Kompetent, sauber und zuverlässig.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Links: CEO-Foto */}
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 shadow-xl lg:mx-0 lg:-ml-2">
              {/* Fallback, falls kein Foto hinterlegt ist */}
              <div className="absolute inset-0 grid place-items-center bg-gray-100 text-center">
                <div>
                  <Camera className="mx-auto h-10 w-10 text-gray-300" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium text-gray-900">Gründer-Foto</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Bild unter <span className="font-mono">public/gruender.jpg</span> ablegen
                  </p>
                </div>
              </div>
              {/* Foto */}
              <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/gruender.jpg.jpeg')", backgroundPosition: "right center" }}
              />
              {/* Verlauf + Namens-Karte */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2.5 shadow-md backdrop-blur">
                <p className="text-sm font-bold text-gray-900">Inhaber &amp; Heizungsbaumeister</p>
                <p className="text-xs text-gray-500">Ramani Heizung</p>
              </div>
            </div>
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
                      <span className="relative inline-flex rounded-full bg-gradient-to-br from-gray-900 to-gray-700 p-1.5">
                        <Icon className="size-4 text-white" aria-hidden="true" />
                      </span>
                      <p className="text-lg font-semibold text-gray-900">{s.title}</p>
                    </div>
                    <p className="whitespace-nowrap text-sm text-gray-600">{s.desc}</p>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-900">
                      {s.tag}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
