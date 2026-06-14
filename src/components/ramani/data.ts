/**
 * Zentrale Inhalts- und Stammdaten für die Ramani-Heizung Landingpage.
 * Platzhalter-Werte sind klar als solche markiert und können hier
 * an einer Stelle global ausgetauscht werden.
 */

export const COMPANY = {
  name: "Ramani Heizung",
  legalName: "Ramani Heizung & Sanitär GmbH",
  tagline: "Heizung · Sanitär · Gas · Wasser",
  phone: "+49 (0) 000 000 000", // Platzhalter
  phoneHref: "tel:+490000000000", // Platzhalter
  emergencyPhone: "+49 (0) 000 111 222", // Platzhalter Notdienst
  emergencyPhoneHref: "tel:+490000111222", // Platzhalter
  email: "info@ramani-heizung.de", // Platzhalter
  emailHref: "mailto:info@ramani-heizung.de",
  serviceArea: "Rhein-Neckar-Region & Umkreis 50 km", // Platzhalter
  address: "Musterstraße 1, 00000 Musterstadt", // Platzhalter
  hours: [
    { day: "Mo – Fr", time: "07:00 – 18:00 Uhr" },
    { day: "Samstag", time: "08:00 – 14:00 Uhr" },
    { day: "Notdienst", time: "24 / 7 erreichbar" },
  ],
} as const;

export const NAV_LINKS = [
  { hash: "leistungen", label: "Leistungen" },
  { hash: "ablauf", label: "Ablauf" },
  { hash: "vorteile", label: "Vorteile" },
  { hash: "projekte", label: "Projekte" },
  { hash: "kontakt", label: "Kontakt" },
] as const;
