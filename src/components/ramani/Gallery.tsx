import Link from "next/link";
import { Bath, Flame, Wrench, Gauge, Droplets, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const projects = [
  {
    slug: "badsanierung",
    title: "Komplette Badsanierung",
    category: "Bad & Sanitär",
    icon: Bath,
    gradient: "from-orange-500/80 via-orange-600/55 to-stone-900",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    span: "lg:col-span-2",
  },
  {
    slug: "waermepumpe",
    title: "Wärmepumpen-Installation",
    category: "Heizung",
    icon: Flame,
    gradient: "from-amber-500/80 via-orange-600/50 to-stone-900",
    imageUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop",
    span: "",
  },
  {
    slug: "heizungswartung",
    title: "Heizungswartung",
    category: "Service",
    icon: Gauge,
    gradient: "from-orange-400/75 via-stone-700/55 to-stone-900",
    imageUrl:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974&auto=format&fit=crop",
    span: "",
  },
  {
    slug: "rohrleitungsbau",
    title: "Rohrleitungsbau",
    category: "Installation",
    icon: Wrench,
    gradient: "from-stone-600/70 via-orange-700/45 to-stone-900",
    imageUrl:
      "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2070&auto=format&fit=crop",
    span: "",
  },
  {
    slug: "trinkwasser",
    title: "Trinkwasser-Anlage",
    category: "Wasser",
    icon: Droplets,
    gradient: "from-orange-500/75 via-amber-600/50 to-stone-900",
    imageUrl:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070&auto=format&fit=crop",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="projekte" className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Referenzen"
          title="Ausgewählte Projekte"
          subtitle="Ein Einblick in unsere Arbeit – klicken Sie ein Projekt an für mehr Details."
        />

        <div className="mt-10 grid auto-rows-[200px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.slug} delay={(i % 3) * 0.08} className={`${p.span} h-full`}>
                <Link
                  href={`/projekte/${p.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
                >
                  {/* Verlauf-Fallback (sichtbar, falls Foto nicht lädt) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
                  {/* Foto */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${p.imageUrl}')` }}
                  />
                  {/* Raster-Textur */}
                  <div className="ramani-grid absolute inset-0 opacity-20" />
                  {/* Verlauf nach unten für Lesbarkeit */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  {/* großes Icon */}
                  <Icon
                    className="absolute right-5 top-5 h-12 w-12 text-white/25 transition-all duration-500 group-hover:text-white/45"
                    aria-hidden="true"
                  />

                  {/* Caption */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-orange-200">
                        {p.category}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
                      <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-white/80">
                        Projekt ansehen
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 translate-y-2 place-items-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4 text-white" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}

          {/* CTA-Kachel */}
          <Reveal delay={0.1} className="h-full">
            <a
              href="#kontakt"
              className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-5 text-center transition-colors hover:bg-orange-100"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-orange-400 transition-transform group-hover:scale-110">
                <ArrowUpRight className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <span className="text-base font-semibold text-gray-900">Ihr Projekt?</span>
              <span className="text-sm text-gray-500">Jetzt unverbindlich anfragen</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
