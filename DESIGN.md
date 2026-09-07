# Ads Mastery Line — design notes

Fourth fork of the shared transit-map engine.
Lineage: LLM Mastery Line (midnight navy) → Marketing Mastery Line (olive)
→ Business AI Conduit Line (ink violet, pending palette pick) → **this line
(espresso + mustard leather)**.

## Palette

The user picked the accent from a mustard leather swatch: core tone
**#DD9420** (warm, orange-side mustard; brighter golds were rejected as too
yellow). Family:

- Dark (default): espresso ground `#1d1508`, cream porcelain `#f4ead0`,
  mustard accent `#dd9420`, mustard wash `rgba(221,148,32,0.12)` on boards,
  panels and station tables, warm parchment text `#d3c5a0` / `#9e8e67`.
- Light (day map): cream paper `#efe6cd`, umber ink `#241b08`, darkened
  mustard `#926215` for contrast on cream.
- On this line the mustard is **both identity and action color**: primary
  buttons, progress bar, active tab underline, roundel core and today-marker
  are all `--mustard`. Scarlet stays reserved for the p1 line ink and
  destructive actions only.

## Engine deltas vs Conduit main

- localStorage key `ads_mastery_v1` (all four lines coexist).
- Ported the Marketing Mastery Line map-label fixes that Conduit main never
  received: Depart label below its dot (`start.y + 30`), Terminus label
  right of its dot (`end.x + 16`). Verified live before shipping.
- `TYPE_LABEL` extended with `tool` and `practice` station types.
- Backup filename `ads-backup-*.json`.

## Curriculum shape

101 stations, 1 hour each, 9 lines. Short term (p1–p5, 60 stations):
launch and diagnose real campaigns on both engines for an SMB. Long term
(p6–p9, 41 stations): creative, audiences, measurement, scaling and agency
operations. Free first; exactly one paid-flagged station (the optional Meta
certification exam). Hands-on checkpoints land roughly every 12 stations on
a chosen "practice business".

Station counts: p1 12, p2 13, p3 12, p4 11, p5 12, p6 10, p7 10, p8 10,
p9 11.
