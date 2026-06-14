# Ramani Heizung – Website

Eigenständige One-Page-Website für den Heizungs-, Sanitär-, Gas- und Wasser-Meisterbetrieb
**Ramani Heizung**. Gebaut mit Next.js 16, React 19, Tailwind CSS 4, Framer Motion und einer
interaktiven 3D-Szene (Spline).

## Schnellstart

```bash
npm install
npm run dev
```

Anschließend im Browser öffnen: [http://localhost:3000](http://localhost:3000)

Unter Windows genügt ein Doppelklick auf **`Website-starten.bat`** – die Datei installiert
beim ersten Start automatisch alle Abhängigkeiten, startet den Server und öffnet den Browser.

## Konfiguration

Für das Kontaktformular wird ein [Resend](https://resend.com)-API-Key benötigt. Lege dazu
eine Datei `.env.local` an (Vorlage: `.env.example`):

```
RESEND_API_KEY=dein_key
RAMANI_CONTACT_EMAIL=info@ramani-heizung.de
```

Ohne Key funktioniert die Seite vollständig – nur der E-Mail-Versand des Formulars ist
deaktiviert.

## Platzhalter

Alle Firmen-Stammdaten (Telefon, Notdienst, E-Mail, Einsatzgebiet, Öffnungszeiten) sind
zentral in `src/components/ramani/data.ts` gepflegt – dort einmal ändern, greift überall.

## Projektstruktur

```
src/
  app/
    layout.tsx     – Root-Layout, Metadaten, Header & Footer
    page.tsx       – Zusammensetzung aller Sektionen
    actions.ts     – Server-Action für das Kontaktformular
    globals.css    – Theme-Tokens & Animationen
  components/
    ramani/        – Alle Sektions- und UI-Bausteine
    ui/splite.tsx  – Spline-3D-Wrapper
```

## Deployment

Empfohlen über [Vercel](https://vercel.com). Repository verbinden, Domain `ramani-heizung.de`
hinterlegen, Environment-Variablen (`RESEND_API_KEY`) setzen – fertig.
