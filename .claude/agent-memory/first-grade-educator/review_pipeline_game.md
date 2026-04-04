---
name: Pipeline game review findings
description: Key bugs and patterns found in pipeline.html number sequence game review (April 2026)
type: project
---

Pipeline game (pipeline.html) reviewed 2026-04-01.

Critical bug: roundResults only tracks correct answers (line 1656), and questions never advance on wrong answers. This means accuracy is always 100%, stars are always 3, and levels always unlock. The star/accuracy/unlock system is non-functional.

Halving pattern can produce sequences ending in repeated 0s (e.g., [16, 8, 4, 2, 1, 0, 0]) which is confusing.

Leon profile note: he loves construction/engineering themes. The pipeline/welding metaphor is a strong engagement fit.

**Why:** These are blocking issues that undermine the progression system and could confuse or bore Leon.
**How to apply:** When reviewing future games, always verify that scoring/progression systems actually differentiate between good and poor performance. Check edge cases in sequence generators for degenerate outputs.
