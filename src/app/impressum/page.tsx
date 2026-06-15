import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum | Ramani Heizung",
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

        <div className="mt-4 rounded-xl border border-dashed border-gray-300 bg-gray-100 p-4 text-sm text-gray-800">
          Vorlage: Bitte alle [Platzhalter] durch die echten Angaben ersetzen und vor
          Veröffentlichung rechtlich prüfen lassen.
        </div>

        <h2 className="mt-10 text-lg font-semibold text-gray-900">Angaben gemäß § 5 TMG</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          [Firmenname, z. B. Ramani Heizung &amp; Sanitär GmbH]
          <br />
          [Vorname Nachname, vertretungsberechtigte Person]
          <br />
          [Straße Hausnummer]
          <br />
          [PLZ Ort]
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">Kontakt</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Telefon: [Telefonnummer]
          <br />
          E-Mail: [info@ramani-heizung.de]
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">
          Handelsregister / Rechtsform
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Registergericht: [Amtsgericht …]
          <br />
          Registernummer: [HRB …]
          <br />
          Geschäftsführer / Inhaber: [Vorname Nachname]
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">Umsatzsteuer-ID</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [DE…]
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">
          Berufsrechtliche Angaben (Handwerk)
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Zuständige Handwerkskammer: [HWK …]
          <br />
          Gesetzliche Berufsbezeichnung: [z. B. Installateur- und Heizungsbauermeister,
          verliehen in Deutschland]
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          [Vorname Nachname]
          <br />
          [Straße Hausnummer, PLZ Ort]
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">EU-Streitschlichtung</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
          bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 underline hover:text-gray-800"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
          verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </div>
    </div>
  );
}
