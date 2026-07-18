# Prompt 3 — Continuous scroll story and section transitions

Refine the manifesto, album and section-to-section transitions so the page feels like one continuous motion.

Requirements:
- use GSAP ScrollTrigger timelines scoped to each component
- animate manifesto lines from distinct directions and reveal editorial photos through text masks
- let the final manifesto image visually become or crossfade into the album section
- pin the album art during the main album story, with subtle 3D tilt and gold edge treatment
- animate copy and metadata in a staggered, controlled way
- crossfade the fixed background media based on scene progress, not abrupt full swaps
- add restrained gold/orange accents tied to scroll progress
- ensure all ScrollTriggers clean up correctly on route refresh and hot reload
- maintain a reduced-motion version with no pinning that blocks content
- mobile should use shorter, simpler transitions rather than copying desktop exactly

Do not change approved copy or commerce links. Run typecheck, lint and build.
