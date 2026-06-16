"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function AcLampHero() {
  return (
    <section id="top">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h1 className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text py-2 text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
            Klimaanlagen von Samsung
          </h1>
          <p className="mt-3 max-w-md text-center text-sm text-slate-400 md:text-base">
            Effiziente Kühlung und Wärme für Ihr Zuhause – leise, sparsam und
            zuverlässig installiert.
          </p>

          {/* Samsung-Klimaanlage */}
          <div className="relative mt-10 h-44 w-[22rem] max-w-[90vw] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 md:h-52 md:w-[30rem]">
            <div className="absolute inset-0 grid place-items-center bg-slate-900 text-center text-xs text-slate-500">
              Bild der Samsung-Klimaanlage unter
              <br />
              <span className="font-mono">public/klimaanlage.jpg</span> ablegen
            </div>
            <img
              src="/klimaanlage.jpg"
              alt="Samsung Klimaanlage"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <a
            href="/#kontakt"
            className="mt-10 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:scale-[1.04]"
          >
            Beratung anfragen
          </a>
        </motion.div>
      </LampContainer>
    </section>
  );
}
