# Cyber-pop Y2K (Jet Set Radio, Wipeout, Trinitron-era Sony)

Late-90s/early-2000s optimism: neon, chrome, translucent plastics, slanted type. Tokens: `data-mode="y2k"`.

## Lineage to draw from
- **Jet Set Radio (2000):** cel-shaded futurism with bold vector graphics and sharp, slanted wordmarks.
- **Wipeout / The Designers Republic:** UK studio whose Japanese-inspired typography shaped the look: asymmetric placement, vertical text, bold contrast between type sizes.
- **Sony and Apple hardware:** iridescent and chrome plastics (Walkman, PlayStation 2), translucent shells (iMac G3).
- **Trinitron simulation:** scanlines, RGB separation, flicker, digital noise.

## Two calmer variants
- **Gen-X soft club:** muted colour, minimalist type, blurred photography, a sterile-meets-organic mood.
- **Cyberminimalism:** black or white fields, large grotesque type, strict grids, sparse geometry, one controlled gradient.

## Palette (contrast checked)
Deep navy `#0A0B1E`, panel `#14163A`, text `#E8ECFF` (16.6:1), muted `#9AA0C8` (7.6:1), cyan `#00F0FF`, magenta `#FF2BD6` (6.1:1), lime `#B6FF00`. Glow is decoration, not contrast: text must pass on its own.

## Recipes
```css
/* chrome button */
.btn-chrome { background: linear-gradient(180deg, #e9ffff, var(--c-accent) 50%, #2ab6c4); border-radius: 999px; box-shadow: 0 0 18px rgba(0,240,255,.5); color: var(--c-on-accent); }
/* glass card */
.glass { background: rgba(20,22,58,.55); backdrop-filter: blur(12px); border: 1px solid var(--c-line); border-radius: var(--radius); }
/* gradient headline: always set a solid colour fallback */
.h-chrome { color: #8fe9ff; background: linear-gradient(180deg,#fff,var(--c-accent) 55%,#5b6cff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
```
Use `.fx-scanlines` and `.fx-glitch` sparingly; reserve glitch for errors, loading or a single hero word.

## Cautions
- Katakana and kanji used purely as decoration is a known stereotype problem (design press has documented "broken Japanese" in Western graphics). Use real, correct words, or none.
- Gradient text and glows hurt legibility at small sizes; keep body text solid.
- This style can be dated by default; commit to one reference era or variant.

## Good for
Music, fashion, creative studios, event sites, nostalgia-driven products.
