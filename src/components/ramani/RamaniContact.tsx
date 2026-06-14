"use client";

import { useEffect } from "react";
import { useAnimate } from "framer-motion";
import { Flame, Mail, Phone } from "lucide-react";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";
import ContactDialog from "./ContactDialog";
import { COMPANY } from "./data";

export default function RamaniContact() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#heizung", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 50, top: 102 }, { at: "+0.5", duration: 0.5, ease: "easeInOut" }],
        ["#heizung", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#sanitaer", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 224, top: 170 }, { at: "+0.5", duration: 0.5, ease: "easeInOut" }],
        ["#sanitaer", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#gas", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 88, top: 198 }, { at: "+0.5", duration: 0.5, ease: "easeInOut" }],
        ["#gas", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#notdienst", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 200, top: 60 }, { at: "+0.5", duration: 0.5, ease: "easeInOut" }],
        ["#notdienst", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      { repeat: Number.POSITIVE_INFINITY }
    );
  }, [animate]);

  const tagClass =
    "absolute rounded-3xl border border-orange-200 bg-orange-50 px-2 py-1.5 text-xs font-medium text-orange-700 opacity-50";

  return (
    <section id="kontakt" className="relative bg-white py-16">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <HighlightGroup className="group h-full">
          <div className="group/item h-full">
            <HighlighterItem className="rounded-3xl p-6">
              <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
                <Particles
                  className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                  quantity={200}
                  color="#f97316"
                  vy={-0.2}
                />
                <div className="flex justify-center">
                  <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                    {/* Animierter Zeiger + Tags */}
                    <div className="relative mx-auto h-[270px] w-[300px]" ref={scope}>
                      <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg shadow-orange-500/30">
                        <Flame className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                      <div id="notdienst" className={`${tagClass} bottom-12 left-14`}>
                        Notdienst
                      </div>
                      <div id="sanitaer" className={`${tagClass} left-2 top-20`}>
                        Bad &amp; Sanitär
                      </div>
                      <div id="gas" className={`${tagClass} bottom-20 right-1`}>
                        Gas-Service
                      </div>
                      <div id="heizung" className={`${tagClass} right-12 top-10`}>
                        Heizung
                      </div>
                      <div id="pointer" className="absolute">
                        <svg
                          width="16.8"
                          height="18.2"
                          viewBox="0 0 12 13"
                          className="fill-orange-500"
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
                        <span className="relative -top-1 left-3 rounded-3xl bg-orange-500 px-2 py-1 text-xs text-white">
                          Ramani
                        </span>
                      </div>
                    </div>

                    {/* Text + Aktionen */}
                    <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                      <span className="self-start rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
                        Kontakt
                      </span>
                      <h3 className="mt-5 pb-1 text-2xl font-bold text-gray-900 md:text-4xl">
                        Fragen zu Ihrem Projekt?
                      </h3>
                      <p className="mb-6 text-gray-600">
                        Wir sind für Sie da. Hinterlassen Sie uns kurz Ihre Daten,
                        wir melden uns schnellstmöglich zurück.
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <ContactDialog />
                        <a
                          href={COMPANY.phoneHref}
                          aria-label="Anrufen"
                          className="grid h-12 w-12 place-items-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-orange-400 hover:text-orange-600"
                        >
                          <Phone className="h-5 w-5" aria-hidden="true" />
                        </a>
                        <a
                          href={COMPANY.emailHref}
                          aria-label="E-Mail schreiben"
                          className="grid h-12 w-12 place-items-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-orange-400 hover:text-orange-600"
                        >
                          <Mail className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </div>
                      <p className="mt-5 text-sm text-gray-500">
                        24/7 Notdienst:{" "}
                        <a href={COMPANY.emergencyPhoneHref} className="font-semibold text-orange-600 hover:underline">
                          {COMPANY.emergencyPhone}
                        </a>
                      </p>
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
