# Kayven Website Redesign Implementation Plan

**Status:** Phase 1 completed from local repository evidence; shared design, marketing, and legal-copy remediation are implemented in part. Production access and the authenticated application are outside this repository's verified scope.

## Phase 1 — Audit

- [x] Map the framework, routes, package manager, scripts, shared components, local API, and product-host boundary.
- [x] Record verified design, privacy, legal, functionality, SEO, and testing risks.
- [ ] Confirm production routes and deployed behavior when a permitted production inspection is available.
- [ ] Obtain the approved logo, canonical brand color, and owner-verified product claims.

## Phase 2 — Design system

- [x] Replace scattered monochrome/green styling with semantic Kayven indigo tokens and accessible state colors.
- [x] Establish responsive type, focus, border, motion, and layer tokens; spacing/content-width use existing layout patterns plus shared width token.
- [x] Preserve existing shared components and introduce only a native privacy disclosure for current routes.
- [x] Confirm Inter availability/licensing and test local build behavior.

## Phase 3 — Marketing website

- [x] Update shared header, contact experience, and existing global marketing styles without removing routes or inventing features.
- [x] Fix the homepage primary CTA to use the configured signup destination.
- [x] Verify all public routes locally, fix known self-referential/incorrect CTAs, and make shared marketing styling responsive. Individual live links still need production verification.
- [ ] Ensure product previews and all numerical or comparative marketing claims are labeled/verified.

## Phase 4 — Application experience

- [x] Determine whether authenticated app code is present: it is not found in this repository.
- [ ] Treat app navigation, nutrition, workouts, AI coach, onboarding, and account management as external scope; do not fabricate interfaces or APIs here.

## Phase 5 — Interactions and libraries

- [ ] Keep existing Motion-based interactions if their reduced-motion and keyboard behavior remain correct.
- [ ] Do not add Magnetic UI, Voice Glow, NumberFlow, Physical Knob, or bot-avatar dependencies without an applicable local feature, verified official documentation, license, compatibility, and accessibility testing.
- [x] Replace non-functional consent controls with an informational privacy disclosure.

## Phase 6 — Legal and privacy remediation

- [x] Remove physical-goods refund copy and unsupported refund/cancellation promises; retain business/counsel review as a launch blocker.
- [ ] Reconcile the privacy notice, terms, health disclaimers, and pricing claims against deployed data flows and contracts.
- [ ] Keep unverified or legally material details clearly marked for owner/counsel review; do not claim compliance.

## Phase 7 — Quality assurance

- [x] Run a production build with TypeScript validation (rerun after final refinements before handoff).
- [x] Validate local routes, key CTA destinations, pricing toggles, invalid contact validation, responsive widths, reduced motion, and keyboard operation.
- [ ] Run available automated accessibility checks if installed; supplement with manual keyboard review.
- [x] Record environment limitations and do not represent unrun tests as passing.

## Phase 8 — Final report

- [ ] Report changed files, implementation outcomes, exact test commands/results, remaining owner decisions, and counsel items.

## Sequence and acceptance

1. Create the audit, implementation plan, readiness checklist, privacy/legal audit, license inventory, and counsel review list.
2. Implement reversible shared styling and navigation improvements before page-by-page changes.
3. Fix technical inconsistencies where evidence is sufficient; keep unresolved policy decisions explicit.
4. Run focused type/build and functional checks after each coherent change set.
5. Do not deploy, alter production data, add tracking, add library dependencies, or represent external app features as local functionality.

## Verification results

- `npm run build`: passed; compilation, TypeScript, static generation, and route optimization completed.
- `git diff --check`: passed.
- Local HTTP check: all 17 public marketing routes returned HTTP 200.
- Browser checks: no horizontal overflow at 320, 375, 768, 1024, or 1440 CSS px on the homepage; mobile menu opens and closes on Escape; skip link focuses `#main-content`; privacy disclosure opens; pricing period/region controls update; invalid contact submission focuses its error summary; reduced-motion mode holds the header at 80px and disables scroll progress.
- Not run: email delivery with a configured Resend sandbox, successful contact submission, live-host verification, automated axe/Lighthouse scans, screen-reader testing, or authenticated app/payment journeys.
