"use client";

import { motion } from "motion/react";
import { ShieldCheck, Clock, Star, Wrench, ArrowRight, Mail, Phone, Camera } from "lucide-react";
import { COMPANY } from "@/components/ramani/data";

const stats = [
  { value: "100%", label: "Meisterbetrieb" },
  { value: "24/7", label: "Notdienst" },
  { value: "2026", label: "Gegründet" },
  { value: "∞", label: "Kundenzufriedenheit" },
];

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
          <span className="bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">
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

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="border-b border-gray-200">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-y divide-gray-200 sm:grid-cols-4 sm:divide-y-0">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              {...fade(i * 0.06)}
              className="flex flex-col items-center justify-center gap-1.5 px-6 py-12"
            >
              <span className="text-4xl font-extrabold tracking-tight text-gray-900">{value}</span>
              <span className="text-xs font-medium uppercase tracking-widest text-gray-400">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STORY + FOTO ───────────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2">
        {/* Text */}
        <div className="space-y-6">
          <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-widest text-orange-500">
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
          ].map((text, i) => (
            <motion.p key={i} {...fade(0.1 + i * 0.06)} className="text-base leading-relaxed text-gray-500">
              {text}
            </motion.p>
          ))}
        </div>

        {/* Gründerfoto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 shadow-xl"
        >
          {/* Fallback */}
          <div className="absolute inset-0 grid place-items-center bg-gray-50">
            <div className="text-center">
              <Camera className="mx-auto h-10 w-10 text-gray-300" />
              <p className="mt-3 text-sm text-gray-400">Gründer-Foto</p>
              <p className="mt-1 text-xs text-gray-300 font-mono">public/gruender.jpg</p>
            </div>
          </div>
          {/* Foto */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/gruender.jpg.jpeg')" }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Badge */}
          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-md backdrop-blur-md">
            <p className="text-sm font-bold text-gray-900">Inhaber & Heizungsbaumeister</p>
            <p className="text-xs text-gray-500">Ramani Gebäudetechnik</p>
          </div>
        </motion.div>
      </section>

      {/* ── WERTE ──────────────────────────────────────────────── */}
      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-widest text-orange-500 text-center mb-3">
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
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-orange-100 bg-orange-50">
                  <Icon className="h-5 w-5 text-orange-500" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFEST ───────────────────────────────────────────── */}
      <section className="border-t border-gray-200 py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center space-y-5">
          <motion.p {...fade(0)} className="text-2xl sm:text-3xl font-bold leading-relaxed text-gray-900">
            Als Meisterbetrieb verbinden wir handwerkliche Fachkompetenz mit aktuellem technischem Know-how.
          </motion.p>
          <motion.p {...fade(0.1)} className="text-lg leading-relaxed text-gray-500">
            Vertrauen, Termintreue und Kundenzufriedenheit bilden die Grundlage unserer täglichen Arbeit.
          </motion.p>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-10 sm:p-16 text-center shadow-sm">
            <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-4">
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
                <Mail className="h-4 w-4 text-sky-500" />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                <Phone className="h-4 w-4 text-sky-500" />
                {COMPANY.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
