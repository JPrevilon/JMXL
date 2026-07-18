# JaiMoney XL launch QA

Audit date: 2026-07-18  
Target branch: `main`

## Release status

The application code passes the production quality gate, but the site is **not content-complete for public launch** until the blockers at the end of this document are resolved.

## Performance

- [x] All GSAP imports route through `src/lib/gsap.ts`; ScrollTrigger is registered once.
- [x] Component GSAP contexts, match-media contexts, ScrollTriggers, Lenis, ticker callbacks, observers, timers, and event listeners clean up on unmount/hot reload.
- [x] GSAP ticker lag smoothing is restored when smooth scrolling is destroyed.
- [x] Scroll progress updates the DOM through one animation frame instead of rerendering React on every scroll event.
- [x] Fixed-stage media below the hero is deferred until its section approaches the viewport.
- [x] Only the logo, hero poster, and above-the-fold hero subject are marked as priority assets.
- [x] All content images use `next/image` with responsive `sizes` values and stable containers.
- [x] Hero video is a 12-second muted H.264 MP4 with a 36 KB WebP poster and metadata-only preload.
- [x] Visual videos are local optimized H.264/AAC MP4s with WebP posters and are instantiated only after hover interaction or modal selection.
- [x] Hover previews are disabled for touch, reduced motion, data saver, 2G, low-concurrency devices, and background tabs.
- [x] Audio masters are excluded from Git/public serving; only eleven metadata-stripped 25-second previews are public.
- [x] No declared package dependency is unused. `next`, `react`, `react-dom`, `gsap`, and `lenis` are required runtime dependencies.
- [x] No additional dependency was introduced during final QA.

## Accessibility

- [x] One active page `h1` is exposed at a time; the intro and main experience hide one another correctly.
- [x] Every major content scene has a logical `h2`; products use `h3` beneath the merch heading.
- [x] Meaningful product, story, album, and modal-fallback images have descriptive alternative text.
- [x] Fixed backgrounds, masks, posters inside labeled controls, and visual textures use empty alternative text.
- [x] Global focus-visible styling is high-contrast gold with an offset outline.
- [x] Closed entry content, navigation, mobile menu, EPK drawer, and audio dock are removed from keyboard interaction with `inert` where applicable.
- [x] Mobile navigation supports native keyboard activation, Escape close, initial focus, and focus return.
- [x] Video modal and EPK drawer trap focus, close on Escape/backdrop, prevent background scrolling, and restore invoking focus.
- [x] Video playback pauses and resets when the modal closes.
- [x] Audio player supports keyboard activation, five-second seeking, volume keys, mute, Escape minimize, visible ranges, close, and minimize.
- [x] Fan form has programmatic labels, native required/email validation, named consent, explicit consent language, associated instructions, and a polite status region.
- [x] Reduced motion disables Lenis, autoplaying background video, pinning, cursor effects, and nonessential transitions without hiding content.
- [x] Primary CTA colors meet contrast requirements: black text on orange/gold and white/gold text on near-black backgrounds.

## Responsive and browser QA

- [x] Chrome desktop smoke test at 1440×1000: intro and hero render without overflow or layout shift.
- [x] Chrome tablet smoke test at 1024×768: desktop navigation and hero remain readable.
- [x] Chrome iPhone-sized smoke test at 390×844: intro logo, complete project title, action, and disclosure fit without horizontal clipping.
- [x] Chrome Android-sized smoke test at 412×915: intro remains centered and readable.
- [x] Forced 2G Chrome test at 412×915: essential intro content renders while media remains deferred.
- [x] Reduced-motion code path verified: no Lenis setup, no scene pin setup, background video hidden, static poster retained.
- [x] Mobile CSS uses unpinned native scroll-snap rails, one-column merch, shorter transitions, safe-area offsets, and extra bottom clearance for fixed CTAs/audio.
- [ ] Physical iOS Safari and Android Chrome testing remains required before launch; current checks use Chrome viewport emulation.

## Media and failure behavior

- [x] Fixed-stage poster remains visible until the hero video emits `playing`.
- [x] Video `error` switches the stage to its static poster.
- [x] Reduced motion always uses the static hero poster.
- [x] Modal video uses `preload="metadata"`; filmstrip posters are lazy by default.
- [x] No audio or audible video begins before a deliberate track/card action.
- [x] Public video files range from approximately 2 MB to 7 MB and all have poster fallbacks.

## Navigation, CTAs, and links

- [x] Internal targets exist for `#top`, `#manifesto`, `#album`, `#tracks`, `#visuals`, `#merch`, `#story`, and `#join`.
- [x] Bandcamp URL returned HTTP 200 during QA.
- [x] Instagram, TikTok, and YouTube URLs returned HTTP 200 during QA.
- [x] Merch links consistently use the configured official store URL.
- [x] Merch and sticky conversion links emit the lightweight `outbound_click` analytics event while retaining normal link behavior.
- [ ] The official merch store returned HTTP 429 to an automated request. Confirm manually in a normal browser before launch; the response appears consistent with bot/rate limiting.
- [x] Booking links use the configured email address and valid `mailto:` syntax.

## Build gate

- [x] `npm run typecheck`
- [x] `npm run lint`
- [x] `npm run build`
- [x] Home route prerenders as static content.

## Unresolved launch blockers

1. Replace `album-cover-placeholder.svg` with the approved final album cover.
2. Replace illustrated merch fallbacks with approved product photography/mockups if the current SVGs are not final.
3. Supply approved producer credits for all eleven tracks; the UI currently says `Credits pending`.
4. Supply the approved album price; the UI currently says `Price at checkout`.
5. Configure and test `NEXT_PUBLIC_FAN_FORM_ACTION`. The current preview form does not persist subscribers to a CRM.
6. Supply approved EPK PDF and press-photo downloads; the drawer currently offers them only on request.
7. Confirm rights/releases for delivered video, photography, visible third parties, locations, and artwork. Music ownership was confirmed by the owner during development.
8. Add production analytics/container IDs if outbound events must be received by a third-party dashboard.
9. Perform final manual checkout, physical iOS Safari, and physical Android Chrome testing.
