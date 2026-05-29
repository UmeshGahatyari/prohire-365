# Design Brief

## Direction

ProHire 365 — Premium SaaS job portal with deep indigo-violet aesthetic, glassmorphism accents, vivid cyan-teal highlights, layered depth shadows, and polished micro-animations. Dark mode–first design celebrating premium, sophisticated visual richness.

## Tone

Sophisticated, elevated, confident — a premium job platform that celebrates visual craftsmanship with smooth micro-interactions and refined surfaces.

## Differentiation

Deep indigo-violet primary (0.5 0.16 280) + vibrant cyan-teal accent (0.72 0.22 190) creates distinctive visual identity; glassmorphic card surfaces with backdrop blur, layered shadow hierarchy, and smooth gradient text accents elevate premium perception and break from generic job portal conventions.

## Color Palette

| Token      | OKLCH           | Role                          |
| ---------- | --------------- | ----------------------------- |
| background | 0.08 0.01 250   | Deep indigo-violet base       |
| foreground | 0.95 0.01 250   | Crisp white text              |
| card       | 0.15 0.008 250  | Glass surface, slightly raised |
| primary    | 0.5 0.16 280    | Buttons, links, focus states  |
| accent     | 0.72 0.22 190   | High-priority CTAs, highlights|
| muted      | 0.25 0.012 250  | Inactive, secondary UI        |
| border     | 0.28 0.015 250  | Subtle dividers, glass edges  |

## Typography

- Display: Space Grotesk — geometric, modern, confident headlines and hero text with gradient accents
- Body: Figtree — warm, refined, readable body copy and UI labels
- Mono: Geist Mono — code, job skills, technical labels
- Scale: hero `text-6xl font-bold tracking-tight gradient-text`, h2 `text-3xl font-bold`, labels `text-xs uppercase tracking-widest`, body `text-base`

## Elevation & Depth

Multi-layer shadow hierarchy creates premium depth: subtle shadows (0.2s transition) for card lift on hover, portal shadows for elevated sections, glow accents on accent-colored interactive elements, glass surfaces with backdrop blur and semi-transparent overlays.

## Structural Zones

| Zone    | Background       | Border                  | Notes                                              |
| ------- | ---------------- | ----------------------- | -------------------------------------------------- |
| Header  | glass            | border-bottom subtle    | Navigation, sticky, blur backdrop                 |
| Content | background       | —                       | Primary content, gradient subtle sections         |
| Cards   | glass / elevated  | shadow-card + border    | Job cards, profiles, glass effect with border     |
| CTA     | gradient-accent  | —                       | Apply, Post Job buttons with vibrant cyan accent  |
| Footer  | secondary subtle  | border-top              | Links, copyright, polished footer                 |

## Spacing & Rhythm

16px base unit with 32px section gaps; 16px card padding for premium breathing room; 12px radius for cards, 8px for buttons, varied radius (0–24px) for visual richness; consistent 0.3s smooth transitions throughout.

## Component Patterns

- Buttons: accent (cyan-teal) for primary CTAs with shadow-glow, primary (indigo) for secondary, minimal destructive (coral) for delete/critical
- Cards: glass effect with backdrop blur, 12px radius, shadow-card elevation, hover scale 1.02 with enhanced shadow
- Badges: secondary background with uppercase tracking, 6px radius, minimal styling
- Inputs: glass surface with subtle border, focus ring in accent color
- Hero text: gradient-text for headlines, smooth fade-in animation on load

## Motion

- Entrance: fade-in 400ms on page load, cascade stagger 50ms on cards
- Hover: card scale 1.02 + shadow elevation 0.15s easing, button text brightens, links underline
- Interactive: button press shrinks 0.98, smooth transitions throughout
- Ambient: subtle float animation (3s) on hero illustrations, pulse-soft on loading states

## Constraints

- No branded logos, company badges — use generic icons and text labels only
- Dark mode is the primary surface; light mode support via CSS custom properties
- Accent color reserved for high-priority CTAs; use sparingly to maintain visual impact
- Glassmorphism only on card surfaces and header, not full-page backgrounds

## Signature Detail

Deep indigo-violet foundation + vibrant cyan-teal accents + glassmorphism creates premium, elevated aesthetic that celebrates visual craftsmanship; paired with smooth micro-animations, layered depth shadows, and polished typography hierarchy for distinctive, memorable SaaS identity.
