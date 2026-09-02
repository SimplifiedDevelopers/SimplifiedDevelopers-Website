# Simplified Developers — Website

Marketing site for [simplifieddevelopers.com](https://simplifieddevelopers.com).

- **Stack:** React 18 + Vite 5 + TypeScript, no component library.
- **Dev:** `npm install && npm run dev` (port 5173 by default).
- **Build:** `npm run build` → static output in `dist/`.
- **Deploy:** Cloudflare Workers static assets (`wrangler.jsonc`, assets-only). Connect the repo under
  Workers Builds with build command `npm run build` and output directory `dist`.
- **Contact form:** posts to the existing Formspree endpoint in `src/constants.ts`.
