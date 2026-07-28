# Visual System

## Design from the product outward

The product should determine the interface materials, shapes, lighting, rhythm, and imagery.

Examples:

- Hair color mousse: foam expansion, pigment diffusion, glossy strands, color reveal
- Facial serum: refraction, droplets, viscosity, glass, controlled highlights
- Fragrance: atmosphere, shadow, vapor, sculptural silhouette
- Botanical skincare: macro plant texture, translucent liquid, soft natural light
- Technology product: precision grid, material detail, controlled depth, responsive diagrams

Do not add decorative effects that have no relationship to the product.

## Design tokens

Define tokens before styling individual sections:

- background, surface, text, muted text, border, accent, success, warning;
- display and body fonts;
- type scale and line heights;
- content widths and grid gutters;
- spacing scale;
- radius scale;
- shadow and highlight behavior;
- motion durations and easing;
- section vertical rhythm.

Prefer CSS custom properties or the repository's existing token system.

## Typography

Premium design depends more on typography and spacing than on effects.

- Use one expressive display family and one highly readable utility family at most.
- Keep paragraph line length roughly 45–75 characters.
- Use fluid sizes with `clamp()` where appropriate.
- Avoid ultra-thin body text.
- Use optical spacing and intentional line breaks for hero headlines.
- Keep small text readable on mobile.
- For Arabic, test actual glyph shaping, line height, direction, numerals, and mixed Latin text.

## Composition

Use one clear compositional logic:

- editorial asymmetry;
- centered product theatre;
- split narrative;
- pinned product with changing content;
- horizontal chapter sequence;
- macro-detail storytelling.

Use a strong grid even when the layout appears freeform. Align text, media edges, CTAs, captions, and section transitions deliberately.

## Premium restraint

A premium page often uses fewer elements with better scale and spacing:

- one strong headline rather than multiple badges;
- one dominant product image rather than a collage of mediocre assets;
- one accent color rather than a rainbow palette;
- one signature transition rather than ten unrelated effects;
- controlled borders and shadows rather than card containers for every block.

## Image direction

Prioritize:

- high-resolution product cutouts;
- macro material or texture imagery;
- real use or application footage;
- proof images with consistent framing;
- honest before-and-after presentation when appropriate;
- art-directed crops across breakpoints.

Never stretch low-resolution assets. If assets are insufficient, create a strong layout using neutral placeholders that are clearly marked, and list the exact shots or renders needed.

## Cosmetics palette patterns

Use these as starting logics, not fixed palettes:

- **Modern clinical:** warm white, ink, cool grey, one clean active color
- **Quiet luxury:** ivory, espresso, muted metal, skin-tone neutrals
- **Botanical premium:** mineral cream, olive, bark, restrained botanical accent
- **Sensory color:** deep monochrome background, product-derived pigment, luminous highlight
- **Night luxury:** near-black, warm reflective metal, translucent glass, high-contrast type

Avoid excessive gold. Metallic accents should behave like light, not flat yellow.

## Anti-template test

Before finalizing, ask:

- Could this hero belong to any product after swapping the bottle?
- Does the page have a visual idea that can be described in one sentence?
- Is the product visible enough?
- Is there a meaningful hierarchy without animation?
- Are the sections composed differently for a reason, or just randomly?
- Does the page still feel premium on a narrow mobile screen?
