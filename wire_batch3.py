"""Wire batch3 UIDs:
 - Kicho I + II Whole Form video into poomsaeData.js
 - Jump rope: fill existing Single Unders + Double Unders, add High Knees + Single Leg Hop
 - Add new tire_drills category with 8 exercises
"""
import re
from pathlib import Path

ROOT = Path("C:/Users/big_g/Desktop/workoutbuilder-tkd")
UIDS = ROOT / "batch3_uids.txt"
POOMSAE = ROOT / "src/data/poomsaeData.js"
WARMUP = ROOT / "src/data/warmupExercises.js"

slot_to_uid = {}
for line in UIDS.read_text(encoding="utf-8").splitlines():
    if "|" not in line:
        continue
    slot, uid = line.split("|", 1)
    if uid != "FAILED":
        slot_to_uid[slot] = uid

embed = lambda uid: f"https://iframe.videodelivery.net/{uid}"

# ── 1. Wire Kichos ──
src = POOMSAE.read_text(encoding="utf-8")
for slot, uid in slot_to_uid.items():
    if not slot.startswith("poomsae:"):
        continue
    _, form_key, section = slot.split(":", 2)
    # form_key: kichoOne → "Kicho I"; kichoTwo → "Kicho II"
    display = {"kichoOne": "Kicho I", "kichoTwo": "Kicho II"}[form_key]
    pat = re.compile(
        r'(\{ name: "' + re.escape(display) + r' — ' + re.escape(section) + r'", video: )null( \},)'
    )
    src, n = pat.subn(r'\g<1>"' + embed(uid) + r'"\g<2>', src, count=1)
    assert n == 1, f"kicho miss: {display} — {section}"
POOMSAE.write_text(src, encoding="utf-8")
print("poomsaeData.js: Kicho I + II wired")

# ── 2. Jump rope: update existing entries + add 2 new ones ──
src = WARMUP.read_text(encoding="utf-8")

# Fill existing "Jump Rope (Single Unders)" and "Jump Rope (Double Unders)" entries
for existing_name, slot in [
    ("Jump Rope (Single Unders)", "cardio:Jump Rope (Single Unders)"),
    ("Jump Rope (Double Unders)", "cardio:Jump Rope (Double Unders)"),
]:
    uid = slot_to_uid[slot]
    pat = re.compile(
        r"(\{ name: '" + re.escape(existing_name) + r"', duration: '[^']+', description: '[^']*', youtube: )''( \})"
    )
    src, n = pat.subn(r"\g<1>'" + embed(uid) + r"'\g<2>", src, count=1)
    assert n == 1, f"miss existing jumprope: {existing_name}"

# Add 2 new jump rope entries after the existing Double Unders line
anchor = "{ name: 'Jump Rope (Double Unders)', duration: '30-60s', description: 'Advanced jump rope', youtube: '" + embed(slot_to_uid["cardio:Jump Rope (Double Unders)"]) + "' },"
if anchor in src:
    addition = (
        "\n            { name: 'Jump Rope (High Knees)', duration: '30-60s', "
        f"description: 'Jump rope while driving knees high', youtube: '{embed(slot_to_uid['cardio:Jump Rope (High Knees)'])}' }},"
        "\n            { name: 'Jump Rope (Single Leg Hop)', duration: '30s each leg', "
        f"description: 'One-leg jump rope — ankle + calf conditioning', youtube: '{embed(slot_to_uid['cardio:Jump Rope (Single Leg Hop)'])}' }},"
    )
    src = src.replace(anchor, anchor + addition, 1)
    print("warmupExercises.js: jump rope updated (2 existing filled, 2 new added)")
else:
    print("! Double Unders anchor not found — new jumprope entries not inserted")

# ── 3. Add new tire_drills category ──
TIRE_ENTRIES = [
    ("Tire Double Taps",             "30s",       "Fast two-foot taps on the tire — ankle snap + rhythm"),
    ("Tire Jump Shuffle",            "30s",       "Jump-shuffle in and out of the tire — change direction on the beat"),
    ("Tire Pushup (Feet on Tire)",   "8-10 reps", "Pushup with feet elevated on tire — upper body emphasis"),
    ("Tire Pushup (Hands on Tire)",  "8-10 reps", "Pushup with hands on tire — decline, chest emphasis"),
    ("Tire Switch Feet",             "30s",       "Switch lead foot tapping tire — lateral coordination"),
    ("Tire Switch Hop Flip",         "30s",       "Switch hop + flip motion — explosive hip drive"),
    ("Tire Switch Hops",             "30s",       "Hop from one side to the other clearing tire each rep"),
    ("Tire Walk Ups",                "30s",       "Step up onto tire, alternating lead foot — leg warm-up"),
]
tire_block_entries = []
for name, duration, description in TIRE_ENTRIES:
    uid = slot_to_uid[f"tire:{name}"]
    tire_block_entries.append(
        f"            {{ name: '{name}', duration: '{duration}', "
        f"description: '{description}', youtube: '{embed(uid)}' }}"
    )
tire_block = """
    tire_drills: {
        label: "Tire Drills",
        exercises: [
""" + ",\n".join(tire_block_entries) + """
        ]
    },
"""

# Insert tire_drills before the `stretching:` category (last in the file)
stretching_anchor = "    stretching: {"
idx = src.index(stretching_anchor)
src = src[:idx] + tire_block.lstrip("\n") + "\n" + src[idx:]
WARMUP.write_text(src, encoding="utf-8")
print("warmupExercises.js: tire_drills category added (8 entries)")

print("\nDONE")
