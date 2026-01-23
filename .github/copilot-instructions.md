# Copilot Instructions for WHYEM Barber Website

## Project Overview

German-language one-page website for a Vienna barbershop (Wien 1180). Built with **Next.js 16 App Router**, **React 19**, and **Tailwind CSS v4**.

## Architecture

- **Single-page layout**: Main content in [app/page.tsx](../app/page.tsx) using `'use client'` for scroll animations
- **Design spec**: [app/data/website-design.md](../app/data/website-design.md) contains section requirements, pricing, and copy
- **Legal pages**: `/impressum` and `/datenschutz` are server components with static German legal content
- **Theme system**: Dark mode default with CSS custom properties (`--bg`, `--fg`, `--border`) switched via `data-theme` attribute

## Key Patterns

### Styling Conventions

- CSS variables in [globals.css](../app/globals.css) – all colors reference `var(--bg)`, `var(--fg)`, etc.
- Button styles: `.btn-primary` (filled) and `.btn-secondary` (outlined)
- Section tags use `.section-tag` class with uppercase letter-spacing
- Animations: `.animate-fade-in-up` with `.delay-*` classes for staggered reveals

### Scroll-Based Animations

The hero uses a floating logo that shrinks into the navbar on scroll (see `useEffect` with `handleScroll` in page.tsx). Key refs:

- `floatingLogoRef` – animated logo container
- `navbarRef` – blur navbar that fades in

### Reveal-on-Scroll Pattern

```tsx
// Add class="reveal" to elements, they animate when intersecting viewport
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      }),
    { threshold: 0.1 },
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}, []);
```

### Lazy-Loading Map

Google Maps iframe loads only when scrolled into view using IntersectionObserver with `rootMargin: '200px'`.

## Content Guidelines

- **Language**: All user-facing text in German
- **Business info**: Weimarer Straße 13, 1180 Wien
- **Booking**: External link to Treatwell (`https://www.treatwell.at/`)
- **Assets**: Logo variants in `/public/` (`logo_w_white.png`, `logo_y_white.png`, `logo_clean_white.png`)
- **TODO**: Light mode logos (`logo_*_black.png`) not yet added – dark mode is primary for now

## Commands

```bash
pnpm dev    # Start dev server (localhost:3000)
pnpm run build  # Production build
pnpm run lint   # ESLint check
```

## When Adding New Sections

1. Follow the section structure in `website-design.md`
2. Use `reveal` class for scroll animations
3. Wrap content in `.container` for consistent padding
4. Add `.section-tag` for small uppercase labels above headings
