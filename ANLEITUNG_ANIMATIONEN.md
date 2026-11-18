# Anleitung: Animationen auf whyem.com ändern

Diese Anleitung ist für alle, die an den Animationen der Website basteln wollen.
Du brauchst keinen Zugriff auf die Live-Seite. Alles läuft über einen eigenen Branch
und einen Pull Request, so geht nichts kaputt.

## 1. Einmalig einrichten

1. [Node.js](https://nodejs.org) (LTS) und [Git](https://git-scm.com) installieren.
2. Die Einladung zum Repository in der GitHub-Mail annehmen.
3. Projekt herunterladen und Abhängigkeiten installieren:

```sh
git clone https://github.com/5ebi/whyem_barber.git
cd whyem_barber
npm install
```

## 2. Jedes Mal, wenn du etwas ändern willst

```sh
git checkout main
git pull
git checkout -b animationen-<kurzer-name>   # z.B. animationen-hero
npm run dev                                 # Seite läuft auf http://localhost:3000
```

Änderungen im Editor speichern, die Seite im Browser aktualisiert sich selbst.

## 3. Wo sind die Animationen?

| Was | Wo |
|---|---|
| Hero-Einblendung (Logo, Text, Button) | `app/page.tsx`, Klassen `animate-fade-in-up` und `delay-600` bis `delay-1400` |
| Aussehen und Dauer dieser Einblendung | `app/globals.css`, `@keyframes fadeIn` / `fadeIn60`, `.animate-fade-in-up` |
| Verzögerungen | `app/globals.css`, `.delay-100` bis `.delay-1400` |
| Einblenden beim Scrollen (Abschnitte, Bilder) | Klasse `reveal` in `app/page.tsx`, Stil in `app/globals.css` bei `.reveal` |
| Logo, das beim Scrollen in die Navigationsleiste wandert | `app/components/FloatingLogo.tsx` |
| Scroll-Logik für `reveal` | `app/components/ScrollAnimations.tsx` |

Tipps:

- Dauer ändern: in `globals.css` den Wert `0.9s` bzw. `0.8s` anpassen.
- Weicheres oder härteres Gefühl: die `cubic-bezier(...)`-Kurve ändern.
- Ein Element soll beim Scrollen eingeblendet werden: Klasse `reveal` hinzufügen.
- Farben nie fest eintragen, sondern `var(--bg)`, `var(--fg)` usw. verwenden.
- Immer auch am Handy-Format testen (im Browser mit F12 die Geräteansicht öffnen).

## 4. Prüfen und speichern

```sh
npm run lint
npm run build
```

Beide Befehle müssen ohne Fehler durchlaufen. Dann:

```sh
git add -A
git commit -m "Hero-Animation langsamer gemacht"
git push -u origin animationen-<kurzer-name>
```

## 5. Pull Request öffnen

1. Auf GitHub erscheint nach dem Push ein Button **Compare & pull request**.
2. Kurz beschreiben, was du geändert hast, und den Pull Request erstellen.
3. Vercel baut automatisch eine Vorschau-Seite, der Link steht im Pull Request.
4. Sebi schaut drüber und gibt frei. Erst danach ist es auf whyem.com live.

**Bitte nicht direkt auf `main` pushen.** Alles auf `main` geht sofort live.
