# Sterile elegance (NieR: Automata-style)

A flat, near-monochrome, quietly beautiful interface. Tokens: `data-mode="sterile"`. Rooted in the PlatinumGames UI designer's own account of NieR: Automata's UI.

## Concept
"Systematic and sterile, but also beautiful." The designer avoided ornate decoration for a clean, graceful, flat design, then found it flavourless and added a subtle motif rather than more ornament.

## What makes it work (and how to translate it)
| In the game | On the web / app |
|---|---|
| Flat design as the base | Flat surfaces, no gradients or heavy shadows |
| Faint grid texture and edge darkening so the menu looks like a convex monitor | `.fx-grid-faint` plus `.fx-vignette` on the main container |
| "Musical score" motif suggested through staff lines, double bars and colons, never literal clefs | `.motif-staff` above headings, `.motif-doublebar` on cards, colons in labels (`STATUS : OK`) |
| Decorative borders at top and bottom of menus for an analog touch in a digital design | Thin double rules at section edges |
| Warm beige specified by the director; built by starting from stark black and white and nudging toward beige | Start high-contrast, then soften until it feels warm; re-check contrast after every nudge |
| Few colours; stats shown by font thickness and darkness; one drab red-orange when colour was unavoidable | Express state with weight, inversion and symbols first; one accent only |
| Fluid, slightly "moist" animation rather than dry | Eased 200-350 ms fades and slides, never snappy bounces |

## Palette (starting points, contrast checked)
Beige `#D1CAB4` background, panel `#C4BCA5`, ink `#3A372F` (7.3:1), muted `#4F4A40` (5.4:1), drab red-orange accent `#8F3A24` (4.6:1). These are suggested values inspired by the look, not extracted from the game. Low-contrast beiges are hard to keep legible; the designer said so, and reviewers noted monochrome legibility problems in busy moments. Make the active/selected state an inversion (ink background, beige text).

## Typography
A refined classical serif in clean tones. Free options that approximate the feel: Cormorant (display, light tracking), EB Garamond or Spectral (UI), Cardo (long text); Noto Serif JP or Shippori Mincho for Japanese. The game's actual UI face is unconfirmed, so do not claim a match, and do not copy the logo.

## Interaction principles from the source
- Grandmother test: the director wanted menus simple enough for someone who does not play games. Primary path = pick and confirm/cancel only.
- Hidden depth: undocumented shortcuts for experts (arrow keys, Enter/Esc, `[` and `]` to switch tabs, Esc to close from anywhere, any key to skip a closing animation).
- Control hints stay minimal (just the few controls that matter).
- Weirdness budget: one surprise, such as a hidden "broken UI" theme or retro filters.

## Good for
Story-led sites, premium tech, dashboards that want personality, creative portfolios, AI products wanting a calm android-like tone.
