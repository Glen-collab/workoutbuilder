import React from 'react';

const CIRCUIT_TYPES = [
  { key: 'amrap', label: 'AMRAP', desc: 'As Many Rounds As Possible' },
  { key: 'fortime', label: 'For Time', desc: 'Complete as fast as possible' },
  { key: 'emom', label: 'EMOM', desc: 'Every Minute On the Minute' },
  { key: 'tabata', label: 'Tabata', desc: '20s work, 10s rest' },
  { key: 'chipper', label: 'Chipper', desc: 'Work through exercises sequentially' },
  { key: 'rounds', label: 'Rounds', desc: 'Specific number of rounds' },
];

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
    padding: '28px 24px',
    maxWidth: '440px',
    width: '92%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#333',
    margin: 0,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '22px',
    color: '#999',
    cursor: 'pointer',
    padding: '4px 8px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  option: {
    display: 'flex',
    flexDirection: 'column',
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1.5px solid #eee',
    background: '#fafafa',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  optionLabel: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '2px',
  },
  optionDesc: {
    fontSize: '13px',
    color: '#888',
  },
};

export default function CircuitTypeSelector({ isOpen, onClose, onSelect }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h3 style={styles.title}>Select Circuit Type</h3>
          <button style={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>

        <div style={styles.list}>
          {CIRCUIT_TYPES.map((ct) => (
            <div
              key={ct.key}
              style={styles.option}
              onClick={() => onSelect(ct.key)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.background = '#f0f0ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#eee';
                e.currentTarget.style.background = '#fafafa';
              }}
            >
              <span style={styles.optionLabel}>{ct.label}</span>
              <span style={styles.optionDesc}>{ct.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
