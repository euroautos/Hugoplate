# Design Guidelines - EuroAutoService
## Bazat pe Apple HIG + Legea Prägnanz

---

## Principii Fundamentale

### 1. CLARITY (Claritate)
> Fiecare element trebuie să fie ușor de înțeles și lizibil.

- ✅ Text clar și lizibil la toate dimensiunile
- ✅ Ierarhie vizuală puternică
- ✅ Focus pe elementele cele mai importante
- ❌ Nimic ambiguu sau confuz

### 2. DEFERENCE (Deferență)
> UI-ul în spate, conținutul în prim-plan.

- ✅ Animații fluide care nu distrag
- ✅ Elemente UI subtile
- ✅ Conținutul utilizatorului = prioritatea #1
- ❌ Design-ul NU competează cu conținutul

### 3. DEPTH (Profunzime)
> Ierarhie vizuală și navigație predictibilă.

- ✅ Layering vizual pentru ierarhie
- ✅ Tranziții smooth între ecrane
- ✅ Navigație logică și predictibilă

### 4. PRÄGNANZ (Simplitate)
> Creierul simplifică formele complexe. Designul bun facilitează acest proces.

- ✅ Grupare logică a elementelor
- ✅ Consistența formelor (dreptunghiuri rotunjite)
- ✅ Ierarhie vizuală clară
- ✅ Spațiu alb generos

---

## Specificații Tehnice

### Tipografie

| Style | Size | Weight | Utilizare |
|-------|------|--------|-----------|
| Large Title | 34pt (2.125rem) | Bold | Headlines principale |
| Title 1 | 28pt (1.75rem) | Bold | Secțiuni importante |
| Title 2 | 22pt (1.375rem) | Semibold | Sub-secțiuni |
| Title 3 | 20pt (1.25rem) | Semibold | Grupări de conținut |
| Headline | 17pt (1.0625rem) | Semibold | Titluri cards |
| Body | 17pt (1.0625rem) | Regular | Text principal |
| Subhead | 15pt (0.9375rem) | Regular | Labels, sub-titluri |
| Footnote | 13pt (0.8125rem) | Regular | Metadata |
| Caption | 11pt (0.6875rem) | Regular | **MINIMUM ABSOLUT** |

**Reguli CRITICE:**
- ❌ NICIODATĂ font sub 11pt
- ❌ EVITĂ weights: Ultralight, Thin, Light
- ✅ FOLOSEȘTE: Regular, Medium, Semibold, Bold
- ✅ Line-height minim 1.3x font size
- ✅ 35-50 caractere per linie pentru mobile

### Culori

#### Culori Primare
```css
--color-primary: #1e40af;       /* Albastru - Brand, headings */
--color-cta: #ea580c;           /* Portocaliu - CTA, butoane */
--color-success: #059669;       /* Verde - Validări, prețuri */
```

#### Culori Semantic (Apple System Colors)
```css
--color-system-blue: #007AFF;   /* Links, acțiuni primare */
--color-system-green: #34C759;  /* Success, confirmări */
--color-system-red: #FF3B30;    /* DOAR delete/destructive */
--color-system-orange: #FF9500; /* Warning */
--color-system-yellow: #FFCC00; /* Alerts non-critice */
```

**Reguli CRITICE:**
- ❌ NU folosi aceeași culoare pentru lucruri diferite
- ❌ NU te baza DOAR pe culoare pentru comunicare
- ✅ Contrast minim 4.5:1 pentru text
- ✅ Contrast optim 7:1 pentru accessibility
- ✅ Adaugă iconițe + text labels

### Spacing (8pt Grid)

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| space-1 | 4pt | Între elemente foarte legate |
| space-2 | 8pt | Base unit |
| space-4 | 16pt | Standard margin |
| space-6 | 24pt | Între secțiuni diferite |
| space-8 | 32pt | Separare majoră |
| space-16 | 64pt | Între secțiuni majore |
| space-20 | 80pt | Section padding |

### Touch Targets

| Tip | Minimum | Recomandat |
|-----|---------|------------|
| Butoane | 44x44pt | 48x48pt |
| Inputs | 44pt height | 48pt height |
| Links în liste | 44pt row height | - |
| FAB (floating) | 56x56pt | - |

**Apple Research:** Sub 44pt = 25%+ missed taps

### Border Radius (Formă Consistentă)

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| radius-sm | 6pt | Subtle rounding |
| radius-md | 8pt | Default |
| radius-lg | 12pt | Cards, inputs |
| radius-xl | 16pt | Large cards |
| radius-2xl | 24pt | Modals |
| radius-full | 9999px | Pills, avatars |

**Prägnanz:** Folosim dreptunghiuri rotunjite ca formă dominantă în toată interfața.

### Shadows (Liquid Glass)

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.07);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.08);
--shadow-glass: 0 8px 32px rgb(0 0 0 / 0.06);
```

### Animații

| Tip | Durată | Easing |
|-----|--------|--------|
| Micro-interacțiuni | 100-200ms | ease-default |
| Tranziții standard | 200-300ms | ease-default |
| MAXIMUM | 300ms | - |

**Reguli:**
- ✅ Animații sub 0.3s
- ✅ Purposeful - comunică, nu decorează
- ✅ Spring animations pentru naturalețe
- ❌ NICIODATĂ peste 1s pentru UI feedback

---

## Componente

### Butoane

**Ierarhie:**
1. **Primary** (Portocaliu) - O singură acțiune principală per ecran
2. **Secondary** (Albastru outline) - Acțiuni secundare
3. **Ghost** (Transparent) - Acțiuni terțiare
4. **WhatsApp** (Verde) - Contact rapid
5. **Destructive** (Roșu) - DOAR pentru delete/anulare

```html
<!-- Primary CTA -->
<button class="btn btn--primary btn--lg">Programează Acum</button>

<!-- Secondary -->
<button class="btn btn--secondary">Vezi Prețurile</button>

<!-- Ghost -->
<button class="btn btn--ghost">Mai multe detalii</button>
```

### Cards (Service Cards)

**Structură:**
1. Icon (56x56pt, background primary-subtle)
2. Badge (opțional - "Cel mai popular")
3. Titlu (Title 3, Semibold)
4. Descriere (Subhead, secondary color)
5. Preț (Badge verde)
6. Footer cu CTA

**Prägnanz:** Toate cardurile au aceeași formă (dreptunghi rotunjit, radius-xl)

### Formulare

**Reguli pentru conversii:**
- ✅ Maximum 3 câmpuri (Nume, Telefon, Serviciu)
- ✅ Labels vizibile (nu placeholder-only)
- ✅ Touch targets minim 44pt
- ✅ Error messages descriptive
- ❌ NU folosi CAPTCHA vizibil (folosește reCAPTCHA v3)
- ✅ Adaugă timp de răspuns ("Răspundem în 15 min")

### Trust Bar

**Elemente grupate logic (Prägnanz):**
- Rating Google (★★★★☆ 4.5/5 din 241 recenzii)
- Autorizare (Stație RAR CT060)
- Experiență (Din 2007 | 50.000+ ITP-uri)
- Timp răspuns (Răspundem în 15 minute)

---

## Anti-Patterns (CE SĂ EVIȚI)

### ❌ Emoji Excesive
**Problemă:** Subminează credibilitatea profesională
**Soluție:** Folosește SF Symbols / iconițe SVG

### ❌ Prețuri Ascunse
**Problemă:** Fricțiune în conversie, reduce încrederea
**Soluție:** Prețuri vizibile "de la X RON" pe homepage

### ❌ Gesturi Custom pentru Acțiuni Basic
**Problemă:** Crește load-ul cognitiv
**Soluție:** Folosește gesturi standard iOS

### ❌ Font Weights Light/Thin
**Problemă:** Ilizibil, accessibility fail
**Soluție:** Regular, Medium, Semibold, Bold

### ❌ Culoare ca Singur Indicator
**Problemă:** Exclude utilizatori colorblind
**Soluție:** Adaugă iconițe + text labels

### ❌ Navigație Aglomerată
**Problemă:** Analysis paralysis
**Soluție:** Max 5 items în Tab Bar

### ❌ Lipsa Loading States
**Problemă:** Utilizatorul nu știe dacă funcționează
**Soluție:** Spinners, skeletons, progress bars

### ❌ Forme Inconsistente
**Problemă:** Efort cognitiv crescut
**Soluție:** O formă dominantă (dreptunghiuri rotunjite)

### ❌ Lipsa Spațiului Alb
**Problemă:** Aglomerare vizuală, oboseală
**Soluție:** Spațiu generos între grupuri (24-32pt între secțiuni)

---

## Checklist Pre-Launch

### Layout
- [ ] Safe areas respectate
- [ ] Touch targets minimum 44x44pt
- [ ] Spacing consistent (8pt grid)
- [ ] Responsive pe toate device-urile

### Tipografie
- [ ] Font minim 11pt
- [ ] Dynamic Type support
- [ ] Ierarhie clară (weight, size, color)
- [ ] Maximum 2 typefaces

### Culori
- [ ] Contrast 4.5:1 minimum pentru text
- [ ] Light/Dark Mode support
- [ ] Culoarea NU e singurul indicator
- [ ] Semantic colors pentru funcții system

### Accessibility
- [ ] VoiceOver labels complete
- [ ] Focus states vizibile
- [ ] Reduced motion suport
- [ ] High contrast mode compatibil

### Performance
- [ ] Animații sub 0.3s
- [ ] Loading states implementate
- [ ] Error states definite
- [ ] Offline handling

---

## Exemple Bune de Urmat

### Stripe Checkout
- ✅ Buton "Pay" proeminent
- ✅ Detalii secundare plasate discret
- ✅ Ierarhie vizuală clară

### Dropbox
- ✅ Organizare clară în categorii
- ✅ Design simplu, intuitiv
- ✅ Grupare logică

### Spotify
- ✅ Dreptunghiuri rotunjite consistente
- ✅ Spațiu alb generos
- ✅ Armonie vizuală

---

## Resurse

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- [SF Symbols](https://developer.apple.com/sf-symbols/)
- [Apple Design Resources](https://developer.apple.com/design/resources/)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

*Document creat pentru EuroAutoService - Ianuarie 2026*
*Bazat pe Apple HIG + Legea Prägnanz*
