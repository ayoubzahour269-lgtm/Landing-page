# Implementation Standards

## Semantic structure

- One clear page-level `h1`.
- Logical heading order.
- Use `header`, `main`, `section`, `nav`, `footer`, lists, buttons, and links correctly.
- Buttons perform actions; links navigate.
- Accordions expose proper state and keyboard behavior.
- Decorative media is hidden from assistive technology when appropriate.

## Accessibility

- Preserve visible focus indicators.
- Ensure keyboard access to interactive controls.
- Use meaningful alt text for informative images.
- Do not put essential text inside images or canvas only.
- Maintain sufficient text and control contrast.
- Do not rely on color alone for state.
- Label form controls and errors.
- Respect reduced motion.
- Keep touch targets large enough for comfortable use.

## Responsive design

Design intentionally for breakpoints rather than shrinking desktop.

Check:

- text wrapping and hero height;
- product crop and focal point;
- stacking order;
- sticky or pinned behavior;
- horizontal overflow;
- CTA visibility;
- carousels and drag areas;
- large headings on short screens;
- Arabic or RTL layouts when required.

## Performance

Prioritize the first viewport:

- serve correctly sized responsive images;
- preload only critical fonts and media;
- reduce font weights and subsets;
- use modern image formats supported by the stack;
- lazy-load below-the-fold media and 3D;
- avoid autoplaying several videos;
- provide video posters;
- reserve media dimensions to avoid layout shift;
- minimize client-side JavaScript;
- split heavy interactive sections;
- pause offscreen animation;
- avoid expensive filters on large animated surfaces.

Treat Core Web Vitals thresholds as goals, not proof. Measure when tooling is available.

## CSS quality

- Use tokens instead of repeated arbitrary values.
- Prefer layout systems over absolute positioning.
- Use absolute positioning only for intentionally layered art direction.
- Avoid deeply nested selectors and global leakage.
- Keep animations composited when possible.
- Avoid `transition: all`.
- Make hover enhancements conditional on hover-capable devices.

## React quality

- Keep client components focused.
- Avoid state for purely visual CSS behavior.
- Clean up observers, timers, animation contexts, and event listeners.
- Avoid rendering loops caused by scroll state in React when an animation library can update outside React.
- Use stable keys and typed data.
- Do not suppress type errors to finish quickly.

## Asset quality

- Report oversized images and video.
- Keep original source assets separate from optimized web assets when practical.
- Use descriptive file names.
- Do not commit generated caches or huge unused files.
- Confirm licenses or ownership for third-party assets supplied from external sources.

## Error and loading states

- Product imagery should have a stable placeholder or background.
- 3D failure should reveal a polished fallback.
- Video failure should not create an empty hero.
- Dynamic reviews or commerce data should have an honest loading or unavailable state.
- Do not display fake content when data fails.
