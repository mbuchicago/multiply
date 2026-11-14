---
name: review-handwriting
description: Handwriting game review (2026-11-14) -- stroke shapes sound; mastery gate lets wrong formation count as "known"
metadata:
  type: project
---

Reviewed handwriting.html (Apple Pencil, sky/plane/grass/worm lines, trace -> dots -> solo).

- GLYPHS checked against Fundations / Zaner-Bloser: no real stroke-order conflicts. Only nit was lowercase q's upward flick (D'Nealian style), which the coverage score requires.
- Key flaw: "known" was best >= 2 stars, but 2 stars needs no correct formation, so stick-then-ball d or a clockwise o could graduate. Solo passes made with the grey road back (cur.help) also counted toward best.
- Hint text relied on reading. Suggested pairing hints with voice slots (hint/showme).

**Why:** For an Orton-Gillingham / Fundations child, correct formation (b/d) is the point of handwriting practice. Scoring has to gate on it.
**How to apply:** In future reviews of scored games, check that the mastery threshold actually needs the skill being taught. See [[review-times-tables]] for the same pattern (helped answers counted as mastery).
