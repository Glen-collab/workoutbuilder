"""Wire batch2 UIDs:
 - inject video fields in poomsaeData.js
 - insert Sandbag Lunge Walks entry in exerciseLibrary.js tactical category
 - insert 6 hurdle entries in mobilityExercises.js hurdle_drills
"""
import re
from pathlib import Path

ROOT = Path("C:/Users/big_g/Desktop/workoutbuilder-tkd")
UIDS = ROOT / "batch2_uids.txt"
POOMSAE = ROOT / "src/data/poomsaeData.js"
EXLIB = ROOT / "src/data/exerciseLibrary.js"
MOBIL = ROOT / "src/data/mobilityExercises.js"

# Load UID map
slot_to_uid = {}
for line in UIDS.read_text(encoding="utf-8").splitlines():
    if "|" not in line:
        continue
    slot, uid = line.split("|", 1)
    if uid == "FAILED":
        continue
    slot_to_uid[slot] = uid

def embed(uid: str) -> str:
    return f"https://iframe.videodelivery.net/{uid}"

# ─────────────────────────────────────────────────────
# 1. Wire poomsae
# ─────────────────────────────────────────────────────
FORM_DISPLAY = {
    "taegeukIlJang": "Taegeuk Il Jang",
    "taegeukEeJang": "Taegeuk Ee Jang",
    "taegeukSamJang": "Taegeuk Sam Jang",
    "taegeukSaJang": "Taegeuk Sa Jang",
    "taegeukOhJang": "Taegeuk Oh Jang",
    "taegeukYookJang": "Taegeuk Yook Jang",
    "taegeukChilJang": "Taegeuk Chil Jang",
    "taegeukPalJang": "Taegeuk Pal Jang",
    "koryo": "Koryo",
    "keumgang": "Keumgang",
    "taebaek": "Taebaek",
}

src = POOMSAE.read_text(encoding="utf-8")
poomsae_edits = 0
for slot, uid in slot_to_uid.items():
    if not slot.startswith("poomsae:"):
        continue
    _, form_key, section = slot.split(":", 2)
    display = FORM_DISPLAY[form_key]
    # Match: { name: "Taegeuk Il Jang — First Half", video: null },
    pattern = re.compile(
        r'(\{ name: "' + re.escape(display) + r' — ' + re.escape(section) + r'", video: )null( \},)'
    )
    new_src, n = pattern.subn(r'\1"' + embed(uid) + r'"\2', src, count=1)
    if n == 1:
        src = new_src
        poomsae_edits += 1
    else:
        print(f"! no match: {display} — {section}")
POOMSAE.write_text(src, encoding="utf-8")
print(f"poomsaeData.js: {poomsae_edits}/22 wired")

# ─────────────────────────────────────────────────────
# 2. Sandbag Lunge Walks into exerciseLibrary.js tactical
# ─────────────────────────────────────────────────────
slug_uid = slot_to_uid.get("tactical:Sandbag Lunge Walks")
if slug_uid:
    src = EXLIB.read_text(encoding="utf-8")
    # Insert after the first Sandbag entry line: "Sandbag Clean"
    anchor = "{ name: 'Sandbag Clean', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Sandbag'], contraindications: [], youtube: '' },"
    if anchor in src:
        new_entry = (
            "{ name: 'Sandbag Lunge Walks', movement: ['Single Leg'], "
            "intent: ['Conditioning'], equipment: ['Sandbag'], "
            f"contraindications: [], youtube: '{embed(slug_uid)}' }},"
        )
        src = src.replace(anchor, anchor + "\n                    " + new_entry, 1)
        EXLIB.write_text(src, encoding="utf-8")
        print("exerciseLibrary.js: Sandbag Lunge Walks added to tactical")
    else:
        print("! anchor for Sandbag Clean not found in exerciseLibrary.js")

# ─────────────────────────────────────────────────────
# 3. Hurdle entries into mobilityExercises.js hurdle_drills
# ─────────────────────────────────────────────────────
HURDLE_ENTRIES = [
    ("Hurdle Down Middle (Forward/Backward)",
        "5 each direction",
        "Walk forward and backward through the middle of the hurdle line"),
    ("Hurdle Mobility Lateral Skips",
        "5 each side",
        "Lateral skip over each hurdle — build rhythm + hip pop"),
    ("Hurdle Mobility Lateral Straight Leg",
        "5 each side",
        "Lateral pass with straight lead leg — adductor + hip opener"),
    ("Hurdle Mobility Single Leg Walk Over",
        "5 each leg",
        "Single leg repeats over each hurdle — balance + hip mobility"),
    ("Hurdle Mobility (Full Circuit)",
        "1 round",
        "Full hurdle mobility sequence — walks, skips, single leg, laterals"),
    ("Single Leg Hurdle Mobility (Forward/Backward)",
        "5 each leg",
        "One-leg forward/backward pass pattern over hurdles"),
]

src = MOBIL.read_text(encoding="utf-8")
# Build the new entry block — insert right after the "// Individual exercises" comment
lines = []
for name, duration, description in HURDLE_ENTRIES:
    slot = f"hurdle:{name}"
    uid = slot_to_uid.get(slot)
    if not uid:
        print(f"! no UID for {name}")
        continue
    lines.append(
        f"            {{ name: '{name}', duration: '{duration}', "
        f"description: '{description}', "
        f"youtube: '{embed(uid)}' }},"
    )
insert_block = "\n".join(lines) + "\n"

anchor = "            // Individual exercises\n"
if anchor in src:
    src = src.replace(anchor, anchor + insert_block, 1)
    MOBIL.write_text(src, encoding="utf-8")
    print(f"mobilityExercises.js: {len(lines)} hurdle entries inserted")
else:
    print("! Individual exercises anchor not found")

print("\nDONE")
