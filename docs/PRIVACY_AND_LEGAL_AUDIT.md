# Privacy and Legal Technical Audit

**Audit date:** 24 October 2026  
**Scope:** Static review of the local Kayven marketing repository only. This document is not legal advice, a legal opinion, or a compliance certification.

## Verified repository facts

- The local website has a contact form that submits name, email, optional company, selected topic(s), and message to `/api/contact`.
- The route validates fields and sends contact content to Resend when `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` are configured. It logs delivery configuration and provider/network failure messages without logging submitted message bodies in the reviewed code.
- The contact handler has request size/origin/field/honeypot checks, but no application-level rate limiting was found; deployment-edge protections were not available for inspection.
- The marketing repository contains no discovered analytics SDK, database client, authentication provider, payment SDK, or AI-provider SDK.
- Before the redesign, the consent component stored a `cookieConsent` preference in browser local storage without connecting that choice to an analytics or optional-cookie integration. It has been replaced with a privacy-information disclosure that does not claim to manage consent.
- Pricing and billing statements appear in marketing source; the actual billing system is external or unavailable for review.
- `www.kayven.in` is the configured external app/subscription destination.

## Claims in current policy pages requiring reconciliation

- The privacy page says Kayven is headquartered in Chennai; this was not independently confirmed.
- It describes health/fitness and usage data, personalization, progress insights, communications, service-provider sharing, partner sharing, and user deletion/access choices. The deployment and service-provider evidence needed to validate these statements is unavailable.
- The terms identify Razorpay and automatic subscription renewal. Neither actual payment processing nor cancellation behavior can be inspected in this repository.
- The baseline refund page described physical goods, returned items, original packaging, and a five-to-seven-business-day refund timeline. That copy has been replaced with a limited subscription-support explanation; no universal eligibility or processing promise is made. Owner and counsel review is still needed.
- A pricing FAQ contained a placeholder note and unsupported cancellation assurance. These have been replaced by neutral directions to review purchase terms and contact support.
- The former cookie banner said non-essential cookies were used, but no such integration was found in the code reviewed. It has been replaced with a disclosure link, not a consent control.

## Unknowns—not assumed

- The app's exact data categories, purposes, lawful bases, data subjects, retention periods, deletion/export mechanisms, access controls, encryption, processors, AI-provider handling, and incident response.
- Whether analytics, advertising pixels, cookies, or other tracking are injected at deployment or by a hosting platform.
- Company legal entity, operating jurisdictions, customer locations, payment processor, merchant terms, refund/cancellation commitments, and contractual support.
- Applicable rules for health information, children/minors, consumer subscriptions, cross-border transfers, and breach notice.

## Technical recommendations

1. Map the external application's actual data flows and processor contracts before making privacy promises.
2. Have the revised billing-support wording checked against approved digital-service terms and applicable law before publication.
3. Make cookie/storage notices reflect the actual deployed behavior; do not present non-functional consent buttons as controlling tracking.
4. Validate pricing, renewals, trials, discounts, cancellation paths, and payment receipts against the live billing system.
5. Ensure privacy requests, deletion, and account support routes reach a monitored and operational process.
6. Avoid sending health data to analytics or AI providers unless the purpose, consent/legal basis, security, and contract are reviewed.

## Review boundary

Production services and the authenticated application were not available. Legal pages are not certified, and no claim of compliance, legal sufficiency, or immunity from liability is made. See [LEGAL_REVIEW_REQUIRED.md](./LEGAL_REVIEW_REQUIRED.md) for counsel questions.
