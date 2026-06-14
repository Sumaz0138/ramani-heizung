"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type RamaniContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendRamaniContact(
  _prevState: RamaniContactState,
  formData: FormData
): Promise<RamaniContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Bitte füllen Sie Name, E-Mail und Nachricht aus." };
  }

  try {
    await resend.emails.send({
      from: "Ramani Heizung Kontaktformular <onboarding@resend.dev>",
      to: process.env.RAMANI_CONTACT_EMAIL ?? "info@ramani-heizung.de",
      replyTo: email,
      subject: `Neue Anfrage von ${name}${service ? `: ${service}` : ""}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
        ${service ? `<p><strong>Leistung:</strong> ${service}</p>` : ""}
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      status: "success",
      message: "Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.",
    };
  } catch {
    return {
      status: "error",
      message: "Da ist leider etwas schiefgelaufen. Bitte rufen Sie uns an oder versuchen Sie es später erneut.",
    };
  }
}
