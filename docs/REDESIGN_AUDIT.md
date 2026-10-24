# Kayven Website Redesign Audit

**Audit date:** 24 October 2026  
**Scope:** Repository at `/Users/shivakumar/Downloads/kayven`. The supplied production hostname could not be inspected: the available web fetcher rejected its DNS resolution as a blocked address. No production account, service, database, analytics dashboard, or deployment configuration was accessed.

## Architecture observed

- A single Next.js App Router project (`next` 16.3.8, React 19) with Tailwind CSS 4, TypeScript, and `motion`/`framer-motion`.
- Marketing pages and a contact API route are in `app/`; shared content, navigation, forms, and animation components are under `app/components/`.
- `lib/site.ts` points the marketing site to `https://site.kayven.in` and links/redirects product actions to `https://www.kayven.in`. `/get-started` redirects externally. This repository therefore does not contain the authenticated app.
- The only local API route found is `/api/contact`. It validates submissions and sends them via Resend when `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` are configured. No local authentication, health-data persistence, payment integration, AI provider, database client, or analytics SDK was found.
- `package-lock.json` is present. Available scripts are `dev`, `build`, and `start`; no lint, test, or type-check script is declared. Root `tsconfig.json` enables strict checking.
- The only public asset found is `public/icon.svg`, a black square with a white “K”. No full Kayven wordmark, product photography, or Open Graph image is present in `public/`.

## Routes found

`/`, `/about`, `/ai`, `/careers`, `/contact`, `/demo`, `/faq`, `/fitness`, `/insights`, `/nutrition`, `/pricing`, `/privacy`, `/product`, `/refund`, `/subscription`, `/team`, `/terms`, plus `/robots.txt`, `/sitemap.xml`, and `/api/contact`.

The marketing navigation links to `/product`, `/ai`, `/nutrition`, `/fitness`, `/pricing`, and `/demo`. Footer destinations are generated from labels and include the company pages and legal pages. Product and signup links point to an external host in some locations, but the homepage hero's primary CTA points to `/` rather than the configured signup URL.

## Findings and priorities

### High priority

1. **Legal language is materially inconsistent with a digital subscription service.** `/refund` describes physical returns, unused goods, original packaging, and returned items; `/pricing` contains an explicit policy placeholder. This should not be published as a definitive refund rule without verified contractual terms and counsel review.
2. **Privacy and terms make factual/legal claims that were not verifiable from this repository.** The privacy page names data categories, purposes, sharing, and a Chennai headquarters; the terms name Razorpay, automatic renewal, and broad liability language. Backend, payment, company-entity, processor-contract, retention, and jurisdiction evidence was unavailable.
3. **The website's advertised health, AI, food scanning, exercise-count, and pricing claims are not confirmed by the marketing code.** The product app is external. Values and feature descriptions should be validated by the product owner before they are represented as live or current capabilities.
4. **Subscription management is not implemented in this repo.** `/subscription` says details will appear later and directs customers to email. It must not be presented as a working account-management interface.
5. **Production behavior and all live routes remain unverified.** The production host could not be fetched from this environment. Local route rendering/build checks are still needed.

### Medium priority

1. **Current visual system does not match the requested brand direction.** Global CSS and many components use stark black/white borders, serif body text, and monospace labels. The supplied target indigo is not applied consistently; the contact page independently uses green styling.
2. **No verified full logo asset is present.** The header renders the product name as text, while the favicon is a generic “K”; the production logo and exact brand color therefore could not be confirmed.
3. **Font choice should be revisited.** Playfair Display, Source Serif 4, and JetBrains Mono are loaded through `next/font/google`; they are self-hosted by Next at build time, but do not match the requested Inter-first interface direction. Avoid adding fonts until a reviewed choice and license are recorded.
4. **The former cookie-consent controls did not control an optional cookie/analytics integration.** They saved a `cookieConsent` local-storage value and dismissed a banner claiming non-essential cookies were used. No analytics or tracking integration was found in the repository.
5. **Metadata advertises Open Graph and Twitter images that were not found in `public/`.** Confirm or provide these assets before release.
6. **Sitemap freshness and priorities are generated at request/build time and assign broad high priority to many pages.** Review route accuracy and search metadata before launch.
7. **The declared dependencies include both `motion` and `framer-motion`.** Both import styles appear in the source. Retain only if each dependency is genuinely used; no new UI library is warranted by this audit.
8. **The local contact API has no application-level rate limit in the reviewed handler.** Request validation and a honeypot are present, but deployment/WAF protections were not available to inspect; confirm abuse controls before release.

### Lower priority

- Several pages import symbols that appear unused, and some source files contain stale implementation notes. Clean these only when directly touching the relevant files.
- No automated accessibility, responsive visual, or end-to-end journey results are included in the repository evidence reviewed so far.

## Existing working behavior observed

- Shared App Router layout renders the common header, footer, and consent component.
- Contact form has client-side validation, an error summary, and a `/api/contact` handler with request size, origin, content-type, field, and honeypot checks.
- Contact email delivery fails explicitly when the required environment configuration is absent and returns a user-facing error.
- Pricing values are centralized in `lib/pricing.ts`, with region and billing controls in `app/Pricing.tsx`.
- Reduced-motion CSS is present, and the mobile navigation has an Escape-key close handler.

## Evidence limitations

- `.env.local` exists locally but was not opened or copied into this report. Secret values were not inspected.
- No app source, production dashboard, payment account, database, contract, processor agreement, or analytics account was available here.
- Production URL checks failed due to the environment's URL safety restriction; this is not evidence that the production site is down.
- This is a technical repository audit, not legal advice, a security certification, accessibility certification, or production readiness approval.

## Changes made after the baseline audit

- Added an electric-indigo semantic token layer while preserving the specified primary `#4543DD`; the contrast of white on primary is 6.77:1, midnight on porcelain 17.27:1, and muted slate on porcelain 5.22:1.
- Switched interface font to Inter (OFL) while retaining Playfair Display for editorial headings; removed Source Serif 4 and JetBrains Mono from the active font setup.
- Fixed the homepage primary CTA and shared header CTA to use the configured external signup URL.
- Fixed the pricing-card CTAs that formerly linked back to `/`, routed pricing actions in both pricing surfaces to the configured signup destination, and changed the vision section's self-referential link to `/about`.
- Added a skip-to-content link and a native, keyboard-operable privacy information disclosure instead of presenting non-functional accept/reject controls.
- Replaced physical-goods return copy with a limited subscription billing support explanation that does not promise a universal refund outcome or timeline. Legal review remains required.
- Updated pricing FAQ language to avoid unsupported cancellation guarantees.
- Applied indigo styling to the contact experience and added a reduced-motion mode for the header's scroll-linked animation.
- Corrected narrow-screen overflow caused by a 300px illustrative SVG, removed a fixed 300px pricing-card minimum, fixed the progress bar's 100× scale range, and preserved responsive CTA visibility alongside the shared button styles.
- Final `npm run build` passed with the integrated TypeScript check. The local production build returned HTTP 200 for all listed marketing routes; browser checks covered 320px, 375px, 768px, 1024px, and 1440px widths, navigation Escape behavior, skip-link focus, pricing toggles/CTA destination, invalid contact-form summary focus, privacy disclosure, and reduced-motion header behavior.
- Automated axe/Lighthouse checks and live-host verification were not available; those remain release checks.
