import React, { useState, useEffect } from 'react';
import Modal from '../shared/Modal';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#ccc',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  input: {
    padding: '12px 14px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.06)',
    color: '#e0e0e0',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  loadedBadge: {
    padding: '10px 14px',
    borderRadius: '8px',
    background: 'rgba(102, 126, 234, 0.15)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
    fontSize: '13px',
    color: '#a0b4f8',
  },
  loadedName: {
    fontWeight: '700',
    color: '#c0cfff',
  },
  accessCode: {
    fontSize: '12px',
    color: '#888',
    marginTop: '4px',
  },
  buttonRow: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
  },
  saveBtn: {
    flex: 1,
    padding: '14px 24px',
    fontSize: '15px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    opacity: 1,
    transition: 'opacity 0.2s',
  },
  cancelBtn: {
    padding: '14px 24px',
    fontSize: '15px',
    fontWeight: '600',
    background: 'transparent',
    color: '#999',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default function SaveProgramModal({ isOpen, onClose, onSave, loadedProgram, loading }) {
  const [programName, setProgramName] = useState('');
  const [programNickname, setProgramNickname] = useState('');
  const [trainerEmail, setTrainerEmail] = useState('wisco.barbell@gmail.com');
  const [optionalTrainerEmail, setOptionalTrainerEmail] = useState('');

  const isUpdate = !!loadedProgram;

  useEffect(() => {
    if (isOpen && loadedProgram) {
      setProgramName(loadedProgram.name || '');
    }
  }, [isOpen, loadedProgram]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!programName.trim()) return;
    onSave({
      programName: programName.trim(),
      programNickname: programNickname.trim(),
      trainerEmail: trainerEmail.trim(),
      optionalTrainerEmail: optionalTrainerEmail.trim(),
    });
  };

  const title = isUpdate ? 'Update Program' : 'Save Program';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="480px">
      <form style={styles.form} onSubmit={handleSubmit}>
        {isUpdate && (
          <div style={styles.loadedBadge}>
            <div>
              Updating: <span style={styles.loadedName}>{loadedProgram.name}</span>
            </div>
            <div style={styles.accessCode}>
              Access Code: {loadedProgram.accessCode}
            </div>
          </div>
        )}

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Program Name *</label>
          <input
            style={styles.input}
            type="text"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            placeholder="e.g. Summer Strength Phase 1"
            required
            onFocus={(e) => (e.target.style.borderColor = '#667eea')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Program Nickname</label>
          <input
            style={styles.input}
            type="text"
            value={programNickname}
            onChange={(e) => setProgramNickname(e.target.value)}
            placeholder="Optional short name"
            onFocus={(e) => (e.target.style.borderColor = '#667eea')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Trainer Email</label>
          <input
            style={styles.input}
            type="email"
            value={trainerEmail}
            onChange={(e) => setTrainerEmail(e.target.value)}
            placeholder="trainer@email.com"
            onFocus={(e) => (e.target.style.borderColor = '#667eea')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Optional CC Email</label>
          <input
            style={styles.input}
            type="email"
            value={optionalTrainerEmail}
            onChange={(e) => setOptionalTrainerEmail(e.target.value)}
            placeholder="cc@email.com"
            onFocus={(e) => (e.target.style.borderColor = '#667eea')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </div>

        <div style={styles.buttonRow}>
          <button
            type="submit"
            style={{
              ...styles.saveBtn,
              opacity: loading || !programName.trim() ? 0.5 : 1,
              cursor: loading || !programName.trim() ? 'not-allowed' : 'pointer',
            }}
            disabled={loading || !programName.trim()}
          >
            {loading ? 'Saving...' : isUpdate ? 'Update Program' : 'Save Program'}
          </button>
          <button type="button" style={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
