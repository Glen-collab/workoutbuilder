import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    padding: '40px 20px',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    padding: '48px 40px',
    maxWidth: '480px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 12px 0',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
    margin: '0 0 36px 0',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '14px 28px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  secondaryButton: {
    background: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    borderRadius: '10px',
    padding: '12px 28px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
};

export default function WelcomeScreen({ onNewProgram, onManagePrograms }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Workout Program Builder</h1>
        <p style={styles.description}>
          Design custom workout programs with blocks, supersets, circuits, and more.
          Build once, train for weeks.
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.primaryButton} onClick={onNewProgram}>
            Build New Program
          </button>
          <button style={styles.secondaryButton} onClick={onManagePrograms}>
            Manage Programs
          </button>
        </div>
      </div>
    </div>
  );
}
