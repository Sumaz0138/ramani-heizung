import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Ramani Heizung",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 sm:pt-32">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-orange-600"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Zur Startseite
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Datenschutzerklärung
        </h1>

        <div className="mt-4 rounded-xl border border-dashed border-orange-300 bg-orange-50 p-4 text-sm text-orange-700">
          Vorlage: Bitte [Platzhalter] ausfüllen und vor Veröffentlichung rechtlich prüfen
          lassen (z. B. Rechtsanwalt oder Datenschutzbeauftragten).
        </div>

        <h2 className="mt-10 text-lg font-semibold text-gray-900">1. Verantwortlicher</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          <br />
          [Firmenname]
          <br />
          [Vorname Nachname]
          <br />
          [Straße Hausnummer, PLZ Ort]
          <br />
          E-Mail: [info@ramani-heizung.de]
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

        <h2 className="mt-8 text-lg font-semibold text-gray-900">4. Hosting</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Diese Website wird bei <span className="font-medium text-gray-800">Vercel</span>{" "}
          (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Aufruf
          der Website werden technisch notwendige Daten (u. a. IP-Adresse) auf den Servern des
          Hosters verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-gray-900">5. Ihre Rechte</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
          Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit
          (Art. 20) sowie ein Widerspruchsrecht (Art. 21 DSGVO). Zudem können Sie sich bei
          einer Datenschutzaufsichtsbehörde beschweren (Art. 77 DSGVO). Wenden Sie sich dazu
          an:{" "}
          <a
            href="mailto:info@ramani-heizung.de"
            className="text-orange-600 underline hover:text-orange-700"
          >
            [info@ramani-heizung.de]
          </a>
          .
        </p>

        <p className="mt-10 text-sm text-gray-400">
          Stand: [Datum]. Diese Datenschutzerklärung ist als Vorlage zu verstehen und sollte
          vor Veröffentlichung rechtlich geprüft werden.
        </p>
      </div>
    </div>
  );
}
