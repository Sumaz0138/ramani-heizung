/**
 * Zentrale Inhalts- und Stammdaten für die Ramani-Heizung Landingpage.
 * Platzhalter-Werte sind klar als solche markiert und können hier
 * an einer Stelle global ausgetauscht werden.
 */

export const COMPANY = {
  name: "Ramani",
  legalName: "Ramani Gebäudetechnik",
  owner: "Muris Ramani",
  tagline: "Heizung · Sanitär · Gas · Wasser",
  phone: "+49 175 3678069",
  phoneHref: "tel:+491753678069",
  emergencyPhone: "+49 175 3678069",
  emergencyPhoneHref: "tel:+491753678069",
  email: "info@ramani.de",
  emailHref: "mailto:info@ramani.de",
  street: "Schläuchenweg 6/6",
  city: "69214 Eppelheim",
  serviceArea: "Rhein-Neckar-Region & Umkreis 50 km",
  address: "Schläuchenweg 6/6, 69214 Eppelheim",
  profession: "Installateur und Heizungsbauer",
  chamber: "Handwerkskammer Mannheim Rhein-Neckar-Odenwald, B1, 1-2, 68159 Mannheim",
  hours: [
    { day: "Mo bis Fr", time: "07:00 bis 18:00 Uhr" },
    { day: "Samstag", time: "08:00 bis 14:00 Uhr" },
  ],
} as const;

export const NAV_LINKS = [
  { hash: "leistungen", label: "Leistungen" },
  { hash: "kontakt", label: "Kontakt" },
] as const;

export const NAV_PAGES = [
  { href: "/ueber-uns", label: "Über uns" },
] as const;
