import React from 'react';

const styles = {
  container: {
    padding: '16px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  backButton: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#667eea',
    padding: '4px 8px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#333',
    margin: 0,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px',
    background: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    transition: 'all 0.15s',
  },
  itemContent: {
    flex: 1,
  },
  name: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
  },
  description: {
    fontSize: '12px',
    color: '#888',
    margin: '4px 0 0 0',
  },
  youtube: {
    fontSize: '18px',
    marginLeft: '10px',
    flexShrink: 0,
  },
};

export default function ExerciseList({ exercises, onSelect, onBack, title }) {
  if (!exercises || exercises.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          {onBack && (
            <button style={styles.backButton} onClick={onBack}>←</button>
          )}
          <h3 style={styles.title}>{title || 'Exercises'}</h3>
        </div>
        <p style={{ color: '#888', textAlign: 'center', padding: '20px' }}>No exercises found.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {onBack && (
          <button
            style={styles.backButton}
            onClick={onBack}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f0f0')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
          >
            ←
          </button>
        )}
        <h3 style={styles.title}>{title || 'Exercises'}</h3>
      </div>
      <div style={styles.list}>
        {exercises.map((exercise, idx) => (
          <button
            key={exercise.name + idx}
            style={styles.item}
            onClick={() => onSelect(exercise)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f7f5ff';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(102,126,234,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
            }}
          >
            <div style={styles.itemContent}>
              <p style={styles.name}>{exercise.name}</p>
              {exercise.description && (
                <p style={styles.description}>{exercise.description}</p>
              )}
            </div>
            {exercise.youtube && <span style={styles.youtube}>🎥</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
