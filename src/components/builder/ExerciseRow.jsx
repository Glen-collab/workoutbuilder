import PercentageSetRow from './PercentageSetRow';
import { schemePresets, applyScheme } from '../../utils/schemePresets';
import { calculateWeight, calculateExerciseTonnage, suggestBaseMax, baseMaxLabels, baseMaxColors } from '../../utils/percentageCalc';

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
  const isStrength = ['straight-set', 'superset', 'triset'].includes(blockType);
  const isCircuit = blockType === 'circuit';
  const isWarmupMobility = ['warmup', 'mobility'].includes(blockType);
  const isMovementConditioning = ['movement', 'conditioning'].includes(blockType);

  const baseMaxValue = exercise.baseMax ? (mainMaxes[exercise.baseMax] || 0) : 0;
  const tonnage = isStrength ? calculateExerciseTonnage(exercise, mainMaxes) : 0;

  const baseMaxColor = exercise.baseMax ? baseMaxColors[exercise.baseMax] : baseMaxColors.bench;

  return (
    <div className="bg-white border border-gray-200 rounded-[10px] p-3.5 mb-2.5">
      {/* Header: name + youtube + remove */}
      <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-1">
          <span className="font-bold text-[15px] text-gray-900">{exercise.name || 'Unnamed Exercise'}</span>
          {exercise.youtube && (
            <a href={exercise.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 no-underline text-base" title="Watch video">
              ▶
            </a>
          )}
        </div>
        <button onClick={onRemove} className="bg-red-100 text-red-600 border-none rounded-md px-2.5 py-1.5 text-[13px] cursor-pointer font-semibold">Remove</button>
      </div>

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

              {/* Tonnage */}
              {tonnage > 0 && (
                <div className="mt-2 text-[13px] font-semibold text-[#764ba2]">
                  Tonnage: {tonnage.toLocaleString()} lbs
                </div>
              )}
            </div>
          ) : (
            /* Non-percentage strength inputs */
            <div className="flex gap-2 flex-wrap items-center mb-2">
              <FieldInput label="Sets" value={exercise.setsCount} onChange={(v) => onUpdate({ setsCount: v })} placeholder="3" width="56px" />
              <FieldInput label="Reps" value={exercise.reps} onChange={(v) => onUpdate({ reps: v })} placeholder="8,6,4" width="80px" />
              <FieldInput label="Weight" value={exercise.weight} onChange={(v) => onUpdate({ weight: v })} placeholder="135" width="72px" />
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
                className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer"
              >
                Enable %
              </button>
            </div>
          )}
        </>
      )}

      {/* CIRCUIT BLOCKS */}
      {isCircuit && (
        <div className="flex gap-2 flex-wrap items-center mb-2">
          <FieldInput label="Sets" value={exercise.setsCount} onChange={(v) => onUpdate({ setsCount: v })} placeholder="3" width="56px" />
          <FieldInput label="Reps" value={exercise.reps} onChange={(v) => onUpdate({ reps: v })} placeholder="10" width="72px" />
          <FieldInput label="Weight" value={exercise.weight} onChange={(v) => onUpdate({ weight: v })} placeholder="BW" width="72px" />
          <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="30s" width="64px" />
        </div>
      )}

      {/* WARMUP / MOBILITY */}
      {isWarmupMobility && (
        <div className="flex gap-2 flex-wrap items-center mb-2">
          {exercise.duration && (
            <span className="text-[13px] text-gray-600">Duration: {exercise.duration}</span>
          )}
        </div>
      )}

      {/* MOVEMENT / CONDITIONING */}
      {isMovementConditioning && (
        <div className="flex gap-2 flex-wrap items-center mb-2">
          <FieldInput label="Duration" value={exercise.duration} onChange={(v) => onUpdate({ duration: v })} placeholder="60s" width="72px" />
          <FieldInput label="Distance" value={exercise.distance} onChange={(v) => onUpdate({ distance: v })} placeholder="400m" width="80px" />
          <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="90s" width="64px" />
        </div>
      )}
    </div>
  );
}
