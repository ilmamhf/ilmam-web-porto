# Other modes and localisation (use only when asked)

These are authentically Japanese too, but they are not the "cool / minimal / tech / game" direction, so apply them only when the user asks or the audience requires them.

## Information-dense commerce (Rakuten / Yahoo! Japan / kakaku.com style)
Why it looks that way: in a risk-averse buying culture, detail reads as trust (specs, price, conditions, return terms, seller ratings), kanji carries a lot of meaning per character, and portal-style layouts shaped expectations. Modern Japanese brands are shifting toward less density with clarity upfront, more whitespace, and large photos with no text on them.
- 12-column grid, narrow gutters, repeated identical modules (image, title, price, badges, one action).
- Section headers with coloured bars; consistent chips (新着 new, 限定 limited, 送料無料 free shipping); one red style for prices.
- Order inside the density: strict alignment, repeated modules, few distinct colours.
- Japanese body text no smaller than 14 px; line-height 1.6 or more.

## Kawaii / playful
Rounded geometry, pastel base, one mascot used consistently, sticker badges, hand-drawn accents, friendly microcopy. Keep contrast accessible.

## Localisation for users in Japan
- `lang="ja"`, font stacks and line-breaking from `typography.md`.
- Name fields: family name first, optional furigana (kana reading) field.
- Postal code with address auto-fill; prefecture, city, street ordering.
- Accept full-width and half-width digits and normalise them rather than rejecting.
- Dates as year/month/day; era names (令和) in government and finance contexts.
- Consistent politeness level in microcopy: です/ます for consumer UI, more formal keigo for banks, insurance and government. Do not mix casual and polite in one flow.
- Confirmation dialogs for destructive actions are expected.
- Seasonal calendar (New Year, Golden Week, Obon, year-end) affects launch timing and banners.
