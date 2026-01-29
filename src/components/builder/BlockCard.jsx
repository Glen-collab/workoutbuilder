import React from 'react';
import ExerciseRow from './ExerciseRow';

function getBlockIcon(type) {
  const icons = { theme: '📋', warmup: '🔥', mobility: '🧘', movement: '⚡', 'straight-set': '💪', superset: '🔄', triset: '🔁', circuit: '🎯', conditioning: '🏃' };
  return icons[type] || '📋';
}

function getBlockTypeName(type) {
  const names = { theme: 'Theme / Notes', warmup: 'Warm Up', mobility: 'Mobility', movement: 'Movement', 'straight-set': 'Straight Set', superset: 'Superset', triset: 'Triset', circuit: 'Circuit / MetCon', conditioning: 'Conditioning' };
  return names[type] || type;
}

function getMaxExercises(type) {
  if (type === 'straight-set') return 1;
  if (type === 'superset') return 2;
  if (type === 'triset') return 3;
  return 999;
}

const blockColors = {
  'straight-set': '#4a90d9',
  superset: '#e67e22',
  triset: '#e74c3c',
  circuit: '#9b59b6',
  conditioning: '#27ae60',
  warmup: '#f39c12',
  mobility: '#1abc9c',
  movement: '#3498db',
  theme: '#95a5a6',
};

const styles = {
  card: {
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    marginBottom: '16px',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    color: '#fff',
    cursor: 'pointer',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '15px',
    fontWeight: '700',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  headerBtn: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: '#fff',
    borderRadius: '6px',
    padding: '5px 10px',
    fontSize: '13px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  deleteBtn: {
    background: 'rgba(255,255,255,0.25)',
    border: 'none',
    color: '#fff',
    borderRadius: '6px',
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  collapseIcon: {
    fontSize: '12px',
    marginRight: '4px',
  },
  body: {
    padding: '16px',
  },
  textarea: {
    width: '100%',
    minHeight: '70px',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    fontSize: '14px',
    fontFamily: 'inherit',
    resize: 'vertical',
    outline: 'none',
    boxSizing: 'border-box',
  },
  circuitConfig: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '14px',
  },
  configField: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  configLabel: {
    fontSize: '11px',
    color: '#868e96',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  configInput: {
    width: '80px',
    padding: '7px 8px',
    borderRadius: '6px',
    border: '1px solid #dee2e6',
    fontSize: '13px',
    outline: 'none',
  },
  addExBtn: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
  },
  addExBtnDisabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  notesLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#868e96',
    marginTop: '14px',
    marginBottom: '4px',
    textTransform: 'uppercase',
  },
};

export default function BlockCard({
  block,
  onDelete,
  onToggleCollapse,
  onInsertAbove,
  onInsertBelow,
  onUpdateBlock,
  onAddExercise,
  onRemoveExercise,
  onUpdateExercise,
  onUpdateSet,
  onAddSet,
  onRemoveSet,
  onDuplicateSet,
  mainMaxes,
}) {
  const color = blockColors[block.type] || '#95a5a6';
  const exercises = block.exercises || [];
  const maxEx = getMaxExercises(block.type);
  const canAdd = exercises.length < maxEx && block.type !== 'theme';

  return (
    <div style={styles.card}>
      {/* Header */}
      <div
        style={{ ...styles.header, background: color }}
        onClick={() => onToggleCollapse(block.id)}
      >
        <div style={styles.headerLeft}>
          <span style={styles.collapseIcon}>{block.collapsed ? '▶' : '▼'}</span>
          <span>{getBlockIcon(block.type)}</span>
          <span>{getBlockTypeName(block.type)}</span>
        </div>
        <div style={styles.headerRight} onClick={(e) => e.stopPropagation()}>
          <button style={styles.headerBtn} onClick={() => onInsertAbove(block.id)} title="Insert block above">↑+</button>
          <button style={styles.headerBtn} onClick={() => onInsertBelow(block.id)} title="Insert block below">↓+</button>
          <button style={styles.deleteBtn} onClick={() => onDelete(block.id)} title="Delete block">🗑</button>
        </div>
      </div>

      {/* Body */}
      {!block.collapsed && (
        <div style={styles.body}>
          {/* Theme block: just a textarea */}
          {block.type === 'theme' && (
            <textarea
              value={block.themeText || ''}
              onChange={(e) => onUpdateBlock(block.id, { themeText: e.target.value })}
              placeholder="Enter theme, focus, or notes for this section..."
              style={styles.textarea}
            />
          )}

          {/* Circuit config */}
          {block.type === 'circuit' && (
            <div style={styles.circuitConfig}>
              {(block.circuitType === 'rounds' || block.circuitType === 'amrap' || !block.circuitType) && (
                <div style={styles.configField}>
                  <span style={styles.configLabel}>Rounds</span>
                  <input
                    type="number"
                    min={1}
                    value={block.rounds || ''}
                    onChange={(e) => onUpdateBlock(block.id, { rounds: parseInt(e.target.value) || 0 })}
                    placeholder="3"
                    style={styles.configInput}
                  />
                </div>
              )}
              {(block.circuitType === 'amrap' || block.circuitType === 'forTime') && (
                <div style={styles.configField}>
                  <span style={styles.configLabel}>Time Limit</span>
                  <input
                    type="text"
                    value={block.timeLimit || ''}
                    onChange={(e) => onUpdateBlock(block.id, { timeLimit: e.target.value })}
                    placeholder="12 min"
                    style={styles.configInput}
                  />
                </div>
              )}
              <div style={styles.configField}>
                <span style={styles.configLabel}>Rest Between Rounds</span>
                <input
                  type="text"
                  value={block.restBetweenRounds || ''}
                  onChange={(e) => onUpdateBlock(block.id, { restBetweenRounds: e.target.value })}
                  placeholder="60s"
                  style={styles.configInput}
                />
              </div>
            </div>
          )}

          {/* Exercises list */}
          {block.type !== 'theme' && exercises.map((exercise, idx) => (
            <ExerciseRow
              key={exercise.id || idx}
              exercise={exercise}
              exerciseIndex={idx}
              blockType={block.type}
              onRemove={() => onRemoveExercise(block.id, idx)}
              onUpdate={(updates) => onUpdateExercise(block.id, idx, updates)}
              onUpdateSet={(setId, updates) => onUpdateSet(block.id, idx, setId, updates)}
              onAddSet={() => onAddSet(block.id, idx)}
              onRemoveSet={(setId) => onRemoveSet(block.id, idx, setId)}
              onDuplicateSet={(set) => onDuplicateSet(block.id, idx, set)}
              mainMaxes={mainMaxes}
            />
          ))}

          {/* Add Exercise button */}
          {block.type !== 'theme' && (
            <button
              onClick={canAdd ? () => onAddExercise(block.id, block.type) : undefined}
              style={{ ...styles.addExBtn, ...(canAdd ? {} : styles.addExBtnDisabled) }}
              disabled={!canAdd}
            >
              + Add Exercise {maxEx < 999 ? `(${exercises.length}/${maxEx})` : ''}
            </button>
          )}

          {/* Notes */}
          {block.type !== 'theme' && (
            <>
              <div style={styles.notesLabel}>Notes</div>
              <textarea
                value={block.notes || ''}
                onChange={(e) => onUpdateBlock(block.id, { notes: e.target.value })}
                placeholder="Block notes..."
                style={{ ...styles.textarea, minHeight: '50px' }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
