# R & R Remodel and Repair — Website

Marketing website for **R & R Remodel and Repair**, a Southwest Florida remodeling
and repair company: kitchens, baths, flooring, tile, painting & drywall,
carpentry, and home repair.

A single-page, mobile-first site featuring an interactive **before / after reveal
slider** that showcases real projects, built around the company's bronze logo.

**🔗 Live preview:** https://averymathews18-ai.github.io/rr-remodel-and-repair/

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (CSS-variable theming)
- **Motion** (Framer Motion) for scroll animations
- Prerenders as fully **static** HTML — deploys anywhere

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Editing content

All business content — name, phone, email, services, before/after projects, and
the recent-work gallery — lives in a single file:

```
src/lib/site.ts
```

- Project photos: `public/gallery`
- Brand assets (logo, favicon): `public/brand`
- Colors & fonts (recolor the whole site here): the `@theme` block in `src/app/globals.css`

To receive quote-form submissions, paste a free
[Formspree](https://formspree.io) or Netlify Forms endpoint into
`contact.formEndpoint` in `src/lib/site.ts`. Until then the form runs in a
friendly demo mode.

## Deploy

**Currently hosted on GitHub Pages** at the live-preview link above.

To publish updates after editing content, run:

```bash
bash scripts/deploy-pages.sh
```

That builds a static export (with the `/rr-remodel-and-repair` base path) and
pushes it to the `gh-pages` branch, which GitHub Pages serves. Requires the
[GitHub CLI](https://cli.github.com) authenticated (`gh auth login`).

Prefer a cleaner domain and automatic deploys on every push? Import the repo at
[Vercel](https://vercel.com/new) — it auto-detects Next.js and serves at the
domain root (no base path needed).

---

📞 (419) 279-1783 · ✉️ rrremodelrepair@gmail.com · Proudly serving Southwest Florida
