"use client";

import { motion } from "motion/react";
import { ShieldCheck, Clock, Star, Wrench, ArrowRight, Mail, Phone, Camera } from "lucide-react";
import Image from "next/image";
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
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-[#081427] text-white selection:bg-sky-400/30">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-5 pt-32 pb-20 text-center sm:px-8">
        {/* subtle radial glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/8 blur-[120px]" />
        </div>

        <motion.span
          {...fade(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-slate-400 uppercase"
        >
          Meisterbetrieb · Gegründet 2026
        </motion.span>

        <motion.h1
          {...fade(0.08)}
          className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Wir sind{" "}
          <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
            Ramani
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
        >
          Ihr kompetenter Ansprechpartner für Heizungs-, Sanitär- und Gebäudetechnik –
          fachgerecht, modern und mit echter Leidenschaft fürs Handwerk.
        </motion.p>

        <motion.a
          {...fade(0.22)}
          href="/#kontakt"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#081427] shadow-xl transition-transform hover:scale-[1.04]"
        >
          Jetzt Kontakt aufnehmen
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="border-y border-white/8 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-white/8 sm:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              {...fade(i * 0.06)}
              className="flex flex-col items-center justify-center gap-1.5 bg-[#081427] px-6 py-10"
            >
              <span className="text-4xl font-extrabold tracking-tight text-white">{value}</span>
              <span className="text-xs font-medium uppercase tracking-widest text-slate-500">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STORY + FOTO ───────────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2">
        {/* Text */}
        <div className="space-y-6">
          <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-widest text-sky-400">
            Unsere Geschichte
          </motion.p>
          <motion.h2 {...fade(0.06)} className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Handwerk trifft<br />
            <span className="text-slate-400">moderne Technik</span>
          </motion.h2>

          {[
            "Ramani Gebäudetechnik ist Ihr kompetenter Ansprechpartner für Heizungs-, Sanitär- und Gebäudetechnik. Als Meisterbetrieb, gegründet im Jahr 2026, stehen wir für fachgerechte Handwerksarbeit, moderne Lösungen und einen zuverlässigen Service.",
            "Wir begleiten unsere Kunden von der ersten Beratung bis zur erfolgreichen Umsetzung ihres Projekts. Dabei legen wir besonderen Wert auf eine persönliche Betreuung, transparente Kommunikation und eine sorgfältige Ausführung aller Arbeiten.",
            "Ob Neubau, Modernisierung, Wartung oder Reparatur – wir entwickeln individuelle Lösungen, die technisch durchdacht, wirtschaftlich sinnvoll und auf die Bedürfnisse unserer Kunden abgestimmt sind.",
          ].map((text, i) => (
            <motion.p key={i} {...fade(0.1 + i * 0.06)} className="text-base leading-relaxed text-slate-400">
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
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10"
        >
          {/* Fallback */}
          <div className="absolute inset-0 grid place-items-center bg-white/5">
            <div className="text-center">
              <Camera className="mx-auto h-10 w-10 text-slate-600" />
              <p className="mt-3 text-sm text-slate-500">Gründer-Foto</p>
              <p className="mt-1 text-xs text-slate-600 font-mono">public/gruender.jpg</p>
            </div>
          </div>
          {/* Actual photo */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/gruender.jpg.jpeg')" }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#081427] to-transparent" />
          {/* Name badge */}
          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-[#081427]/80 px-4 py-3 backdrop-blur-md">
            <p className="text-sm font-bold text-white">Inhaber & Heizungsbaumeister</p>
            <p className="text-xs text-slate-400">Ramani Gebäudetechnik</p>
          </div>
        </motion.div>
      </section>

      {/* ── WERTE ──────────────────────────────────────────────── */}
      <section className="border-t border-white/8 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-widest text-sky-400 text-center mb-3">
            Was uns ausmacht
          </motion.p>
          <motion.h2 {...fade(0.06)} className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl mb-14">
            Unsere Werte
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.07)}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-7 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/6"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-400/5 blur-2xl transition-all duration-500 group-hover:bg-sky-400/10" />
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-sky-400" />
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFEST ───────────────────────────────────────────── */}
      <section className="border-t border-white/8 py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center space-y-6">
          {[
            { quote: "Als Meisterbetrieb verbinden wir handwerkliche Fachkompetenz mit aktuellem technischem Know-how.", size: "text-2xl sm:text-3xl font-bold text-white" },
            { quote: "Vertrauen, Termintreue und Kundenzufriedenheit bilden die Grundlage unserer täglichen Arbeit.", size: "text-lg text-slate-400" },
          ].map(({ quote, size }, i) => (
            <motion.p key={i} {...fade(i * 0.1)} className={`leading-relaxed ${size}`}>
              {quote}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-white/8 py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-10 sm:p-16 text-center">
            {/* glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

            <motion.p {...fade(0)} className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">
              Bereit loszulegen?
            </motion.p>
            <motion.h2 {...fade(0.06)} className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Kontaktieren Sie uns
            </motion.h2>
            <motion.p {...fade(0.12)} className="text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
              Sie planen ein Projekt im Bereich Heizung oder Sanitär? Wir beraten Sie persönlich
              und entwickeln gemeinsam die passende Lösung.
            </motion.p>

            <motion.div {...fade(0.16)} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#081427] shadow-xl transition-transform hover:scale-[1.04]"
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
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
