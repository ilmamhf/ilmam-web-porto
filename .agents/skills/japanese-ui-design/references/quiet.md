# Quiet minimal (ma / kanso / wabi-sabi)

The restrained end of Japanese design. Use for calm products and premium brands. Tokens: `data-mode="quiet"`.

## Concept sentences (pick one)
- "Space is part of the message." (ma)
- "Remove until it breaks, then put one thing back." (kanso)
- "Modest, asymmetrical, natural, unhurried." (wabi-sabi: asymmetry, simplicity, modesty, intimacy, suggestion of natural process)

## Layout
- One idea per viewport: a single focal element surrounded by space.
- Asymmetric balance (fukinsei): a 5/7 or 4/8 split, headline offset from the image, balance by visual weight not mirroring.
- Section padding 96-160 px desktop, 56-80 px mobile. Paragraph width about 32-40 full-width Japanese characters (60-70 Latin).
- Hairline dividers instead of boxes and shadows; radii 0-4 px.
- Imagery: natural light, material close-ups (wood, ceramic, linen, paper), large, with no text baked in.
- Hierarchy through scale and whitespace, not colour or bold weight.

## Palette
Washi paper background, sumi ink text, one indigo accent (kon), beni red used once per screen like a seal stamp. See `color.md` for values and contrast. Seasonal accent swaps are a nice touch; change only accent and tint.

## Typography
Regular or light weights, open letter-spacing (0.02-0.06em), line-height 1.8+. A light Mincho (serif) for headlines pairs well with a clean Gothic (sans) body.

## Motion
Fades and 4-12 px translations, 300-600 ms, ease-out. No bounce. Motion should feel like a breath (`.fx-reveal`).

## Components
- Buttons: outline hairline or solid indigo, small radius, generous horizontal padding, regular weight.
- Cards: no shadow; hairline border or surface tint.
- Forms: underline inputs, label above, errors written as guidance rather than blame.
- Empty states: treat emptiness as ma; short calm text, one action.
- Hanko-style marker: a small beni square or circle for one status or signature moment.
- Kintsugi idea: show repair honestly (visible "edited" markers, warm recovery copy) rather than hiding problems.

## Mobile
Bottom tab bar (3-5 items), safe-area insets, 44 px targets, one primary action per screen, large type, generous vertical rhythm.
