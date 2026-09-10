# ◆ ImpactHub

> **See a problem. Fix it together.**

A responsive civic-tech web platform where communities report, track, and resolve local issues — potholes, garbage, broken streetlights, water leaks, and more.

Built as **DecodeLabs Project 2 — Responsive Web Layout** (Batch 2026).

---

## 🌍 Why This Topic?

Real-world impact matters. ImpactHub is inspired by proven civic-tech platforms:

- [FixMyStreet](https://www.fixmystreet.com) (UK) — 2M+ reports resolved
- [SeeClickFix](https://seeclickfix.com) (USA)
- [Swachhata App](https://swachhata.mohua.gov.in) (India) — 50M+ users

Instead of a generic demo, this project solves a **real problem** while demonstrating every responsive technique from Project 2.

---

## 🎯 Project 2 Requirements — Full Compliance

Every requirement from the official checklist (Page 17) is verified:

| # | Requirement | Implementation | Status |
|---|-------------|----------------|--------|
| 1 | **Meta tag: `width=device-width`** | `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` on all 3 pages | ✅ |
| 2 | **Mobile-First Base CSS** | Base styles = mobile; all media queries use `min-width` | ✅ |
| 3 | **Grid (Macro) + Flexbox (Micro)** | Grid for page shells, stats, steps; Flexbox for cards, nav, forms | ✅ |
| 4 | **Fluid Units (%, rem, vw)** | `clamp()`, `rem`, `%`, `vw`, `ch`, `dvh` in design tokens | ✅ |
| 5 | **Hamburger/Popover Navigation** | Native Popover API — zero JS | ✅ |
| 6 | **Accessible Touch Targets & Zoom** | 44px+ targets, focus rings, no `user-scalable=no`, skip link | ✅ |

### Bonus (Page 18 — Future-Proofing)
- ✅ **Container Queries** — cards adapt to their container, not viewport
- ✅ **`prefers-reduced-motion`** support
- ✅ **`@starting-style`** for animated popover
- ✅ **Semantic HTML + ARIA labels**

---

## 🛠 Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — Grid, Flexbox, custom properties, `clamp()`, Container Queries, Popover API styling
- **Vanilla JavaScript** — progressive enhancement only (site works without it)
- **Zero dependencies** — no frameworks, no build step

---

## 📁 Project Structure

```
impacthub/
├── index.html          # Landing page — hero, stats, recent issues
├── issues.html         # Browse & filter issues
├── report.html         # Report an issue form
├── README.md
├── css/
│   ├── reset.css       # Modern CSS reset
│   ├── tokens.css      # Design system (colors, type, spacing)
│   ├── base.css        # Global styles, accessibility
│   ├── layout.css      # Macro layout (Grid + Flexbox)
│   └── components.css  # Buttons, cards, popover, forms
└── js/
    └── app.js          # Counter animation, filters, form handling
```

---

## 🚀 Getting Started

### Option 1: Open Locally
```bash
git clone <your-repo-url>
cd impacthub
# Open index.html in your browser
```

### Option 2: Live Server (recommended)
```bash
# With VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### Option 3: Python HTTP Server
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## 🎨 Design System Highlights

### Fluid Typography with `clamp()`
```css
--fs-3xl: clamp(2.25rem, 6vw, 3.75rem);   /* Hero title */
--fs-base: clamp(0.9375rem, 1.8vw, 1.0625rem);
```
Text scales smoothly from mobile to desktop — never too small, never too big.

### Fluid Spacing
```css
--sp-5: clamp(1.5rem, 3vw, 2.25rem);
--sp-7: clamp(2.75rem, 6vw, 5rem);
```
Every gap, padding, and margin breathes with the viewport.

### Grid for Layout, Flexbox for Components
```css
/* Macro — Grid */
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }

/* Micro — Flexbox */
.card-grid { display: flex; flex-wrap: wrap; gap: var(--sp-4); }
```
Exactly as taught on Page 12.

### Popover API — No JS Navigation
```html
<button popovertarget="mobile-menu">☰</button>
<div id="mobile-menu" popover>...</div>
```
Native, accessible, zero JavaScript.

### Container Queries (Bonus)
```css
.card-grid { container-type: inline-size; }
@container (min-width: 700px) {
  .card { flex-direction: row; }  /* Cards switch layout based on their container */
}
```

---

## ♿ Accessibility

- ✅ **Zoom up to 500%** — no `user-scalable=no`
- ✅ **44×44px minimum touch targets** (Page 15 spec)
- ✅ **Visible focus rings** for keyboard users (`:focus-visible`)
- ✅ **Skip-to-content link**
- ✅ **Semantic HTML** — `<header>`, `<main>`, `<nav>`, `<article>`, `<fieldset>`
- ✅ **ARIA labels** on icon-only buttons
- ✅ **Form labels** properly associated with inputs
- ✅ **`prefers-reduced-motion`** respected
- ✅ **Color contrast** WCAG AA compliant

---

## 📱 Responsive Breakpoints

| Viewport | Layout |
|----------|--------|
| **320–767px** | Single column · hamburger popover · 2-column stats |
| **768–1023px** | Two-column grid · desktop nav · 4-column stats · 2-column steps |
| **1024px+** | Full desktop · 4-column steps · container-query card rows |

---

## 🧪 Testing Checklist

Run these before submission:

- [ ] Open DevTools → Device Toolbar
- [ ] Test at **320px, 375px, 768px, 1024px, 1440px**
- [ ] Zoom to **500%** — no layout breaks
- [ ] **Keyboard-only** — Tab through all interactive elements
- [ ] **`Esc` closes** the popover menu
- [ ] **Lighthouse audit** — 90+ Accessibility, 90+ Best Practices
- [ ] **No horizontal scroll** at any width
- [ ] **Valid HTML** at [validator.w3.org](https://validator.w3.org)
- [ ] **Valid CSS** at [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)

---

## 📸 Screenshots to Include

Add these to your submission:

1. **Mobile view** (375px) — hamburger menu visible
2. **Mobile menu open** — popover sliding in
3. **Tablet view** (768px) — 2-column layout
4. **Desktop view** (1440px) — full layout
5. **Lighthouse report** — showing scores
6. **Zoom test** at 500% — layout intact

---

## 🎓 What I Learned

This project reinforced core responsive design principles:

1. **Mobile-first is a mindset** — design for the smallest screen first, then enhance
2. **Grid + Flexbox are complementary** — Grid for 2D macro, Flexbox for 1D micro
3. **`clamp()` is magic** — one line replaces 3 media queries
4. **Native Popover API > custom JS menus** — less code, better accessibility
5. **Accessibility is not optional** — 44px targets, focus rings, and zoom support come standard
6. **Container queries are the future** — components should respond to their own space

---

## 📚 Resources

- [MDN — Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [MDN — Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [Utopia Fluid Type Calculator](https://utopia.fyi/type/calculator/)
- [Can I Use — Container Queries](https://caniuse.com/css-container-queries)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)
- [CSS-Tricks — Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

## 📄 License

This project is part of DecodeLabs Industrial Training — Batch 2026.

Free to use for educational purposes.

---

## 🙏 Acknowledgements

- **DecodeLabs** for the training program and project brief
- **FixMyStreet, SeeClickFix, Swachhata** for civic-tech inspiration
- **Unsplash** for placeholder imagery

---

**Built with 💧 fluid design principles by a DecodeLabs intern.**