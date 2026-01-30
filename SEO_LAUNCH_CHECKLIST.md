# WHYEM Barber - SEO Launch Checkliste

## ✅ Bereits implementiert

### 1. **Favicon & Icons**

- ✅ Dynamisches Favicon (`/app/icon.tsx`)
- ✅ Apple Touch Icon (`/app/apple-icon.tsx`)
- ✅ Open Graph Image (`/app/opengraph-image.tsx`)
- ✅ Web App Manifest (`/public/manifest.json`)

### 2. **SEO Meta-Tags** (in `/app/layout.tsx`)

- ✅ Optimierter Title mit Template
- ✅ Ausführliche Description mit Keywords
- ✅ Open Graph Tags (Facebook, LinkedIn)
- ✅ Twitter Card Tags
- ✅ Robots Meta-Tags
- ✅ Canonical URLs
- ✅ Keywords Array

### 3. **Strukturierte Daten (Schema.org)**

- ✅ LocalBusiness / HairSalon Schema
- ✅ Öffnungszeiten
- ✅ Adresse & Geo-Koordinaten
- ✅ Services mit Preisen
- ✅ Founder-Informationen

### 4. **Sitemap & Robots**

- ✅ `/app/sitemap.ts` (dynamisch)
- ✅ `/public/robots.txt`

### 5. **Unterseiten Meta-Tags**

- ✅ Impressum mit Metadata
- ✅ Datenschutz mit Metadata

---

## 📋 Nach dem Launch durchführen

### 1. **Google Tools einrichten**

#### Google Search Console

1. Gehe zu [https://search.google.com/search-console](https://search.google.com/search-console)
2. Property hinzufügen: `https://whyem.at`
3. Verifizierung durchführen (empfohlen: HTML-Tag)
4. Füge den Verification Code in `/app/layout.tsx` ein:
   ```typescript
   verification: {
     google: 'DEIN-GOOGLE-VERIFICATION-CODE',
   },
   ```
5. Sitemap einreichen: `https://whyem.at/sitemap.xml`

#### Google My Business / Google Business Profile

1. Gehe zu [https://business.google.com/](https://business.google.com/)
2. Erstelle Business Profile für:
   - **Name:** WHYEM Barber
   - **Adresse:** Weimarer Straße 13, 1180 Wien
   - **Kategorie:** Friseur, Barbershop
   - **Telefon:** +43 660 5857123
   - **Website:** https://whyem.at
3. Öffnungszeiten hinzufügen
4. Fotos hochladen (Salon, Mudi, Beispiel-Cuts)
5. Verifizierung per Postkarte durchführen

#### Google Analytics (optional)

1. Erstelle Property bei [https://analytics.google.com/](https://analytics.google.com/)
2. Installiere `@vercel/analytics` (bereits implementiert über Vercel)

---

### 2. **Bing Webmaster Tools**

1. Gehe zu [https://www.bing.com/webmasters](https://www.bing.com/webmasters)
2. Website hinzufügen: `https://whyem.at`
3. Sitemap einreichen

---

### 3. **Lokale SEO optimieren**

#### Treatwell Profil

- ✅ Stelle sicher, dass das Treatwell-Profil vollständig ist
- Name, Adresse, Telefon (NAP) müssen identisch sein
- Link zu whyem.at hinzufügen

#### Social Media

- **Instagram:** Profil vervollständigen mit Link zu whyem.at
- **Facebook:** Business Page erstellen
  - Name: WHYEM Barber
  - Adresse identisch
  - Link zu Website
  - Öffnungszeiten

#### Citations (Brancheneinträge)

Trage WHYEM Barber in folgende Verzeichnisse ein:

- [Herold.at](https://www.herold.at/)
- [Gelbe Seiten Österreich](https://www.gelbeseiten.at/)
- [Yelp Österreich](https://www.yelp.at/)
- [Foursquare](https://foursquare.com/)

**Wichtig:** Name, Adresse, Telefon (NAP) müssen überall identisch sein!

---

### 4. **Content & SEO Monitoring**

#### Keywords überwachen

Wichtigste Keywords:

- Barber Wien
- Friseur 1180
- Barbershop Wien
- Fade Cut Wien
- Bartpflege Wien
- Herrenfriseur Währing

#### Wettbewerber analysieren

Schaue dir Ranking-Strategien lokaler Konkurrenz an.

#### Regelmäßiger Content (optional)

- Instagram Posts mit Link zu Website
- Google Business Posts (Angebote, News)
- Kundenbewertungen aktiv sammeln

---

### 5. **Performance Check**

#### PageSpeed Insights

- Teste: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- Ziel: 90+ Score für Mobile & Desktop

#### Mobile-Friendly Test

- Teste: [https://search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)

#### Rich Results Test

- Teste: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- Überprüfe, ob LocalBusiness Schema korrekt erkannt wird

---

### 6. **Technische Checks**

#### SSL/HTTPS

- ✅ Stelle sicher, dass die Domain mit HTTPS läuft

#### Canonical URLs

- ✅ Bereits implementiert in layout.tsx

#### Image Alt-Tags

- ✅ Überprüfe alle Bilder in page.tsx (bereits vorhanden)

---

## 📊 Wöchentliche Aufgaben (nach Launch)

- [ ] Google Search Console checken (Crawl-Fehler, Impressions)
- [ ] Google Business Insights ansehen
- [ ] Kundenbewertungen auf Google beantworten
- [ ] Instagram Stories mit Website-Link

---

## 🎯 Monatliche Aufgaben

- [ ] Rankings für Keywords prüfen
- [ ] Backlinks aufbauen (lokale Blogs, Partner-Salons)
- [ ] Content aktualisieren (neue Fotos, Services)
- [ ] Wettbewerbsanalyse

---

## 🔗 Wichtige Links

- Website: https://whyem.at
- Google Search Console: [Console](https://search.google.com/search-console)
- Google Business: [Business Profile](https://business.google.com/)
- Treatwell: [Profil](https://www.treatwell.at/)

---

## 📝 Notizen

### Domain Setup

- Domain: `whyem.at`
- Hosting: Vercel (empfohlen)
- DNS: Stelle sicher, dass A-Record und CNAME korrekt gesetzt sind

### Email Setup (empfohlen)

- Richte Email ein: `info@whyem.at`
- Aktualisiere Email in:
  - page.tsx (structuredData)
  - Impressum
  - Datenschutz
  - Google Business Profile

---

## 🚀 Launch Deployment Checklist

1. [ ] Vercel Project erstellen
2. [ ] GitHub Repository verbinden
3. [ ] Domain `whyem.at` verbinden
4. [ ] Environment Variables setzen (falls nötig)
5. [ ] Build durchführen
6. [ ] Deployment testen
7. [ ] Google Search Console verifizieren
8. [ ] Sitemap einreichen
9. [ ] Google Business Profile erstellen
10. [ ] Social Media Profile aktualisieren

---

**Stand:** Januar 2026  
**Letzte Aktualisierung:** $(date +%d.%m.%Y)
