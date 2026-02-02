# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WHYEM Barber website - a German-language single-page website for a Vienna barbershop (Wien 1180). Built with **Next.js 16 App Router**, **React 19**, and **Tailwind CSS v4**.

**Domain:** whyem.com and www.whyem.com (previously whyem.at)
**Business:** Weimarer Straße 13, 1180 Wien

## Development Commands

```bash
# Package manager: npm or pnpm
pnpm dev          # Start dev server at localhost:3000
pnpm run build    # Production build
pnpm run start    # Start production server
pnpm run lint     # Run ESLint
```

## Architecture

### Single-Page Layout

- **Main content:** `app/page.tsx` - client component (`'use client'`) containing all sections in a single scrollable page
- **Legal pages:** `/impressum` and `/datenschutz` - server components with static German legal content
- **No navigation menu:** one-page design with smooth scrolling to sections

### Key Files

- `app/page.tsx` - Main single-page website (~850 lines), contains all sections
- `app/layout.tsx` - Root layout with extensive SEO metadata, Vercel Analytics & Speed Insights
- `app/globals.css` - CSS custom properties, animations, button styles, utility classes
- `app/data/website-design.md` - Original design specification with content requirements
- `next.config.ts` - Performance optimizations, image formats, security headers

### Theme System

Uses CSS custom properties switched via `data-theme` attribute:
- **Default:** Dark mode (`--bg: #0a0a0a`, `--fg: #ebebeb`)
- **Variables:** `var(--bg)`, `var(--fg)`, `var(--border)`, `var(--gray-*)` in `globals.css`
- All colors reference these variables for consistent theming

## Scroll-Based Animations

### Floating Logo → Navbar Transition

The hero section features a large floating logo that smoothly transitions into a blur navbar on scroll:

```tsx
// Key refs in page.tsx
floatingLogoRef  // Animated logo container in hero
navbarRef        // Blur navbar that fades in

// handleScroll function calculates scroll progress and:
// - Shrinks/fades out floating logo
// - Fades in/positions navbar logo
// - Adjusts opacity of navbar background blur
```

### Reveal-on-Scroll Pattern

Elements with `.reveal` class animate when entering viewport:

```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}, []);
```

### Lazy-Loading Google Maps

Maps iframe loads when scrolled into view using IntersectionObserver with `rootMargin: '200px'` to preload slightly before entering viewport.

## Styling Conventions

### CSS Classes in globals.css

- **Buttons:** `.btn-primary` (filled), `.btn-secondary` (outlined)
- **Section tags:** `.section-tag` - uppercase labels with letter-spacing
- **Animations:** `.animate-fade-in-up`, `.delay-100/200/300/400` for staggered reveals
- **Layout:** `.container` for consistent padding/max-width
- **Cards:** `.card` with hover effects and blur backgrounds

### Design Principles

- Mobile-first responsive design
- Dark mode as primary (light mode logos not yet implemented)
- Micro-animations on hover states
- Modern clean typography using Geist Sans/Mono fonts

## Content & Assets

### Images in /public

- Logo variants: `logo_w_white.png`, `logo_y_white.png`, `logo_clean_white.png`, `logo_clean_small.png`
- Icons: `logo_icon_180.png`, `logo_icon_32.png`
- Business photos: `mudi_barber.webp`, `customer1-3.webp`, `barbershop_x_co.webp`
- **Note:** Light mode logos (`*_black.png`) not yet created

### Language & Business Info

- **Language:** All user-facing content in German (de-AT)
- **Location:** Weimarer Straße 13, 1180 Wien
- **Booking:** External link to Treatwell (https://www.treatwell.at/)
- **Social:** Instagram @haarmudi
- **Owner:** Mudi - 17+ years experience, Barber Battle Vienna 2022 winner

### Services & Pricing

Services defined in structured data in `page.tsx`:
- The Signature Cut: €42
- Beard Design & Contour: €32
- Full Service Experience: €65
- Kids Cut & Style: €25

## SEO & Performance

### SEO Implementation

The site is optimized following Google's SEO best practices for Next.js:

**Metadata & Structured Data:**
- Comprehensive metadata in `app/layout.tsx` using Next.js Metadata API
- Title template: `'%s | WHYEM Barber Wien 1180'` for consistent branding
- Meta descriptions: 1-2 sentences, unique per page, highlighting key information
- Open Graph and Twitter card tags for social media sharing
- JSON-LD structured data in `page.tsx` (HairSalon schema with services, location, opening hours)
- Canonical URL: Set to `https://whyem.com` in layout.tsx
- Sitemap at `app/sitemap.ts` (referenced in robots.txt)
- robots.txt in `/public` (allows all crawling, references sitemap)

**Image Optimization Best Practices:**
- All images use `next/image` component for automatic optimization (WebP/AVIF, lazy loading, responsive sizes)
- **Alt text requirements:** Must be descriptive and informative (e.g., "Dalmatiner-Welpe apportieren" not "Hund")
- Place images near relevant text to help Google understand context
- Avoid empty alt text or keyword stuffing
- Current images should have German alt text describing the barbering context

**Server-Side Rendering (SSR):**
- Main page uses `'use client'` for animations, but legal pages are server components
- SSR delivers complete HTML to crawlers, improving indexing speed
- Google can render JavaScript, but SSR/SSG is faster for both users and crawlers

**HTTP Status Codes:**
- Use 404 for non-existent pages (see `app/not-found.tsx`)
- Use 301/308 for permanent redirects (e.g., whyem.at → whyem.com)
- Use 302/307 only for temporary redirects
- Avoid "soft 404" errors (returning 200 for missing content)

**Indexing Control:**
- Use `noindex` meta tag to exclude pages from search results (not robots.txt)
- robots.txt blocks crawling but doesn't prevent indexing if page is linked externally
- Legal pages (Impressum, Datenschutz) may want `noindex` if not needed in search

### Core Web Vitals Targets

Google ranks pages based on these performance metrics:

| Metric | Target | Current Focus |
|--------|--------|---------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Hero image/logo load time |
| **INP** (Interaction to Next Paint) | < 200ms | Button clicks, scroll responsiveness |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Image dimensions, font loading |

**Monitoring:**
- Check Core Web Vitals in Google Search Console
- Use Lighthouse in Chrome (incognito mode for accurate results)
- Next.js provides `useReportWebVitals` hook for custom analytics

**Optimization Techniques:**
- `next/image` prevents CLS by reserving space with width/height
- Font optimization: Next.js inlines font CSS at build time (no external network call)
- Dynamic imports with `import()` reduce initial JavaScript bundle
- Third-party scripts use `next/script` with `strategy="afterInteractive"` or `"lazyOnload"`

### Performance Checklist

- ✅ Images optimized via `next/image`
- ✅ Compression enabled in `next.config.ts`
- ✅ Security headers configured (HSTS, CSP, frame options)
- ✅ Vercel Analytics & Speed Insights integrated
- ✅ Lazy loading for Google Maps iframe
- ⚠️ Check bundle size with `@next/bundle-analyzer` if adding new dependencies
- ⚠️ Test with JavaScript disabled to ensure critical content is in HTML

### SEO Maintenance Tasks

When making changes:
- **Adding images:** Always include descriptive German alt text
- **New pages:** Add to sitemap, set metadata (title, description, canonical URL)
- **Redirects:** Use 301 for permanent (domain changes), 302 for temporary
- **Duplicate content:** Set canonical URL to preferred version
- **Internal links:** Always link to canonical version (https://whyem.com)
- **External links:** Use `rel="nofollow"` for untrusted content, `rel="noopener"` for security

## Next.js Configuration

- **Image optimization:** AVIF & WebP formats enabled, responsive device sizes, automatic lazy loading
- **Security headers:** HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- **Performance:** HTTP compression enabled, responsive breakpoints optimized
- **PWA:** manifest.json in `/public` for mobile app-like experience (theme-color: #0a0a0a)

## When Adding New Sections

1. Follow section structure in `app/data/website-design.md`
2. Add `reveal` class for scroll animations
3. Use `.container` wrapper for consistent padding
4. Use `.section-tag` for uppercase labels above headings
5. Reference CSS variables (`var(--bg)`, etc.) for colors
6. Test mobile-first, then tablet/desktop breakpoints
