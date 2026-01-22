# Quick Reference Card - Design System

## 🔢 Numere Critice (Memorează)

| Element | Valoare | Context |
|---------|---------|---------|
| Touch Target MIN | **44x44pt** | Toate elementele interactive |
| Font Size MIN | **11pt** | Body text, toate platformele |
| Spacing Unit | **8pt** | Grid base |
| Margins Default | **16pt** | Screen edges |
| Contrast Text | **4.5:1** | WCAG AA compliance |
| Contrast Optimal | **7:1** | WCAG AAA compliance |
| Animation MAX | **0.3s** | Tranziții standard |
| Line Height | **1.3x** | Minimum pentru readability |
| Characters/Line | **35-50** | Mobile reading |

---

## 🎨 Culori Principale

```css
/* Brand */
--color-primary: #1e40af;     /* Albastru */
--color-cta: #ea580c;         /* Portocaliu - CTA */
--color-success: #059669;     /* Verde */

/* System */
--color-system-blue: #007AFF;   /* Links */
--color-system-red: #FF3B30;    /* DOAR delete */
--color-whatsapp: #25D366;      /* WhatsApp */
```

---

## 📏 Spacing Scale

```css
4pt   → între elemente legate
8pt   → base unit
16pt  → margin standard
24pt  → între secțiuni diferite
32pt+ → separare majoră
```

---

## ✅ DO / ❌ DON'T

### Tipografie
| DO ✅ | DON'T ❌ |
|-------|---------|
| Regular, Medium, Semibold, Bold | Ultralight, Thin, Light |
| Font ≥11pt | Font <11pt |
| System fonts (Inter) | Multiple typefaces |
| Line-height ≥1.3x | Cramped text |

### Culori
| DO ✅ | DON'T ❌ |
|-------|---------|
| Semantic colors | Same color for different things |
| Icon + text labels | Color as sole indicator |
| Contrast ≥4.5:1 | Low contrast text |

### Layout
| DO ✅ | DON'T ❌ |
|-------|---------|
| Touch target ≥44pt | Small tap areas |
| 8pt grid spacing | Inconsistent spacing |
| White space generos | Cramped layouts |
| Safe areas | Content under notch |

### Forms
| DO ✅ | DON'T ❌ |
|-------|---------|
| Max 3 câmpuri | Many fields |
| reCAPTCHA v3 (invisible) | Visible CAPTCHA |
| Visible labels | Placeholder-only |
| Error messages clear | Generic errors |

### Navigation
| DO ✅ | DON'T ❌ |
|-------|---------|
| 3-5 tabs | >5 tabs |
| Standard gestures | Custom gestures |
| Clear hierarchy | Cluttered nav |

---

## 🏗️ Componentă Standard

```html
<!-- Button Primary -->
<button class="btn btn--primary btn--lg">
  <svg>...</svg>
  Programează Acum
</button>

<!-- Service Card -->
<article class="service-card">
  <div class="service-card__body">
    <div class="service-card__icon">...</div>
    <span class="badge badge--popular">Popular</span>
    <h3 class="service-card__title">ITP Auto</h3>
    <p class="service-card__description">...</p>
    <span class="service-card__price">de la 120 RON</span>
  </div>
  <div class="service-card__footer">
    <a href="..." class="btn btn--ghost btn--full">Detalii</a>
  </div>
</article>
```

---

## 🧪 Pre-Launch Checklist

```
□ Touch targets ≥44pt
□ Font sizes ≥11pt
□ Contrast ≥4.5:1
□ Animations ≤0.3s
□ Mobile responsive
□ Light/Dark modes
□ Focus states visible
□ Error states defined
□ Loading states present
□ VoiceOver labels
```

---

## 📱 Breakpoints

```css
SM:  640px   /* Mobile landscape */
MD:  768px   /* Tablet */
LG:  1024px  /* Desktop */
XL:  1280px  /* Large desktop */
```

---

*Printează acest card și ține-l lângă monitor!*
