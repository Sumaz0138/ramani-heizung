import { BadgeCheck, Siren, Euro, Sparkles, Wrench } from "lucide-react";

const items = [
  { icon: BadgeCheck, label: "Zertifizierte Fachkräfte" },
  { icon: Siren, label: "24/7 Notdienst" },
  { icon: Euro, label: "Transparente Preise" },
  { icon: Sparkles, label: "Saubere Ausführung" },
  { icon: Wrench, label: "Moderne Ausstattung" },
];

function Item({
  icon: Icon,
  label,
}: {
  icon: (typeof items)[number]["icon"];
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 px-8">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-50 ring-1 ring-orange-100">
        <Icon className="h-5 w-5 text-orange-500" aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-gray-800">
        {label}
      </span>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-orange-50/40 py-7">
      <div className="marquee relative">
        {/* sanftes Ausblenden an den Rändern */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-orange-50/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-orange-50/80 to-transparent" />

        <div className="marquee__track">
          {/* Mehrfach dupliziert für einen lückenlosen, nahtlosen Endlos-Loop */}
          {["a", "b", "c", "d"].map((set) =>
            items.map((it) => (
              <Item key={`${set}-${it.label}`} icon={it.icon} label={it.label} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
