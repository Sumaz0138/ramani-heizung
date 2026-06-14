"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { sendRamaniContact, type RamaniContactState } from "@/app/actions";

const initialState: RamaniContactState = { status: "idle" };

const services = [
  "Heizungsinstallation",
  "Heizungswartung",
  "Gas-Systemservice",
  "Wasserinstallation",
  "Badsanierung",
  "Leckortung",
  "Rohrreparatur",
  "Notreparatur",
  "Sonstiges",
];

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200";

export default function RamaniContactForm() {
  const [state, formAction, pending] = useActionState(sendRamaniContact, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" name="name" placeholder="Ihr Name *" required className={inputClass} />
        <input type="email" name="email" placeholder="E-Mail-Adresse *" required className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="tel" name="phone" placeholder="Telefon (optional)" className={inputClass} />
        <select name="service" defaultValue="" className={`${inputClass} text-gray-500`}>
          <option value="" disabled>
            Gewünschte Leistung
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="text-gray-900">
              {s}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="message"
        rows={4}
        placeholder="Wie können wir Ihnen helfen? *"
        required
        className={inputClass}
      />

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Wird gesendet …" : "Anfrage senden"}
        {!pending && (
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        )}
      </button>

      {state.status !== "idle" && state.message && (
        <p
          role="status"
          className={`text-sm ${state.status === "success" ? "text-orange-600" : "text-red-600"}`}
        >
          {state.message}
        </p>
      )}

      <p className="text-xs text-gray-400">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer
        Datenschutzerklärung zu. * Pflichtfelder.
      </p>
    </form>
  );
}
