# KidScope - Children's Programming School Landing Page

## Project Overview
A landing page for KidScope, a children's programming school. The site is built with a full-stack Express + React architecture, migrated from Figma to Replit.

## Architecture

### Stack
- **Frontend**: React 18 + TypeScript, Tailwind CSS v3, Wouter (routing), TanStack Query
- **Backend**: Express 5 (Node.js), TypeScript via `tsx`
- **Build**: Vite (root-level config serving client from `/client`)
- **Database**: PostgreSQL (Drizzle ORM, `db:push` for schema sync)
- **Fonts**: Days-Regular (local), Inter, Montserrat, Nunito (Google Fonts)

### Key Directories
- `client/src/pages/` — Page components
- `client/src/pages/sections/` — Page section components (IntroSection, HeroSection, CoursesSection, etc.)
- `client/public/figmaAssets/` — All Figma-exported images, SVGs, and icons
- `server/` — Express server, routes, Vite dev setup
- `artifacts/mockup-sandbox/` — Component preview server (Vite, Tailwind v4, port 8081)
- `artifacts/api-server/` — Separate API artifact (port 8080)

### Port Configuration
- Port 5000 → main app (Express + Vite dev server, external port 80)
- Port 8080 → API server artifact
- Port 8081 → Component mockup preview server (`/__mockup`)

## Pages & Sections
The main page (`/`) renders `WireframeMainpage` which includes:
1. `IntroSection` — Navigation bar + hero content (blue space background, sun character, headline, KidScope logo, CTA button)
2. `SchoolInfoSection`
3. `CoursesSection`
4. `InstructorsSection`
5. `HeroSection` — Secondary hero/CTA section
6. `TestimonialsSection`
7. `FooterSection`

## Design Details
- Primary color: `#0163a6` (blue)
- CTA color: `#eb6906` (orange)
- Hero background: space-style blue gradient (`#0163a6` → `#003c65`)
- Main heading font: `Days-Regular` (falls back to Helvetica)
- Body fonts: Inter, Montserrat
- All Figma assets are in `client/public/figmaAssets/`

## Running the App
```bash
npm run dev        # starts Express + Vite on port 5000
npm run build      # builds for production
npm run db:push    # syncs database schema
```

## Notes
- The tailwind.config.ts at root is actually a PostCSS config (plugins: tailwindcss + autoprefixer). This is correct for Tailwind v3.
- The cartographer plugin logs a harmless warning about the tailwind config module format — this does not affect functionality.
- Figma assets are served as static files from `client/public/figmaAssets/`.
