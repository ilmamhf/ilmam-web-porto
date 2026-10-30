# Punk-kinetic (Persona 5 / Metaphor: ReFantazio-style)

UI as the main event: loud, stylish, collage-like, and moving. Tokens: `data-mode="punk"`. Atlus is the reference. It is also the riskiest mode for usability, so read the cautions.

## Concept
"The UI carries the game's identity as much as its information." Atlus pairs a single hot colour with each game (Persona 5 red, Persona 4 yellow, Catherine pink) and carries it through every menu, loading screen and logo. Metaphor's UI team framed the goal as "hyper stylish": cool, immersive, intriguing and buzzworthy, and treated the UI as something that connects the player to the world rather than a layer on top.

## Recipe
- **One hot colour** with black and white. Everything else is neutral.
- **Tilted, angular panels** that overlap like a cut-out collage or a punk gig poster; use `.fx-tilt`, `.fx-cut`, small rotations (`.fx-rotate-a/b`).
- **Stable information zone.** Atlus keeps the relevant information in the same area, mostly in white, even when the surroundings are wild. Keep labels, values and primary actions in predictable positions.
- **Typography as image.** Hand-cut, uneven, letter-by-letter treatment; vary size, rotation and weight per word. Metaphor's designers customised type letter by letter for each menu and drew on traditional Japanese painting and J-pop lyric videos, aiming for peak expressiveness "without going over the edge".
- **Menus unfurl with motion and sound.** Staggered entrances (`.fx-kinetic` with `--i`), snap easing with a little overshoot (250-350 ms), the selected item scaling and rotating. If you add sound, make it opt-in and short.
- **Fantasy variant (Metaphor).** Papery, parchment-like panels and a painted, storybook feel instead of pure black and white.

## Palette (contrast checked)
Black `#000`, white `#FFF`, hot red `#D4001A` as a fill with white text (5.5:1). On black, red is only 3.8:1 as text, so use `--c-accent-text: #FF4D4D` (6.4:1) for small red text.

## Cautions (from the creators themselves)
- Persona's director said Persona 5's menus were "impossible to read at first"; Masahiro Sakurai (creator of Kirby and Smash Bros.) called its UI unconventionally cluttered. Style costs usability, so spend that cost only where it is worth it.
- Persona 5 Tactica moved to a more Constructivist look with a more readable font, which made it more accessible.
- Players reported Metaphor's constant movement as overstimulating, and the UI designer said accessibility options were something to provide. Build a calm mode in from day one (`data-calm`).

## Rules
1. Keep body copy and forms on plain white or black panels with normal type; put the punk treatment on headers, nav and decoration.
2. Animate the focus, not everything at once.
3. Minimum 16 px body text; never rotate text below about 18 px.
4. Provide calm mode and honour `prefers-reduced-motion`.
5. Good for hero sections, nav overlays, event and music sites, onboarding. Not for dense data entry.
