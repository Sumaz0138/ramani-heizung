import { ArrowLeft, CircleCheck, Phone } from "lucide-react";
import { COMPANY } from "./data";

export type ProjectDetailProps = {
  title: string;
  category: string;
  imageUrl: string;
  gradient: string;
  intro: string;
  /** Optionaler, individuell editierbarer Inhalt – ersetzt die Platzhalter. */
  children?: React.ReactNode;
};

/**
 * Wiederverwendbares Grundgerüst für die Projekt-Unterseiten.
 * Header & Footer kommen automatisch aus dem Root-Layout.
 * Jede Projektseite reicht nur ihre Daten herein und kann später
 * über `children` individuell mit Inhalten gefüllt werden.
 */
export default function ProjectDetail({
  title,
  category,
  imageUrl,
  gradient,
  intro,
  children,
}: ProjectDetailProps) {
  return (
    <article className="bg-white">
      {/* Hero-Banner */}
      <div className="relative h-[60vh] min-h-[380px] w-full overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-10 sm:px-8">
          <a
            href="/#projekte"
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Zurück zu den Projekten
          </a>
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-300">
            {category}
          </span>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
        </div>
      </div>

      {/* Inhalt */}
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="text-lg leading-relaxed text-gray-700">{intro}</p>

        {children ?? (
          <div className="mt-12 space-y-10">
            {[
              {
                h: "Ausgangslage",
                t: "Hier beschreiben wir später die konkrete Situation und die Wünsche des Kunden zu diesem Projekt.",
              },
              {
                h: "Unsere Umsetzung",
                t: "Hier folgen die einzelnen Arbeitsschritte, die eingesetzten Materialien und Besonderheiten der Ausführung.",
              },
              {
                h: "Das Ergebnis",
                t: "Hier zeigen wir das fertige Ergebnis – inkl. Vorher-/Nachher-Bildern und der Rückmeldung des Kunden.",
              },
            ].map((b) => (
              <section key={b.h}>
                <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <CircleCheck className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  {b.h}
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">{b.t}</p>
              </section>
            ))}

            <div className="rounded-xl border border-dashed border-orange-300 bg-orange-50 p-5 text-sm text-orange-700">
              Diese Seite ist ein Grundgerüst – Inhalte und Bilder zu diesem Projekt
              ergänzen wir individuell.
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-orange-50/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-900">
              Ein ähnliches Projekt geplant?
            </p>
            <p className="text-sm text-gray-600">
              Wir beraten Sie gern unverbindlich.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#kontakt"
              className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-[1.03]"
            >
              Angebot anfordern
            </a>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-orange-400"
            >
              <Phone className="h-4 w-4 text-orange-500" aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
