"use client";

import { motion } from "motion/react";
import { ShieldCheck, Clock, Star, Wrench, ArrowRight, Mail, Phone } from "lucide-react";
import { COMPANY } from "@/components/ramani/data";

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
    text: "Persönliche Betreuung vom ersten Gespräch bis zur Fertigstellung.",
  },
  {
    icon: Wrench,
    title: "Moderne Technik",
    text: "Individuelle Lösungen für Neubau, Modernisierung, Wartung und Reparatur.",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-gray-50 px-5 pt-32 pb-20 text-center sm:px-8 border-b border-gray-200">
        <motion.h1
          {...fade(0)}
          className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
        >
          Über{" "}
          <span className="text-gray-400">
            Ramani
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.1)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500"
        >
          Ihr kompetenter Ansprechpartner für Heizungs-, Sanitär- und Gebäudetechnik –
          fachgerecht, modern und mit echter Leidenschaft fürs Handwerk.
        </motion.p>

        <motion.a
          {...fade(0.18)}
          href="/#kontakt"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.04]"
        >
          Jetzt Kontakt aufnehmen
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </section>

      {/* ── STORY ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <div className="space-y-6">
          <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Unsere Geschichte
          </motion.p>
          <motion.h2 {...fade(0.06)} className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Handwerk trifft<br />
            <span className="text-gray-400">moderne Technik</span>
          </motion.h2>

          {[
            "Ramani Gebäudetechnik ist Ihr kompetenter Ansprechpartner für Heizungs-, Sanitär- und Gebäudetechnik. Als Meisterbetrieb, gegründet im Jahr 2026, stehen wir für fachgerechte Handwerksarbeit, moderne Lösungen und einen zuverlässigen Service.",
            "Wir begleiten unsere Kunden von der ersten Beratung bis zur erfolgreichen Umsetzung ihres Projekts. Dabei legen wir besonderen Wert auf eine persönliche Betreuung, transparente Kommunikation und eine sorgfältige Ausführung aller Arbeiten.",
            "Ob Neubau, Modernisierung, Wartung oder Reparatur – wir entwickeln individuelle Lösungen, die technisch durchdacht, wirtschaftlich sinnvoll und auf die Bedürfnisse unserer Kunden abgestimmt sind.",
            "Als Meisterbetrieb verbinden wir handwerkliche Fachkompetenz mit aktuellem technischem Know-how. Unser Anspruch ist es, jede Aufgabe mit Sorgfalt, Zuverlässigkeit und höchster Professionalität umzusetzen.",
            "Vertrauen, Termintreue und Kundenzufriedenheit bilden die Grundlage unserer täglichen Arbeit. Wir freuen uns darauf, Sie bei Ihrem Projekt zu unterstützen und gemeinsam die passende Lösung zu finden.",
          ].map((text, i) => (
            <motion.p key={i} {...fade(0.08 + i * 0.05)} className="text-base leading-relaxed text-gray-500">
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ── WERTE ──────────────────────────────────────────────── */}
      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center mb-3">
            Was uns ausmacht
          </motion.p>
          <motion.h2 {...fade(0.06)} className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-14">
            Unsere Werte
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.07)}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-gray-200 bg-gray-100">
                  <Icon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-gray-200 py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 sm:p-16 text-center">
            <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Bereit loszulegen?
            </motion.p>
            <motion.h2 {...fade(0.06)} className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
              Kontaktieren Sie uns
            </motion.h2>
            <motion.p {...fade(0.12)} className="text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
              Sie planen ein Projekt im Bereich Heizung oder Sanitär? Wir beraten Sie persönlich
              und entwickeln gemeinsam die passende Lösung.
            </motion.p>

            <motion.div {...fade(0.16)} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.04]"
              >
                Angebot anfordern
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={COMPANY.emailHref}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                <Mail className="h-4 w-4 text-gray-500" />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                <Phone className="h-4 w-4 text-gray-500" />
                {COMPANY.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
