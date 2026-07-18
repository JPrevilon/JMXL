# Prompt 1 — Asset audit and production integration

Audit the project and integrate the approved JaiMoney XL media that has already been downloaded into `public/media/incoming`.

Tasks:
1. Inventory every file in `public/media/incoming` with filename, type, dimensions, duration where relevant and likely website role.
2. Flag duplicates, weak assets, portrait/landscape orientation problems, very large files and files with unclear rights.
3. Select one hero loop, one hero poster, final album cover, 3 manifesto images, up to 4 track backgrounds, 4–6 visual clips/posters, 3 merch images and 2 story portraits.
4. Rename selected files using the production naming guide in `public/media/README.md`.
5. Optimize images to WebP/AVIF as appropriate and create poster frames for videos. Keep originals in `public/media/incoming` until approval.
6. Update `src/data/siteContent.ts`, `src/data/videos.ts` and `src/data/products.ts` to point to the selected assets.
7. Add a short report to `docs/ASSET_AUDIT.md` showing selections and rejected/unused files.
8. Do not alter the main layout yet.
9. Run typecheck, lint and build.

Ask me only for genuinely missing approval decisions; otherwise proceed with sensible placeholders and clearly mark them.
