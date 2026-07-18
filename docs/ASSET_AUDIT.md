# JaiMoney XL media audit

Audit date: 2026-07-18

## Summary

The delivery contains 39 MOV videos and no standalone photos, album artwork, or merch photography. Originals remain untouched in `public/media/incoming`. All delivered media is treated as rights-unverified until ownership, music clearance, featured-person likeness releases, and location/artwork permissions are confirmed.

Most footage is portrait social content. Only `MiamiNights[YT Lyric].mov` and `IMG_7928.mov` are true landscape sources; several 1920x1080 and 3840x2160 files include rotation metadata and display as portrait. This limits full-width desktop use.

## Production selections

| Website role | Source | Production output | Status |
|---|---|---|---|
| Hero loop | `4. Miami Nights/MiamiNights[YT Lyric].mov`, 20–32s excerpt | `video/hero-loop.mp4` | Selected; muted 12s H.264 loop, rights approval required |
| Hero poster | Same source at 28s | `images/hero-poster.webp` | Selected |
| Album cover | No source supplied | `images/album-cover-placeholder.svg` | Existing fallback; approval asset genuinely missing |
| Manifesto 01 | `1. P2P/.../IMG_9177.MOV` at 10s | `images/manifesto-01.webp` | Selected portrait still |
| Manifesto 02 | `10. Hustle Made Me/Hustle.MOV` at 8s | `images/manifesto-02.webp` | Selected portrait still |
| Manifesto 03 | Landscape Miami Nights at 70s | `images/manifesto-03.webp` | Selected landscape still |
| Track background 01 | `2. Scrolling/Unedited Content/IMG_9171.MOV` | `images/track-bg-01.webp` | Selected portrait still |
| Track background 02 | Landscape Miami Nights at 42s | `images/track-bg-02.webp` | Selected landscape still |
| Track background 03 | `Save Me.../Steps/IMG_7928.mov` | `images/track-bg-03.webp` | Selected landscape still |
| Track background 04 | `Media/JMXL.MOTION.MOV` | `images/track-bg-04.webp` | Selected portrait still |
| Visual 01 | `Media/JMXL.SCROLLING.MOV` | `video/visual-01.mp4` + poster | Selected, 11.7s |
| Visual 02 | `Media/JMXL.HISTLE.MOV` | `video/visual-02.mp4` + poster | Selected, 15.6s |
| Visual 03 | `Media/JMXL.MOTION.MOV` | `video/visual-03.mp4` + poster | Selected, 24.8s |
| Visual 04 | `Media/JMXL.FORGIVE.MOV` | `video/visual-04.mp4` + poster | Selected, 25.2s |
| Merch 01–03 | No merch source supplied | `images/merch-01.svg` through `merch-03.svg` | Existing illustrated fallbacks; product photography missing |
| Story portrait 01 | `1. P2P/.../IMG_9177.MOV` at 15s | `images/story-portrait-01.webp` | Selected primary |
| Story portrait 02 | `Scrolling [Couch].mov` at 18s | `images/story-portrait-02.webp` | Selected alternate |

Web videos were transcoded to H.264/AAC MP4 with fast-start metadata. The hero is silent. Posters and derived stills are WebP. No source master is served directly.

## Complete incoming inventory

Dimensions are encoded dimensions; orientation accounts for rotation metadata. “Social visual” means suitable for the visual rail/mobile, not a full-width desktop stage.

| Incoming file | Type | Dimensions/orientation | Duration | Size | Likely role / assessment |
|---|---|---:|---:|---:|---|
| `1. P2P/Unedited Content/IMG_9167.MOV` | HEVC MOV | 1920x1080, portrait | 7.5s | 6.9 MB | Abstract statue detail; manifesto texture, weak as artist image |
| `1. P2P/Unedited Content/IMG_9177.MOV` | HEVC MOV | 1920x1080, portrait | 28.8s | 43.6 MB | Strong black/white artist portrait; selected for manifesto/story |
| `1. P2P/Unedited Content/IMG_9179.MOV` | HEVC MOV | 1920x1080, portrait | 30.1s | 46.3 MB | Extreme crop cuts face; reject except texture |
| `1. P2P/Unedited Content/IMG_9181.MOV` | HEVC MOV | 1920x1080, portrait | 25.0s | 39.4 MB | Artist close-up; usable alternate, weaker framing than 9177 |
| `10. Hustle Made Me/Hustle.MOV` | H.264 MOV | 1080x1618, portrait | 17.3s | 26.2 MB | Finished performance visual; selected manifesto still |
| `2. Scrolling/Edited Content/Scrolling [Animated].mov` | HEVC MOV | 1062x1920, portrait | 24.8s | 36.5 MB | Stylized social visual; unused alternate |
| `2. Scrolling/Edited Content/Scrolling [Couch].mov` | HEVC MOV | 1080x1920, portrait | 44.1s | 59.9 MB | Artist interview/couch composition; selected story alternate |
| `2. Scrolling/Edited Content/Scrolling [Studio]{LOGOFF TEASER}.mov` | HEVC MOV | 1080x1920, portrait | 59.9s | 74.1 MB | Finished teaser with embedded text; unused, text dates quickly |
| `2. Scrolling/Edited Content/scroll7.MOV` | HEVC MOV | 1080x1920, portrait | 43.3s | 64.1 MB | Social visual; unused alternate |
| `2. Scrolling/Edited Content/scroll8.MOV` | HEVC MOV | 1080x1920, portrait | 48.2s | 69.1 MB | Social visual; unused alternate |
| `2. Scrolling/Edited Content/scrolling-9.MOV` | HEVC MOV | 1080x1920, portrait | 29.1s | 44.2 MB | Social visual; unused alternate |
| `2. Scrolling/Edited Content/scrolling.MOV` | HEVC MOV | 1080x1920, portrait | 27.2s | 36.1 MB | Social visual; probable near-duplicate of `scrolling3.MOV` |
| `2. Scrolling/Edited Content/scrolling10.MOV` | HEVC MOV | 1080x1920, portrait | 32.5s | 49.1 MB | Social visual; unused alternate |
| `2. Scrolling/Edited Content/scrolling12.MOV` | H.264 MOV | 720x1280, portrait | 39.6s | 14.4 MB | Lower-resolution social export; reject for premium display |
| `2. Scrolling/Edited Content/scrolling3.MOV` | HEVC MOV | 1080x1920, portrait | 27.2s | 36.1 MB | Probable near-duplicate of `scrolling.MOV`; reject duplicate |
| `2. Scrolling/Unedited Content/IMG_9171.MOV` | HEVC MOV | 1920x1080, portrait | 25.2s | 40.0 MB | Record-wall detail; selected track still |
| `4. Miami Nights/MiamiNights[YT Lyric]-copy.mov` | HEVC MOV | 1080x1920, portrait | 195.1s | 109.8 MB | Portrait version of same edit; unused alternate, very large |
| `4. Miami Nights/MiamiNights[YT Lyric].mov` | HEVC MOV | 1920x1080, landscape | 195.1s | 121.9 MB | Only finished widescreen edit; selected hero/stills, very large source |
| `Save Me.../Edited/I would rather (save me).mov` | HEVC MOV | 960x1920, portrait | 45.4s | 62.5 MB | Text-led social visual; unused |
| `Save Me.../Edited/SAVE ME-V1.MOV` | HEVC MOV | 1080x1920, portrait | 63.6s | 55.5 MB | Finished social visual; unused alternate |
| `Save Me.../Edited/SaveMeEdited1.MOV` | HEVC MOV | 1080x1920, portrait | 33.7s | 48.8 MB | Social visual; unused alternate |
| `Save Me.../Edited/SaveMeEdited2.MOV` | HEVC MOV | 1080x1920, portrait | 18.1s | 23.2 MB | Social visual; strong alternate |
| `Save Me.../Edited/SaveMeEdited3.MOV` | HEVC MOV | 1080x1920, portrait | 22.0s | 27.4 MB | Social visual; unused alternate |
| `Save Me.../Edited/saveMe-Cli2.MOV` | H.264 MOV | 720x1280, portrait | 37.8s | 13.9 MB | Lower-resolution social clip; reject for premium display |
| `Save Me.../Edited/saveMe-Clip1.MOV` | H.264 MOV | 720x1280, portrait | 33.0s | 12.2 MB | Lower-resolution social clip; reject for premium display |
| `Save Me.../UnEdited/Hallway/IMG_7944.mov` | HEVC MOV | 3840x2160, portrait | 114.2s | 340.6 MB | Hallway two-person take; largest file, raw and rights-sensitive |
| `Save Me.../UnEdited/Highley/FAR-V1-T3.MOV` | HEVC MOV | 1920x1080, portrait | 66.5s | 70.5 MB | Outdoor two-person take; unused, likeness release needed |
| `Save Me.../UnEdited/Highley/IMG_7917.mov` | HEVC MOV | 3840x2160, portrait | 6.2s | 21.5 MB | Outdoor detail; too brief/weak for primary use |
| `Save Me.../UnEdited/Steps/IMG_0108.MOV` | HEVC MOV | 1920x1080, portrait | 40.9s | 43.0 MB | Venue texture/take; unused |
| `Save Me.../UnEdited/Steps/IMG_0114.MOV` | HEVC MOV | 1920x1080, portrait | 30.5s | 31.7 MB | Gold-lit venue texture; unused alternate |
| `Save Me.../UnEdited/Steps/IMG_7928.mov` | HEVC MOV | 3840x2160, landscape | 7.8s | 24.2 MB | Strong widescreen steps composition; selected track still |
| `Save Me.../UnEdited/Steps/IMG_7930.mov` | HEVC MOV | 3840x2160, portrait | 22.2s | 66.4 MB | Venue portrait take; unused |
| `Media/JMXL.FORGIVE.MOV` | H.264 MOV | 1080x1920, portrait | 25.2s | 37.7 MB | Finished short visual; selected visual 04 |
| `Media/JMXL.HISTLE.MOV` | H.264 MOV | 1036x1920, portrait | 15.6s | 19.6 MB | Finished short visual; selected visual 02 |
| `Media/JMXL.MISC.DOYOU.MOV` | H.264 MOV | 1080x1620, portrait | 15.5s | 26.3 MB | Miscellaneous short visual; unused alternate |
| `Media/JMXL.MOTION.MOV` | H.264 MOV | 1062x1920, portrait | 24.8s | 43.4 MB | Finished short visual; selected visual 03 and track still |
| `Media/JMXL.SCROLLING.MOV` | H.264 MOV | 1080x1920, portrait | 11.7s | 21.1 MB | Finished short visual; selected visual 01 |
| `Media/SameShitPhotoDump.MOV` | H.264 MOV | 1080x1920, portrait | 15.9s | 28.2 MB | Social photo-dump edit; unused, title/copy approval needed |
| `Media/WTFY1.MOV` | H.264 MOV | 1080x1920, portrait | 19.4s | 29.5 MB | Social visual; unused, title/copy approval needed |

## Flags and pending approvals

- No final album cover or merch product photography was delivered. Existing branded SVGs remain visible fallbacks.
- No file includes embedded rights documentation. Confirm master/music rights, featured-person releases, and clearance for visible artwork/locations before launch.
- `scrolling.MOV` and `scrolling3.MOV` have matching duration, dimensions, and byte size and appear to be near-duplicates, although their file hashes differ.
- Raw `IMG_7944.mov` is 340.6 MB; both Miami Nights versions exceed 100 MB. None of these originals are served by the website.
- Portrait assets are intentionally limited to cards/stills. They should not replace the widescreen hero without a mobile-specific art-direction pass.
