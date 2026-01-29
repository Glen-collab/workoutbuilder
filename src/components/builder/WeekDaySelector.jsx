import React, { useState } from 'react';

const styles = {
  container: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    padding: '14px 18px',
    marginBottom: '20px',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  weekSelect: {
    padding: '8px 14px',
    fontSize: '14px',
    fontWeight: '600',
    border: '1.5px solid #ddd',
    borderRadius: '8px',
    background: '#fff',
    cursor: 'pointer',
    outline: 'none',
  },
  copyDropdownWrapper: {
    position: 'relative',
  },
  copyButton: {
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  copyMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '4px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    minWidth: '240px',
    overflow: 'hidden',
    zIndex: 200,
  },
  copyMenuItem: {
    display: 'block',
    width: '100%',
    padding: '10px 16px',
    fontSize: '14px',
    color: '#333',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer',
  },
  dayRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  dayButton: (active) => ({
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: '600',
    borderRadius: '8px',
    border: active ? 'none' : '1.5px solid #ddd',
    background: active ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#fff',
    color: active ? '#fff' : '#555',
    cursor: 'pointer',
    transition: 'all 0.15s',
  }),
};

export default function WeekDaySelector({
  currentWeek,
  currentDay,
  totalWeeks,
  daysPerWeek,
  onSwitchDay,
  onSwitchWeek,
  onCopyWeek,
  onCopyAllWeeks,
}) {
  const [copyMenuOpen, setCopyMenuOpen] = useState(false);

  const remainingWeeks = totalWeeks - currentWeek;

  const handleCopy = (count) => {
    setCopyMenuOpen(false);
    if (count === 'all') {
      onCopyAllWeeks();
    } else {
      onCopyWeek(count);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.topRow}>
        <select
          style={styles.weekSelect}
          value={currentWeek}
          onChange={(e) => onSwitchWeek(parseInt(e.target.value, 10))}
        >
          {Array.from({ length: totalWeeks }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Week {i + 1}
            </option>
          ))}
        </select>

        {remainingWeeks > 0 && (
          <div style={styles.copyDropdownWrapper}>
            <button
              style={styles.copyButton}
              onClick={() => setCopyMenuOpen(!copyMenuOpen)}
            >
              Copy Week ▾
            </button>
            {copyMenuOpen && (
              <div style={styles.copyMenu}>
                {remainingWeeks >= 1 && (
                  <button
                    style={styles.copyMenuItem}
                    onClick={() => handleCopy(1)}
                    onMouseEnter={(e) => (e.target.style.background = '#f5f5ff')}
                    onMouseLeave={(e) => (e.target.style.background = 'none')}
                  >
                    Copy to Next Week
                  </button>
                )}
                {remainingWeeks >= 2 && (
                  <button
                    style={styles.copyMenuItem}
                    onClick={() => handleCopy(2)}
                    onMouseEnter={(e) => (e.target.style.background = '#f5f5ff')}
                    onMouseLeave={(e) => (e.target.style.background = 'none')}
                  >
                    Copy to Next 2 Weeks
                  </button>
                )}
                {remainingWeeks >= 3 && (
                  <button
                    style={styles.copyMenuItem}
                    onClick={() => handleCopy(3)}
                    onMouseEnter={(e) => (e.target.style.background = '#f5f5ff')}
                    onMouseLeave={(e) => (e.target.style.background = 'none')}
                  >
                    Copy to Next 3 Weeks
                  </button>
                )}
                <button
                  style={{ ...styles.copyMenuItem, fontWeight: '600', color: '#667eea' }}
                  onClick={() => handleCopy('all')}
                  onMouseEnter={(e) => (e.target.style.background = '#f5f5ff')}
                  onMouseLeave={(e) => (e.target.style.background = 'none')}
                >
                  Copy to All Remaining Weeks
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div style={styles.dayRow}>
        {Array.from({ length: daysPerWeek }, (_, i) => (
          <button
            key={i + 1}
            style={styles.dayButton(currentDay === i + 1)}
            onClick={() => onSwitchDay(i + 1)}
          >
            Day {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
