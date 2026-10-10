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
- Visitor inquiries submit directly to one Formspree endpoint configured in the Contact route; no local persistence is used.
- Reference-site image pointers and editorial content live in `src/lib/reference-design.ts`; shared service collections live in `src/components/editorial-sections.tsx`, while project booking belongs in the shared footer to avoid repeated invitation sections.
- Assign each photograph to one content placement across public pages, treating different derivatives of the same original as one photograph, to prevent visual repetition.
- Horizontal photo sequences use native vertical scrolling with sticky sections and requestAnimationFrame rail updates, never intercepted wheel/touch events; reduced motion keeps native rails to preserve accessibility and predictable performance.
- Shared layout reveals use a single IntersectionObserver with one-time opacity/transform transitions to avoid continuous animation work.
- Register dynamically filtered gallery items with the shared reveal observer; use distinct directional variants rather than continuous per-photo scroll handlers.
- Render service commissions as alternating unframed photo/text rows and keep their aperture graphic transform-only and paused offscreen to preserve scroll performance.
- Fit portrait images with contain inside stable frames across galleries and editorial sections, preserving complete compositions rather than using arbitrary cover crops.
- Services uses an aperture graphic, About uses a contact-sheet graphic, and the homepage studio uses a focus-plane graphic; pause them offscreen and disable motion for reduced-motion preferences to keep each presentation distinct.
- Homepage selected photographs use a compact portrait-proportioned filmstrip driven by the existing native horizontal sequence, keeping complete compositions visible without oversized empty frames.
- Drive filmstrip photograph drift and opacity from cached card centers and rail width in the existing scroll requestAnimationFrame callback; skip unchanged offsets, match sequence height to the sticky section, and retain native vertical touch gestures to avoid mobile scroll work and address-bar jumps.
