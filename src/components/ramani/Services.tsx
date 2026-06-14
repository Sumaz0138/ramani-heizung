"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Flame,
  Gauge,
  Fuel,
  Droplets,
  Bath,
  Search,
  Wrench,
  Siren,
  RotateCcw,
  CircleCheck,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  examples: { project: string; detail: string }[];
};

const services: Service[] = [
  {
    icon: Flame,
    title: "Heizungsinstallation",
    desc: "Moderne, effiziente Heizsysteme – von der Wärmepumpe bis zur Gasbrennwerttherme.",
    examples: [
      { project: "Neubau Einfamilienhaus", detail: "Wärmepumpe + Fußbodenheizung, Musterstadt" },
      { project: "Altbau-Sanierung", detail: "Umstieg auf Gasbrennwert, −28 % Verbrauch" },
    ],
  },
  {
    icon: Gauge,
    title: "Heizungswartung",
    desc: "Regelmäßige Wartung für volle Leistung, niedrige Kosten und lange Lebensdauer.",
    examples: [
      { project: "Mehrfamilienhaus, 12 Parteien", detail: "Jährlicher Wartungsvertrag" },
      { project: "Gewerbeobjekt", detail: "Heizzentrale, 0 Ausfälle in 3 Jahren" },
    ],
  },
  {
    icon: Fuel,
    title: "Gas-Systemservice",
    desc: "Sichere Installation, Prüfung und Wartung Ihrer Gasleitungen und -geräte.",
    examples: [
      { project: "Gasleitungsprüfung", detail: "Dichtheitsprüfung nach Umbau" },
      { project: "Therme-Austausch", detail: "Inkl. Abnahme & Einweisung" },
    ],
  },
  {
    icon: Droplets,
    title: "Wasserinstallation",
    desc: "Trinkwasser- und Abwasserleitungen, Armaturen und Anschlüsse – sauber verlegt.",
    examples: [
      { project: "Trinkwasserleitung erneuert", detail: "Komplettstrang, Reihenhaus" },
      { project: "Außenzapfstelle", detail: "Frostsicher inkl. Gartenleitung" },
    ],
  },
  {
    icon: Bath,
    title: "Badsanierung",
    desc: "Ihr Traumbad aus einer Hand: Planung, Sanitär, Fliesen und Komfort.",
    examples: [
      { project: "Barrierefreies Bad", detail: "Bodengleiche Dusche, Musterstadt" },
      { project: "Gäste-WC", detail: "Komplettumbau in 5 Tagen" },
    ],
  },
  {
    icon: Search,
    title: "Leckortung",
    desc: "Präzise Ortung verdeckter Leckagen mit moderner Messtechnik – minimalinvasiv.",
    examples: [
      { project: "Verdeckte Leckage", detail: "Kellerwand punktgenau geortet" },
      { project: "Feuchteschaden Bad", detail: "Ursache ohne Aufstemmen gefunden" },
    ],
  },
  {
    icon: Wrench,
    title: "Rohrreparatur",
    desc: "Verstopfungen, undichte Stellen oder Rohrbruch – schnell und dauerhaft.",
    examples: [
      { project: "Rohrbruch-Soforthilfe", detail: "Einsatz am Wochenende" },
      { project: "Hauptleitung", detail: "Verstopfung nachhaltig behoben" },
    ],
  },
  {
    icon: Siren,
    title: "Notreparaturen",
    desc: "Heizungsausfall oder Wasserschaden? Unser Notdienst ist rund um die Uhr da.",
    examples: [
      { project: "Heizungsausfall im Winter", detail: "Nachtnotdienst, gleiche Nacht gelöst" },
      { project: "Wasserschaden", detail: "Soforteinsatz, Folgeschaden verhindert" },
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div className="flip-perspective h-[300px]">
      <div className={`flip-inner h-full w-full ${flipped ? "is-flipped" : ""}`}>
        {/* Vorderseite */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          className="flip-face group relative flex h-full w-full flex-col items-start overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/20"
        >
          {/* Glüh-Akzent beim Hover */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-400/0 blur-2xl transition-all duration-500 group-hover:bg-orange-400/30" />

          <span className="relative grid h-13 w-13 place-items-center rounded-xl bg-orange-50 p-3 ring-1 ring-orange-100 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-400 group-hover:ring-orange-400/40">
            <Icon className="h-6 w-6 text-orange-500 transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
          </span>

          <h3 className="relative mt-5 text-lg font-semibold text-gray-900">{service.title}</h3>
          <p className="relative mt-2 text-sm leading-relaxed text-gray-600">{service.desc}</p>

          <span className="relative mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-orange-600">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Beispiele ansehen
          </span>
        </button>

        {/* Rückseite */}
        <button
          type="button"
          onClick={() => setFlipped(false)}
          className="flip-face flip-back flex h-full w-full flex-col overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-b from-orange-50 to-white p-6 text-left shadow-lg"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600">
            {service.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500">Beispiele aus früheren Projekten</p>

          <ul className="mt-4 flex-1 space-y-3">
            {service.examples.map((ex) => (
              <li key={ex.project} className="flex gap-2.5">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold text-gray-900">{ex.project}</span>
                  <span className="block text-xs text-gray-600">{ex.detail}</span>
                </span>
              </li>
            ))}
          </ul>

          <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-semibold text-gray-500">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Zurück
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Alles rund um Heizung, Sanitär & Wasser"
          subtitle="Tipp: Karte anklicken, um Beispiele aus früheren Kundenprojekten zu sehen."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
