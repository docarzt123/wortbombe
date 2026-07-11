# 💣 Wortbombe

Das Party-Wortspiel als **kostenlose Offline-App fürs Handy** – für Kinder und Erwachsene.

**👉 Spielen / installieren: [docarzt123.github.io/wortbombe](https://docarzt123.github.io/wortbombe/)**

## Worum geht's?

Eine Kategorie erscheint (z. B. „ein Tier"), dann tickt eine **Bombe**. Ihr reicht das Handy reihum und sagt schnell ein passendes Wort. Bei wem es **BUMM** macht, verliert die Runde – Minuspunkt oder Mutprobe!

## Auf dem Handy installieren (Android)

1. Den Link oben in **Chrome** öffnen
2. Auf **Menü (⋮) → „App installieren"** tippen (oder „Zum Startbildschirm hinzufügen")
3. Fertig – die App liegt als Icon auf dem Homescreen und läuft **komplett offline**

Kein Play Store, keine Entwickleroptionen, keine Werbung, kein Tracking.

## Features

- **180 Kategorien** in zwei Paketen: Familie und Party
- Zündschnur einstellbar: kurz, normal oder lang
- Tick-Sound, der schneller wird, und Vibration bei der Explosion
- 3–12 Spieler, ein Handy wird herumgereicht
- Läuft offline (Progressive Web App) mit automatischem Update

## Technik

Reines HTML/CSS/JavaScript in einer Datei, ohne Frameworks. Sound über die Web Audio API, Offline-Fähigkeit über einen selbstheilenden Service Worker (`sw.js`) und ein Web-App-Manifest.
