import React, { useState } from 'react';
import { calculateWeight } from '../../utils/percentageCalc';
import PercentagePicker from './PercentagePicker';

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '8px',
    background: '#f8f9fa',
    marginBottom: '6px',
    flexWrap: 'wrap',
  },
  rowWarmup: {
    background: '#fff9db',
    border: '1px solid #ffd43b',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    cursor: 'pointer',
    accentColor: '#f59f00',
  },
  setLabel: {
    fontWeight: '700',
    fontSize: '13px',
    minWidth: '50px',
    color: '#495057',
  },
  warmupLabel: {
    color: '#e67700',
  },
  input: {
    width: '56px',
    padding: '6px 8px',
    borderRadius: '6px',
    border: '1px solid #dee2e6',
    fontSize: '13px',
    textAlign: 'center',
    outline: 'none',
  },
  pctButton: {
    padding: '6px 14px',
    borderRadius: '8px',
    border: '2px solid #667eea',
    fontSize: '14px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, rgba(102,126,234,0.08), rgba(118,75,162,0.08))',
    color: '#667eea',
    cursor: 'pointer',
    transition: 'all 0.15s',
    minWidth: '65px',
    textAlign: 'center',
  },
  calcWeight: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#667eea',
    minWidth: '70px',
  },
  manualInput: {
    width: '72px',
    padding: '6px 8px',
    borderRadius: '6px',
    border: '2px solid #3b82f6',
    fontSize: '13px',
    textAlign: 'center',
    outline: 'none',
    background: '#eff6ff',
  },
  strikethrough: {
    fontSize: '12px',
    color: '#adb5bd',
    textDecoration: 'line-through',
  },
  arrow: {
    fontSize: '14px',
    color: '#495057',
  },
  lbs: {
    fontSize: '12px',
    color: '#868e96',
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '4px',
    borderRadius: '4px',
    lineHeight: 1,
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    padding: '4px',
    borderRadius: '4px',
    color: '#e03131',
    lineHeight: 1,
  },
  removeBtnDisabled: {
    opacity: 0.3,
    cursor: 'not-allowed',
    color: '#adb5bd',
  },
};

export default function PercentageSetRow({ set, setIndex, baseMax, onUpdate, onDuplicate, onRemove, canRemove }) {
  const [showPicker, setShowPicker] = useState(false);
  const calcLbs = calculateWeight(set.percentage || 0, baseMax || 0);
  const isManual = set.manualWeight != null;
  const label = set.isWarmup ? `Warm ${setIndex + 1}` : `Set ${setIndex + 1}`;

  const handlePickerSelect = (pct) => {
    onUpdate({ percentage: pct });
    setShowPicker(false);
  };

  return (
    <div style={{ ...styles.row, ...(set.isWarmup ? styles.rowWarmup : {}) }}>
      {/* Warmup checkbox */}
      <input
        type="checkbox"
        checked={!!set.isWarmup}
        onChange={(e) => onUpdate({ isWarmup: e.target.checked })}
        title="Mark as warmup"
        style={styles.checkbox}
      />

      {/* Label */}
      <span style={{ ...styles.setLabel, ...(set.isWarmup ? styles.warmupLabel : {}) }}>
        {label}
      </span>

      {/* Reps */}
      <input
        type="number"
        min={1}
        max={30}
        value={set.reps || ''}
        onChange={(e) => onUpdate({ reps: parseInt(e.target.value) || 0 })}
        placeholder="Reps"
        style={styles.input}
      />

      {!isManual ? (
        <>
          {/* Percentage button — opens ticker picker */}
          <button
            onClick={() => setShowPicker(true)}
            style={styles.pctButton}
            title="Tap to change percentage"
          >
            {set.percentage || 70}%
          </button>

          {/* Calculated weight */}
          <span style={styles.calcWeight}>= {calcLbs} lbs</span>

          {/* Unlock to manual */}
          <button
            onClick={() => onUpdate({ manualWeight: calcLbs })}
            style={styles.iconBtn}
            title="Override with manual weight"
          >
            🔓
          </button>
        </>
      ) : (
        <>
          {/* Strikethrough original calc */}
          <span style={styles.strikethrough}>
            {set.percentage}% = {calcLbs} lbs
          </span>

          <span style={styles.arrow}>&rarr;</span>

          {/* Manual weight input */}
          <input
            type="number"
            step={5}
            value={set.manualWeight || ''}
            onChange={(e) => onUpdate({ manualWeight: parseFloat(e.target.value) || 0 })}
            style={styles.manualInput}
          />
          <span style={styles.lbs}>lbs</span>

          {/* Lock to return to percentage */}
          <button
            onClick={() => onUpdate({ manualWeight: null })}
            style={styles.iconBtn}
            title="Return to percentage mode"
          >
            🔒
          </button>
        </>
      )}

      {/* Duplicate */}
      <button onClick={onDuplicate} style={styles.iconBtn} title="Duplicate set">
        📋
      </button>

      {/* Remove */}
      <button
        onClick={canRemove ? onRemove : undefined}
        style={{
          ...styles.removeBtn,
          ...(canRemove ? {} : styles.removeBtnDisabled),
        }}
        disabled={!canRemove}
        title="Remove set"
      >
        🗑
      </button>

      {/* Percentage Picker Modal */}
      <PercentagePicker
        isOpen={showPicker}
        currentPercentage={set.percentage || 70}
        onSelect={handlePickerSelect}
        onClose={() => setShowPicker(false)}
      />
    </div>
  );
}
