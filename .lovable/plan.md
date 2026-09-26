# Lens Chronicle portfolio expansion

## Goal
Turn the current single-page portfolio into a polished multi-page photography site with a fast filterable work archive, dedicated Services, About, and Contact pages, and a larger, clearer LC monogram throughout.

## Pages and navigation
- Add a shared navigation and footer across Home, Work, Services, About, and Contact while preserving the current black-and-ivory editorial direction.
- Keep Home as a concise visual introduction with selected work and clear paths into the dedicated pages.
- Make **Work** a separate page with an **All / Fashion / Editorial / Commercial** filter. Filtering will update the visible projects without reloading the page and retain the existing full-image viewing experience.
- Create a Services page covering Fashion Campaigns, Editorial, and Commercial photography, with concise deliverables, process, and inquiry prompts.
- Create a fuller About page with the studio’s visual philosophy, approach, and selected imagery.
- Create a Contact page containing the project inquiry form and direct contact details.

## Inquiry form
- Include name, email, phone or brand, project type, preferred timeline, budget range, and project details.
- Add clear validation, accessible errors, submitting/success/failure states, and spam-resistant Formspree-compatible fields.
- Keep the Formspree endpoint in one clearly named configuration value. Until the endpoint is added, the form will remain visibly ready but will not pretend a submission succeeded.

## Photography and performance
- Curate additional, non-repeating photographs from the connected Drive folders and assign them intentionally by page and category.
- Create web-sized derivatives rather than serving the current 12–37 MB originals directly; retain full originals outside the initial page load.
- Use responsive image dimensions, lazy loading below the fold, eager loading only for the first meaningful image, decoding hints, stable aspect ratios, and lightweight transitions.
- Remove avoidable scroll work and expensive full-screen image effects that contribute to hanging on lower-powered devices.
- Preserve reduced-motion behavior and verify smooth scrolling and filtering on desktop and mobile.

## Visual refinements
- Increase the LC monogram in the shared navigation and tune spacing so it reads as a primary brand signal without crowding smaller screens.
- Retain the distinctive typography, black background, ivory lettering, asymmetrical editorial compositions, and restrained motion.
- Avoid repeating a photograph within the same page section and keep each page visually distinct.

## Technical details
- Add route files for `/work`, `/services`, `/about`, and `/contact`, each with unique page title, description, Open Graph title/description, `og:type`, and Twitter card metadata.
- Extract shared site navigation, footer, portfolio data, image treatment, and reusable project cards so all pages remain visually consistent.
- Keep filtering in the browser for immediate response and use semantic controls with visible active/focus states.
- Submit directly to the configured Formspree endpoint; no database or login system is needed.

## Verification
- Confirm every navigation link and page works.
- Test all four gallery filters and image viewing.
- Test required fields, invalid email, submission states, and the unconfigured Formspree state.
- Check current build diagnostics and verify desktop and mobile layouts with real browser interaction.
- Confirm initial image transfer is substantially reduced and no console/runtime errors remain.
