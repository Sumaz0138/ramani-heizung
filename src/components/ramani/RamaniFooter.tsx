"use client";

import { usePathname } from "next/navigation";
import { Flame, Phone, Mail, MapPin, Clock, Siren } from "lucide-react";
import { COMPANY } from "./data";

const footerServices = [
  "Heizungsinstallation",
  "Heizungswartung",
  "Gasinstallation",
  "Wasserinstallation",
  "Badsanierung",
  "Leckortung",
  "Rohrreparatur",
  "Notdienst 24/7",
];

export default function RamaniFooter() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const to = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  return (
    <footer className="border-t border-gray-200 bg-orange-50/50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marke */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-400">
                <Flame className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold text-gray-900">
                Ramani<span className="text-orange-500"> Heizung</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">
              Ihr Meisterbetrieb für Heizung, Sanitär, Gas und Wasser –
              traditionelles Handwerk verbunden mit moderner Technik.
            </p>
            <a
              href={COMPANY.emergencyPhoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-200"
            >
              <Siren className="h-4 w-4" aria-hidden="true" />
              Notdienst: {COMPANY.emergencyPhone}
            </a>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <a
                    href={to("leistungen")}
                    className="text-sm text-gray-600 transition-colors hover:text-orange-600"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                <a href={COMPANY.phoneHref} className="hover:text-orange-600">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                <a href={COMPANY.emailHref} className="hover:text-orange-600">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
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
                    <Clock className="h-4 w-4 text-orange-500" aria-hidden="true" />
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
            <a href="/impressum" className="transition-colors hover:text-orange-600">
              Impressum
            </a>
            <a href="/datenschutz" className="transition-colors hover:text-orange-600">
              Datenschutz
            </a>
            <a href={to("kontakt")} className="transition-colors hover:text-orange-600">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
