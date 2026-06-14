"use client";

import { motion, type Variants } from "motion/react";
import { Flame, Phone, ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import AnimatedBackground from "./AnimatedBackground";
import { COMPANY } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function RamaniHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#081427] pt-28 pb-20 lg:pt-36 lg:pb-28">
      <AnimatedBackground variant="hero" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        {/* Linke Spalte: Text */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300"
          >
            <Flame className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
            {COMPANY.tagline}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Wärme, Wasser &{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400 bg-clip-text text-transparent">
              Sicherheit
            </span>{" "}
            aus Meisterhand
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Ihr zuverlässiger Partner für Heizung, Sanitär, Gas und Wasser.
            Schnelle Reaktionszeiten, saubere Arbeit und moderne Technik –
            vom Notfall bis zur kompletten Badsanierung.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-500/30 transition-transform hover:scale-[1.04]"
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={COMPANY.emergencyPhoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-sky-400/40 hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-sky-400" aria-hidden="true" />
              24/7 Notdienst
            </a>
          </motion.div>

          {/* Mikro-Trust-Zeile */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sky-400" aria-hidden="true" />
              Zertifizierte Meister
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-sky-400" aria-hidden="true" />
              Schnelle Reaktionszeit
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-orange-400" aria-hidden="true" />
              Top bewertet
            </span>
          </motion.div>
        </motion.div>

        {/* Rechte Spalte: 3D-Szene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl shadow-sky-900/40 sm:h-[460px] lg:h-[520px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
            {/* Schwebendes Info-Badge */}
            <div className="ramani-bob absolute left-5 top-5 rounded-2xl border border-white/10 bg-[#081427]/80 px-4 py-2.5 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-wider text-slate-400">Effizienz</p>
              <p className="text-lg font-bold text-sky-400">A+++</p>
            </div>
            <div
              className="ramani-bob absolute bottom-5 right-5 rounded-2xl border border-white/10 bg-[#081427]/80 px-4 py-2.5 backdrop-blur-md"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="text-[11px] uppercase tracking-wider text-slate-400">Interaktiv</p>
              <p className="text-sm font-semibold text-white">3D erkunden →</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
