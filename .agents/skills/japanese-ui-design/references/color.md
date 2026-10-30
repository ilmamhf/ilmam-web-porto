# Colour for the five modes

All hex values are starting points. Where a value came from a named traditional colour, sources disagree slightly on exact hex; pick one and keep it. Every text pair below was computed against WCAG (4.5:1 for body text, 3:1 for large text).

## Contents
- Per-mode palettes and checked contrast
- Traditional Japanese colours (Quiet mode)
- Rules for using colour

## Per-mode palettes (as in `assets/tokens.css`)

| Mode | Background | Text | Muted | Accent | Notes |
|---|---|---|---|---|---|
| Quiet | `#F4F0E6` washi | `#1B1B1B` sumi (15.1) | `#5C5A55` (6.1) | `#223A70` kon (9.7) | beni `#B33A3A` (5.2) once per screen |
| Sterile | `#D1CAB4` beige | `#3A372F` (7.3) | `#4F4A40` (5.4) | `#8F3A24` (4.6) | panel `#C4BCA5`; muted on panel 4.7 |
| Punk | `#000000` | `#FFFFFF` (21) | `#C9C9C9` (12.7) | `#D4001A` fill; white on it 5.5 | red as small text on black fails (3.8): use `#FF4D4D` (6.4) |
| Command center | `#080807` | `#FF9830` orange (9.3) | `#C87020` (5.5) | `#50FF50` green (15.0) | alert `#FF4D3D` (6.1) |
| Cyber-pop Y2K | `#0A0B1E` | `#E8ECFF` (16.6) | `#9AA0C8` (7.6) | `#00F0FF` cyan (13.8) | magenta `#FF2BD6` (6.1), lime `#B6FF00` (16.0) |

Findings worth remembering:
- A NieR-style drab red-orange on beige fails as text at the natural values (`#B5533A` is 3.0:1). Darken to about `#8F3A24`.
- Authentic vermilion shu `#FF3500` is 3.7:1 on white: fills and large text only, or darken to `#C42800`.
- Never let colour alone carry meaning. Add an icon, border, weight change or inversion.

## Traditional Japanese colours (Quiet mode, optional seasonal themes)

Named records tied to dyes, pigments and textiles. Map them to roles instead of decorating with them.

| Role | Colour | Hex (starting point) |
|---|---|---|
| Text | 墨色 sumi-iro (ink) | `#1B1B1B` |
| Surface | washi paper (not a standard named hex) | `#F4F0E6`, card `#FBF8F1` |
| Primary accent | 紺 kon (deep indigo) | `#223A70` |
| Alt accent | 藍 ai-iro (indigo) | `#165E83` or `#264653` (sources disagree) |
| Seal accent | 紅 beni (crimson) | `#B33A3A` muted or `#D7003A` vivid |
| Highlight | 山吹色 yamabuki-iro | `#D8A431` or `#FFA400` |
| Cool accent | 浅葱 asagi | `#00A3AF` |
| Bright red | 朱 shu | `#FF3500` |

Seasonal swaps (change accent and tint only):
- Spring 春: sakura, nadeshiko, moegi, fuji, yamabuki
- Summer 夏: ai, asagi, matcha, gunjo, mizu-iro
- Autumn 秋: beni, shu, yamabuki, kuchiba, kaki
- Winter 冬: sumi, shikkoku, yuki, nibi, murasaki

## Rules
1. One neutral base, one primary accent, one alert colour. More only if the mode demands it (Y2K).
2. Limit saturated colour to small areas; let the neutral base carry the screen (even Punk is mostly black and white).
3. Check every changed value; re-run contrast after tweaking.
4. Dark and light variants should be real redesigns, not inversions (Sterile and Quiet can offer both; Command center and Y2K are dark-native).
