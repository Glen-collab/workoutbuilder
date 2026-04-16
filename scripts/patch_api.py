import sys

with open("/opt/bestrongagain/workout_api.py", "r") as f:
    content = f.read()

patches_applied = 0

# Patch 1: Add questionnaireCompleted to load-program response
target1 = '"cumulativeWeeks": position.get("cumulative_weeks") or 0,'
if target1 in content and "questionnaireCompleted" not in content:
    content = content.replace(target1, target1 + """
                    "questionnaireCompleted": bool(position.get("questionnaire_completed")),
                    "consentAccepted": bool(position.get("consent_accepted")),""")
    patches_applied += 1
    print("Patch 1: Added questionnaireCompleted to response")

# Patch 2: Carry name from previous position
target2 = 'cumulative_weeks = int(prev["cumulative_weeks"] or 0) if prev else 0\n\n            bench'
if target2 in content and "Carry name" not in content:
    content = content.replace(target2,
        'cumulative_weeks = int(prev["cumulative_weeks"] or 0) if prev else 0\n'
        '            # Carry name and questionnaire status from previous program\n'
        '            if not name and prev:\n'
        '                name = prev.get("user_name") or ""\n\n'
        '            bench')
    patches_applied += 1
    print("Patch 2: Added name carry-over")

# Patch 3: Add questionnaire fields to INSERT
target3 = 'height_inches, weight_lbs, age, gender, cumulative_weeks)\n                VALUES (%s, %s, %s, 1, 1, %s, %s, %s, %s, %s, %s, %s, %s, %s)\n            """, (code, email, name, bench, squat, deadlift, clean, height, weight, age, gender, cumulative_weeks))'
if target3 in content:
    content = content.replace(target3,
        'height_inches, weight_lbs, age, gender, cumulative_weeks,\n'
        '                 questionnaire_completed, consent_accepted)\n'
        '                VALUES (%s, %s, %s, 1, 1, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)\n'
        '            """, (code, email, name, bench, squat, deadlift, clean, height, weight, age, gender, cumulative_weeks,\n'
        '                  bool(prev and prev.get("questionnaire_completed")), bool(prev and prev.get("consent_accepted"))))')
    patches_applied += 1
    print("Patch 3: Added questionnaire fields to INSERT")

# Patch 4: Save questionnaire completion in submit-questionnaire
target4 = '    send_email(TRAINER_EMAIL, f"New Client Intake: {name}", html, reply_to=email)\n    return jsonify({"success": True, "data": {"email_sent": True}})'
if target4 in content and "questionnaire_completed = TRUE" not in content:
    content = content.replace(target4,
        '    # Mark questionnaire as completed in DB\n'
        '    db2 = get_db()\n'
        '    try:\n'
        '        cur2 = db2.cursor()\n'
        '        cur2.execute("""\n'
        '            UPDATE workout_user_position\n'
        '            SET questionnaire_completed = TRUE, consent_accepted = %s\n'
        '            WHERE user_email = %s AND access_code = %s\n'
        '        """, (waiver_accepted, email, code))\n'
        '        db2.commit()\n'
        '    except Exception as e:\n'
        '        print(f"DB update error: {e}")\n'
        '    finally:\n'
        '        db2.close()\n'
        '\n'
        '    send_email(TRAINER_EMAIL, f"New Client Intake: {name}", html, reply_to=email)\n'
        '    return jsonify({"success": True, "data": {"email_sent": True}})')
    patches_applied += 1
    print("Patch 4: Added questionnaire DB update on submit")

with open("/opt/bestrongagain/workout_api.py", "w") as f:
    f.write(content)

print(f"\nDone: {patches_applied} patches applied")
