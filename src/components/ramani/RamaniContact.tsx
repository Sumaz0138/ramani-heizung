import { Phone, Mail, MapPin, Clock, Siren, MessageSquare } from "lucide-react";
import Reveal from "./Reveal";
import ContactDialog from "./ContactDialog";
import { COMPANY } from "./data";

export default function RamaniContact() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-white py-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Linke Spalte: Infos */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              Kontakt
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600">
              Ob Beratung, Angebot oder Notfall: Wir sind für Sie da. Schreiben Sie
              uns oder rufen Sie an, wir melden uns schnellstmöglich zurück.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-orange-300"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-50 ring-1 ring-orange-100">
                  <Phone className="h-5 w-5 text-orange-500" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-500">Telefon</span>
                  <span className="block font-semibold text-gray-900">{COMPANY.phone}</span>
                </span>
              </a>

              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-orange-300"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-50 ring-1 ring-orange-100">
                  <Mail className="h-5 w-5 text-orange-500" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-500">E-Mail</span>
                  <span className="block font-semibold text-gray-900">{COMPANY.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-50 ring-1 ring-orange-100">
                  <MapPin className="h-5 w-5 text-orange-500" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-500">Einsatzgebiet</span>
                  <span className="block font-semibold text-gray-900">{COMPANY.serviceArea}</span>
                </span>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Clock className="h-4 w-4 text-orange-500" aria-hidden="true" />
                  Öffnungszeiten
                </div>
                <ul className="mt-3 space-y-2">
                  {COMPANY.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{h.day}</span>
                      <span className="font-medium text-gray-800">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Rechte Spalte: schlichte CTA-Karte mit Popup */}
          <Reveal direction="left">
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-b from-orange-50 to-white p-8 text-center shadow-lg sm:p-10">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-md shadow-orange-500/30">
                <MessageSquare className="h-7 w-7 text-white" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Bereit für Ihr Projekt?
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gray-600">
                Stellen Sie Ihre Anfrage in unter einer Minute. Klicken Sie auf den
                Button und hinterlassen Sie uns kurz Ihre Daten.
              </p>

              <div className="mt-8 flex justify-center">
                <ContactDialog />
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Oder direkt anrufen:{" "}
                <a href={COMPANY.phoneHref} className="font-semibold text-orange-600 hover:underline">
                  {COMPANY.phone}
                </a>
              </p>

              <a
                href={COMPANY.emergencyPhoneHref}
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-orange-300 bg-orange-50 p-3 text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-100"
              >
                <Siren className="h-4 w-4 shrink-0" aria-hidden="true" />
                24/7 Notdienst: {COMPANY.emergencyPhone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
