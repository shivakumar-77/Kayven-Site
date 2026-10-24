# Kayven website

Kayven's marketing website, built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript. The authenticated product and subscription service link to `https://www.kayven.in` and are not implemented in this repository.

## Development

```bash
npm ci
npm run dev
```

Available scripts are `dev`, `build`, and `start`. There is no separate lint or test script in `package.json`; `npm run build` includes TypeScript validation.

## Contact form

Contact enquiries are sent to `shiva@kayven.in` through the Resend email API. Set
`RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in the deployment environment; the
sender address must be verified in Resend. The form reports an error and offers
a direct email link if delivery is unavailable or these settings are missing.

## Interactive AI preview

The AI page includes a microphone-only interface preview. Audio is analyzed locally
to animate the voice indicator; it is not recorded, transcribed, stored, or sent,
and the site does not generate an AI response. See
[`docs/INTERACTIVE_UI_INTEGRATIONS.md`](./docs/INTERACTIVE_UI_INTEGRATIONS.md)
for the integration details and the Physical Knob and native Magnetic UI findings.

## Audit documents

See [`docs/REDESIGN_AUDIT.md`](./docs/REDESIGN_AUDIT.md), [`docs/REDESIGN_IMPLEMENTATION_PLAN.md`](./docs/REDESIGN_IMPLEMENTATION_PLAN.md), and [`docs/LAUNCH_READINESS_CHECKLIST.md`](./docs/LAUNCH_READINESS_CHECKLIST.md) for repository findings and outstanding release checks. Privacy and legal review notes are recorded separately under `docs/`.
# Kayven-Site
