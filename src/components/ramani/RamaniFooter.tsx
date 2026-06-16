"use client";

import { usePathname } from "next/navigation";
import { Wrench, Phone, Mail, MapPin, Clock, Siren } from "lucide-react";
import { COMPANY } from "./data";

export default function RamaniFooter() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const to = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  return (
    <footer className="border-t border-gray-200 bg-gray-100/50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Marke */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700">
                <Wrench className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold text-gray-900">
                Ramani
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">
              Ihr Meisterbetrieb für Heizung, Sanitär, Gas und Wasser.
              Traditionelles Handwerk verbunden mit moderner Technik.
            </p>
            <a
              href={COMPANY.emergencyPhoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-300"
            >
              <Siren className="h-4 w-4" aria-hidden="true" />
              Notdienst: {COMPANY.emergencyPhone}
            </a>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gray-900" aria-hidden="true" />
                <a href={COMPANY.phoneHref} className="hover:text-gray-800">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gray-900" aria-hidden="true" />
                <a href={COMPANY.emailHref} className="hover:text-gray-800">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-900" aria-hidden="true" />
                <span>{COMPANY.serviceArea}</span>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Öffnungszeiten
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {COMPANY.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4 text-gray-900" aria-hidden="true" />
                    {h.day}
                  </span>
                  <span className="font-medium text-gray-800">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="/impressum" className="transition-colors hover:text-gray-800">
              Impressum
            </a>
            <a href="/datenschutz" className="transition-colors hover:text-gray-800">
              Datenschutz
            </a>
            <a href={to("kontakt")} className="transition-colors hover:text-gray-800">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
