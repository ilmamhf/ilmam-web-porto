---
name: japanese-ui-design
description: Design cool, minimal, tech and game-style web and mobile UI/UX drawing on Japanese design - Japanese game UI (Persona 5 / Metaphor ReFantazio punk-kinetic menus, NieR Automata sterile-elegant flat UI), Evangelion/NERV command-center and HUD dashboards, Y2K cyber-pop (Jet Set Radio, Wipeout, Trinitron), and quiet Japanese minimalism (ma, kanso, wabi-sabi, Muji-style). Use this skill whenever the user mentions Japanese design, Japanese game UI, JRPG menus, Persona/Atlus style, NieR, Evangelion, NERV, MAGI, HUD or FUI, cyberpunk/cyber-pop, Y2K, anime-inspired interfaces, zen/wabi-sabi/Japandi minimal, or wants a stylish, futuristic, game-like, or "cool Japanese" landing page, dashboard, app screen, portfolio or design system - even if they only say "make it look Japanese and cool". Also covers Japanese typography and localisation when the product has Japanese text or users in Japan.
---

# Japanese UI/UX Design (cool / minimal / tech / game)

Japanese interface design is a set of distinct visual languages, each with a clear logic. Pick one on purpose, state the concept in one sentence, and let that sentence drive colour, type, motion and every screen. The most common failure is "generic neon plus random katakana". The second is style so heavy that people cannot use the product.

## The five modes

| Mode | Source language | Good for | Signature moves |
|---|---|---|---|
| **Quiet minimal** | Ma, kanso, wabi-sabi, Muji-like restraint | Calm apps, brands, portfolios, wellness, craft | Generous space, one focal point, washi/sumi palette, thin type, slow motion |
| **Sterile elegance** | NieR: Automata (PlatinumGames) | Story-led sites, premium tech, dashboards with personality, creative portfolios | Flat, near-monochrome warm beige, classical serif, faint grid + screen vignette, subtle score-line motif, one drab accent |
| **Punk-kinetic** | Persona 5, Metaphor: ReFantazio (Atlus) | Game and event sites, music, fashion, youth brands, hero/onboarding moments | Black/white/one hot colour, tilted collage panels, hand-cut type, motion on everything, strong audio-visual identity |
| **Command center** | Evangelion / NERV, FUI and HUD design | Dev tools, monitoring, status pages, sci-fi products, data-heavy dashboards | True-black field, orange and green readouts, compressed heavy serif titles, mono data, severity states |
| **Cyber-pop Y2K** | Jet Set Radio, Wipeout / Designers Republic, Trinitron-era Sony | Music, fashion, creative studios, nostalgia | Neon on deep navy, chrome and translucency, slanted type, scanlines, bold vector shapes |

If the user only says "Japanese" with no other cue, ask one short question or choose by product type: calm product -> Quiet minimal, data product -> Command center or Sterile elegance, entertainment brand -> Punk-kinetic or Cyber-pop. For information-dense Japanese commerce layouts, kawaii/playful styles, and localisation for Japanese users, read `references/other-modes.md`; these are only used when the user asks for them.

## Workflow

1. **Pick the mode and write the concept sentence.** Example from NieR's UI designer: "systematic and sterile, but also beautiful". Everything downstream must be traceable to that sentence.
2. **Load the tokens.** Copy `assets/tokens.css` and `assets/effects.css`; set `data-mode="quiet|sterile|punk|nerv|y2k"` on the root. `assets/mode-gallery.html` shows every mode side by side.
3. **Read the mode's reference file** for layout, component and motion recipes: `references/quiet.md`, `references/sterile.md`, `references/punk.md`, `references/nerv.md` or `references/y2k.md`. Mixing modes is fine only when one clearly dominates (for example Sterile for the page, a Command-center panel for a live data widget).
4. **Set typography** with `references/typography.md`, and colour with `references/color.md` (contrast values are already checked there).
5. **Build**, then apply the shared rules below.
6. **Verify visually.** If a headless browser is available, screenshot at about 1280 px and 390 px wide and look at the result; fix legibility before polishing.

## Shared rules for cool-but-usable UI

These come from how the Japanese studios themselves describe their trade-offs:

- **One identity, every surface.** NieR's palette also drives its hacking minigame and map; Persona carries one look through menus, loading screens and logo. Apply the mode to empty, error, loading and settings states, not just the hero.
- **Limit colour and do not rely on it alone.** NieR's designer made stats readable through font thickness and darkness and used one drab red-orange when colour was unavoidable. Pair every alert colour with an icon, border or weight change so colour-blind users still get the signal.
- **Style the moments, keep critical information plain.** Use the display face for titles and brand moments. For safety-critical or task-critical text use a plain, high-legibility face. (A NERV-branded disaster-prevention app deliberately avoided the Evangelion title font for its disaster information because faithful styling would have hurt readability.)
- **Keep information in predictable places.** Persona's menus stay chaotic around the edges, but relevant info is kept in a consistent area in mostly white. Wildness belongs in decoration; position and hierarchy stay stable.
- **Layer texture, do not pile on clutter.** Start flat and clean, then add two or three effects (grid, vignette, scanlines). NieR's designer found pure flat design "flavourless" and fixed it with a subtle motif, not more ornament.
- **Simple controls, hidden depth.** NieR's director wanted menus a grandmother could use: stick plus confirm/cancel only, with undocumented shortcuts for experts. On the web: obvious primary path, optional keyboard shortcuts.
- **Motion is personality, so give a calm option.** Atlus menus are celebrated, yet Persona's were reported as hard to read at first, and some Metaphor players found the movement physically uncomfortable. Always honour `prefers-reduced-motion` and offer a visible "calm mode" (`data-calm` in `effects.css`) that removes decorative effects.
- **Spend a weirdness budget.** NieR hides a "broken UI" mode and nostalgia filters. Pick one deliberate surprise (a glitch on error, a hidden theme) rather than making everything strange.

## Authenticity and respect

- Do not scatter katakana or kanji as texture. Design press has criticised "broken Japanese" used as exotic decoration in Western graphics. Use real words with correct meaning (メニュー, 設定, 保存, 警告, 開始) and flag Japanese user-facing copy for native review.
- Do not copy licensed or trademarked assets: logos, character art, and fonts such as Evangelion's Matisse EB (a commercial Fontworks typeface) or the NieR logo. Take the principles and rebuild with free fonts and original shapes.
- Set `lang="ja"` on Japanese text and follow `references/typography.md` for line breaking.
- Treat the source games as inspiration for a language, not a template: anime compositions are built for 16:9 storytelling, not responsive product interaction.

## Final checklist

- [ ] Mode chosen, concept sentence stated, and the design is traceable to it
- [ ] Colour count is small; text contrast 4.5:1 or better (large text 3:1); alerts have a non-colour cue
- [ ] Display type used for moments, a readable face for critical content, Japanese text has `lang="ja"` and 16 px+ body
- [ ] Two or three texture effects at most; no random katakana decoration
- [ ] `prefers-reduced-motion` honoured and a calm mode available
- [ ] Mobile layout checked at about 390 px; tap targets 44 px+
- [ ] No copied logos, characters or commercial fonts
