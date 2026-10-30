# Japanese typography on the web

Read this whenever the design has Japanese text. The rules come from the W3C JLReq requirements for Japanese text layout and current browser support.

## Contents
- Display type by mode
- Font stacks
- Size, line-height, weight
- Line breaking and punctuation
- Vertical text, numbers, ruby
- Mixed Japanese and Latin
- Performance

## Display type by mode

Use these for titles and brand moments; keep a plain, readable face for body and critical text. Check availability on Google Fonts before relying on any name.

| Mode | Latin display | Japanese display | Body |
|---|---|---|---|
| Quiet | Light serif or neutral grotesque | Light Mincho (Noto Serif JP 300, Shippori Mincho) | Noto Sans JP 400 / Inter |
| Sterile | Cormorant, EB Garamond, Spectral (classical serif, open tracking) | Shippori Mincho, Noto Serif JP | Cardo / Noto Serif JP |
| Punk | Heavy grotesque or Impact-style, uppercase | Dela Gothic One, Rampart One, Reggae One (heavy Gothic) | Noto Sans JP 500-700 on plain panels |
| Command center | All-caps neutral sans for labels | Noto Serif JP 800-900 or Shippori Mincho B1 800, compressed with `scaleX(.85)` | JetBrains Mono / IBM Plex Mono; BIZ UDGothic for critical text |
| Y2K | Orbitron, Eurostile-style, italic heavy | Heavy Gothic, slanted | Inter / Noto Sans JP |

Notes:
- Evangelion's look comes from an extra-bold Mincho (Matisse EB, commercial) plus all-caps Helvetica; the effect comes mostly from extreme weight and stark contrast, so a free heavy Mincho gets close.
- Keep compression moderate (0.8-0.9). Heavier distortion makes strokes uneven.
- Per-word variation (size, rotation, weight) carries the punk look; do it with spans, not a different font for every letter.
- Universal-design (UD) Gothic faces such as BIZ UDGothic are designed for fast, clear reading: ideal for alerts, forms and safety text in any mode.

## Font stacks

```css
/* Sans */
--font-jp-sans: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "YuGothic", "Meiryo", "Noto Sans JP", sans-serif;
/* Serif (editorial, Quiet luxury) */
--font-jp-serif: "Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", serif;
/* Mixed Latin + Japanese: Latin font FIRST so Latin glyphs use it, Japanese falls through */
--font-mixed: "Inter", "Noto Sans JP", "Hiragino Sans", sans-serif;
```

Use Noto Sans JP / Noto Serif JP as web fonts; the others are system fonts on Apple and Windows.

## Size, line-height, weight

- Body at least 16 px; kanji readability suffers below about 14 px.
- Line-height 1.7-1.9 for body (Japanese needs more vertical room than Latin). Dense mode may go to 1.6.
- Never use italics for Japanese; browsers fake an oblique that distorts glyphs. Use weight or colour for emphasis.
- Quiet mode: regular or light weights, slightly open letter-spacing (0.02-0.06em). Avoid heavy bold body text.

## Line breaking and punctuation

```css
:lang(ja) {
  line-break: strict;          /* kinsoku shori: do not start a line with closing punctuation or small kana */
  overflow-wrap: anywhere;     /* safety net for long unbroken strings */
}
h1:lang(ja), h2:lang(ja), .card-title:lang(ja) {
  word-break: auto-phrase;     /* wraps at natural phrase boundaries (bunsetsu); Chrome 119+, progressive enhancement */
  text-wrap: balance;
}
```

- Where `auto-phrase` is unsupported, insert `<wbr>` between phrases in important headings, for example `ユーザー<wbr>インターフェース`.
- Some guides suggest `word-break: keep-all` for Japanese. That setting suppresses breaks between CJK characters, which is the Korean convention and can cause overflow in Japanese paragraphs. Prefer `line-break: strict` and test.
- `text-spacing-trim` adjusts spacing of full-width CJK punctuation per JLREQ. Support is limited (not Baseline), and the font needs the `halt` or `chws` OpenType feature or it does nothing. Treat as progressive enhancement: `text-spacing-trim: normal;` is fine, `space-first` or `trim-start` are options for headings. Check MDN for current support.
- `text-autospace` adds spacing between Japanese and Latin/digits. Check current browser support before relying on it.

## Vertical text, numbers, ruby

```css
.tategaki { writing-mode: vertical-rl; text-orientation: mixed; }
.tategaki .num { text-combine-upright: digits 2; } /* two-digit numbers upright inside vertical text */
```

Use vertical writing for short accents (a hero label, a section marker, a quote), not long reading text, and only on desktop-width layouts unless tested on mobile.

Furigana uses ruby markup:

```html
<ruby>日本語<rt>にほんご</rt></ruby>
```

## Mixed Japanese and Latin

- Latin font first in the stack, as above.
- Headings only: `font-feature-settings: "palt";` (proportional alternates) tightens Japanese spacing and looks refined in large display text. Do not apply to body text, where it hurts readability.
- Keep Latin and Japanese baselines optically matched by checking one real heading in both scripts.

## Performance

Japanese web fonts are large. Use Google Fonts' automatic unicode-range slicing, load only the weights actually used (usually 400 and 700, or 300 and 500 for Quiet), set `font-display: swap`, and keep a good system fallback stack so the page is readable before the font arrives.
