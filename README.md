# Hansolow Entertainment – Website

Projektbasierte Business-Website für **Hans Schröder Salowski / Hansolow Entertainment**
(Tour Support, Stage Construction, Event Support, Lichtassistenz, Messebau).
Kein Künstler-, Musik- oder Tonstudio-Auftritt – ausschließlich zur Gewinnung von
Projektanfragen.

Stack: **Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · lucide-react**,
optional dezente Animationen mit **Framer Motion**. Zweisprachig (DE/EN) über echte
Pfad-Segmente `/de` und `/en`, keine Datenbank, keine externen Schriftarten, kein
Tracking.

---

## 1. Projekt lokal starten

Voraussetzung: **Node.js 20.9 oder neuer** und npm.

> **Hinweis:** Next.js 14 wird seit Ende 2025 nicht mehr unterstützt (weder vom
> Next.js-Team noch von Cloudflares Next.js-Adapter). Dieses Projekt läuft auf
> **Next.js 16**, dem aktuell einzigen von Cloudflare vollständig unterstützten
> Next.js-Major-Release. Falls Cloudflare beim Deployment einen Fehler zu einer
> nicht unterstützten Next.js-Version zeigt: `npm install` erneut ausführen, damit
> die Version aus `package.json` (nicht eine ältere, ggf. gecachte Version)
> verwendet wird.

```bash
npm install
npm run dev
```

Die Seite läuft danach unter `http://localhost:3000`. `http://localhost:3000/` leitet
automatisch auf `/de` (Standardsprache) oder `/en` weiter, abhängig von einem bereits
gesetzten `lang`-Cookie bzw. der Browsersprache.

> **Hinweis zu diesem Repository:** Der Code wurde in einer Sandbox ohne
> Internetzugriff erstellt. `npm install` konnte dort nicht ausgeführt werden
> (npm-Registry war nicht erreichbar). Bitte `npm install` beim ersten lokalen Start
> unbedingt selbst ausführen – siehe Abschnitt 10 „Was in dieser Umgebung nicht
> geprüft werden konnte" für Details.

## 2. Produktions-Build erstellen

```bash
npm run build
npm run start
```

`npm run build` erzeugt einen optimierten Produktions-Build (statisch/serverseitig
optimiert, wo sinnvoll). `npm run start` startet den Produktionsserver lokal zum Testen.

Weitere nützliche Befehle:

```bash
npm run lint       # ESLint (next/core-web-vitals)
npm run typecheck  # TypeScript-Build ohne Ausgabe (tsc --noEmit)
```

## 3. Deployment

Die Website ist ein normales Next.js-Projekt und lässt sich auf jeder Plattform mit
Node.js-Unterstützung betreiben.

**Empfehlung bei knappem Budget: Cloudflare Workers** — dauerhaft kostenlos für diese
Seitengröße (100.000 Anfragen/Tag im Free-Tarif), kommerzielle Nutzung ausdrücklich
erlaubt (anders als Vercels kostenloser „Hobby"-Tarif, der laut Nutzungsbedingungen
nur für nicht-kommerzielle Projekte gedacht ist). Kurzfassung:
1. Projekt in ein GitHub-Repository hochladen.
2. Bei [dash.cloudflare.com](https://dash.cloudflare.com/sign-up) registrieren →
   „Workers & Pages" → „Import a Git Repository" → Next.js wird automatisch erkannt.
3. Domain unter „Custom Domains" im Worker-Projekt verbinden.

Alternativ: Vercel (zusätzliche Kosten ab dem Pro-Tarif, da kommerzielle Nutzung),
oder ein eigener Server mit `npm run build` + `npm run start`.

Vor dem Deployment:

1. `.env.example` nach `.env.local` kopieren und Werte eintragen (siehe Abschnitt 8).
2. `NEXT_PUBLIC_SITE_URL` auf die endgültige Domain setzen (wird für Canonical-URLs,
   Open-Graph-Daten und `sitemap.xml` verwendet).
3. `npm run build` erfolgreich durchlaufen lassen.
4. Hosting-Anbieter in `app/de/datenschutz/page.tsx` und `app/en/privacy/page.tsx`
   ergänzen (siehe Abschnitt 9).

## 4. Inhalte ändern

Alle Texte sind zentral in TypeScript-Dateien gepflegt, nicht in den Komponenten
verteilt:

| Datei | Inhalt |
|---|---|
| `content/site.de.ts` | Alle deutschen Texte: Navigation, Hero, Über mich, Leistungen, Berufserfahrung, Referenzen-Überschriften, Fähigkeiten, Galerie-Texte, Kontaktformular-Labels, Footer, Rechtstexte-Überschriften |
| `content/site.en.ts` | Dieselbe Struktur auf Englisch |
| `content/references.ts` | Touring-, TV/Großveranstaltungs- und Messebau-Referenzen (Kunde, Titel, Datum, Aufgabenbereich – jeweils DE/EN) |
| `content/gallery.ts` | Galeriebilder inkl. Alt-Texten, Bildunterschriften und Kategorie |
| `config/site.ts` | Kontaktdaten, Instagram-URL, Impressums-Rohdaten, Schreibweise von Pfennigbau/Balativ |

Beide Sprachdateien (`site.de.ts` / `site.en.ts`) folgen demselben Typ (`Dictionary` in
`lib/i18n.ts`). Wird ein Feld in einer Sprache ergänzt, muss es in der anderen Sprache
ebenfalls gepflegt werden, sonst meldet TypeScript beim Build einen Fehler – das ist so
gewollt und verhindert, dass eine Sprache unvollständig bleibt.

**Rechtstexte** (Impressum/Datenschutz) stehen direkt in
`app/de/impressum/page.tsx`, `app/de/datenschutz/page.tsx`,
`app/en/imprint/page.tsx` und `app/en/privacy/page.tsx`, da sie viele feste
Absätze enthalten, die sich schlecht in Listenform pflegen lassen.

## 5. Bilder ersetzen

Aktuell sind **18 echte, vom Websitebetreiber bereitgestellte Produktionsfotos**
eingebunden (Touring, Festivals, TV-Produktionen, Stage Construction, Backstage) –
keine Platzhalter mehr:

```
public/images/hero/hero-stage.jpg           – Hero-Hintergrund auf der Startseite
public/images/gallery/*.jpg                 – 18 Galeriebilder (siehe content/gallery.ts)
public/images/productions/                  – Reserviert für weitere Produktionsbilder
public/brand/                               – Reserviert für Logo/Favicon
```

Zwei ursprünglich bereitgestellte Bilder wurden **nicht** übernommen: zwei
Instagram-App-Screenshots (eines davon ein Repost eines fremden Accounts) – das
sind keine eigenen Produktionsfotos und daher rechtlich/optisch nicht passend.

So werden weitere Bilder ergänzt oder ausgetauscht:

1. Neue Datei (empfohlen: `.jpg`/`.webp`, Hero ca. 1600×2000 px hochkant oder
   1600×1200 px quer, Galerie ca. 1200×900 px) in den passenden Ordner unter
   `public/images/...` legen.
2. Pfad in `content/gallery.ts` (Feld `src`) bzw. in `components/Hero.tsx`
   anpassen.
3. **Alt-Texte** (`altDE` / `altEN` in `content/gallery.ts`) inhaltlich passend zum neuen
   Bild aktualisieren – das ist Pflicht für Barrierefreiheit und SEO.
4. Bilder ausschließlich verwenden, wenn die Nutzungsrechte vorliegen (siehe Abschnitt 9).
5. Bei Backstage-/Portraitaufnahmen mit erkennbaren Gesichtern: nur verwenden, wenn
   alle abgebildeten Personen mit der Veröffentlichung einverstanden sind
   (Personlichkeitsrecht, § 22 KUG).

Logo/Favicon: Sobald ein Logo vorliegt, in `public/brand/` ablegen und in
`components/Header.tsx` (aktuell Text-Wortmarke „Hansolow.“) sowie in
`app/favicon.ico` bzw. über die Next.js Metadata-API einbinden.

## 6. Instagram-URL ergänzen

Die Instagram-Verlinkung ist zentral als Konstante `INSTAGRAM_URL` in
`config/site.ts` hinterlegt und liest ihren Wert aus der Umgebungsvariable
`NEXT_PUBLIC_INSTAGRAM_URL`:

1. In `.env.local` (lokal) bzw. in den Umgebungsvariablen des Hosting-Anbieters
   (Produktion) setzen:
   ```
   NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/<profilname>
   ```
2. Solange die Variable leer ist, wird **kein** Instagram-Link angezeigt – weder im
   Header, noch im Footer, noch auf der Kontaktseite. Es gibt also keinen toten Link.
3. Sobald der Wert gesetzt ist, erscheint der Link automatisch an allen drei Stellen
   (Footer, Kontaktseite, sowie – sofern gewünscht – im Header), ohne dass Code
   geändert werden muss.

Es wird bewusst **kein** eingebetteter Instagram-Feed und **kein** externes
Instagram-Skript verwendet (Datenschutz, Performance).

## 7. Kontaktformular-Versanddienst konfigurieren

Das Formular (`components/ContactForm.tsx`) validiert clientseitig, sendet die Daten an
`app/api/contact/route.ts`, die dort erneut serverseitig validiert (inkl. Honeypot-Feld
gegen Spam-Bots und einfachem Rate Limiting).

**Aktueller Stand:** Es ist bewusst **kein** externer E-Mail-Versanddienst fest verdrahtet,
da in der Aufgabenstellung kein Dienst vorgegeben war. Ohne konfigurierten Dienst
antwortet die API kontrolliert mit „nicht automatisch versendet", und das Formular
öffnet daraufhin **automatisch eine vorbereitete E-Mail** (`mailto:` mit allen
Formulardaten vorausgefüllt) als sicheren Fallback – es gehen also keine Anfragen
verloren.

Um echten automatischen Versand zu aktivieren:

1. Einen Versanddienst wählen (z. B. Resend, Postmark, oder SMTP über einen
   Provider).
2. API-Key in `.env.local` unter `CONTACT_EMAIL_PROVIDER_API_KEY` eintragen.
3. In `app/api/contact/route.ts` an der markierten Stelle („Platzhalter für die
   Anbindung eines echten Versanddienstes") den tatsächlichen API-Aufruf ergänzen und
   bei Erfolg `NextResponse.json({ ok: true })` zurückgeben.
4. Zieladresse ist bereits über `CONTACT_EMAIL` in `.env.example` vorgesehen
   (Standard: `hansolowentertainment@gmail.com`).

Das Rate Limiting in `app/api/contact/route.ts` ist bewusst einfach gehalten
(In-Memory, pro Server-Instanz). Bei Deployment auf mehreren Instanzen oder
Serverless-Funktionen ohne persistenten Speicher bitte durch eine geteilte Lösung
(z. B. Upstash Redis, Vercel KV) ersetzen, falls ein höheres Spam-Aufkommen erwartet
wird.

## 8. Umgebungsvariablen

Siehe `.env.example`:

```
CONTACT_EMAIL                        – Zieladresse für Projektanfragen
CONTACT_EMAIL_PROVIDER_API_KEY       – Optional: API-Key für echten E-Mail-Versand
NEXT_PUBLIC_SITE_URL                 – Basis-URL für Canonical/OG-Tags und sitemap.xml
NEXT_PUBLIC_INSTAGRAM_URL            – Instagram-Profil-URL (siehe Abschnitt 6)
```

## 9. Rechtliche Angaben vervollständigen (Pflicht vor Veröffentlichung)

Impressum und Datenschutzerklärung enthalten jetzt die vom Websitebetreiber
bereitgestellten echten Angaben (Anschrift, Kleinunternehmerstatus nach § 19 UStG,
Kontaktdaten). Es wurden bewusst **keine** Angaben erfunden. Konkret noch offen:

- [ ] **Umsatzsteuer-ID** eintragen, sobald vom Finanzamt erteilt (aktuell beantragt;
      als Kleinunternehmer nach § 19 UStG derzeit nicht zwingend erforderlich —
      `config/site.ts`, Feld `LEGAL.vatId`)
- [ ] **Hostinganbieter** in der Datenschutzerklärung benennen, sobald das Hosting
      final feststeht (`app/de/datenschutz/page.tsx`, `app/en/privacy/page.tsx`,
      Abschnitt „Zugriffsdaten / Server-Logfiles")
- [ ] **Namensschreibweise prüfen**: Das Impressum nutzt „Hans Schröder-Salowski"
      (mit Bindestrich, laut bereitgestelltem Impressum-Dokument), während Hero,
      Über-mich-Seite usw. weiterhin „Hans Schröder Salowski" (ohne Bindestrich)
      verwenden. Bitte entscheiden, ob das sitewide vereinheitlicht werden soll.
- [ ] Beide Rechtstexte durch eine fachkundige Person (Rechtsberatung) final prüfen
      lassen
- [ ] Falls später Analyse-, Marketing- oder weitere Tools ergänzt werden, die
      Datenschutzerklärung entsprechend erweitern
- [ ] Die Steuernummer wird bewusst nirgends auf der Website angezeigt
      (Missbrauchsrisiko) — nur die USt-ID, sobald vorhanden

## 10. Was in dieser Umgebung nicht geprüft werden konnte

Diese Codebasis wurde in einer Sandbox ohne Internetzugriff erstellt. `npm install`
konnte daher **nicht** ausgeführt werden (die npm-Registry war nicht erreichbar), und
in Folge auch nicht:

- `next build` (Produktions-Build)
- `npm run lint` (ESLint)
- `npm run typecheck` (`tsc --noEmit`)
- Rendering im Browser / visuelle Kontrolle

**Was stattdessen geprüft wurde**, siehe Abschnitt „Qualitätssicherung" in der
Zusammenfassung der Konversation:
- Alle `@/`-Importpfade wurden automatisiert gegen das Dateisystem geprüft und
  lösen korrekt auf.
- Klammern-/Anführungszeichen-Balance wurde in allen `.ts`/`.tsx`-Dateien geprüft.
- Alle Seiten und Layouts wurden auf einen vorhandenen `export default` geprüft.
- Der gesamte Projektbaum wurde case-insensitiv nach dem ausgeschlossenen Begriff
  durchsucht (0 Treffer).
- Alle Navigations-, Footer- und Sprachumschalter-Links wurden gegen die
  tatsächliche Ordnerstruktur unter `app/de/*` und `app/en/*` abgeglichen.

**Bitte vor dem ersten Deployment lokal ausführen:**

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

Da der Code sorgfältig und konsistent mit den vorhandenen, bereits funktionierenden
Mustern der Codebasis erstellt wurde, werden hier keine grundsätzlichen Probleme
erwartet – ein echter lokaler Build-Lauf ersetzt diese Prüfung aber nicht.

## 11. Veröffentlichungs-Checkliste

- [ ] `npm install`, `npm run typecheck`, `npm run lint`, `npm run build` lokal
      erfolgreich durchlaufen lassen
- [ ] `.env.local` mit echten Werten angelegt (`NEXT_PUBLIC_SITE_URL`,
      `NEXT_PUBLIC_INSTAGRAM_URL`, ggf. `CONTACT_EMAIL_PROVIDER_API_KEY`)
- [x] Echte Bilder in Hero, Galerie und Kontakt-CTA eingesetzt (18 vom
      Websitebetreiber bereitgestellte Produktionsfotos; zwei ursprünglich
      hochgeladene Instagram-Screenshots wurden bewusst nicht übernommen)
- [ ] Logo und Favicon ergänzt
- [x] Vollständige Impressumsanschrift eingetragen
- [ ] Rechtstexte (Impressum, Datenschutz) final rechtlich geprüft
- [ ] Umsatzsteuer-ID ergänzen, sobald erteilt
- [ ] Hostinganbieter in der Datenschutzerklärung benannt
- [ ] Instagram-URL final geprüft und gesetzt (oder bewusst leer gelassen)
- [ ] Schreibweise und Zuordnung von „Pfennigbau" und „Balativ" final geprüft
      (`config/site.ts`, `PARTNER_NAMES`)
- [ ] Referenzformulierungen (insbesondere Festivalsommer 2026 / Eminem) final
      freigegeben
- [ ] Kontaktformular-Versand konfiguriert (z. B. Resend) oder mailto-Fallback
      bewusst als Dauerlösung akzeptiert
- [ ] Auf einem echten Smartphone/Tablet getestet (Navigation, Formular,
      Sprachumschalter, kein horizontales Scrollen)
- [ ] DNS/Domain auf das gewählte Hosting zeigt, SSL aktiv

---

## Technische Entscheidungen (Kurzdokumentation)

- **Sprachrouting:** Echte Pfad-Segmente `/de` und `/en` (kein reines Cookie-Routing),
  damit jede Seite eine eigene, indexierbare URL mit korrektem `hreflang` hat. `/`
  leitet per Middleware anhand von Cookie bzw. `Accept-Language`-Header weiter.
- **Schriftarten:** Ausschließlich System-/UI-Schriftarten (`ui-sans-serif`,
  `ui-monospace`), keine Google Fonts oder andere externe Schriftquellen – entspricht
  der Datenschutz-Vorgabe „keine externen Schriftarten".
- **Gestaltungsmotiv:** Die feinen „Flightcase“-Eckklammern und die gepunktete
  „Rigging Line“ als Trennlinie zwischen Abschnitten sind bewusst aus der
  Bühnen-/Touring-Welt abgeleitet (Rack-Ecken, Traversen-Markierungen) statt generischer
  Kartendesigns.
- **Kein CMS, keine Datenbank:** Alle Inhalte liegen typsicher in TypeScript-Dateien
  unter `content/` und `config/`, versioniert wie der übrige Code.
- **Kontaktformular ohne festen Versanddienst:** Siehe Abschnitt 7 – bewusste
  Entscheidung, da kein Dienst vorgegeben war; der mailto-Fallback stellt sicher, dass
  keine Anfrage verloren geht, auch ohne Konfiguration.
