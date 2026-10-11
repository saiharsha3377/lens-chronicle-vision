<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Shared public-site chrome lives in `src/components/site-layout.tsx` so every content route keeps one navigation and footer.
- Use shared section spacing tokens, shrinkable text grid tracks, and explicit mobile header/action layouts to keep public pages section-aligned without clipping content.
- Portfolio metadata and optimized image references live in `src/lib/portfolio.ts` to keep category filtering and page imagery consistent.
- Gallery cards use lightweight preview images while the larger derivative loads only when a visitor opens an image, keeping scroll work predictable.
- The work archive uses asymmetric CSS grid photographic spreads with natural image proportions and a separate category/count toolbar; mobile narrows the offsets rather than cropping photographs.
- Contact is a direct-details route; booking and the Formspree inquiry form live at /book so navigation keeps the two visitor intents separate, with no local persistence.
- Mount the initial focus loader once in the root, use time-based monotonic presentation progress gated by eager-image/font readiness, hold 100 before fading, and cap waiting to prevent indefinite blocking.
- Reference-site image pointers and editorial content live in `src/lib/reference-design.ts`; shared service collections live in `src/components/editorial-sections.tsx`, while project booking belongs in the shared footer to avoid repeated invitation sections.
- Assign each photograph to one content placement across public pages, treating different derivatives of the same original as one photograph, to prevent visual repetition.
- Horizontal photo sequences use native vertical scrolling with sticky sections and requestAnimationFrame rail updates, never intercepted wheel/touch events; reduced motion keeps native rails to preserve accessibility and predictable performance.
- Shared layout reveals use a single IntersectionObserver with one-time opacity/transform transitions to avoid continuous animation work.
- Register dynamically filtered gallery items with the shared reveal observer; use distinct directional variants rather than continuous per-photo scroll handlers.
- Render service commissions as alternating unframed photo/text rows and keep their aperture graphic transform-only and paused offscreen to preserve scroll performance.
- Fit portrait images with contain inside stable frames across galleries and editorial sections, preserving complete compositions rather than using arbitrary cover crops.
- Services uses an aperture graphic, About uses a contact-sheet graphic, and the homepage studio uses a focus-plane graphic; pause them offscreen and disable motion for reduced-motion preferences to keep each presentation distinct.
- Homepage selected photographs use a dedicated full-composition editorial sequence with one photograph and its collection per plate, making each selection legible without cropping portraits.
- Drive the selected-edit track and restrained image/caption parallax from cached stage dimensions in one requestAnimationFrame callback; retain native vertical gestures and render normal stacked plates for reduced motion to keep scrolling predictable.
- Homepage page-entry chapters use unique landscape derivatives, full-screen sticky stages and semantic route links with arc-arrow indicators; cache geometry for native scroll motion and remove sticky dwell for reduced motion to preserve accessibility.
