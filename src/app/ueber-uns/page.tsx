import { Wrench, ShieldCheck, Clock, Star, Phone, Mail, ArrowRight } from "lucide-react";
import { COMPANY } from "@/components/ramani/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Ramani Gebäudetechnik",
  description:
    "Ramani Gebäudetechnik – Ihr Meisterbetrieb für Heizung, Sanitär und Gebäudetechnik. Fachgerechte Handwerksarbeit, moderne Lösungen, persönlicher Service.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Meisterbetrieb",
    text: "Zertifizierte Fachkompetenz und handwerkliche Qualität auf höchstem Niveau.",
  },
  {
    icon: Clock,
    title: "Termintreue",
    text: "Wir halten unsere Zusagen – pünktlich, zuverlässig und ohne Überraschungen.",
  },
  {
    icon: Star,
    title: "Kundenzufriedenheit",
    text: "Persönliche Betreuung und transparente Kommunikation vom ersten Gespräch bis zur Fertigstellung.",
  },
  {
    icon: Wrench,
    title: "Moderne Technik",
    text: "Aktuelle Lösungen für Neubau, Modernisierung, Wartung und Reparatur.",
  },
];

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-[#081427]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-transparent to-orange-900/10" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <Wrench className="h-3.5 w-3.5 text-orange-400" />
            Meisterbetrieb seit 2026
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Über{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400 bg-clip-text text-transparent">
              Ramani
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Ihr kompetenter Ansprechpartner für Heizungs-, Sanitär- und Gebäudetechnik –
            fachgerecht, modern und zuverlässig.
          </p>
        </div>
      </section>

      {/* Über uns Text */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p>
            Ramani Gebäudetechnik ist Ihr kompetenter Ansprechpartner für Heizungs-, Sanitär- und
            Gebäudetechnik. Als Meisterbetrieb, gegründet im Jahr 2026, stehen wir für
            fachgerechte Handwerksarbeit, moderne Lösungen und einen zuverlässigen Service.
          </p>
          <p>
            Wir begleiten unsere Kunden von der ersten Beratung bis zur erfolgreichen Umsetzung
            ihres Projekts. Dabei legen wir besonderen Wert auf eine persönliche Betreuung,
            transparente Kommunikation und eine sorgfältige Ausführung aller Arbeiten.
          </p>
          <p>
            Ob Neubau, Modernisierung, Wartung oder Reparatur – wir entwickeln individuelle
            Lösungen, die technisch durchdacht, wirtschaftlich sinnvoll und auf die Bedürfnisse
            unserer Kunden abgestimmt sind. Qualität, Sicherheit und Langlebigkeit stehen dabei
            stets im Mittelpunkt.
          </p>
          <p>
            Als Meisterbetrieb verbinden wir handwerkliche Fachkompetenz mit aktuellem technischem
            Know-how. Unser Anspruch ist es, jede Aufgabe mit Sorgfalt, Zuverlässigkeit und
            höchster Professionalität umzusetzen.
          </p>
          <p>
            Vertrauen, Termintreue und Kundenzufriedenheit bilden die Grundlage unserer täglichen
            Arbeit. Wir freuen uns darauf, Sie bei Ihrem Projekt zu unterstützen und gemeinsam
            die passende Lösung zu finden.
          </p>
        </div>
      </section>

      {/* Werte */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-colors"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-sky-400/10 border border-sky-400/20">
                <Icon className="h-5 w-5 text-sky-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt CTA */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-28">
        <div className="rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-900/30 to-orange-900/10 p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Kontaktieren Sie uns</h2>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Sie haben Fragen oder planen ein Projekt im Bereich Heizung oder Sanitär? Nehmen Sie
            gerne Kontakt mit uns auf – wir beraten Sie persönlich und stehen Ihnen mit Fachwissen
            und Erfahrung zur Seite.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-500/30 transition-transform hover:scale-[1.04]"
            >
              Angebot anfordern
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={COMPANY.emailHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-sky-400" />
              {COMPANY.email}
            </a>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-sky-400" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
