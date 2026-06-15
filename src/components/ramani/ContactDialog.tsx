"use client";

import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import RamaniContactForm from "./RamaniContactForm";

export default function ContactDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gray-900/30 transition-transform hover:scale-[1.03]"
      >
        Kontaktanfrage senden
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Hintergrund */}
          <div
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Dialog */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="kontakt-dialog-titel"
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 id="kontakt-dialog-titel" className="text-xl font-semibold text-gray-900">
              Kontaktanfrage
            </h3>
            <p className="mt-1.5 text-sm text-gray-500">
              Hinterlassen Sie Ihre Daten, wir melden uns schnellstmöglich zurück.
            </p>

            <div className="mt-6">
              <RamaniContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
