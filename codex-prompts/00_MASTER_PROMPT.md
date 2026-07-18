# Master Codex prompt

You are completing a premium one-page music artist website for JaiMoney XL and his album **Young Black Entrepreneur**. Work inside this existing Next.js project. Do not replace the architecture or start over.

Creative direction:
- cinematic, editorial and premium hip-hop
- black and white base with restrained light-gold and orange highlights
- continuous one-page scroll experience
- fixed moving background that changes between scenes
- oversized type, parallax, pinned sections, masked reveals and horizontal visual rail
- primary conversion order: buy album, buy merch, watch visuals, join fan list, booking/EPK
- responsive behavior must remain elegant on mobile
- honor `prefers-reduced-motion`

Technical rules:
- use the existing Next.js App Router, TypeScript, GSAP ScrollTrigger and Lenis setup
- keep editable content in `src/data`, not hard-coded throughout components
- use `next/image` for images and optimized local media paths
- do not hotlink Google Drive assets; copy optimized files into `public/media`
- prevent autoplay audio; sound begins only after user interaction
- preserve semantic HTML, keyboard access, focus visibility and proper modal behavior
- use no additional dependency unless there is a clear need
- run `npm run typecheck`, `npm run lint` and `npm run build` after major changes
- fix all errors before stopping

Before editing, audit the repository, summarize the current structure, list missing assets/content and propose the smallest safe implementation plan. Then complete the requested task.
