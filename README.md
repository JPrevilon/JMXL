# JaiMoney XL — Website Starter Framework

A one-page, cinematic, scroll-driven website foundation for **JaiMoney XL — Young Black Entrepreneur**.

This starter includes:

- Next.js App Router + TypeScript
- GSAP ScrollTrigger motion scaffolding
- Lenis smooth scrolling
- Fixed background scene system
- Entry screen and logo animation slot
- Responsive navigation and scroll progress
- Hero, manifesto, album, tracklist, visuals, merch, story, fan capture and footer scenes
- Track preview dock structure
- Video modal structure
- EPK drawer structure
- Mobile fallbacks and reduced-motion support
- Three logo concepts and transparent logo exports
- Placeholder art that makes the framework usable before final media is added
- A complete set of staged Codex prompts in `/codex-prompts`

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run typecheck
npm run lint
npm run build
```

## First files to edit

1. `src/data/siteContent.ts` — artist copy, links and scene media
2. `src/data/tracks.ts` — tracklist and preview files
3. `src/data/videos.ts` — visual assets
4. `src/data/products.ts` — merch products and prices
5. `src/app/globals.css` — design system and motion styling
6. `public/media/README.md` — production media naming guide

## Asset workflow

Download selected items from the shared Google Drive, rename them, optimize them and place them in `public/media`. Do not hotlink raw Drive files on the public site.

## Brand files

- `public/brand/logo-white-transparent.png`
- `public/brand/logo-black-transparent.png`
- `public/brand/concepts/concept-01.png`
- `public/brand/concepts/concept-02.png`
- `public/brand/concepts/concept-03.png`

## Notes

The framework intentionally uses placeholder art and placeholder copy where final client approvals are still needed. The architecture is ready for Codex to replace those pieces without rebuilding the whole project.
