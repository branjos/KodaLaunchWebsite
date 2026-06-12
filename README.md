# Koda Launch AI — Website

Next.js static site hosted on GitHub Pages at [kodalaunch.com](https://kodalaunch.com).

---

## Local development

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Hot reload is automatic.

---

## Building and previewing the static export

```
npm run build
npx serve out
```

`npm run build` generates the `out/` directory. `npx serve out` lets you preview it locally at `http://localhost:3000` — this mirrors exactly what GitHub Pages serves.

---

## Deploying

Push to `main`. GitHub Actions builds the site and deploys to GitHub Pages automatically.

> **One-time setup:** In the repo's Settings → Pages, set the source to **GitHub Actions**.

---

## Project structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (navbar, footer, analytics)
│   │   ├── globals.css         # All global styles and CSS variables
│   │   ├── page.tsx            # Homepage
│   │   ├── about/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── waitlist-confirmed/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Providers.tsx       # next-themes wrapper
│   │   ├── ConsentBanner.tsx
│   │   ├── FaqAccordion.tsx
│   │   └── WaitlistButton.tsx
│   └── lib/
│       └── analytics.ts        # gtag event helpers
├── public/                     # Static assets (images, SVGs, CNAME, robots.txt, sitemap.xml)
├── next.config.js
├── tailwind.config.js
└── .github/workflows/deploy.yml
```

---

## Theme

Light/dark mode is handled by `next-themes` using the `data-theme` attribute on `<html>`. CSS variables for both themes are defined in `globals.css`. No JavaScript theme logic needed outside of the `ThemeToggle` component.
