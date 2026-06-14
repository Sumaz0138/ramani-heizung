import {
  Zap,
  Award,
  Gem,
  CalendarCheck,
  Siren,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: Zap,
    title: "Schnelle Reaktionszeiten",
    desc: "Wir melden uns umgehend und sind im Notfall besonders schnell vor Ort.",
  },
  {
    icon: Award,
    title: "Erfahrene Spezialisten",
    desc: "Geprüfte Meister und Fachkräfte mit jahrelanger Praxiserfahrung.",
  },
  {
    icon: Gem,
    title: "Hochwertige Materialien",
    desc: "Wir setzen auf Markenqualität für langlebige, zuverlässige Ergebnisse.",
  },
  {
    icon: CalendarCheck,
    title: "Verlässliche Termine",
    desc: "Pünktlichkeit ist für uns selbstverständlich. Sie können sich auf uns verlassen.",
  },
  {
    icon: Siren,
    title: "Notfall-Verfügbarkeit",
    desc: "Rund um die Uhr erreichbar, auch an Wochenenden und Feiertagen.",
  },
  {
    icon: HeartHandshake,
    title: "Langfristige Betreuung",
    desc: "Wartung, Service und Beratung: Wir bleiben Ihr Partner über das Projekt hinaus.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="vorteile" className="relative overflow-hidden bg-orange-50/40 py-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Warum Ramani Heizung"
          title="Gute Gründe für Ihre Wahl"
          subtitle="Was uns ausmacht und warum unsere Kunden uns immer wieder weiterempfehlen."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={(i % 3) * 0.1}>
                <div className="group flex h-full gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-50 ring-1 ring-orange-100 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
