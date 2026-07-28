# Stack Recipes

## General rule

Preserve and extend the existing stack. Check installed versions and official documentation before adding packages or using APIs. Do not assume a specific library API from memory when the repository uses a different version.

## New React or Next.js project

A suitable default for a new high-end landing page is:

- modern React framework with TypeScript;
- existing project styling system or Tailwind CSS;
- CSS variables for brand and motion tokens;
- Motion or Framer Motion for component-level motion;
- GSAP with ScrollTrigger only for complex scroll timelines;
- Three.js or React Three Fiber only for justified real-time 3D;
- framework image and font optimization;
- a small accessible component layer rather than a heavy generic UI kit.

Do not install all animation and 3D packages by default. Add only what the selected concept needs.

## Static or lightweight project

For a small landing page:

- semantic HTML;
- modern CSS with custom properties, grid, `clamp()`, and container-aware patterns;
- small JavaScript modules;
- CSS or Web Animations API for simple motion;
- GSAP only when the choreography requires it.

A static implementation may outperform a framework for a simple campaign page.

## Ecommerce integration

Keep the visual landing experience separate from commerce logic. Respect the project's existing cart, checkout, variant, analytics, and localization architecture.

Do not create fake checkout behavior. Wire CTAs to real routes or clearly marked integration points.

## Content architecture

For substantial pages, use a maintainable section model:

- page-level configuration for product and offer data;
- reusable section components where structure genuinely repeats;
- content close to components for one-off art-directed sections;
- typed data for repeated reviews, benefits, steps, FAQs, and variants;
- no huge single component containing the entire page;
- no excessive fragmentation into dozens of trivial components.

## Animation architecture

Use a small motion layer:

- shared timing and easing tokens;
- reusable reveal primitive;
- one scroll-sequence controller per complex chapter;
- cleanup on unmount;
- no duplicate scroll listeners;
- reduced-motion hook or media query;
- progressive enhancement.

## 3D architecture

Keep 3D isolated:

- dynamic or lazy-loaded scene boundary;
- explicit loading and fallback states;
- model and texture assets in a predictable directory;
- reusable quality settings by breakpoint;
- scene lifecycle tied to visibility;
- no business logic inside the canvas.

## Dependency decision questions

Before installing a package, verify:

- Is equivalent functionality already present?
- Is this feature central to the concept?
- Can CSS or a small local utility do it?
- What is the client bundle and runtime cost?
- Does it support the repository's framework and rendering model?
- Is it accessible and compatible with reduced motion?
- Can it be removed or replaced without rewriting the page?
