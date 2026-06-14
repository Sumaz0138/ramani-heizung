# Ramani Heizung – Live gehen (GitHub + Vercel)

Reihenfolge: **lokal testen → zu GitHub → bei Vercel importieren → Domain verbinden.**
Die Schritte, bei denen du dich einloggen musst, kann nur du selbst machen – alles
andere ist mit den beiliegenden Doppelklick-Dateien vorbereitet.

---

## Schritt 1 – Build testen (optional, empfohlen)

Doppelklick auf **`1-Build-pruefen.bat`**.
Wenn am Ende „Compiled successfully" (kein roter Fehler) steht, ist die Seite bereit.

---

## Schritt 2 – GitHub-Repository anlegen

1. Auf <https://github.com> einloggen (oder kostenlos registrieren).
2. Oben rechts **+ → New repository**.
3. Name z. B. `ramani-heizung`, Sichtbarkeit **Private** (oder Public).
4. **Wichtig:** KEIN README, KEIN .gitignore, KEINE Lizenz hinzufügen
   (das Repo muss leer sein).
5. **Create repository** klicken.
6. Auf der nächsten Seite die URL kopieren, die so aussieht:
   `https://github.com/DEINNAME/ramani-heizung.git`

---

## Schritt 3 – Code hochladen

Doppelklick auf **`2-Auf-GitHub-hochladen.bat`**, dann die kopierte Repo-URL einfügen
und Enter. Beim ersten Mal öffnet sich evtl. ein Browser-Fenster zur GitHub-Anmeldung –
einfach einloggen. Danach liegt der Code auf GitHub.

> Spätere Änderungen: einfach **`3-Aenderungen-hochladen.bat`** doppelklicken –
> Vercel baut dann automatisch die neue Version.

---

## Schritt 4 – Bei Vercel deployen

1. Auf <https://vercel.com> mit **GitHub anmelden** ("Continue with GitHub").
2. **Add New… → Project**.
3. Das Repository `ramani-heizung` auswählen → **Import**.
4. Framework wird automatisch als **Next.js** erkannt. Einstellungen so lassen.
5. **Environment Variables** hinzufügen (für das Kontaktformular):
   - `RESEND_API_KEY` = dein Key von <https://resend.com>
   - `RAMANI_CONTACT_EMAIL` = Empfänger-Adresse (optional)
   > Ohne diese Variablen läuft die Seite trotzdem – nur der E-Mail-Versand
   > des Formulars ist dann inaktiv.
6. **Deploy** klicken. Nach ~1–2 Minuten ist die Seite live unter
   `dein-projekt.vercel.app`.

---

## Schritt 5 – Eigene Domain verbinden (ramani-heizung.de)

1. Im Vercel-Projekt: **Settings → Domains → Add**.
2. `ramani-heizung.de` eintragen → Vercel zeigt die nötigen DNS-Einträge an.
3. Beim Domain-Anbieter (wo die Domain registriert ist) diese DNS-Einträge
   setzen (meist ein A-Record auf `76.76.21.21` und ein CNAME für `www`,
   oder die von Vercel angezeigten Nameserver).
4. Nach der DNS-Verbreitung (wenige Minuten bis Stunden) ist die Seite unter
   deiner Domain erreichbar – inklusive automatischem HTTPS.

---

## Vor dem Kundenstart noch ersetzen

- Platzhalter in `src/components/ramani/data.ts` (Telefon, Notdienst, E-Mail,
  Adresse, Öffnungszeiten, Einsatzgebiet).
- Echte Kundenstimmen in `Testimonials.tsx`.
- Inhalte der Projekt-Unterseiten unter `src/app/projekte/...`.
- Impressum & Datenschutz ergänzen (rechtlich Pflicht in Deutschland).
