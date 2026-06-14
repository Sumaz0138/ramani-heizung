# Ramani Heizung – Projektmitschrift & Übergabe

Stand: 13.06.2026 · Kurzfassung von allem, was bisher gebaut wurde, plus offene Punkte.
Am Laptop: Ordner `ramani-heizung` öffnen, diese Datei lesen, weitermachen.

---

## Was das ist

Eigenständige One-Page-Website für den Heizungs-/Sanitär-/Gas-/Wasser-Meisterbetrieb
**Ramani Heizung** (erster Kunde). Eigenes Projekt, eigene spätere Domain
`ramani-heizung.de` – getrennt von tais-solutions.

**Tech:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Spline (3D, im
alten Hero) · lucide-react Icons · Resend (Kontaktformular-Mailversand).

---

## So startest du es lokal

Im Ordner `ramani-heizung`:
- Doppelklick **`Website-starten.bat`** (installiert beim ersten Mal automatisch alles)
- oder Terminal: `npm install` und `npm run dev`
- Browser: <http://localhost:3000>

---

## Was schon gebaut ist

- **Design:** komplett **Weiß/Orange**, hell, premium, voll responsiv.
- **Hero:** interaktives Bild-Akkordeon (`src/components/ui/interactive-image-accordion.tsx`)
  mit Headline, 2 CTAs, hover-/aufklappbaren Panels.
- **Header:** fix, hell, dunkle Schrift, orange Akzente, mobiles Menü.
- **Trust-Leiste:** Endlos-Laufband rechts→links, pausiert bei Hover.
- **Leistungen:** 8 Karten; Hover = orange Glow; **Klick = 3D-Flip** zur Rückseite mit
  Kundenbeispielen (Platzhalter).
- **Über uns:** Gründer-Foto aus `public/gruender.jpg` (Fokus rechts) + Werte + Kennzahlen.
- **Ablauf:** 4 Schritte. **Vorteile:** 6 Punkte.
- **Ausgewählte Projekte:** Galerie mit Fotos; jede Kachel verlinkt auf eigene Unterseite.
- **Projekt-Unterseiten:** `/projekte/badsanierung`, `/waermepumpe`, `/heizungswartung`,
  `/rohrleitungsbau`, `/trinkwasser` – je eigene, editierbare Datei mit Grundgerüst.
- **Kundenstimmen, Notdienst-CTA, Kontakt (mit Formular), Footer.**

---

## Projektstruktur (das Wichtigste)

```
ramani-heizung/
  public/                       -> gruender.jpg hier ablegen
  src/app/
    layout.tsx                  -> Header + Footer + Metadaten
    page.tsx                    -> Reihenfolge der Sektionen
    actions.ts                  -> Kontaktformular (Resend)
    globals.css                 -> Theme (Weiß/Orange) + Animationen
    projekte/<name>/page.tsx    -> die 5 Projekt-Unterseiten
  src/components/
    ramani/                     -> alle Sektionen + data.ts (Stammdaten!)
    ramani/ProjectDetail.tsx    -> Layout der Unterseiten
    ui/interactive-image-accordion.tsx -> der Hero
```

**Zentrale Stammdaten:** `src/components/ramani/data.ts`
(Telefon, Notdienst, E-Mail, Adresse, Öffnungszeiten, Einsatzgebiet) – einmal ändern,
greift überall.

---

## Live gehen (GitHub + Vercel)

Komplette Anleitung in **`DEPLOYMENT.md`**. Kurz:
1. `1-Build-pruefen.bat` (testet den Build)
2. Leeres Repo auf github.com anlegen → `2-Auf-GitHub-hochladen.bat` (URL einfügen)
3. vercel.com → mit GitHub anmelden → Projekt importieren → Deploy
4. Domain `ramani-heizung.de` unter Settings → Domains + DNS setzen

Spätere Updates: `3-Aenderungen-hochladen.bat` → Vercel deployt automatisch.

**Env-Variablen in Vercel** (für das Kontaktformular):
`RESEND_API_KEY`, optional `RAMANI_CONTACT_EMAIL`. Ohne läuft die Seite, nur der
Mailversand ist inaktiv.

---

## Offene To-dos (vor echtem Kundenstart)

- [ ] `data.ts`: Platzhalter durch echte Kundendaten ersetzen (Telefon, Notdienst,
      E-Mail, Adresse, Öffnungszeiten, Einsatzgebiet).
- [ ] Echte Kundenstimmen in `src/components/ramani/Testimonials.tsx`.
- [ ] Inhalte/Bilder der 5 Projekt-Unterseiten füllen.
- [ ] Galerie-Fotos ggf. gegen echte Projektfotos tauschen (Unsplash sind Platzhalter).
- [ ] **Impressum & Datenschutz** ergänzen (in DE Pflicht) – eigene Seiten/Links.
- [ ] Firmennamen final klären (aktuell „Ramani Heizung" / „Ramani Heizung & Sanitär GmbH").
- [ ] Deploy durchführen (GitHub + Vercel) und Domain verbinden.

## Getroffene Entscheidungen

- Eigenes, standalone Projekt (nicht in tais-solutions). tais-solutions wurde wieder
  in den Originalzustand zurückgesetzt.
- Design: Weiß/Orange, hell. Hero = Bild-Akkordeon (statt 3D-Wärmepumpe; die alte
  Hero-Datei `RamaniHero.tsx` liegt ungenutzt noch im Projekt, falls Rückgriff gewünscht).
- Gründer-Foto: Selfie, Fokus auf rechte Person.
- Trust-Leiste: Endlos-Laufband. Karten-Rückseiten: Platzhalter-Beispiele.

## Bekannte Hinweise

- Galerie-/Projektbilder sind Unsplash-Platzhalter (per Hintergrundbild, mit Verlauf-
  Fallback). Können jederzeit gegen eigene Dateien getauscht werden.
- `RamaniHero.tsx` und `AnimatedBackground.tsx` werden aktuell nicht verwendet
  (können später entfernt werden).
