# Production media folder

Do not hotlink the Google Drive originals in production. Download the approved assets, rename them clearly, compress them, and place the optimized files here.

Recommended files:

- `hero-loop.mp4` — 8–15 second muted landscape loop
- `hero-poster.webp` — first-frame fallback
- `hero-portrait.webp` — isolated or strongly composed portrait
- `album-cover.webp` — final 1:1 artwork
- `manifesto-01.webp` through `manifesto-03.webp`
- `track-bg-01.webp` through `track-bg-04.webp`
- `visual-01.mp4` through `visual-04.mp4`
- `visual-01-poster.webp` through `visual-04-poster.webp`
- `merch-01.webp` through `merch-03.webp`
- `story-portrait-01.webp`, `story-portrait-02.webp`

After adding media, update the paths in:

- `src/data/siteContent.ts`
- `src/data/videos.ts`
- `src/data/products.ts`
- `src/data/tracks.ts`
