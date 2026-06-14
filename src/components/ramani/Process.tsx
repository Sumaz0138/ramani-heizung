import { Phone, ClipboardCheck, FileText, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const steps = [
  {
    icon: Phone,
    title: "Kontakt aufnehmen",
    desc: "Sie erreichen uns per Telefon oder Formular. Wir hören zu und vereinbaren einen Termin.",
  },
  {
    icon: ClipboardCheck,
    title: "Vor-Ort-Termin",
    desc: "Wir verschaffen uns ein genaues Bild der Lage und beraten Sie ehrlich zu den Optionen.",
  },
  {
    icon: FileText,
    title: "Transparentes Angebot",
    desc: "Sie erhalten ein klares, faires Festpreisangebot, ganz ohne versteckte Kosten.",
  },
  {
    icon: Wrench,
    title: "Fachgerechte Ausführung",
    desc: "Pünktlich, sauber und zuverlässig setzen unsere Meister Ihr Projekt um.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="So arbeiten wir"
          title="In vier Schritten zum Ziel"
          subtitle="Ein klarer, transparenter Ablauf, damit Sie von Anfang an wissen, woran Sie sind."
        />

        <div className="relative mt-12">
          {/* Verbindungslinie (Desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div className="relative text-center lg:text-left">
                    <div className="relative mx-auto lg:mx-0">
                      <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-orange-200 bg-orange-50 shadow-sm lg:mx-0">
                        <Icon className="h-7 w-7 text-orange-500" aria-hidden="true" />
                        <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-orange-400 text-xs font-bold text-white shadow-md">
                          {i + 1}
                        </span>
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-gray-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
