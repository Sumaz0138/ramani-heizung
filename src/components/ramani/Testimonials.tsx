import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Unsere alte Heizung ist mitten im Winter ausgefallen. Das Team war noch am selben Tag da und hat alles schnell und sauber repariert. Absolut empfehlenswert!",
    name: "Familie Bauer", // Platzhalter
    role: "Privatkunde, Musterstadt",
  },
  {
    quote:
      "Von der Beratung bis zur fertigen Badsanierung lief alles reibungslos. Faire Preise, top Handwerk und immer pünktlich. So stellt man sich einen Fachbetrieb vor.",
    name: "M. Schneider", // Platzhalter
    role: "Eigenheimbesitzerin",
  },
  {
    quote:
      "Wir lassen unsere Heizungsanlagen seit Jahren hier warten. Zuverlässig, kompetent und immer erreichbar. Ein Partner, auf den man sich verlassen kann.",
    name: "Hausverwaltung Klein", // Platzhalter
    role: "Gewerbekunde",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kundenstimmen"
          title="Was unsere Kunden sagen"
          subtitle="Vertrauen, das durch ehrliche Arbeit entsteht – das schätzen unsere Kundinnen und Kunden."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10">
                <Quote className="h-9 w-9 text-orange-200" aria-hidden="true" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-orange-400 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
