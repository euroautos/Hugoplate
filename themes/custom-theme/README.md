# EuroAutoService - Proiect Hugo
## Structură completă cu îmbunătățiri UI/UX implementate

---

## ✅ CE S-A IMPLEMENTAT

### 1. Configurație Hugo Completă
- `config/_default/hugo.toml` - Configurație principală
- `config/_default/params.toml` - Parametri site (contact, prețuri, statistici)
- `config/_default/menus.toml` - Meniuri navigație

### 2. Design System (conform raportului)
- **Paletă de culori nouă**: 
  - Primary Blue `#1e40af`
  - CTA Orange `#ea580c`
  - Success Green `#059669`
- **CSS Variables** pentru consistență
- **Componente reutilizabile** (cards, buttons, forms)
- **Typography system** cu Inter font

### 3. Layout-uri
- `layouts/_default/baseof.html` - Template de bază
- `layouts/index.html` - Homepage cu Hero redesignat
- `layouts/_default/single.html` - Pagini individuale (servicii)
- `layouts/_default/list.html` - Liste (servicii, blog)
- `layouts/page/contact.html` - Pagina contact dedicată
- `layouts/404.html` - Pagina de eroare

### 4. Componente Partials
- `partials/header.html` - Header cu navigație și mobile menu
- `partials/footer.html` - Footer complet
- `partials/sections/hero.html` - Hero redesignat cu statistici
- `partials/sections/trust-bar.html` - Social proof bar
- `partials/sections/testimonials.html` - Testimoniale
- `partials/components/contact-form.html` - Formular simplificat (3 câmpuri)
- `partials/components/service-card.html` - Card serviciu
- `partials/components/whatsapp-float.html` - Buton WhatsApp flotant
- `partials/components/mobile-call.html` - Buton apel mobil
- `partials/schema/organization.html` - Schema.org structured data

### 5. Shortcodes
- `shortcodes/cta.html` - CTA box pentru conținut

### 6. Assets
- `assets/css/main.css` - CSS complet cu design system
- `assets/js/main.js` - JavaScript pentru interacțiuni

### 7. Iconițe SVG (Heroicons)
- phone, clock, map-pin, menu, x, chevron-down
- arrow-right, calendar, mail, shield-check, award
- check-circle, wrench, refresh, navigation, star
- clipboard-check, fuel, cpu, target, whatsapp
- facebook, instagram, google

### 8. Conținut Sample
- Homepage (`content/_index.md`)
- Pagină ITP (`content/servicii/itp.md`) - cu FAQ și prețuri
- Pagină Revizie (`content/servicii/revizie-auto.md`)
- Pagină Contact (`content/page/contact.md`)

---

## 📋 CE MAI TREBUIE ADĂUGAT

### A. CONȚINUT (Manual - conform silo structure)

#### Pagini de Servicii
```
content/servicii/
├── _index.md ✅
├── itp.md ✅
├── revizie-auto.md ✅
├── reparatii-auto.md ❌ DE CREAT
├── montaj-gpl.md ❌ DE CREAT
├── diagnoza-auto.md ❌ DE CREAT
├── geometrie-roti.md ❌ DE CREAT
├── schimb-ulei.md ❌ DE CREAT
├── frane-ambreiaj.md ❌ DE CREAT
└── aer-conditionat.md ❌ DE CREAT
```

#### Pagini Informaționale
```
content/page/
├── contact.md ✅
├── despre.md ❌ DE CREAT (Despre noi + echipa)
├── preturi.md ❌ DE CREAT (Tabel prețuri complet)
├── faq.md ❌ DE CREAT (FAQ general)
├── termeni-si-conditii.md ❌ DE CREAT
├── politica-confidentialitate.md ❌ DE CREAT
└── politica-cookies.md ❌ DE CREAT
```

#### Blog (opțional dar recomandat pentru SEO)
```
content/blog/
├── _index.md ❌ DE CREAT
├── cand-trebuie-facut-itp.md ❌
├── cum-economisesti-cu-gpl.md ❌
├── semne-ca-ai-nevoie-de-revizie.md ❌
└── ...
```

### B. ASSETS MEDIA

#### Imagini necesare
```
static/images/
├── logo.svg ❌ NECESAR
├── logo-white.svg ❌ NECESAR (pentru footer)
├── og-default.jpg ❌ NECESAR (1200x630px pentru social)
├── favicon-32x32.png ❌ NECESAR
├── favicon-16x16.png ❌ NECESAR
├── apple-touch-icon.png ❌ NECESAR (180x180px)
├── servicii/
│   ├── itp.jpg ❌
│   ├── revizie.jpg ❌
│   ├── reparatii.jpg ❌
│   └── ... (pentru fiecare serviciu)
└── testimonials/
    ├── avatar-1.jpg ❌
    ├── avatar-2.jpg ❌
    └── ... (sau use placeholders)
```

### C. CONFIGURĂRI DE COMPLETAT

#### În `config/_default/params.toml`:
- [ ] Actualizează numărul real de telefon
- [ ] Adaugă numărul WhatsApp real  
- [ ] Actualizează adresa reală
- [ ] Adaugă link Google Maps real
- [ ] Adaugă link Waze real
- [ ] Adaugă Google Analytics ID (dacă ai)
- [ ] Adaugă reCAPTCHA site key (dacă folosești)

#### În `data/testimonials.json`:
- [ ] Adaugă testimoniale reale
- [ ] Actualizează rating-ul real Google
- [ ] Adaugă link-ul real către Google Reviews

### D. FUNCȚIONALITĂȚI DE IMPLEMENTAT

#### Backend/API (nu în Hugo)
1. **Procesare formular contact** - Hugo este static, ai nevoie de:
   - Formspree.io (gratuit până la 50 submissions/lună)
   - Netlify Forms (gratuit cu Netlify hosting)
   - Un endpoint custom (PHP, Node, etc.)

2. **reCAPTCHA v3** - Adaugă cheia în params.toml

#### Integrări
- [ ] Google Tag Manager / Analytics
- [ ] Facebook Pixel
- [ ] Google Search Console
- [ ] Harta Google Maps embed (în pagina Contact)

### E. OPTIMIZĂRI RECOMANDATE

#### Performance
- [ ] Configurează Hugo Pipes pentru SCSS dacă preferi
- [ ] Adaugă preload pentru fonturi critice
- [ ] Implementează lazy loading pentru imagini
- [ ] Configurează cache headers pe server

#### SEO
- [ ] Adaugă sitemap în Google Search Console
- [ ] Verifică schema.org cu Google Rich Results Test
- [ ] Adaugă hreflang dacă vei avea versiuni în alte limbi
- [ ] Implementează breadcrumbs schema

#### Accesibilitate
- [ ] Testează cu screen reader
- [ ] Verifică contrast cu WebAIM Contrast Checker
- [ ] Adaugă skip links funcționale
- [ ] Testează navigare cu tastatura

---

## 🚀 CUM SĂ PORNEȘTI PROIECTUL

### 1. Instalare Hugo
```bash
# macOS
brew install hugo

# Windows (chocolatey)
choco install hugo-extended

# Linux
snap install hugo
```

### 2. Rulare development
```bash
cd euroautoservice
hugo server -D
# Deschide http://localhost:1313
```

### 3. Build pentru producție
```bash
hugo --minify
# Output în folder /public
```

### 4. Deploy recomandat
- **Netlify** - cel mai simplu, gratuit, cu forms processing
- **Vercel** - alternativă bună
- **GitHub Pages** - gratuit dar fără forms

---

## 📁 STRUCTURA FINALĂ PROIECT

```
euroautoservice/
├── config/
│   └── _default/
│       ├── hugo.toml
│       ├── params.toml
│       └── menus.toml
├── content/
│   ├── _index.md
│   ├── servicii/
│   ├── page/
│   └── blog/
├── data/
│   ├── theme.json
│   └── testimonials.json
├── layouts/
│   ├── _default/
│   ├── page/
│   ├── partials/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── icons/
│   │   └── schema/
│   ├── shortcodes/
│   ├── index.html
│   ├── 404.html
│   └── robots.txt
├── assets/
│   ├── css/
│   └── js/
├── static/
│   ├── images/
│   └── fonts/
└── README.md
```

---

## ⚡ QUICK WINS DE IMPLEMENTAT IMEDIAT

1. **Adaugă logo-ul** în `static/images/logo.svg`
2. **Actualizează datele de contact** în `params.toml`
3. **Adaugă restul paginilor de servicii** (copiază structura din itp.md)
4. **Configurează form processing** cu Formspree sau Netlify
5. **Deploy pe Netlify** pentru testare

---

## 🔗 RESURSE UTILE

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- [Formspree](https://formspree.io/)
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org Testing Tool](https://validator.schema.org/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

*Proiect creat pe baza raportului de analiză UI/UX pentru euroautoservice.ro*
