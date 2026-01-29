import React, { useState } from 'react';
import Modal from '../shared/Modal';

const styles = {
  searchRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  searchInput: {
    flex: 1,
    padding: '12px 14px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.06)',
    color: '#e0e0e0',
    outline: 'none',
  },
  searchBtn: {
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  programList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  programCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  programInfo: {
    flex: 1,
  },
  programName: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#e0e0e0',
    marginBottom: '4px',
  },
  programMeta: {
    fontSize: '12px',
    color: '#888',
    display: 'flex',
    gap: '12px',
  },
  loadBtn: {
    padding: '8px 18px',
    fontSize: '13px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    flexShrink: 0,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    padding: '30px 0',
    fontSize: '14px',
  },
  errorBox: {
    padding: '12px 16px',
    borderRadius: '8px',
    background: 'rgba(239, 68, 68, 0.15)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#fca5a5',
    fontSize: '13px',
    marginBottom: '16px',
  },
  spinner: {
    textAlign: 'center',
    padding: '30px 0',
    color: '#999',
    fontSize: '14px',
  },
};

export default function ManagePrograms({ isOpen, onClose, onLoadProgram, apiHook }) {
  const [email, setEmail] = useState('wisco.barbell@gmail.com');
  const [programs, setPrograms] = useState([]);
  const [searched, setSearched] = useState(false);

  const { listPrograms, loading, error } = apiHook;

  const handleSearch = async () => {
    if (!email.trim()) return;
    try {
      const result = await listPrograms(email.trim());
      setPrograms(result.programs || []);
      setSearched(true);
    } catch {
      setSearched(true);
      setPrograms([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Manage Programs" maxWidth="560px">
      <div style={styles.searchRow}>
        <input
          style={styles.searchInput}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Trainer email address"
          onKeyDown={handleKeyDown}
          onFocus={(e) => (e.target.style.borderColor = '#667eea')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
        />
        <button
          style={{
            ...styles.searchBtn,
            opacity: loading ? 0.5 : 1,
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <div style={styles.errorBox}>{error}</div>}

      {loading && <div style={styles.spinner}>Loading programs...</div>}

      {!loading && searched && programs.length === 0 && (
        <div style={styles.emptyText}>No programs found for this email.</div>
      )}

      {!loading && programs.length > 0 && (
        <div style={styles.programList}>
          {programs.map((program) => (
            <div key={program.id || program.accessCode} style={styles.programCard}>
              <div style={styles.programInfo}>
                <div style={styles.programName}>{program.name}</div>
                <div style={styles.programMeta}>
                  <span>Code: {program.accessCode}</span>
                  {program.createdAt && (
                    <span>{new Date(program.createdAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
              <button style={styles.loadBtn} onClick={() => onLoadProgram(program)}>
                Load
              </button>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}
