import { useState, useRef, useEffect } from 'react';
import PercentageSetRow from './PercentageSetRow';
import CuesPicker from './CuesPicker';
import AddVideoButton from '../exercises/AddVideoButton';
import { schemePresets, applyScheme } from '../../utils/schemePresets';
import { calculateWeight, calculateExerciseTonnage, suggestBaseMax, baseMaxLabels, baseMaxColors } from '../../utils/percentageCalc';
import { classifyMovement } from '../../data/movementClassification';

const QUALIFIER_OPTIONS = [
  { value: '', label: '—' },
  { value: 'each', label: 'Each' },
  { value: 'total', label: 'Total' },
  { value: 'together', label: 'Together' },
  { value: 'each leg', label: 'Each Leg' },
  { value: 'each arm', label: 'Each Arm' },
  { value: 'each side', label: 'Each Side' },
  { value: 'all one arm first', label: 'All One Arm First' },
  { value: 'all one leg first', label: 'All One Leg First' },
  { value: 'x2 combo', label: 'x2 (Combo)' },
  { value: 'x3 combo', label: 'x3 (Combo)' },
  { value: 'x4 combo', label: 'x4 (Combo)' },
  { value: 'drop set', label: 'Drop Set' },
  { value: 'strip set', label: 'Strip Set' },
];

function FieldInput({ label, value, onChange, placeholder, type = 'text', width }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] text-gray-400 font-semibold uppercase">{label}</span>
      <input
        type={type}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none"
        style={width ? { width } : { width: '72px' }}
      />
    </div>
  );
}

function QualifierSelect({ value, onChange }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] text-gray-400 font-semibold uppercase">Qualifier</span>
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none bg-white cursor-pointer min-w-[120px]"
      >
        {QUALIFIER_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

const DURATION_UNITS = [
  { value: 'sec', label: 'Seconds' },
  { value: 'min', label: 'Minutes' },
  { value: 'hr', label: 'Hours' },
];

const DISTANCE_UNITS = [
  { value: 'm', label: 'Meters' },
  { value: 'yd', label: 'Yards' },
  { value: 'ft', label: 'Feet' },
  { value: 'mi', label: 'Miles' },
  { value: 'km', label: 'Kilometers' },
];

const SPEED_UNITS = [
  { value: 'mph', label: 'MPH' },
  { value: 'kph', label: 'KPH' },
  { value: 'min/mi', label: 'Min/Mile' },
];

function FieldWithUnit({ label, value, unit, onChangeValue, onChangeUnit, placeholder, units, valueWidth = '60px', unitWidth = '75px' }) {
  const hasValue = value && value.toString().trim() !== '';
  const activeUnit = unit || units[0].value;

  // The dropdown SHOWS the default unit (units[0]) when none is set, but the
  // saved value stayed empty unless the coach touched it — so a "60 sec" plank
  // saved with no durationUnit and read as minutes on the TV. Persist the shown
  // default once a value exists so the data always matches what's on screen.
  useEffect(() => {
    if (hasValue && !unit) onChangeUnit(units[0].value);
  }, [hasValue, unit]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] text-gray-400 font-semibold uppercase">{label}</span>
      <div className="flex gap-1">
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChangeValue(e.target.value)}
          placeholder={placeholder}
          className="px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none"
          style={{
            width: valueWidth,
            borderColor: hasValue ? '#667eea' : undefined,
            background: hasValue ? '#f0f4ff' : undefined,
          }}
        />
        <select
          value={activeUnit}
          onChange={(e) => onChangeUnit(e.target.value)}
          className="px-1 py-[7px] rounded-md border text-[11px] outline-none cursor-pointer font-semibold"
          style={{
            width: unitWidth,
            borderColor: hasValue ? '#667eea' : '#d1d5db',
            background: hasValue ? '#667eea' : '#f3f4f6',
            color: hasValue ? '#fff' : '#9ca3af',
          }}
        >
          {units.map((u) => (
            <option key={u.value} value={u.value} style={{ background: '#fff', color: '#333' }}>{u.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

// Auto CNS rating pill — read-only, comes straight from the classification the
// coach approved. Lets you SEE the neural cost the ⚡ CNS Load graph is summing.
const CNS_TONE = {
  1: { bg: '#dcfce7', text: '#15803d', label: 'Low' },
  2: { bg: '#dcfce7', text: '#15803d', label: 'Low' },
  3: { bg: '#fef3c7', text: '#b45309', label: 'Med' },
  4: { bg: '#fee2e2', text: '#b91c1c', label: 'High' },
  5: { bg: '#fee2e2', text: '#b91c1c', label: 'High' },
};
function CnsPill({ name }) {
  const cls = name ? classifyMovement(name) : null;
  if (!cls || !cls.cns) return null;
  const tone = CNS_TONE[cls.cns] || CNS_TONE[3];
  const title = `CNS ${cls.cns}/5 (${tone.label})${cls.zone ? ` · ${cls.zone}` : ''}${cls.driver ? ` · ${cls.driver}` : ''}`;
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-[2px] text-[11px] font-bold whitespace-nowrap"
      style={{ background: tone.bg, color: tone.text }}
      title={title}
    >
      ⚡ CNS {cls.cns}
    </span>
  );
}

// The 1-10 RPE reference — Glen's velocity↔RPE scale. Athlete-facing language so
// it doubles as a teaching tool ("tired sprints teach slow").
const RPE_SCALE = [
  { r: '1–2', zone: 'Recovery', cue: 'Very easy — flush / shake-out. Could go all day.' },
  { r: '3–4', zone: 'Tempo', cue: 'Conversational. Aerobic / extensive tempo (~60–70% PB).' },
  { r: '5–6', zone: 'Intensive Tempo', cue: 'Working but controlled (~70–80% PB).' },
  { r: '7–8', zone: 'Acceleration / Special', cue: 'Hard, crisp efforts (~80–90% PB). Full rest between.' },
  { r: '9', zone: 'Speed Endurance', cue: 'Near max (~90–95% PB). Pace holds, form sharp.' },
  { r: '10', zone: 'Max Velocity', cue: 'MAX EFFORT — full speed, full recovery (95–100% PB).' },
];
function TargetRpeField({ value, onChange }) {
  const [showScale, setShowScale] = useState(false);
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] text-gray-400 font-semibold uppercase flex items-center gap-1">
        Target RPE
        <button
          type="button"
          onClick={() => setShowScale(s => !s)}
          className="w-[15px] h-[15px] rounded-full bg-gray-200 text-gray-600 text-[10px] leading-none font-bold cursor-pointer hover:bg-gray-300 flex items-center justify-center"
          title="Show the 1–10 RPE scale"
        >ⓘ</button>
      </span>
      <div className="relative">
        <select
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="px-2 py-[7px] rounded-md border text-[13px] outline-none bg-white cursor-pointer"
          style={{
            width: '78px',
            borderColor: value ? '#dc2626' : '#d1d5db',
            background: value ? '#fef2f2' : '#fff',
            color: value ? '#b91c1c' : '#9ca3af',
            fontWeight: value ? 700 : 400,
          }}
        >
          <option value="">—</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <option key={n} value={String(n)}>{n === 10 ? '10 — Max' : n}</option>
          ))}
        </select>
        {showScale && (
          <div className="absolute z-20 mt-1 left-0 w-[290px] bg-white border border-gray-200 rounded-lg shadow-xl p-3 text-left">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] font-bold text-gray-800">RPE → Velocity scale</span>
              <button type="button" onClick={() => setShowScale(false)} className="text-gray-400 text-[14px] leading-none cursor-pointer hover:text-gray-700">✖</button>
            </div>
            <table className="w-full text-[11px]">
              <tbody>
                {RPE_SCALE.map((row) => (
                  <tr key={row.r} className="border-b border-gray-100 last:border-0">
                    <td className="py-1 pr-2 font-bold text-rose-600 align-top whitespace-nowrap">{row.r}</td>
                    <td className="py-1 align-top">
                      <div className="font-semibold text-gray-700">{row.zone}</div>
                      <div className="text-gray-500 leading-snug">{row.cue}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[10px] text-gray-400 mt-2">Effort &amp; rest travel together — tired sprints teach slow.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function NotesWithCues({ value, onChange, onOpenCues }) {
  return (
    <div className="flex flex-col gap-0.5 w-full">
      <span className="text-[11px] text-gray-400 font-semibold uppercase">Notes</span>
      <div className="flex gap-1.5">
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Form cues, instructions..."
          className="px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none flex-1"
        />
        <button
          onClick={onOpenCues}
          className="px-2.5 py-[7px] rounded-md border border-[#667eea] bg-[#667eea]/10 text-[#667eea] text-[12px] font-semibold cursor-pointer whitespace-nowrap hover:bg-[#667eea]/20 transition-colors"
          title="Open coaching cues picker"
        >
          Cues
        </button>
      </div>
    </div>
  );
}

export default function ExerciseRow({
  exercise,
  exerciseIndex,
  blockType,
  onRemove,
  onReplace,
  onUpdate,
  onUpdateSet,
  onAddSet,
  onRemoveSet,
  onDuplicateSet,
  mainMaxes,
}) {
  const [showCues, setShowCues] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const isStrength = ['straight-set', 'superset', 'triset'].includes(blockType);
  const isCircuit = blockType === 'circuit';
  const isWarmupMobility = ['warmup', 'mobility', 'cooldown'].includes(blockType);
  const isMovementConditioning = ['movement', 'conditioning'].includes(blockType);

  const isBodyweight = exercise.baseMax === 'bodyweight';
  const baseMaxValue = exercise.baseMax ? (mainMaxes[exercise.baseMax] || 0) : 0;
  const tonnage = isStrength && !isBodyweight ? calculateExerciseTonnage(exercise, mainMaxes) : 0;

  const baseMaxColor = exercise.baseMax ? baseMaxColors[exercise.baseMax] : baseMaxColors.bench;

  const handleCueAppend = (cue) => {
    const current = exercise.notes || '';
    const separator = current && !current.endsWith(' ') && !current.endsWith('\n') ? '. ' : '';
    onUpdate({ notes: current + separator + cue });
  };

  // "Write your own" placeholder — the client names + fills this in the tracker,
  // so the coach just sees a labeled stub (+ an optional instruction note).
  if (exercise.isUserDefined) {
    const isCardioKind = exercise.userDefinedKind === 'cardio';
    return (
      <div className="bg-white border border-gray-200 rounded-[10px] p-3.5 mb-2.5">
        <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
          <span className="font-bold text-[15px] text-gray-900">
            {isCardioKind ? '🏃 Choose Your Own Cardio' : '✏️ Write Your Own Exercise'}
          </span>
          <div className="flex gap-1.5">
            <button onClick={onReplace} className="bg-blue-100 text-blue-600 border-none rounded-md px-2.5 py-1.5 text-[13px] cursor-pointer font-semibold">Replace</button>
            <button onClick={onRemove} className="bg-red-100 text-red-600 border-none rounded-md px-2.5 py-1.5 text-[13px] cursor-pointer font-semibold">Remove</button>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2.5 text-[13px] text-amber-800">
          Your client names this and enters their own {isCardioKind ? 'machine, duration, distance & time' : 'sets, reps, weight & time'} in the tracker.
        </div>
        <div className="mt-2.5 flex flex-col gap-0.5">
          <span className="text-[11px] text-gray-400 font-semibold uppercase">Optional note for client</span>
          <input
            type="text"
            value={exercise.notes || ''}
            onChange={(e) => onUpdate({ notes: e.target.value })}
            placeholder="e.g. pick something challenging"
            className="w-full px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-[10px] p-3.5 mb-2.5">
      {/* Header: name + youtube + remove */}
      <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-1">
          <span className="font-bold text-[15px] text-gray-900">{exercise.name || 'Unnamed Exercise'}</span>
          <CnsPill name={exercise.name} />
          {exercise.youtube ? (
            <button
              onClick={() => setShowVideo(v => !v)}
              className="border-none rounded-md px-2 py-1 text-[12px] cursor-pointer font-semibold text-white transition-colors"
              style={{ background: showVideo ? 'linear-gradient(135deg, #1565c0, #42a5f5)' : 'linear-gradient(135deg, #f5851f, #f6a623)' }}
              title={showVideo ? 'Hide video' : 'Watch video'}
            >
              {showVideo ? '✖' : '📹'}
            </button>
          ) : (
            <AddVideoButton exercise={exercise} onUploaded={(url) => onUpdate({ youtube: url })} />
          )}
        </div>
        <div className="flex gap-1.5">
          <button onClick={onReplace} className="bg-blue-100 text-blue-600 border-none rounded-md px-2.5 py-1.5 text-[13px] cursor-pointer font-semibold">Replace</button>
          <button onClick={onRemove} className="bg-red-100 text-red-600 border-none rounded-md px-2.5 py-1.5 text-[13px] cursor-pointer font-semibold">Remove</button>
        </div>
      </div>

      {/* Inline Cloudflare Stream video player */}
      {showVideo && exercise.youtube && (
        <div className="mb-2.5 rounded-lg overflow-hidden bg-black" style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={`${exercise.youtube}?preload=metadata`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* STRENGTH BLOCKS */}
      {isStrength && (
        <>
          {/* Base max selector — only relevant when % is enabled */}
          {exercise.isPercentageBased && (
            <div className="flex items-center gap-2 mb-2.5 flex-wrap">
              <span className="text-[13px] text-gray-400">Based on:</span>
              <select
                value={exercise.baseMax || 'bench'}
                onChange={(e) => onUpdate({ baseMax: e.target.value })}
                className="px-2 py-1 rounded-md border-2 text-[13px] font-semibold cursor-pointer outline-none"
                style={{
                  borderColor: baseMaxColor.bg,
                  color: baseMaxColor.text,
                  background: baseMaxColor.light,
                }}
              >
                {Object.entries(baseMaxLabels).map(([key, label]) => (
                  <option key={key} value={key}>{label}{key !== 'bodyweight' ? ` (${mainMaxes[key] || 0} lbs)` : ''}</option>
                ))}
              </select>
              <button
                onClick={() => {
                  const nonWarmupSets = (exercise.sets || []).filter(s => !s.isWarmup);
                  const repsArr = nonWarmupSets.map(s => s.reps).filter(r => r != null && r !== '');
                  const uniq = [...new Set(repsArr.map(String))];
                  const repsStr = uniq.length === 1 ? uniq[0] : repsArr.join(',');
                  onUpdate({
                    isPercentageBased: false,
                    setsCount: exercise.setsCount || String(nonWarmupSets.length || 3),
                    reps: exercise.reps || repsStr || '',
                  });
                }}
                className="bg-gray-100 text-gray-700 border border-gray-300 rounded-md px-2.5 py-1 text-xs font-semibold cursor-pointer hover:bg-gray-200"
                title="Switch back to manual sets / reps"
              >
                ← Manual
              </button>
            </div>
          )}

          {exercise.isPercentageBased && Array.isArray(exercise.sets) ? (
            <div className="mt-2.5">
              {/* Qualifier + Tempo + Time + Rest for percentage-based */}
              <div className="flex gap-2 flex-wrap items-end mb-2.5">
                <QualifierSelect value={exercise.qualifier} onChange={(v) => onUpdate({ qualifier: v })} />
                <FieldInput label="Tempo" value={exercise.tempo} onChange={(v) => onUpdate({ tempo: v })} placeholder="3-1-1-0" width="80px" />
                <FieldWithUnit
                  label="Duration"
                  value={exercise.duration}
                  unit={exercise.durationUnit}
                  onChangeValue={(v) => onUpdate({ duration: v })}
                  onChangeUnit={(v) => onUpdate({ durationUnit: v })}
                  placeholder="30"
                  units={DURATION_UNITS}
                />
                <FieldWithUnit
                  label="Distance"
                  value={exercise.distance}
                  unit={exercise.distanceUnit}
                  onChangeValue={(v) => onUpdate({ distance: v })}
                  onChangeUnit={(v) => onUpdate({ distanceUnit: v })}
                  placeholder="40"
                  units={DISTANCE_UNITS}
                />
                <FieldInput label="Calories" value={exercise.calories} onChange={(v) => onUpdate({ calories: v })} placeholder="20" width="64px" />
                <FieldInput label="Weight" value={exercise.weight} onChange={(v) => onUpdate({ weight: v })} placeholder="lbs" width="72px" />
                <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="90s" width="64px" />
                <TargetRpeField value={exercise.targetRpe} onChange={(v) => onUpdate({ targetRpe: v })} />
              </div>

              {exercise.sets.map((set, idx) => (
                <PercentageSetRow
                  key={set.id}
                  set={set}
                  setIndex={idx}
                  baseMax={baseMaxValue}
                  isBodyweight={isBodyweight}
                  qualifier={exercise.qualifier}
                  onUpdate={(updates) => onUpdateSet(set.id, updates)}
                  onDuplicate={() => onDuplicateSet(set)}
                  onRemove={() => onRemoveSet(set.id)}
                  canRemove={exercise.sets.length > 1}
                />
              ))}
              <div>
                <button onClick={onAddSet} className="bg-blue-50 text-blue-700 border border-blue-200 rounded-md px-3.5 py-1.5 text-xs font-semibold cursor-pointer mr-2 mt-1.5">+ Add Set</button>
              </div>

              {/* Scheme quick-apply - hidden for bodyweight exercises */}
              {!isBodyweight && (
                <div className="flex gap-1.5 flex-wrap mt-2">
                  {Object.entries(schemePresets).map(([key, scheme]) => (
                    <button
                      key={key}
                      onClick={() => {
                        const updated = applyScheme(key, exercise);
                        onUpdate({ sets: updated.sets, scheme: updated.scheme, isPercentageBased: true });
                      }}
                      className="bg-gray-100 border border-gray-300 rounded-md px-2.5 py-1 text-[11px] font-semibold cursor-pointer text-gray-600"
                    >
                      {scheme.name}
                    </button>
                  ))}
                </div>
              )}

              {/* Notes */}
              <div className="mt-2.5">
                <NotesWithCues value={exercise.notes} onChange={(v) => onUpdate({ notes: v })} onOpenCues={() => setShowCues(true)} />
              </div>

              {/* Tonnage */}
              {tonnage > 0 && (
                <div className="mt-2 text-[13px] font-semibold text-[#764ba2]">
                  Tonnage: {tonnage.toLocaleString()} lbs
                </div>
              )}
            </div>
          ) : (
            /* Non-percentage strength inputs */
            <>
              <div className="flex gap-2 flex-wrap items-end mb-2">
                <FieldInput label="Sets" value={exercise.setsCount} onChange={(v) => onUpdate({ setsCount: v })} placeholder="3" width="56px" />
                <FieldInput label="Reps" value={exercise.reps} onChange={(v) => onUpdate({ reps: v })} placeholder="8,6,4" width="80px" />
                <QualifierSelect value={exercise.qualifier} onChange={(v) => onUpdate({ qualifier: v })} />
                <FieldInput label="Weight" value={exercise.weight} onChange={(v) => onUpdate({ weight: v })} placeholder="135" width="72px" />
                <FieldInput label="Tempo" value={exercise.tempo} onChange={(v) => onUpdate({ tempo: v })} placeholder="3-1-1-0" width="80px" />
                <FieldWithUnit
                  label="Duration"
                  value={exercise.duration}
                  unit={exercise.durationUnit}
                  onChangeValue={(v) => onUpdate({ duration: v })}
                  onChangeUnit={(v) => onUpdate({ durationUnit: v })}
                  placeholder="30"
                  units={DURATION_UNITS}
                />
                <FieldWithUnit
                  label="Distance"
                  value={exercise.distance}
                  unit={exercise.distanceUnit}
                  onChangeValue={(v) => onUpdate({ distance: v })}
                  onChangeUnit={(v) => onUpdate({ distanceUnit: v })}
                  placeholder="40"
                  units={DISTANCE_UNITS}
                />
                <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="90s" width="64px" />
                <TargetRpeField value={exercise.targetRpe} onChange={(v) => onUpdate({ targetRpe: v })} />
                <button
                  onClick={() => {
                    const suggested = suggestBaseMax(exercise);
                    onUpdate({
                      isPercentageBased: true,
                      baseMax: exercise.baseMax || suggested,
                      sets: [{
                        id: Date.now(),
                        reps: 5,
                        percentage: 75,
                        isWarmup: false,
                        manualWeight: null,
                      }],
                    });
                  }}
                  className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer self-end mb-[1px]"
                >
                  Enable %
                </button>
              </div>
              <NotesWithCues value={exercise.notes} onChange={(v) => onUpdate({ notes: v })} onOpenCues={() => setShowCues(true)} />
            </>
          )}
        </>
      )}

      {/* CIRCUIT BLOCKS */}
      {isCircuit && (
        <>
          <div className="flex gap-2 flex-wrap items-end mb-2">
            <FieldInput label="Reps" value={exercise.reps} onChange={(v) => onUpdate({ reps: v })} placeholder="10" width="72px" />
            <QualifierSelect value={exercise.qualifier} onChange={(v) => onUpdate({ qualifier: v })} />
            <FieldInput label="Weight" value={exercise.weight} onChange={(v) => onUpdate({ weight: v })} placeholder="BW" width="72px" />
            <FieldWithUnit
              label="Duration"
              value={exercise.duration}
              unit={exercise.durationUnit}
              onChangeValue={(v) => onUpdate({ duration: v })}
              onChangeUnit={(v) => onUpdate({ durationUnit: v })}
              placeholder="30"
              units={DURATION_UNITS}
            />
            <FieldWithUnit
              label="Distance"
              value={exercise.distance}
              unit={exercise.distanceUnit}
              onChangeValue={(v) => onUpdate({ distance: v })}
              onChangeUnit={(v) => onUpdate({ distanceUnit: v })}
              placeholder="400"
              units={DISTANCE_UNITS}
            />
            <FieldInput label="Calories" value={exercise.calories} onChange={(v) => onUpdate({ calories: v })} placeholder="20" width="64px" />
            <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="30s" width="64px" />
            <TargetRpeField value={exercise.targetRpe} onChange={(v) => onUpdate({ targetRpe: v })} />
          </div>
          <NotesWithCues value={exercise.notes} onChange={(v) => onUpdate({ notes: v })} onOpenCues={() => setShowCues(true)} />
        </>
      )}

      {/* WARMUP / MOBILITY */}
      {isWarmupMobility && (
        <>
          <div className="flex gap-2 flex-wrap items-end mb-2">
            <FieldInput label="Sets" value={exercise.setsCount} onChange={(v) => onUpdate({ setsCount: v })} placeholder="1" width="56px" />
            <FieldInput label="Reps" value={exercise.reps} onChange={(v) => onUpdate({ reps: v })} placeholder="10" width="72px" />
            <QualifierSelect value={exercise.qualifier} onChange={(v) => onUpdate({ qualifier: v })} />
            <FieldWithUnit
              label="Duration"
              value={exercise.duration}
              unit={exercise.durationUnit}
              onChangeValue={(v) => onUpdate({ duration: v })}
              onChangeUnit={(v) => onUpdate({ durationUnit: v })}
              placeholder="30"
              units={DURATION_UNITS}
            />
            <FieldInput label="Weight" value={exercise.weight} onChange={(v) => onUpdate({ weight: v })} placeholder="BW" width="72px" />
          </div>
          <NotesWithCues value={exercise.notes} onChange={(v) => onUpdate({ notes: v })} onOpenCues={() => setShowCues(true)} />
        </>
      )}

      {/* MOVEMENT / CONDITIONING */}
      {isMovementConditioning && (
        <>
          <div className="flex gap-2 flex-wrap items-end mb-2">
            <FieldInput label="Sets" value={exercise.setsCount} onChange={(v) => onUpdate({ setsCount: v })} placeholder="4" width="56px" />
            <FieldInput label="Reps" value={exercise.reps} onChange={(v) => onUpdate({ reps: v })} placeholder="10" width="72px" />
            <QualifierSelect value={exercise.qualifier} onChange={(v) => onUpdate({ qualifier: v })} />
            <FieldWithUnit
              label="Duration"
              value={exercise.duration}
              unit={exercise.durationUnit}
              onChangeValue={(v) => onUpdate({ duration: v })}
              onChangeUnit={(v) => onUpdate({ durationUnit: v })}
              placeholder="60"
              units={DURATION_UNITS}
            />
            <FieldWithUnit
              label="Distance"
              value={exercise.distance}
              unit={exercise.distanceUnit}
              onChangeValue={(v) => onUpdate({ distance: v })}
              onChangeUnit={(v) => onUpdate({ distanceUnit: v })}
              placeholder="1000"
              units={DISTANCE_UNITS}
            />
            <FieldWithUnit
              label="Speed"
              value={exercise.speed}
              unit={exercise.speedUnit}
              onChangeValue={(v) => onUpdate({ speed: v })}
              onChangeUnit={(v) => onUpdate({ speedUnit: v })}
              placeholder="6.0"
              units={SPEED_UNITS}
            />
            <FieldInput label="Calories" value={exercise.calories} onChange={(v) => onUpdate({ calories: v })} placeholder="20" width="64px" />
            <FieldInput label="Weight" value={exercise.weight} onChange={(v) => onUpdate({ weight: v })} placeholder="lbs" width="72px" />
            <FieldInput label="Incline" value={exercise.incline} onChange={(v) => onUpdate({ incline: v })} placeholder="5%" width="56px" />
            <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="90s" width="64px" />
            <TargetRpeField value={exercise.targetRpe} onChange={(v) => onUpdate({ targetRpe: v })} />
          </div>
          <NotesWithCues value={exercise.notes} onChange={(v) => onUpdate({ notes: v })} onOpenCues={() => setShowCues(true)} />
        </>
      )}

      {/* Coaching Cues Picker Modal */}
      <CuesPicker
        isOpen={showCues}
        onClose={() => setShowCues(false)}
        onAppendText={handleCueAppend}
      />
    </div>
  );
}
