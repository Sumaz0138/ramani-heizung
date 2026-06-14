import { Siren, Phone, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { COMPANY } from "./data";

export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-orange-50/40 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 p-8 shadow-2xl shadow-orange-500/30 sm:p-12">
            {/* dezente Glanzpunkte */}
            <div
              className="ramani-glow pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-white/20 blur-[90px]"
              aria-hidden="true"
            />
            <div className="ramani-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                  <Siren className="h-3.5 w-3.5" aria-hidden="true" />
                  Notdienst 24/7
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  Heizungsausfall oder Wasserschaden?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/90">
                  Im Notfall zählt jede Minute. Unser Notdienst ist rund um die Uhr
                  erreichbar und schnell bei Ihnen vor Ort – kompetent und mit der
                  richtigen Ausrüstung.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm text-white/90">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  An 365 Tagen im Jahr für Sie erreichbar
                </div>
              </div>

              <div className="w-full shrink-0 lg:w-auto">
                <a
                  href={COMPANY.emergencyPhoneHref}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-center shadow-xl transition-transform hover:scale-[1.03] lg:w-auto"
                >
                  <Phone className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  <span className="text-left">
                    <span className="block text-xs font-medium uppercase tracking-wider text-gray-500">
                      Jetzt anrufen
                    </span>
                    <span className="block text-xl font-bold text-gray-900">
                      {COMPANY.emergencyPhone}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
