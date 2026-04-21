"""Inject youtube: 'https://iframe.videodelivery.net/{uid}' into each boxing exercise
in martialArtsLibrary.js using boxing_video_uids.txt as the mapping source."""
import re
from pathlib import Path

ROOT = Path("C:/Users/big_g/Desktop/workoutbuilder-tkd")
LIB = ROOT / "src/data/martialArtsLibrary.js"
UIDS = ROOT / "boxing_video_uids.txt"

# Map libkey (from uids file) -> exercise name (from library)
KEY_TO_NAME = {
    "punches:Heavy Bag Jab": "Heavy Bag Jab",
    "punches:Heavy Bag Cross": "Heavy Bag Cross",
    "punches:Heavy Bag Hook": "Heavy Bag Hook",
    "punches:Heavy Bag Uppercut": "Heavy Bag Uppercut",
    "punches:Heavy Bag High-Low Cross": "Heavy Bag High-Low Cross",
    "combos:Combo 1 Jab-Cross": "Heavy Bag Combo 1: Jab-Cross",
    "combos:Combo 2 Jab-Cross-Hook": "Heavy Bag Combo 2: Jab-Cross-Hook",
    "combos:Combo 3 Jab-Cross-Hook-Uppercut": "Heavy Bag Combo 3: Jab-Cross-Hook-Uppercut",
    "combos:Combo 4 Jab-Cross-Hook-Cross": "Heavy Bag Combo 4: Jab-Cross-Hook-Cross",
    "combos:Combo 5 Cross-Hook-Cross-Hook": "Heavy Bag Combo 5: Cross-Hook-Cross-Hook",
    "combos:Double Jab": "Heavy Bag Double Jab Combo",
    "combos:Jab-Hook": "Heavy Bag Jab-Hook Combo",
    "combos:Jab-Hook Body": "Heavy Bag Jab-Hook (Body)",
    "combos:Jab-Uppercut": "Heavy Bag Jab-Uppercut Combo",
    "combos:High-Low Jab": "Heavy Bag High-Low Jab Combo",
    "combos:Cross-Over": "Heavy Bag Cross-Over Combo",
    "combos:Body-Head-Cross": "Heavy Bag Body Hook - Head Hook - Cross",
    "footwork:Pivot Left": "Heavy Bag Pivot Left",
    "footwork:Pivot Right": "Heavy Bag Pivot Right",
    "footwork:Pivot Left + Combo": "Heavy Bag Pivot Left + Combo",
    "footwork:Step-Through": "Heavy Bag Step-Through Combo",
    "defense:Slip + Combo": "Heavy Bag Slip + Combo",
    "defense:Roll + Combo": "Heavy Bag Roll + Combo",
    "conditioning:Shadow Box 3lb": "Shadow Boxing with 3lb Weights",
    "conditioning:Burpee Combo": "Heavy Bag Burpee Combo",
    "conditioning:Hop-Hop-Squat": "Heavy Bag Hop-Hop-Squat Combo",
    "conditioning:Split-Jump": "Heavy Bag Split-Jump Combo",
    "conditioning:Ride the Bike": "Heavy Bag Ride the Bike",
    "speedBag:Classic": "Speed Bag (Boxing)",
    "speedBag:Paw": "Speed Bag Paw (Learning)",
    "speedBag:Rapid Fire": "Speed Bag Rapid Fire",
    "speedBag:Back Fist": "Speed Bag with Back Fist",
    "speedBag:Elbow": "Speed Bag with Elbow",
}

# Build name -> uid map
name_to_uid = {}
for line in UIDS.read_text(encoding="utf-8").splitlines():
    if "|" not in line:
        continue
    key, uid = line.split("|", 1)
    if uid == "FAILED":
        continue
    name = KEY_TO_NAME.get(key)
    if not name:
        print(f"! unknown key: {key}")
        continue
    name_to_uid[name] = uid

print(f"loaded {len(name_to_uid)}/33 name->uid mappings")

src = LIB.read_text(encoding="utf-8")

# For each exercise name, find its line in the boxing section (starts line ~545)
# and inject the youtube field before the closing `},`.
# Match pattern: { name: 'EXACT_NAME', ... },
# We'll insert the youtube field after the name field.

edits = 0
for name, uid in name_to_uid.items():
    # Escape special regex chars in name
    esc = re.escape(name)
    # Match: { name: '...NAME...',
    pattern = re.compile(
        r"(\{\s*name:\s*'" + esc + r"'\s*,)",
    )
    yt = f" youtube: 'https://iframe.videodelivery.net/{uid}',"
    new_src, n = pattern.subn(r"\1" + yt, src, count=1)
    if n == 1:
        src = new_src
        edits += 1
    else:
        print(f"! no match for: {name!r}")

print(f"applied {edits}/33 youtube injections")

LIB.write_text(src, encoding="utf-8")
print(f"wrote {LIB}")
