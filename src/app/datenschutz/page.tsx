import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Ramani Gebäudetechnik",
};

export default function DatenschutzPage() {
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

        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Datenschutzerklärung
        </h1>

        <h2 className="mt-10 text-lg font-semibold text-gray-900">1. Verantwortlicher</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          <br />
          Ramani Gebäudetechnik
          <br />
          Muris Ramani
          <br />
          Schläuchenweg 6/6, 69214 Eppelheim
          <br />
          E-Mail:{" "}
          <a href="mailto:info@ramani.de" className="text-gray-800 underline hover:text-gray-900">
            info@ramani.de
          </a>
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">
          2. Zugriffsdaten / Server-Logfiles
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Beim Aufrufen dieser Website werden durch den auf Ihrem Endgerät zum Einsatz
          kommenden Browser automatisch Informationen an den Server unserer Website gesendet
          (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp, Betriebssystem). Diese
          Daten werden temporär in einem Logfile gespeichert und dienen ausschließlich der
          technischen Bereitstellung und Sicherheit der Website. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">3. Kontaktformular</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
          (Name, E-Mail-Adresse, Telefonnummer, ausgewählte Leistung und Nachricht) zum Zwecke
          der Bearbeitung der Anfrage gespeichert und verarbeitet. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f DSGVO (berechtigtes
          Interesse an der Bearbeitung Ihrer Anfrage).
        </p>
        <p className="mt-3 leading-relaxed text-gray-600">
          Zur Übermittlung der Anfrage per E-Mail nutzen wir den Versanddienst{" "}
          <span className="font-medium text-gray-800">Resend</span> (Resend, Inc., USA). Dabei
          können personenbezogene Daten an Server des Anbieters übermittelt werden; es gelten
          geeignete Garantien gemäß Art. 44 ff. DSGVO.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">4. Google Analytics</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics wird nur
          nach Ihrer ausdrücklichen Einwilligung über den Cookie-Banner aktiviert. Die
          IP-Anonymisierung ist aktiviert, sodass Ihre IP-Adresse vor der Übermittlung
          gekürzt wird. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre
          Einwilligung jederzeit widerrufen, indem Sie den Browser-Cache und die Cookies
          löschen.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">5. Hosting</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Diese Website wird bei <span className="font-medium text-gray-800">Vercel</span>{" "}
          (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Aufruf
          der Website werden technisch notwendige Daten (u. a. IP-Adresse) auf den Servern des
          Hosters verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">6. Ihre Rechte</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
          Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit
          (Art. 20) sowie ein Widerspruchsrecht (Art. 21 DSGVO). Zudem können Sie sich bei
          einer Datenschutzaufsichtsbehörde beschweren (Art. 77 DSGVO). Wenden Sie sich dazu
          an:{" "}
          <a
            href="mailto:info@ramani.de"
            className="text-gray-800 underline hover:text-gray-900"
          >
            info@ramani.de
          </a>
          .
        </p>

        <p className="mt-10 text-sm text-gray-400">
          Stand: Juni 2026
        </p>
      </div>
    </div>
  );
}
