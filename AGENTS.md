# AGENTS.md

## Architecture rules

- All editable site content (stats, services, testimonials, contacts, socials, CNPJ, feature flags `showLogos`/`showCases`/`showTeam`) is centralized in `src/data/siteData.ts`. Components must import from there — never hardcode numbers or contact info, so each value stays consistent across sections.
- Form submissions (contact + newsletter) insert directly into Lovable Cloud tables `leads` and `newsletter_subscribers` from the browser with the anon key; RLS allows anon INSERT only. Honeypot field + zod validation on the client.
- Analytics (GA4 `G-NS21VWCHNF`, optional Meta Pixel) load only after cookie consent via `src/lib/tracking.ts` — do not add static tracker scripts to `index.html`; use `trackEvent()` for events.
- Sections hidden behind flags in siteData.ts (logos, cases, team) must stay built but render nothing until real content exists — never ship placeholder/fake content.
