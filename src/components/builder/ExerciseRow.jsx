import { useState, useRef } from 'react';
import PercentageSetRow from './PercentageSetRow';
import CuesPicker from './CuesPicker';
import { schemePresets, applyScheme } from '../../utils/schemePresets';
import { calculateWeight, calculateExerciseTonnage, suggestBaseMax, baseMaxLabels, baseMaxColors } from '../../utils/percentageCalc';

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

  const baseMaxValue = exercise.baseMax ? (mainMaxes[exercise.baseMax] || 0) : 0;
  const tonnage = isStrength ? calculateExerciseTonnage(exercise, mainMaxes) : 0;

  const baseMaxColor = exercise.baseMax ? baseMaxColors[exercise.baseMax] : baseMaxColors.bench;

  const handleCueAppend = (cue) => {
    const current = exercise.notes || '';
    const separator = current && !current.endsWith(' ') && !current.endsWith('\n') ? '. ' : '';
    onUpdate({ notes: current + separator + cue });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-[10px] p-3.5 mb-2.5">
      {/* Header: name + youtube + remove */}
      <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-1">
          <span className="font-bold text-[15px] text-gray-900">{exercise.name || 'Unnamed Exercise'}</span>
          {exercise.youtube && (
            <button
              onClick={() => setShowVideo(v => !v)}
              className="border-none rounded-md px-2 py-1 text-[12px] cursor-pointer font-semibold text-white transition-colors"
              style={{ background: showVideo ? 'linear-gradient(135deg, #1565c0, #42a5f5)' : 'linear-gradient(135deg, #f5851f, #f6a623)' }}
              title={showVideo ? 'Hide video' : 'Watch video'}
            >
              {showVideo ? '✖' : '📹'}
            </button>
          )}
        </div>
        <button onClick={onRemove} className="bg-red-100 text-red-600 border-none rounded-md px-2.5 py-1.5 text-[13px] cursor-pointer font-semibold">Remove</button>
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
          {/* Base max selector */}
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
                <option key={key} value={key}>{label} ({mainMaxes[key] || 0} lbs)</option>
              ))}
            </select>
          </div>

          {exercise.isPercentageBased && Array.isArray(exercise.sets) ? (
            <div className="mt-2.5">
              {/* Qualifier + Tempo + Time + Rest for percentage-based */}
              <div className="flex gap-2 flex-wrap items-end mb-2.5">
                <QualifierSelect value={exercise.qualifier} onChange={(v) => onUpdate({ qualifier: v })} />
                <FieldInput label="Tempo" value={exercise.tempo} onChange={(v) => onUpdate({ tempo: v })} placeholder="3-1-1-0" width="80px" />
                <FieldInput label="Time" value={exercise.time} onChange={(v) => onUpdate({ time: v })} placeholder="30s" width="64px" />
                <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="90s" width="64px" />
              </div>

              {exercise.sets.map((set, idx) => (
                <PercentageSetRow
                  key={set.id}
                  set={set}
                  setIndex={idx}
                  baseMax={baseMaxValue}
                  onUpdate={(updates) => onUpdateSet(set.id, updates)}
                  onDuplicate={() => onDuplicateSet(set)}
                  onRemove={() => onRemoveSet(set.id)}
                  canRemove={exercise.sets.length > 1}
                />
              ))}
              <div>
                <button onClick={onAddSet} className="bg-blue-50 text-blue-700 border border-blue-200 rounded-md px-3.5 py-1.5 text-xs font-semibold cursor-pointer mr-2 mt-1.5">+ Add Set</button>
              </div>

              {/* Scheme quick-apply */}
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
                <FieldInput label="Time" value={exercise.time} onChange={(v) => onUpdate({ time: v })} placeholder="30s" width="64px" />
                <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="90s" width="64px" />
                <button
                  onClick={() => {
                    const suggested = suggestBaseMax(exercise.name);
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
            <FieldInput label="Sets" value={exercise.setsCount} onChange={(v) => onUpdate({ setsCount: v })} placeholder="3" width="56px" />
            <FieldInput label="Reps" value={exercise.reps} onChange={(v) => onUpdate({ reps: v })} placeholder="10" width="72px" />
            <QualifierSelect value={exercise.qualifier} onChange={(v) => onUpdate({ qualifier: v })} />
            <FieldInput label="Weight" value={exercise.weight} onChange={(v) => onUpdate({ weight: v })} placeholder="BW" width="72px" />
            <FieldInput label="Time" value={exercise.time} onChange={(v) => onUpdate({ time: v })} placeholder="30s" width="64px" />
            <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="30s" width="64px" />
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
            <FieldInput label="Duration" value={exercise.duration} onChange={(v) => onUpdate({ duration: v })} placeholder="30s" width="72px" />
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
            <FieldInput label="Duration" value={exercise.duration} onChange={(v) => onUpdate({ duration: v })} placeholder="60s" width="72px" />
            <FieldInput label="Distance" value={exercise.distance} onChange={(v) => onUpdate({ distance: v })} placeholder="400m" width="80px" />
            <FieldInput label="Speed" value={exercise.speed} onChange={(v) => onUpdate({ speed: v })} placeholder="6.0 mph" width="80px" />
            <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="90s" width="64px" />
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
