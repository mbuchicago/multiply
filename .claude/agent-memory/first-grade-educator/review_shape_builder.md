---
name: Shape Builder game review findings
description: Key bugs and engagement patterns found in shape-builder.html geometry game review (April 2026)
type: project
---

Shape Builder game (shape-builder.html) reviewed 2026-04-01.

Critical bug: "Divide It" blueprint (Level 4) defines `question` and `answer` properties that are never rendered or evaluated in game logic. The decomposition mechanic is not implemented -- it plays as a regular build. This is the most educationally interesting mechanic in the game and should be completed.

Tool labels use 0.6rem font-size which is too small for iPad use by a 6-year-old.

Ghost shapes use fixed 60x50px SVG size instead of sizing to their zone.

Strong patterns worth reusing:
- Shape info popup (brief attribute display on selection) is excellent incidental learning
- Growing skyline visualization as progress reward is highly motivating
- Blueprint ghost outlines in build zones provide clear spatial scaffolding
- The distractors-in-toolbox pattern forces real shape discrimination

Construction/architecture theme confirmed as a strong engagement fit for Leon.

**Why:** The decomposition mechanic bug means a key educational feature is non-functional. The small labels are a recurring pattern (see also pipeline review) suggesting font sizes need consistent checking.
**How to apply:** Always verify that data-defined game mechanics are actually wired into the game logic. Check minimum font sizes against 0.75rem floor for iPad readability.
