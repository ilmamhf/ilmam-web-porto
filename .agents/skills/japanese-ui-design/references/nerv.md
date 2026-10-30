# Command center (Evangelion / NERV, HUD and FUI)

Dark, orange-and-green, dense but ordered consoles and stark title cards. Tokens: `data-mode="nerv"`.

## Concept
"Clinical, authoritative, danger-first." Two sub-patterns:
1. **Title card:** near-empty black or white compositions with one oversized heavy serif word.
2. **Console:** dense monospaced readouts, boxes with thin orange outlines, green nominal values, red alerts.

## Typography (the heart of the look)
- Evangelion's identity face is Matisse EB, an extra-bold Mincho (serif) by Japan's Fontworks, chosen by the director, combined with all-caps Helvetica, and it spread into the NERV interface screens.
- It is a commercial font, so use a free heavy Mincho instead: Noto Serif JP at weight 800-900 or Shippori Mincho B1 at 800 (confirm availability on Google Fonts). Pair with an all-caps neutral sans such as Helvetica Neue or Inter for labels.
- The franchise compresses the type mechanically rather than using a condensed cut; the official site loads the normal font and uses CSS transform. Use `.fx-compress` (`scaleX(.85)`) and keep it moderate so stroke weights stay believable.
- Readouts and logs in a monospace face (JetBrains Mono, IBM Plex Mono).
- Critical information should not use the display face. A real NERV-branded disaster-prevention app avoided the Evangelion font for disaster information because faithful styling would have made it hard to read. Mirror that: display type for titles, a plain universal-design style Gothic (for example BIZ UDGothic) for anything that must be understood quickly.

## Palette (community-derived starting points, contrast checked)
Void black `#080807`, orange `#FF9830` for labels and structure (9.3:1), dim orange `#C87020` for secondary (5.5:1), green `#50FF50` for nominal data (15:1), alert red `#FF4D3D` (6.1:1). These are interpretations from community recreations of the show's interfaces, not official values.

## Layout and components
- 1 px orange outline panels, corner brackets, tick marks, status bars, labelled tables; thin grids (`.fx-grid`, kept faint) and `.fx-scanlines`.
- Gauges and numeric readouts with tabular numerals (`font-variant-numeric: tabular-nums`).
- A severity ladder: nominal (green) -> caution (orange) -> alert (red). Each level changes colour AND adds an icon or border so colour-blind users get the signal (red-green is a classic problem, and this palette uses both).
- Density builds authority, but keep a strict grid and consistent module styles.
- Live-updating numbers make it feel alive; honour reduced motion by freezing updates visually (not data).

## Pitfalls
- Direct copies of licensed assets read as theme-park superficiality. Take the tone, not the template.
- Anime compositions are built for 16:9 narrative pacing; adapt to responsive layouts.
- A gorgeous interface that does not clearly show state is frustrating, not impressive.

## Good for
Developer tools, monitoring dashboards, status pages, CI views, trading consoles, game companion apps, sci-fi products.
