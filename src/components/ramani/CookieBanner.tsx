"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X, Check, Settings } from "lucide-react";

const GA_ID = "G-C04MQMGVSB";

function loadGA() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga-script")) return;

  const script1 = document.createElement("script");
  script1.id = "ga-script";
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { anonymize_ip: true });
  `;
  document.head.appendChild(script2);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ramani-cookie-consent");
    if (consent === "accepted") {
      loadGA();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("ramani-cookie-consent", "accepted");
    loadGA();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("ramani-cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-white/10 bg-[#081427]/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Diese Website verwendet Cookies</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Wir nutzen Google Analytics, um zu verstehen, wie Besucher unsere Website nutzen.
                  Alle Daten werden anonymisiert erhoben. Sie können Ihre Einwilligung jederzeit
                  widerrufen.{" "}
                  <a href="/datenschutz" className="text-sky-400 hover:underline">
                    Datenschutzerklärung
                  </a>
                </p>

                {showDetails && (
                  <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-400">
                    <p className="mb-1 font-semibold text-white">Notwendige Cookies</p>
                    <p>Speichern Ihre Cookie-Einstellung. Immer aktiv.</p>
                    <p className="mb-1 mt-2 font-semibold text-white">Analyse-Cookies (Google Analytics)</p>
                    <p>Anonymisierte Besucherstatistiken. Nur mit Ihrer Zustimmung.</p>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    onClick={accept}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105"
                  >
                    <Check className="h-3.5 w-3.5" />
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={decline}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <X className="h-3.5 w-3.5" />
                    Ablehnen
                  </button>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="inline-flex items-center gap-1.5 px-2 py-2 text-xs text-slate-400 transition-colors hover:text-white"
                  >
                    <Settings className="h-3.5 w-3.5" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
