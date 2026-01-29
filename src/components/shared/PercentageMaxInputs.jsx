import React from 'react';

const MAXES_CONFIG = [
  { key: 'bench', label: 'Bench', color: '#4a90d9', gradient: 'linear-gradient(135deg, #4a90d9, #357abd)' },
  { key: 'squat', label: 'Squat', color: '#27ae60', gradient: 'linear-gradient(135deg, #27ae60, #1e8c4c)' },
  { key: 'powerClean', label: 'Clean', color: '#e67e22', gradient: 'linear-gradient(135deg, #e67e22, #d35400)' },
  { key: 'deadlift', label: 'Deadlift', color: '#8e44ad', gradient: 'linear-gradient(135deg, #8e44ad, #732d91)' },
];

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
};

const cardStyle = (gradient) => ({
  background: gradient,
  borderRadius: '10px',
  padding: '10px 12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
});

const labelStyle = {
  color: '#fff',
  fontWeight: '700',
  fontSize: '13px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const inputWrapStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
};

const inputStyle = {
  width: '70px',
  padding: '6px 8px',
  borderRadius: '6px',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  background: 'rgba(0, 0, 0, 0.25)',
  color: '#fff',
  fontSize: '15px',
  fontWeight: '600',
  textAlign: 'center',
  outline: 'none',
};

const suffixStyle = {
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '12px',
  fontWeight: '600',
};

// Inject responsive media query once
if (typeof document !== 'undefined') {
  const id = 'pmi-responsive-style';
  if (!document.getElementById(id)) {
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
      @media (max-width: 600px) {
        .pmi-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
    `;
    document.head.appendChild(style);
  }
}

export default function PercentageMaxInputs({ mainMaxes, onUpdate }) {
  const handleChange = (key, value) => {
    const num = value === '' ? '' : Number(value);
    onUpdate({ ...mainMaxes, [key]: num });
  };

  return (
    <div className="pmi-grid" style={gridStyle}>
      {MAXES_CONFIG.map(({ key, label, gradient }) => (
        <div key={key} style={cardStyle(gradient)}>
          <span style={labelStyle}>{label}</span>
          <div style={inputWrapStyle}>
            <input
              type="number"
              step={5}
              min={0}
              value={mainMaxes[key] ?? ''}
              onChange={(e) => handleChange(key, e.target.value)}
              style={inputStyle}
            />
            <span style={suffixStyle}>lbs</span>
          </div>
        </div>
      ))}
    </div>
  );
}
