# Kayven Launch Readiness Checklist

This checklist records evidence available in this repository, not a certification. Items marked **Needs verification** require access or confirmation beyond this repository.

## Product and routes

- [x] Marketing routes inventoried from the App Router.
- [x] External app boundary documented (`www.kayven.in`).
- [ ] **Needs verification:** Live route availability and the production version of each page. All 17 public routes returned HTTP 200 in the local production build.
- [ ] **Needs verification:** Product-feature, metric, pricing, and discount accuracy with the product and commercial owners.
- [ ] **Needs verification:** Signup, demo, and subscription journey behavior in a safe production-equivalent environment.
- [x] Replace the homepage hero CTA that previously linked to the homepage instead of signup.
- [ ] Verify and provide referenced social-card images.

## Brand and UX

- [ ] Confirm production logo asset and exact brand color with the brand owner.
- [ ] Apply one semantic color and typography system across marketing routes. Shared token layer is implemented; remaining component-level exceptions still need review.
- [x] Test homepage responsive behavior at 320px, 375px, 768px, 1024px, and 1440px.
- [x] Verify no horizontal overflow on the homepage at those widths; target/form usability on all routes still needs review.
- [x] Test skip-link focus, mobile menu operation and Escape close, and reduced-motion header behavior.
- [x] Calculate contrast for primary-on-white, midnight-on-porcelain, and muted-slate-on-porcelain; verify remaining component state pairs.
- [ ] Verify all meaningful images have alternatives and decorative graphics are ignored by assistive technology.

## Functionality and engineering

- [x] Contact form server-side request validation and failure messaging are present in source.
- [ ] Confirm abuse/rate-limiting controls for `/api/contact`; none were found in the application handler, and deployment-edge protections are unverified.
- [ ] **Needs verification:** Contact delivery using a safe configured Resend environment.
- [x] Test contact form invalid state and focused error summary. Successful email delivery and provider failure still need a safe configured test environment.
- [x] Final production build and its integrated TypeScript validation passed.
- [x] Verify local public route responses and the primary pricing/signup CTA destinations. Confirm all external links in production.
- [ ] Review dependencies and transitive licenses before production approval.
- [ ] Confirm secrets remain server-side and do not appear in built assets/logs.
- [ ] **Needs verification:** Production authentication, authorization, database access controls, payment flow, deletion flow, monitoring, and incident response; those systems are not present in this repo.

## Privacy, legal, and commercial

- [ ] Reconcile privacy claims with deployed collection, processors, AI services, retention, deletion, analytics, and cross-border flows.
- [ ] Review refund, cancellation, renewal, billing, discounts, trial disclosures, and dispute process against actual contract and applicable law.
- [ ] Confirm entity/business disclosures, support contact, and governing terms with counsel.
- [ ] Verify age/minor handling and health-data safeguards.
- [x] Remove misleading physical-product return language and unsupported refund promises; the revised support wording still needs legal review.
- [ ] Obtain qualified legal review; no legal compliance conclusion is made here.

## SEO, accessibility, and performance

- [ ] Ensure canonical URLs, metadata, sitemap, robots, and social images match deployed pages.
- [ ] Run Lighthouse or an equivalent performance check on representative live pages.
- [ ] Run automated accessibility checks and manual screen-reader checks. Keyboard spot checks passed; no automated accessibility tool was installed or run.
- [ ] Review heading structure, alt text, form errors, focus order, reduced motion, and dynamic content.
- [ ] Verify no unnecessary third-party tracking or unapproved data transmission.

## Release

- [ ] Resolve all critical/high-risk items and document accepted residual risks.
- [ ] Test a production-like build and key journeys on desktop and mobile.
- [ ] Confirm deployment rollback and support ownership.
- [ ] Obtain explicit deployment approval before publishing changes.
