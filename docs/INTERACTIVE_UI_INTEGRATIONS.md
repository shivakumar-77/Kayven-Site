# Interactive UI integrations

## Voice and avatar preview

The AI page includes a microphone-only preview using `voice-glow@0.3.0` and
`bot-avatars@0.2.2`, both MIT-licensed. The microphone is requested only after
the visitor selects **Listen**. The audio stream is analyzed in the browser to
drive the voice beam; no audio is transmitted, recorded, transcribed, or stored,
and no AI model or response is connected. The avatar's working pose is used only
while the browser is requesting microphone permission. Both libraries respect
reduced-motion preferences.

The preview uses Kayven's requested green palette. Microphone denial, missing
devices, unavailable audio APIs, and other startup errors are surfaced with
recovery guidance. The Voice Glow hook stops its media tracks when the component
unmounts.

## Physical Knob registry review

The requested command,
`npx shadcn add JanaSundar/ovio/physical-knob-minimal`, did not install the
component. This repository has no `components.json`; the shadcn CLI asked to
create one before proceeding. The public registry item URL,
`https://ovioui.vercel.app/r/physical-knob-minimal.json`, currently returns
HTTP 404.

The source was reviewed in the `JanaSundar/ovio` repository. Its repository
declares an MIT license, and the component uses React client components and
`motion/react`, which are compatible with this site's React 19 and Next.js 16
stack. However, the minimal variant also requires Ovio-specific theme/world
providers, motion helpers, formatting and rolling-number components, and a
shadcn `utils` alias; the rolling-number helper adds `@number-flow/react`.
Those helpers are not part of Kayven, and the registry could not provide them
through the requested command. No shadcn configuration, knob sources, or
additional dependencies were added. No substitute knob was introduced.

Revisit the integration after the registry is published at a valid endpoint and
the project explicitly adopts the required shadcn/Ovio helpers. A knob should
only be added when it controls a clearly labeled visual demonstration setting,
not a health measurement or outcome.

## Magnetic UI

The supplied Magnetic UI library is a Swift Package Manager package for native
SwiftUI applications, not a Next.js web dependency. Do not install it in this
website. It may be evaluated for a future Kayven native iOS application; no
magnetic interaction is simulated on the web.
