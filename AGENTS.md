# JaiMoney XL site — Codex operating instructions

Read this file before making changes.

## Goal
Complete the existing one-page, cinematic website for JaiMoney XL and the album **Young Black Entrepreneur**. Do not replace the architecture or restart the project.

## Creative rules
- Black and white foundation with restrained light-gold and orange accents.
- Keep the JM/XL crown monogram central to the identity.
- Premium hip-hop, editorial, independent ownership and Los Angeles energy.
- One continuous scroll-driven experience with a fixed moving media stage.
- Oversized typography, clean negative space and purposeful motion.
- Conversion order: buy album, buy merch, watch visuals, join fan list, booking/EPK.
- Avoid generic money, car, jewelry and stock-luxury imagery.

## Technical rules
- Preserve Next.js App Router, TypeScript, GSAP ScrollTrigger and Lenis.
- Keep editable content in `src/data`.
- Use optimized local media in `public/media`; do not hotlink Google Drive files.
- Never autoplay sound. Audio begins only after a user action.
- Honor `prefers-reduced-motion` and keep all content usable without animation.
- Mobile requires intentional layouts and shorter motion, not a scaled desktop copy.
- Maintain semantic HTML, keyboard access, visible focus and accessible overlays.
- Do not expose passwords, private keys, full masters or unapproved full songs.
- Avoid adding dependencies unless the current stack cannot reasonably solve the task.

## Required checks
After each major task, run:

```bash
npm run typecheck
npm run lint
npm run build
```

Fix all errors before stopping. Summarize changes, remaining placeholders and approval decisions at the end of each Codex session.
