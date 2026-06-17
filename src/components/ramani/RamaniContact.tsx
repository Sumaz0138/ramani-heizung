"use client";

import { useEffect } from "react";
import { useAnimate } from "framer-motion";
import { Wrench, Mail, Phone } from "lucide-react";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";
import ContactDialog from "./ContactDialog";
import { COMPANY } from "./data";

export default function RamaniContact() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      [
        ["#pointer", { left: 210, top: 50 }, { duration: 0 }],
        ["#heizung", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 40, top: 110 }, { at: "+0.6", duration: 0.5, ease: "easeInOut" }],
        ["#heizung", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#sanitaer", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 210, top: 190 }, { at: "+0.6", duration: 0.5, ease: "easeInOut" }],
        ["#sanitaer", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#gas", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 210, top: 50 }, { at: "+0.6", duration: 0.5, ease: "easeInOut" }],
        ["#gas", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
      ],
      { repeat: Number.POSITIVE_INFINITY }
    );
  }, [animate]);

  const tagClass =
    "absolute rounded-3xl border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 opacity-40";

  return (
    <section id="kontakt" className="relative bg-white py-12">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <HighlightGroup className="group h-full">
          <div className="group/item h-full">
            <HighlighterItem className="rounded-3xl p-4">
              <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
                <Particles
                  className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                  quantity={160}
                  color="#6b7280"
                  vy={-0.2}
                />
                <div className="flex flex-col items-center gap-6 p-6 md:flex-row md:gap-4 md:p-8">
                  {/* Animierter Zeiger + Service-Tags */}
                  <div className="relative h-[240px] w-[280px] shrink-0" ref={scope}>
                    <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg shadow-gray-900/30">
                      <Wrench className="logo-wrench h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <div id="heizung" className={`${tagClass} right-6 top-8`}>
                      Heizung
                    </div>
                    <div id="sanitaer" className={`${tagClass} left-0 top-24`}>
                      Bad &amp; Sanitär
                    </div>
                    <div id="gas" className={`${tagClass} bottom-10 right-4`}>
                      Gas-Service
                    </div>
                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-gray-900"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="relative -top-1 left-3 rounded-3xl bg-gray-900 px-2 py-1 text-xs text-white">
                        Du
                      </span>
                    </div>
                  </div>

                  {/* Text + Aktionen */}
                  <div className="flex flex-col md:w-[360px]">
                    <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                      Fragen zu Ihrem Projekt?
                    </h3>
                    <p className="mb-6 mt-3 text-sm leading-relaxed text-gray-600">
                      Wir sind für Sie da. Hinterlassen Sie uns kurz Ihre Daten,
                      wir melden uns schnellstmöglich zurück.
                    </p>
                    <div className="flex flex-col items-start gap-4">
                      <ContactDialog />
                      <div className="flex items-center gap-3">
                        <a
                          href={COMPANY.phoneHref}
                          aria-label="Anrufen"
                          className="grid h-12 w-12 place-items-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-gray-700 hover:text-gray-800"
                        >
                          <Phone className="h-5 w-5" aria-hidden="true" />
                        </a>
                        <a
                          href={COMPANY.emailHref}
                          aria-label="E-Mail schreiben"
                          className="grid h-12 w-12 place-items-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-gray-700 hover:text-gray-800"
                        >
                          <Mail className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </div>
        </HighlightGroup>
      </div>
    </section>
  );
}
