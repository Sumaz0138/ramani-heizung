import Reveal from "./Reveal";

type Service = {
  img: string;
  title: string;
  desc: string;
  tag: string;
};

const services: Service[] = [
  {
    img: "/Heat.jpg",
    title: "Heizung",
    desc: "Installation & Wartung von der Wärmepumpe bis zur Gasbrennwerttherme.",
    tag: "Wärmepumpe · Gas",
  },
  {
    img: "/Water.jpg",
    title: "Bad & Sanitär",
    desc: "Komplette Badsanierung, Wasserinstallation, Armaturen und Anschlüsse.",
    tag: "Bäder · Wasser",
  },
  {
    img: "/Gas.jpg",
    title: "Gas-Service",
    desc: "Sichere Installation, Prüfung und Wartung Ihrer Gasanlagen nach Norm.",
    tag: "Sicher & geprüft",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Alles rund um Heizung, Sanitär &amp; Wasser
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Ihr Meisterbetrieb für den kompletten Bereich der Haustechnik.
            Kompetent, sauber und zuverlässig.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-900/10">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-16 w-16 rounded-2xl object-cover ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                  {s.tag}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
