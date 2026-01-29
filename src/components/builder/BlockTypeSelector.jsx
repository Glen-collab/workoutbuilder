import React from 'react';

const BLOCK_TYPES = [
  { key: 'theme', icon: '\ud83d\udccb', label: 'Theme / Notes' },
  { key: 'warmup', icon: '\ud83d\udd25', label: 'Warm Up' },
  { key: 'mobility', icon: '\ud83e\uddd8', label: 'Mobility' },
  { key: 'movement', icon: '\u26a1', label: 'Movement' },
  { key: 'straight-set', icon: '\ud83d\udcaa', label: 'Straight Set' },
  { key: 'superset', icon: '\ud83d\udd04', label: 'Superset' },
  { key: 'triset', icon: '\ud83d\udd01', label: 'Triset' },
  { key: 'circuit', icon: '\ud83c\udfaf', label: 'Circuit / MetCon' },
  { key: 'conditioning', icon: '\ud83c\udfc3', label: 'Conditioning' },
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
    maxWidth: '480px',
    width: '92%',
    maxHeight: '85vh',
    overflowY: 'auto',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    marginBottom: '16px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 8px',
    borderRadius: '12px',
    border: '1.5px solid #eee',
    background: '#fafafa',
    cursor: 'pointer',
    transition: 'all 0.15s',
    textAlign: 'center',
  },
  cardIcon: {
    fontSize: '28px',
    marginBottom: '6px',
  },
  cardLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#444',
  },
  premadeButton: {
    width: '100%',
    padding: '14px',
    fontSize: '15px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '4px',
  },
};

export default function BlockTypeSelector({ isOpen, onClose, onSelect, insertPosition }) {
  if (!isOpen) return null;

  const handleSelect = (key) => {
    onSelect(key);
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h3 style={styles.title}>Add Block</h3>
          <button style={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>

        <div style={styles.grid}>
          {BLOCK_TYPES.map((bt) => (
            <div
              key={bt.key}
              style={styles.card}
              onClick={() => handleSelect(bt.key)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.background = '#f0f0ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#eee';
                e.currentTarget.style.background = '#fafafa';
              }}
            >
              <span style={styles.cardIcon}>{bt.icon}</span>
              <span style={styles.cardLabel}>{bt.label}</span>
            </div>
          ))}
        </div>

        <button style={styles.premadeButton} onClick={() => handleSelect('premade')}>
          {'\ud83d\udce6'} Pre-Made Workouts
        </button>
      </div>
    </div>
  );
}
