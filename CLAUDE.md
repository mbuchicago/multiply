# CLAUDE.md — multiply/

## Project Purpose

This folder contains standalone learning tools and games for **Leon** (1st grade, age 6–7). Games are built to support whatever his class is currently working on, and may extend beyond the curriculum. The focus is on learning first, fun second — but both matter.

## Who Is Leon

- 1st grade, age 6–7
- Emerging reader — keep UI text minimal
- Game chrome should use large icons, single words, or short phrases
- Instructions must fit in one sentence maximum
- Respond well to celebration and positive reinforcement

## Target Platform

- **iPad**, launched from the home screen or Safari
- **No internet required** — all assets must be self-contained
- Files may be optionally installed as PWAs for offline access
- Test that everything works with airplane mode on

## Tech Constraints

- **Pure HTML/CSS/JS only** — no npm, no bundlers, no external CDN links
- One `.html` file per game — everything (styles, scripts, assets) inline in that file
- Use the Web Audio API for sounds (not `<audio>` tags with src URLs)
- Service workers are optional but useful for PWA installs

## Design Standards

- Bold, saturated colors — gradients welcome
- Large touch targets: minimum ~60px tap area for all interactive elements
- Success animations: confetti, glows, bounces — make wins feel great
- Audio feedback via Web Audio API for correct/incorrect responses
  - **All games must work fully if audio is unavailable or muted** (graceful degradation)
- Fonts: large, readable — prefer system fonts or inline @font-face
- No clutter — one clear task per screen

## Patterns to Reuse

Established patterns already in this repo:

| Pattern | File |
|---|---|
| Confetti animation | `multiply.html`, `red-words.html` |
| Spaced repetition deck | `red-words.html` |
| LocalStorage persistence | `red-words.html` |
| Swipe gesture support | `red-words.html` |
| Keyboard shortcut support | `red-words.html` |
| Web Audio API sounds | `place-value.html` |
| Base-10 block rendering | `place-value.html` |
| Bundling/unbundling animation | `place-value.html` |
| PWA service worker | `sw.js` + `manifest.json` |

Always check existing files for reusable logic before writing from scratch.

## File Naming

- One standalone `.html` file per game or tool
- Use descriptive `kebab-case` names: `addition-bubbles.html`, `number-bonds.html`
- Keep names short enough to recognize at a glance on the iPad home screen

## Workflow

1. User describes what Leon's class is working on
2. Claude proposes a game mechanic that targets that skill
3. Claude builds a complete, self-contained `.html` file
4. Verify it works offline (no external requests)

## Existing Tools

| File | Description |
|---|---|
| `index.html` | Game launcher hub — links to all games |
| `multiply.html` | Times Tables — multiplication quiz with 12×12 grid, confetti, PWA |
| `red-words.html` | Red Words — sight word flashcards with spaced repetition |
| `place-value.html` | Place Value — interactive base-10 blocks visualization with bundling animation |
