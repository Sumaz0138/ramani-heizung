import { CircleCheck, Camera } from "lucide-react";
import Reveal from "./Reveal";

const values = [
  "Zuverlässigkeit & Termintreue",
  "Höchste Sicherheitsstandards",
  "Saubere, sorgfältige Arbeit",
  "Zufriedenheit unserer Kunden",
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "2.500+", label: "Projekte" },
  { value: "24/7", label: "Notdienst" },
  { value: "100 %", label: "Meisterbetrieb" },
];

export default function About() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-orange-50/40 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
        {/* Text */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              Über uns
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Traditionelles Handwerk trifft moderne Technik
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Seit vielen Jahren stehen wir für solides Handwerk und ehrliche
              Beratung. Wir verbinden die Erfahrung des klassischen Heizungs- und
              Sanitärbaus mit modernster Technik, von energieeffizienten
              Wärmepumpen bis zur digitalen Leckortung. So erhalten Sie Lösungen,
              die heute funktionieren und morgen noch überzeugen.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3 text-sm text-gray-700">
                  <CircleCheck className="h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-orange-500">{s.value}</p>
                  <p className="mt-1 text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Gründer-Foto */}
        <Reveal direction="left">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            {/* Fallback-Ebene (sichtbar, falls kein Foto hinterlegt ist) */}
            <div className="absolute inset-0 grid place-items-center bg-orange-50 text-center">
              <div>
                <Camera className="mx-auto h-10 w-10 text-orange-300" aria-hidden="true" />
                <p className="mt-3 text-sm font-medium text-orange-500">Gründer-Foto</p>
                <p className="mt-1 text-xs text-gray-400">
                  Bild unter <span className="font-mono">public/gruender.jpg</span> ablegen
                </p>
              </div>
            </div>

            {/* Foto (liegt über dem Fallback; bei 404 bleibt der Fallback sichtbar) */}
            <div
              className="absolute inset-0 bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/gruender.jpg.jpeg')", backgroundPosition: "right center" }}
            />

            {/* sanfter Verlauf + Namens-Karte */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2.5 shadow-md backdrop-blur">
              <p className="text-sm font-bold text-gray-900">Inhaber &amp; Heizungsbaumeister</p>
              <p className="text-xs text-gray-500">Ramani Heizung</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
