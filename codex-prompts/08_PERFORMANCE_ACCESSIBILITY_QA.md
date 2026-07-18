# Prompt 8 — Performance, accessibility and launch QA

Perform a final production audit and fix all issues.

Performance:
- eliminate unnecessary client components
- defer below-the-fold media
- preload only the hero poster/logo and essential above-the-fold assets
- use responsive image sizes
- keep videos compressed with poster fallbacks
- identify and remove unused dependencies
- prevent GSAP duplicate instances and memory leaks

Accessibility:
- logical heading order
- descriptive alt text where images convey meaning
- empty alt text for decorative imagery
- keyboard operation for menus, audio, modal and EPK drawer
- focus trap and return focus for overlays
- visible focus states
- sufficient contrast
- reduced-motion experience
- form labels, errors and consent copy

QA:
- test desktop, tablet, iPhone-sized and Android-sized viewports
- test slow network and video failure
- test every CTA and external link
- test production build
- create `docs/LAUNCH_QA.md` with checked items and unresolved blockers
- do not declare completion while build, lint or type errors remain
