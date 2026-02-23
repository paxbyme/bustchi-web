# Bustchi Marketing Website

Modern, high-conversion marketing website for **Bustchi** (Telegram **BOOST** service) built with **Next.js App Router**, **TypeScript**, and **TailwindCSS**.

## Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Reusable UI components (shadcn-style primitives)
- react-hook-form + zod (contact form validation)
- lucide-react icons
- next-themes (dark/light theme)

## Features

- Uzbek-first UI (future-ready i18n structure for EN/RU in `src/i18n/`)
- Mobile-first responsive marketing pages
- Sticky navbar + theme toggle
- Telegram CTA buttons with prefilled message support
- Partners/expert credibility grid (with initials avatar fallback)
- Config-driven pricing calculator (`src/config/pricing.ts`)
- FAQ accordion
- Contact form with validation and success state
- SEO metadata per route + OpenGraph defaults

## Routes

- `/` - Landing page
- `/services` - BOOST service details
- `/partners` - partners grid + filters
- `/pricing` - pricing calculator (critical feature)
- `/about` - project positioning and mission
- `/contact` - form + Telegram CTA
- `/faq` - accordion FAQ
- `/terms` - placeholder

## Pricing Configuration

All calculator prices come from:

- `src/config/pricing.ts`

You can change:

- Service labels/descriptions
- Package base prices
- Quantity min/max
- Included items
- Discount rules

UI updates automatically without changing calculator components.

## Telegram CTA Message Format

The pricing calculator generates a prefilled Telegram message in this format:

```text
Assalomu alaykum, Bustchi!
I selected [SERVICE] - [PACKAGE].
Quantity: X
Total price: Y UZS
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Vercel Deployment

1. Push the project to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel.
3. Use default Next.js settings.
4. Deploy.

## Assets

- Partner images/logos can be placed in `public/partners/`
- Hero illustration placeholder is in `public/illustrations/telegram-growth.svg`

## Notes

- The contact form currently uses a client-side success simulation (no backend submission endpoint yet).
- Telegram username/link can be updated in `src/lib/site.ts`.
# bustchi-web
