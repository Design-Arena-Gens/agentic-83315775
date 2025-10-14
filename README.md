# VoltSense — Smart Home Energy Monitor

A responsive, accessible 3-page marketing site for the fictional product VoltSense.

## Tech
- Next.js (App Router)
- Tailwind CSS

## Quickstart
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Scripts
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Design system
- Color tokens via CSS variables mapped in Tailwind: `--color-primary`, `--color-background`, etc.
- Type scale uses Inter via `next/font`.
- Spacing uses Tailwind defaults; components in `components/ui`.
- Components: `Button`, `Card`, `FormField`.

## Pages
- `/` Home: hero, logos, how it works (3), feature highlight with bullets.
- `/features`: 6-card grid, comparison table, MQTT payload snippet.
- `/contact`: accessible form with client-side validation, posts to `/api/contact`.

## API
`POST /api/contact` accepts `{ name, email, message }`. Validates and logs JSON on server.

## Decisions
- Local-first assets using Unsplash remote images allowed via `next.config.js`.
- Minimal dependency footprint; no UI library.
- Strong focus on a11y: focus-visible, labels, aria-live on form.

## Build & Deploy
```bash
npm run build
npm run start # serve production
```
To deploy to Vercel (requires token configured):
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-83315775
```
Then verify:
```bash
curl https://agentic-83315775.vercel.app
```
