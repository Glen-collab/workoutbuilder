import { useState, useEffect } from 'react';

const coachingCues = {
  general: {
    label: "General",
    cues: [
      "Focus on control on the way down",
      "Focus on controlling the weight",
      "Slow on the way down, Explode up",
      "Go slow on the way up",
      "If it hurts, don't do it and let me know in the notes",
      "Focus on mobility between sets and using the chatbot to point out areas that need improving",
      "Use a band for assistance",
      "Control the eccentric, pause at the bottom",
      "Full range of motion on every rep",
      "Don't rush — quality over speed",
      "Match your breathing to the movement",
      "Reset between each rep if needed",
      "Use a mirror to check your form",
      "Lighter weight, perfect form first",
    ]
  },
  breathing: {
    label: "Breathing & Bracing",
    cues: [
      "Big air and brace your abs — don't put the air in your head but in your belly",
      "Breathe out on the exertion (the hard part)",
      "Inhale on the way down, exhale on the way up",
      "Brace your core like someone is about to punch you",
      "Take a deep belly breath before each rep",
      "Don't hold your breath — breathe through the movement",
      "Exhale hard at the top of the rep",
      "Breathe in through your nose, out through your mouth",
    ]
  },
  upper_push: {
    label: "Upper Body — Push",
    cues: [
      "Squeeze your shoulder blades",
      "Arch your back hard and squeeze your shoulder blades",
      "Arch your back",
      "Feet on the ground and big arch — if your low back is tight, do a couch stretch",
      "Keep your elbows at 45 degrees, not flared out",
      "Drive through your palms",
      "Lock out at the top",
      "Tuck your chin, don't crane your neck",
      "Retract and depress your scapula before pressing",
      "Keep your wrists stacked over your elbows",
      "Squeeze the bar hard — irradiation tension",
      "Touch your chest on every rep (bench)",
      "Full lockout overhead — biceps by your ears",
      "Don't let your elbows drift behind you on dips",
    ]
  },
  upper_pull: {
    label: "Upper Body — Pull",
    cues: [
      "Pull your chest to the bar as you pulldown",
      "Pull your chest to the bar instead of bringing the bar to your chest",
      "Squeeze your shoulder blades at the bottom of each row",
      "Lead with your elbows",
      "Initiate with your back, not your biceps",
      "Think about putting your elbows in your back pockets",
      "Depress your shoulders — don't shrug",
      "Hold the squeeze for a 1-count at peak contraction",
      "Use a thumbless grip to take biceps out of it",
      "Drive your elbows behind you",
      "Keep your chest proud and shoulders back",
    ]
  },
  lower_squat: {
    label: "Lower Body — Squat & Lunge",
    cues: [
      "Push through your heels",
      "Keep your chest up",
      "Sit your butt back and chest up",
      "Push your knees out or pretend your shoes are screws and you are screwing in the floor",
      "Knees outside your toes",
      "You should see your big toe on the inside of your knee",
      "Sit back and use your arms to pull up if needed",
      "Drive your knees over your pinky toes",
      "Break at the hips first, then the knees",
      "Keep your weight in your midfoot to heel",
      "Squeeze your glutes at the top",
      "Don't let your knees cave in",
      "Go as deep as your mobility allows with a flat back",
      "Pause at the bottom for a 2-count",
      "Keep your torso upright — don't lean forward",
      "Spread the floor apart with your feet",
    ]
  },
  lower_hinge: {
    label: "Lower Body — Hinge & Pull",
    cues: [
      "Arch your back",
      "You should feel it in your hamstrings",
      "Push your hips back like you're closing a car door",
      "Keep the bar close to your body — drag it up your legs",
      "Soft knees, hinge at the hips",
      "Chest proud, lats engaged, bar tight to shins",
      "Squeeze your glutes hard at the top — don't hyperextend",
      "Think about pushing the floor away from you",
      "Hamstrings loaded at the bottom, glutes fire at the top",
      "Feel the stretch in your hamstrings before you pull",
      "Flat back the entire time — no rounding",
      "Shoulders should be slightly in front of the bar at setup",
    ]
  },
  core_stability: {
    label: "Core & Stability",
    cues: [
      "Keep your Hips stable as you rotate",
      "Stay on the outside of your foot",
      "Squeeze your glutes and brace your abs",
      "Don't let your hips sag or pike",
      "Belly button to spine",
      "Ribs down, pelvis tucked",
      "Think about making yourself as long as possible",
      "Anti-rotation — fight the twist",
      "Slow and controlled — no momentum",
      "Keep your hips square to the ground",
      "Engage your pelvic floor — like stopping the flow",
      "Posterior pelvic tilt — flatten your low back",
    ]
  },
  tempo_intensity: {
    label: "Tempo & Intensity",
    cues: [
      "3 seconds down, 1 second pause, 1 second up",
      "Slow eccentric — 4 seconds on the way down",
      "Pause at the bottom for 2 seconds",
      "Explosive on the concentric (up phase)",
      "Last 2 reps should be a grind",
      "RPE 7-8 — leave 2-3 reps in the tank",
      "RPE 9 — one rep left in the tank",
      "Go to failure on the last set only",
      "Warm up sets first, then working weight",
      "Increase weight each set (ascending)",
      "Same weight all sets — focus on form",
      "Drop set on the last set",
      "Rest-pause on the last set if needed",
    ]
  },
  mobility_warmup: {
    label: "Mobility & Warmup",
    cues: [
      "Hold each stretch for 30 seconds minimum",
      "Breathe into the stretch — don't force it",
      "Move through full range of motion slowly",
      "Don't bounce — smooth, controlled movement",
      "If you feel a pinch, back off and try a different angle",
      "This should feel like a stretch, not pain",
      "Use your breath to go deeper into the stretch",
      "Circle in both directions — clockwise and counterclockwise",
      "Keep tension on the band throughout",
      "Active stretch — engage the opposing muscle",
      "Rock gently back and forth to find tight spots",
      "Foam roll any tight areas for 60 seconds first",
    ]
  },
};

export default function CuesPicker({ isOpen, onClose, onAppendText }) {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [appendedIndices, setAppendedIndices] = useState(new Set());

  useEffect(() => {
    if (isOpen) setAppendedIndices(new Set());
  }, [isOpen]);

  if (!isOpen) return null;

  const categories = Object.keys(coachingCues);
  const cues = coachingCues[selectedCategory]?.cues || [];

  const handleAppend = (cue, index) => {
    onAppendText(cue);
    setAppendedIndices((prev) => new Set(prev).add(`${selectedCategory}-${index}`));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-5 py-3.5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Coaching Cues</h2>
              <p className="text-white/70 text-sm">Click cues to add them to exercise notes</p>
            </div>
            <button onClick={onClose} className="bg-white/20 border-none text-white text-base w-[30px] h-[30px] rounded-full cursor-pointer flex items-center justify-center">&times;</button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">

          {/* Category pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {coachingCues[cat].label}
              </button>
            ))}
          </div>

          {/* Cues list */}
          <div className="flex flex-col gap-1.5">
            {cues.map((cue, index) => {
              const key = `${selectedCategory}-${index}`;
              const wasAppended = appendedIndices.has(key);
              return (
                <div
                  key={index}
                  onClick={() => handleAppend(cue, index)}
                  className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg border cursor-pointer transition-all ${
                    wasAppended
                      ? 'border-green-400 bg-green-50'
                      : 'border-gray-200 hover:border-[#667eea] hover:bg-indigo-50'
                  }`}
                >
                  <span className="text-sm text-gray-800">{cue}</span>
                  <span className={`flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded ${
                    wasAppended
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {wasAppended ? 'Added' : 'Add'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-5 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 text-[14px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
