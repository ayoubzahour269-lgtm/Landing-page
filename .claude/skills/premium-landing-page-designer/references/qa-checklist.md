# QA Checklist

## Strategy and clarity

- [ ] Product and offer are clear in the first viewport.
- [ ] One primary CTA is visually dominant.
- [ ] Page narrative moves logically toward purchase.
- [ ] Claims and proof are real and correctly represented.
- [ ] The page has one ownable visual concept.

## Visual quality

- [ ] Typography, line breaks, and spacing look intentional.
- [ ] Product imagery is sharp and art-directed.
- [ ] No section looks like an unrelated template block.
- [ ] Accent colors and effects are restrained.
- [ ] Visual hierarchy works without animation.
- [ ] RTL and Arabic typography are checked when applicable.

## Motion and 3D

- [ ] One signature interaction is clearly dominant.
- [ ] Animations have a communication purpose.
- [ ] Scroll remains controllable and reversible.
- [ ] No content is permanently hidden by failed animation.
- [ ] Reduced-motion mode is usable.
- [ ] 3D has a polished fallback.
- [ ] Heavy scenes pause or simplify offscreen and on mobile.
- [ ] Interaction never blocks normal scrolling or CTA use.

## Responsive behavior

- [ ] No horizontal overflow.
- [ ] Hero works on narrow and short screens.
- [ ] Text remains readable at every breakpoint.
- [ ] Product crop and scale remain intentional.
- [ ] Sticky elements do not cover content.
- [ ] Tap targets are comfortable.
- [ ] Mobile does not inherit unusable desktop pinning.

## Accessibility

- [ ] Heading order is logical.
- [ ] Keyboard navigation works.
- [ ] Focus is visible.
- [ ] Images have appropriate alt behavior.
- [ ] Form controls and errors are labeled.
- [ ] Contrast is acceptable.
- [ ] Color is not the only state indicator.
- [ ] Canvas or video content has a text equivalent where needed.

## Performance

- [ ] Critical media is optimized and correctly sized.
- [ ] Below-the-fold media and 3D are lazy-loaded.
- [ ] Media dimensions are reserved.
- [ ] Fonts are limited and optimized.
- [ ] No unnecessary animation or UI dependency was added.
- [ ] Offscreen continuous animation is paused.
- [ ] Build output does not reveal unexpectedly large assets or bundles.

## Engineering

- [ ] Build succeeds.
- [ ] Type-check succeeds when configured.
- [ ] Lint succeeds when configured.
- [ ] No console errors during normal interaction.
- [ ] Event listeners, observers, and animation contexts are cleaned up.
- [ ] Existing commerce, analytics, and localization behavior still works.
- [ ] Unrelated files were not rewritten.

## Final report

State:

- what was implemented;
- what was tested;
- which commands passed or failed;
- which assets or content remain placeholders;
- what could not be verified.
