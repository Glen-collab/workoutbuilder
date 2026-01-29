import React from 'react';
import PercentageSetRow from './PercentageSetRow';
import { schemePresets, applyScheme } from '../../utils/schemePresets';
import { calculateWeight, calculateExerciseTonnage, suggestBaseMax, baseMaxLabels, baseMaxColors } from '../../utils/percentageCalc';

const styles = {
  container: {
    background: '#fff',
    border: '1px solid #e9ecef',
    borderRadius: '10px',
    padding: '14px',
    marginBottom: '10px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    flexWrap: 'wrap',
    gap: '8px',
  },
  nameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: 1,
  },
  name: {
    fontWeight: '700',
    fontSize: '15px',
    color: '#212529',
  },
  youtubeLink: {
    color: '#e03131',
    textDecoration: 'none',
    fontSize: '16px',
  },
  removeBtn: {
    background: '#fee2e2',
    color: '#e03131',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 10px',
    fontSize: '13px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  baseMaxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '10px',
    flexWrap: 'wrap',
  },
  baseMaxLabel: {
    fontSize: '13px',
    color: '#868e96',
  },
  baseMaxSelect: {
    padding: '5px 8px',
    borderRadius: '6px',
    border: '2px solid',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    outline: 'none',
  },
  enablePctBtn: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  inputGroup: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '8px',
  },
  fieldWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  fieldLabel: {
    fontSize: '11px',
    color: '#868e96',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  input: {
    width: '72px',
    padding: '7px 8px',
    borderRadius: '6px',
    border: '1px solid #dee2e6',
    fontSize: '13px',
    outline: 'none',
  },
  setsArea: {
    marginTop: '10px',
  },
  addSetBtn: {
    background: '#e8f4fd',
    color: '#1971c2',
    border: '1px solid #a5d8ff',
    borderRadius: '6px',
    padding: '6px 14px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    marginRight: '8px',
    marginTop: '6px',
  },
  schemeRow: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    marginTop: '8px',
  },
  schemeBtn: {
    background: '#f1f3f5',
    border: '1px solid #dee2e6',
    borderRadius: '6px',
    padding: '4px 10px',
    fontSize: '11px',
    fontWeight: '600',
    cursor: 'pointer',
    color: '#495057',
  },
  tonnage: {
    marginTop: '8px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#764ba2',
  },
  duration: {
    fontSize: '13px',
    color: '#495057',
  },
};

function FieldInput({ label, value, onChange, placeholder, type = 'text', width }) {
  return (
    <div style={styles.fieldWrap}>
      <span style={styles.fieldLabel}>{label}</span>
      <input
        type={type}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ ...styles.input, ...(width ? { width } : {}) }}
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
    <div style={styles.container}>
      {/* Header: name + youtube + remove */}
      <div style={styles.header}>
        <div style={styles.nameRow}>
          <span style={styles.name}>{exercise.name || 'Unnamed Exercise'}</span>
          {exercise.youtube && (
            <a href={exercise.youtube} target="_blank" rel="noopener noreferrer" style={styles.youtubeLink} title="Watch video">
              ▶
            </a>
          )}
        </div>
        <button onClick={onRemove} style={styles.removeBtn}>Remove</button>
      </div>

      {/* STRENGTH BLOCKS */}
      {isStrength && (
        <>
          {/* Base max selector */}
          <div style={styles.baseMaxRow}>
            <span style={styles.baseMaxLabel}>Based on:</span>
            <select
              value={exercise.baseMax || 'bench'}
              onChange={(e) => onUpdate({ baseMax: e.target.value })}
              style={{
                ...styles.baseMaxSelect,
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
            <div style={styles.setsArea}>
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
                <button onClick={onAddSet} style={styles.addSetBtn}>+ Add Set</button>
              </div>

              {/* Scheme quick-apply */}
              <div style={styles.schemeRow}>
                {Object.entries(schemePresets).map(([key, scheme]) => (
                  <button
                    key={key}
                    onClick={() => {
                      const updated = applyScheme(key, exercise);
                      onUpdate({ sets: updated.sets, scheme: updated.scheme, isPercentageBased: true });
                    }}
                    style={styles.schemeBtn}
                  >
                    {scheme.name}
                  </button>
                ))}
              </div>

              {/* Tonnage */}
              {tonnage > 0 && (
                <div style={styles.tonnage}>
                  Tonnage: {tonnage.toLocaleString()} lbs
                </div>
              )}
            </div>
          ) : (
            /* Non-percentage strength inputs */
            <div style={styles.inputGroup}>
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
                style={styles.enablePctBtn}
              >
                Enable %
              </button>
            </div>
          )}
        </>
      )}

      {/* CIRCUIT BLOCKS */}
      {isCircuit && (
        <div style={styles.inputGroup}>
          <FieldInput label="Sets" value={exercise.setsCount} onChange={(v) => onUpdate({ setsCount: v })} placeholder="3" width="56px" />
          <FieldInput label="Reps" value={exercise.reps} onChange={(v) => onUpdate({ reps: v })} placeholder="10" width="72px" />
          <FieldInput label="Weight" value={exercise.weight} onChange={(v) => onUpdate({ weight: v })} placeholder="BW" width="72px" />
          <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="30s" width="64px" />
        </div>
      )}

      {/* WARMUP / MOBILITY */}
      {isWarmupMobility && (
        <div style={styles.inputGroup}>
          {exercise.duration && (
            <span style={styles.duration}>Duration: {exercise.duration}</span>
          )}
        </div>
      )}

      {/* MOVEMENT / CONDITIONING */}
      {isMovementConditioning && (
        <div style={styles.inputGroup}>
          <FieldInput label="Duration" value={exercise.duration} onChange={(v) => onUpdate({ duration: v })} placeholder="60s" width="72px" />
          <FieldInput label="Distance" value={exercise.distance} onChange={(v) => onUpdate({ distance: v })} placeholder="400m" width="80px" />
          <FieldInput label="Rest" value={exercise.rest} onChange={(v) => onUpdate({ rest: v })} placeholder="90s" width="64px" />
        </div>
      )}
    </div>
  );
}
