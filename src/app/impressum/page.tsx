import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum | Ramani Gebäudetechnik",
};

export default function ImpressumPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 sm:pt-32">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Zur Startseite
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Impressum</h1>

        <h2 className="mt-10 text-lg font-semibold text-gray-900">Angaben gemäß § 5 TMG</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Ramani Gebäudetechnik
          <br />
          Muris Ramani
          <br />
          Schläuchenweg 6/6
          <br />
          69214 Eppelheim
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">Kontakt</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Telefon: +49 175 3678069
          <br />
          E-Mail:{" "}
          <a href="mailto:info@ramani.de" className="text-gray-800 underline hover:text-gray-900">
            info@ramani.de
          </a>
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">
          Berufsrechtliche Angaben (Handwerk)
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Gesetzliche Berufsbezeichnung: Installateur und Heizungsbauer (verliehen in Deutschland)
          <br />
          <br />
          Zuständige Kammer:
          <br />
          Handwerkskammer Mannheim Rhein-Neckar-Odenwald
          <br />
          B1, 1-2
          <br />
          68159 Mannheim
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Muris Ramani
          <br />
          Schläuchenweg 6/6, 69214 Eppelheim
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">EU-Streitschlichtung</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
          bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 underline hover:text-gray-900"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </div>
  );
}
