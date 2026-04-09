# GlobalVelo – Automotive Spare Parts B2B Platform

## Overview

GlobalVelo is a B2B automotive spare parts trading platform for an Ankara-based company that exports to 40+ countries. The website serves as a high-converting lead generation and brand presence tool, showcasing 80+ premium automotive brands across product categories like brakes, filters, engine parts, suspension, and belts. It also promotes the company's own brand **NeoVelo** and its technology partnership with **SabancıDx**.

The app is a full-stack TypeScript project with a React frontend and Express backend, deployed on both Replit and Vercel. The primary call-to-action is for B2B wholesale quote requests, captured via a contact form that stores submissions in PostgreSQL.

Key pages:
- **Home** – Hero, Features, Products, Contact
- **About** – Company story and values
- **Products** – Filterable catalog with brand logos and categories
- **NeoVelo Parts** – Own-brand product page
- **Global Network** – Export reach and logistics
- **SabancıDx** – Technology partner page

---

## User Preferences

Preferred communication style: Simple, everyday language.

---

## System Architecture

### Frontend Architecture
- **React 18** with **TypeScript**, bootstrapped via **Vite**
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack React Query** for server state and API calls
- **Framer Motion** used for hero animations and page transitions
- **shadcn/ui** component library built on **Radix UI primitives** with the "new-york" style
- **Tailwind CSS v4** (using `@import "tailwindcss"` syntax) with CSS variables for theming
- **React Hook Form** + **Zod** for form validation
- Two custom fonts: `Inter` (body) and `Outfit` (headings) loaded from Google Fonts
- Custom i18n system (`client/src/lib/i18n.tsx`) supporting 6 languages: Turkish (tr), English (en), Spanish (es), Arabic (ar), Russian (ru), French (fr)
- Language is stored in a React context via `LanguageProvider` and toggled from the Navbar
- Path aliases: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`
- Storybook setup (`.storybook/`) for component and page-level visual audits with a11y addon

### Backend Architecture
- **Express.js** server (`server/index.ts`) serving both the API and static frontend in production
- Route definitions in `server/routes.ts` — only two endpoints exist:
  - `POST /api/contact` – validates and stores a contact form submission
  - `GET /api/contact` – retrieves all submissions
- Storage abstraction via `IStorage` interface in `server/storage.ts`. Currently uses `DatabaseStorage` (backed by Drizzle + PostgreSQL) but also has a `MemStorage` fallback for testing
- Vite dev server runs in middleware mode (`server/vite.ts`) during development, so the Express server handles both API and frontend HMR
- Production build uses esbuild (via `script/build.ts`) to bundle the server into `dist/index.cjs`, and Vite to build the client into `dist/public`

### Separate Vercel API Handler
- `api/index.ts` is a standalone Express handler for Vercel serverless deployment
- It directly imports Drizzle and the schema — independent of the main server setup
- `vercel.json` routes `/api/*` to this handler and everything else to `index.html`

### Data Storage
- **PostgreSQL** via the `pg` driver and **Drizzle ORM**
- Schema defined in `shared/schema.ts` (shared between client and server)
- Two tables:
  - `users` – id (UUID), username, password
  - `contact_submissions` – id (UUID), name, email, phone, subject, message, created_at
- Drizzle Zod used to auto-generate insert schemas and TypeScript types from the table definitions
- Migrations stored in `./migrations/`, pushed with `drizzle-kit push`
- Database URL read from `DATABASE_URL` environment variable

### Authentication
- Schema includes a `users` table, but no auth routes or session middleware are currently wired up in `routes.ts`
- `connect-pg-simple` is listed as a dependency (for PostgreSQL session storage), suggesting auth may be added later

### UX / CRO Enhancements (Layout)
Three persistent UI components are rendered in `Layout.tsx` for all pages:
- **FloatingContact** (`FloatingContact.tsx`) – Sticky bottom-right button (bottom-left for Arabic RTL). After scrolling 420px, shows a toggle button that expands to reveal WhatsApp (`wa.me/902160000000`) and email (`info@globalvelo.com.tr`) quick-contact links. Fully i18n'd across all 6 languages including pre-filled WhatsApp message text.
- **ScrollToTop** (`ScrollToTop.tsx`) – Appears after 600px of scroll. One-click smooth scroll back to the top. RTL-aware (appears bottom-left for Arabic).
- **CookieConsent** (`CookieConsent.tsx`) – GDPR-compliant consent banner slides up from the bottom 1.2 seconds after first visit. Accept/Decline choice is stored in `localStorage` under key `globalvelo_cookie_consent`. Fully i18n'd in all 6 languages.

### Internationalization Improvements
- **Arabic RTL**: `Layout.tsx` now sets `dir="rtl"` and `lang="ar"` on the root element when Arabic is selected, ensuring proper text directionality throughout the site.
- **Language class**: Root div now uses `lang-{code}` class (e.g. `lang-ar`, `lang-tr`) instead of only `lang-en` / `lang-tr`.
- **Contact form toast**: Success message strings in all 6 languages updated from "email draft opening" to "request received" messaging, aligned with the API-only submission flow.

### Routing
- React app uses **Wouter** with these routes:
  - `/` → Home
  - `/about` → About
  - `/products` → Products
  - `/neovelo-parts` → NeoVelo Parts
  - `/global` → Global Network
  - `/sabancidx` → SabancıDx
  - `*` → 404 Not Found
- Smooth hash-based scroll navigation is handled by `HashScrollManager` in `App.tsx`

### Build & Dev Scripts
- `npm run dev` – starts Express + Vite middleware (full-stack dev server on one port)
- `npm run dev:client` – Vite-only dev server on port 5000
- `npm run build` – runs `script/build.ts` (Vite client + esbuild server)
- `npm run start` – runs production bundle
- `npm run db:push` – applies schema to database via Drizzle Kit

---

## External Dependencies

### UI & Component Libraries
- **shadcn/ui** (Radix UI-based) – full component suite (buttons, dialogs, sheets, dropdowns, toasts, etc.)
- **Lucide React** – icon library
- **Embla Carousel** – carousel component
- **Vaul** – drawer component
- **cmdk** – command palette
- **react-day-picker** – date picker
- **Recharts** – charting library
- **tw-animate-css** – Tailwind animation utilities
- **Framer Motion** – animation library used in Hero section

### Forms & Validation
- **React Hook Form** + **@hookform/resolvers**
- **Zod** for schema-based validation (shared between client and server)
- **drizzle-zod** for generating Zod schemas from Drizzle table definitions

### Database
- **PostgreSQL** (requires `DATABASE_URL` environment variable)
- **Drizzle ORM** (`drizzle-orm`, `drizzle-kit`) for type-safe queries and migrations
- **pg** (node-postgres) as the database driver

### Dev & Build Tools
- **Vite** with `@vitejs/plugin-react`
- **esbuild** for server bundling
- **tsx** for running TypeScript directly in dev
- **@tailwindcss/vite** plugin for Tailwind v4
- **@replit/vite-plugin-runtime-error-modal** – shows runtime errors in a modal overlay
- **@replit/vite-plugin-cartographer** – Replit-specific dev tool (only in dev on Replit)
- **@replit/vite-plugin-dev-banner** – Replit dev banner plugin
- **Storybook** (`@storybook/react-vite`, `@storybook/addon-a11y`) for component documentation and visual auditing

### Fonts & SEO
- Google Fonts: Inter and Outfit (loaded in `client/index.html`)
- SEO meta tags, OpenGraph, and Twitter card tags in `client/index.html`
- `robots.txt` allows indexing but blocks `/api/`
- Custom `vite-plugin-meta-images.ts` auto-updates `og:image` and `twitter:image` meta tags to use the Replit deployment domain when an `opengraph.png/jpg/jpeg` is found in `client/public`

### Other Utilities
- **date-fns** – date formatting
- **nanoid** – short unique ID generation
- **connect-pg-simple** – PostgreSQL session store (dependency present, not yet wired up)
- **@jridgewell/trace-mapping** – source map support