# Third-Party Dependency and Asset Inventory

**Scope:** Repository manifests and assets inspected for the redesign audit. This is an initial inventory, not a full transitive SBOM or legal opinion.

## Runtime dependencies declared in `package.json`

| Package | Declared range | Resolved version | Observed use | Package license |
|---|---|---|---|---|
| `next` | `^16.0.0` | 16.3.8 | App Router, metadata, route handler | MIT |
| `react` | `^19.0.0` | 19.3.0 | UI runtime | MIT |
| `react-dom` | `^19.0.0` | 19.3.0 | Rendering | MIT |
| `framer-motion` | `^14.0.0` | 14.0.0 | Animation imports in existing components | MIT |
| `motion` | `^14.0.0` | 14.0.0 | Animation imports in existing components | MIT |
| `bot-avatars` | `^0.2.2` | 0.2.2 | Accessible Kayven coach avatar in the AI voice preview | MIT |
| `voice-glow` | `^0.3.0` | 0.3.0 | Local microphone-reactive voice preview | MIT |

## Development dependencies declared

| Package | Declared range | Resolved version | Package license |
|---|---:|---:|---|
| `@tailwindcss/postcss` | `^4.0.0` | 4.3.3 | MIT |
| `tailwindcss` | `^4.0.0` | 4.3.3 | MIT |
| `typescript` | `^5.0.0` | 5.9.3 | Apache-2.0 |
| `@types/node` | `^22.0.0` | 22.20.5 | MIT |
| `@types/react` | `^19.0.0` | 19.3.0 | MIT |
| `@types/react-dom` | `^19.0.0` | 19.3.0 | MIT |
| `playwright` | `^1.63.0` | 1.63.0 | Apache-2.0 |

Package license identifiers were read from installed package metadata. `package-lock.json` exists. Transitive dependency licenses were not fully enumerated in this pass. A lockfile-aware license report should be generated and reviewed before launch.

## Fonts and assets

- `app/layout.tsx` loads Playfair Display and Inter using `next/font/google`; Source Serif 4 and JetBrains Mono were removed from the active font configuration. Next self-hosts the selected font files at build time.
- Inter and Playfair Display are listed as SIL Open Font License (OFL), active, in the local Google Fonts license catalog verified 13 August 2026. Retain the relevant OFL notices with redistributed font files.
- `public/icon.svg` is a generic K monogram and not a verified full Kayven logo.
- No other first-party image, video, or logo assets were found under `public/` in the initial inventory.

## UI library references

- `voice-glow@0.3.0` and `bot-avatars@0.2.2` are installed under MIT licenses. Their package license files are included in `node_modules`; the integration and its local-only audio behavior are described in [Interactive UI integrations](./INTERACTIVE_UI_INTEGRATIONS.md).
- The Ovio Physical Knob source repository declares MIT, but the component was not installed because its shadcn registry could not be added from this repository without a new shadcn configuration and the registry endpoint returned 404. See [Interactive UI integrations](./INTERACTIVE_UI_INTEGRATIONS.md).
- Magnetic UI is a Swift Package Manager library for native SwiftUI applications. It was not installed in this Next.js project; see [Interactive UI integrations](./INTERACTIVE_UI_INTEGRATIONS.md).
- NumberFlow is not installed directly by this project; it is only a transitive dependency of the reviewed Physical Knob registry entry.

## Follow-up

- Capture and review exact license texts from the lockfile/package metadata.
- Include transitive dependencies and production-only packages.
- Record any newly approved font, icon, image, or UI component assets with source URL, version, license, required attribution, and permitted commercial use.
