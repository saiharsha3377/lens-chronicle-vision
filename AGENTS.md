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
- Portfolio metadata and optimized image references live in `src/lib/portfolio.ts` to keep category filtering and page imagery consistent.
- Gallery cards use lightweight preview images while the larger derivative loads only when a visitor opens an image, keeping scroll work predictable.
- Visitor inquiries submit directly to one Formspree endpoint configured in the Contact route; no local persistence is used.
- Reference-site image pointers and editorial content live in `src/lib/reference-design.ts`; shared service collections and project invitations live in `src/components/editorial-sections.tsx` to keep the approved design consistent across pages.
- Horizontal photo sequences use native vertical scrolling with sticky sections and requestAnimationFrame rail updates, never intercepted wheel/touch events; reduced motion keeps native rails to preserve accessibility and predictable performance.
- Shared layout reveals use a single IntersectionObserver with one-time opacity/transform transitions to avoid continuous animation work.
