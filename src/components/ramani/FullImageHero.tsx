import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "./data";

export default function FullImageHero() {
  return (
    <section id="top" className="relative flex min-h-screen w-full items-center overflow-hidden">
      {/* Fallback (sichtbar, falls kein Hero-Bild hinterlegt ist) */}
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-500">
        <p className="px-6 text-center text-sm text-gray-600">
          Hero-Bild unter <span className="font-mono">public/hero.jpg</span> ablegen
        </p>
      </div>

      {/* Hero-Bild */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg.jpg')" }}
      />

      {/* Verlauf für Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/35" />

      {/* Inhalt */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-20 sm:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Willkommen bei Ramani
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Ihr Meisterbetrieb für Heizung, Sanitär, Gas und Wasser. Von der
            Beratung über die Installation bis zur Wartung, alles aus einer
            Hand, sauber und zuverlässig.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-xl transition-transform hover:scale-[1.04]"
            >
              Angebot anfordern
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>

      {/* Scroll-Hinweis */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span className="h-2 w-1 rounded-full bg-white/80" />
        </span>
      </div>
    </section>
  );
}
