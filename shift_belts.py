"""Shift poomsaeData.js belt mapping:
 - Replace single Kicho entry with Kicho I (blocks) + Kicho II (kicks)
 - Shift every Taegeuk down 2 belt levels (high-white→yellow, etc.)
 - Update Koryo/Keumgang/Taebaek belt labels (1st/2nd/3rd Dan shift)
 - Insert Review entry for Deputy Black Belt
"""
import re
from pathlib import Path

P = Path("C:/Users/big_g/Desktop/workoutbuilder-tkd/src/data/poomsaeData.js")
src = P.read_text(encoding="utf-8")

# ── 1. Replace the kicho entry (keeps its `sections` shape — videos stay null) ──
old_kicho_block = re.search(
    r"  kicho: \{[\s\S]+?  \},\n",  # non-greedy match of the kicho object
    src,
)
assert old_kicho_block, "kicho block not found"

new_kicho_blocks = """  kichoIl: {
    name: "Kicho Il Jang",
    korean: "기본 일장",
    belt: "white",
    beltLabel: "White Belt",
    trigram: null,
    meaning: "Foundation — Blocks",
    totalMoves: 20,
    coachingNotes: [
      "Low block, middle block, high block in front stance — chamber visible every time, no floating hands.",
      "Stance length and width must stay consistent — Kicho is a stance test disguised as a form.",
      "Slow is correct, fast is earned — pauses between techniques should look deliberate, not tired.",
    ],
    sections: [
      { name: "Kicho Il Jang — First Half", video: null },
      { name: "Kicho Il Jang — Whole Form", video: null },
    ],
  },

  kichoEe: {
    name: "Kicho Ee Jang",
    korean: "기본 이장",
    belt: "high-white",
    beltLabel: "High White Belt",
    trigram: null,
    meaning: "Foundation — Kicks",
    totalMoves: 20,
    coachingNotes: [
      "Front kick chamber must be tight and visible — knee up first, then snap. No round motion.",
      "Recovery stance after the kick matters more than the kick itself — return to front stance cleanly.",
      "Hands stay chambered while kicking — do not collapse the upper body during leg work.",
    ],
    sections: [
      { name: "Kicho Ee Jang — First Half", video: null },
      { name: "Kicho Ee Jang — Whole Form", video: null },
    ],
  },
"""
src = src.replace(old_kicho_block.group(0), new_kicho_blocks)

# ── 2. Shift Taegeuk belts (non-kicho) ──
BELT_SHIFTS = {
    "taegeukIlJang":   ("high-white",  "High White Belt", "yellow",     "Yellow Belt"),
    "taegeukEeJang":   ("yellow",      "Yellow Belt",     "high-yellow","High Yellow Belt"),
    "taegeukSamJang":  ("high-yellow", "High Yellow Belt","green",      "Green Belt"),
    "taegeukSaJang":   ("green",       "Green Belt",      "high-green", "High Green Belt"),
    "taegeukOhJang":   ("high-green",  "High Green Belt", "blue",       "Blue Belt"),
    "taegeukYookJang": ("blue",        "Blue Belt",       "high-blue",  "High Blue Belt"),
    "taegeukChilJang": ("high-blue",   "High Blue Belt",  "red",        "Red Belt"),
    "taegeukPalJang":  ("red",         "Red Belt",        "high-red",   "High Red Belt"),
}

for key, (old_belt, old_label, new_belt, new_label) in BELT_SHIFTS.items():
    # Find the form's belt + beltLabel lines scoped to that key
    pattern = re.compile(
        r"(  " + key + r": \{\s*\n(?:    [^\n]+\n)*?    belt: \")" + re.escape(old_belt) + r"(\",\s*\n    beltLabel: \")" + re.escape(old_label) + r"(\",)",
    )
    new_src, n = pattern.subn(r"\g<1>" + new_belt + r"\g<2>" + new_label + r"\g<3>", src, count=1)
    assert n == 1, f"failed to shift {key}: {n} matches"
    src = new_src

# ── 3. Koryo/Keumgang/Taebaek dan shifts ──
DAN_SHIFTS = [
    ("koryo",    "high-red", "High Red Belt / 1st Dan",        "black", "Black Belt / 1st Dan"),
    ("keumgang", "deputy",   "Deputy Black Belt / 2nd Dan",    "dan2",  "2nd Dan"),
    ("taebaek",  "black",    "Black Belt / 3rd Dan",           "dan3",  "3rd Dan"),
]
for key, old_belt, old_label, new_belt, new_label in DAN_SHIFTS:
    pattern = re.compile(
        r"(  " + key + r": \{\s*\n(?:    [^\n]+\n)*?    belt: \")" + re.escape(old_belt) + r"(\",\s*\n    beltLabel: \")" + re.escape(old_label) + r"(\",)",
    )
    new_src, n = pattern.subn(r"\g<1>" + new_belt + r"\g<2>" + new_label + r"\g<3>", src, count=1)
    assert n == 1, f"failed dan shift {key}: {n} matches"
    src = new_src

# ── 4. Insert Review entry between taegeukPalJang and koryo ──
review_block = """
  review: {
    name: "Review",
    korean: null,
    belt: "deputy",
    beltLabel: "Deputy Black Belt",
    trigram: null,
    meaning: "Review of all prior forms before Black Belt test",
    totalMoves: null,
    coachingNotes: [
      "No new form at this level — demonstrate every Taegeuk + Kicho from memory, clean and controlled.",
      "Judges look for integration: what was raw at each earlier belt should now look unified and effortless.",
      "This is where weaknesses in early forms become obvious — use this belt to fix them before Koryo.",
    ],
    sections: [],
  },
"""

# Insert right before "koryo: {" (which is the first entry after taegeukPalJang)
koryo_anchor = "  koryo: {"
idx = src.index(koryo_anchor)
src = src[:idx] + review_block.lstrip("\n") + "\n" + src[idx:]

P.write_text(src, encoding="utf-8")
print("poomsaeData.js restructure complete")
