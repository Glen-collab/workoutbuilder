import React from 'react';

const muscleGroups = [
  { key: 'chest', emoji: '🏋️', label: 'Chest' },
  { key: 'back', emoji: '🔙', label: 'Back' },
  { key: 'legs', emoji: '🦵', label: 'Legs' },
  { key: 'shoulders', emoji: '💪', label: 'Shoulders' },
  { key: 'arms', emoji: '💪', label: 'Arms' },
  { key: 'core', emoji: '🎯', label: 'Core' },
  { key: 'functional', emoji: '⚡', label: 'Functional' },
  { key: 'corrective', emoji: '🔧', label: 'Corrective' },
  { key: 'olympic_lifting', emoji: '🏅', label: 'Olympic' },
  { key: 'first_responder', emoji: '🚒', label: 'First Responder' },
];

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    padding: '16px',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 12px',
    background: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s',
    minHeight: '90px',
  },
  emoji: {
    fontSize: '28px',
    marginBottom: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },
};

export default function MuscleGroupGrid({ onSelect }) {
  return (
    <div style={styles.grid}>
      {muscleGroups.map((mg) => (
        <button
          key={mg.key}
          style={styles.button}
          onClick={() => onSelect(mg.key)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(102,126,234,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          <span style={styles.emoji}>{mg.emoji}</span>
          <span style={styles.label}>{mg.label}</span>
        </button>
      ))}
    </div>
  );
}
