# Motion and 3D

## Motion hierarchy

Use three levels:

1. **Signature motion** — one memorable sequence tied to the product story.
2. **Section transitions** — a small set of consistent reveals and chapter changes.
3. **Micro-interactions** — CTA, hover, focus, accordion, carousel, and feedback states.

The signature motion may be cinematic. Supporting motion should be quiet.

## Choose the right tool

Use the tools already present when suitable.

- CSS transitions and keyframes: simple state changes, ambient loops, hover and focus
- Motion or Framer Motion: component entrances, layout transitions, shared elements, gestures
- GSAP and ScrollTrigger: complex timelines, pinned sequences, controlled scroll choreography
- Three.js or React Three Fiber: real-time 3D product scenes and shader-based effects
- Spline: externally authored interactive scene when its runtime cost and editing workflow are acceptable
- Canvas or SVG: lightweight particles, masks, diagrams, and line animation

Do not use several tools for the same job.

## Scroll behavior

- Preserve native scroll semantics.
- Do not hijack wheel or touch input.
- Avoid long pinned sequences on mobile.
- Keep scroll-linked progress deterministic.
- Ensure the visitor can reverse direction without broken states.
- Do not hide the scrollbar without a strong reason.
- Smooth scrolling must be removable and disabled in reduced-motion mode.

## Signature-interaction examples

- Product rotates once while the message changes from problem to solution.
- A liquid or foam mask reveals the result and then resolves into the offer.
- Ingredients orbit briefly around the product, then settle into readable content.
- The camera moves from macro texture to full product pack.
- A single bottle separates into a bundle at the offer section.
- A product remains pinned while backgrounds, lighting, and benefit labels change.

Pick one. Do not implement all of them.

## 3D decision framework

Use real-time 3D when:

- a usable model exists;
- material and silhouette are important;
- rotation or exploded views add product understanding;
- the device target can support it;
- a high-quality fallback exists.

Use layered 2D or pre-rendered video when:

- no quality model exists;
- photorealism matters more than free interaction;
- mobile traffic is dominant;
- the desired sequence is fixed;
- performance budgets are strict.

## 3D engineering rules

- Prefer glTF or GLB for web delivery.
- Compress geometry and textures where the toolchain supports it.
- Use the smallest texture resolution that survives the actual display size.
- Avoid excessive lights, shadows, post-processing, transparency, and reflections.
- Reuse materials and geometry.
- Clamp device pixel ratio.
- Pause rendering when the scene is outside the viewport or the tab is hidden.
- Use demand-based rendering when continuous animation is unnecessary.
- Keep pointer controls subtle and prevent accidental page-scroll blocking.
- Provide a poster image and accessible text equivalent.

## Mobile strategy

For mobile, choose one:

- simplified scene with reduced textures and effects;
- short pre-rendered loop;
- layered image with perspective and light motion;
- static hero image with typography-led motion.

Do not force desktop WebGL complexity onto every mobile device.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- remove smooth-scroll interpolation;
- remove parallax and pinned scrub sequences;
- stop continuous rotation and particle motion;
- use immediate or short fades;
- keep all content visible and ordered correctly;
- preserve interaction feedback without large movement.

## Motion quality checklist

- Does each animation have a communication purpose?
- Is the CTA stable and easy to click?
- Does the page feel responsive rather than delayed?
- Are scroll states reversible?
- Is content readable during motion?
- Is there only one dominant motion moment at a time?
- Does the experience degrade cleanly without animation?
