import { Phone, Mail, MapPin, Clock, Siren } from "lucide-react";
import Reveal from "./Reveal";
import RamaniContactForm from "./RamaniContactForm";
import { COMPANY } from "./data";

export default function RamaniContact() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-white py-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Linke Spalte: Infos */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              Kontakt
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600">
              Ob Beratung, Angebot oder Notfall – wir sind für Sie da. Schreiben Sie
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

              <a
                href={COMPANY.emergencyPhoneHref}
                className="flex items-center gap-3 rounded-2xl border border-orange-300 bg-orange-50 p-4 transition-colors hover:bg-orange-100"
              >
                <Siren className="h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-sm font-semibold text-orange-700">
                  24/7 Notdienst: {COMPANY.emergencyPhone}
                </span>
              </a>
            </div>
          </Reveal>

          {/* Rechte Spalte: Formular */}
          <Reveal direction="left">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900">Anfrage senden</h3>
              <p className="mt-1.5 text-sm text-gray-500">
                Wir antworten in der Regel innerhalb eines Werktags.
              </p>
              <div className="mt-6">
                <RamaniContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
