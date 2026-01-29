import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    minHeight: '80vh',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    padding: '36px 32px',
    maxWidth: '520px',
    width: '100%',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '14px',
    color: '#888',
    margin: '0 0 28px 0',
  },
  fieldGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    color: '#444',
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    fontSize: '15px',
    border: '1.5px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  },
  select: {
    width: '100%',
    padding: '10px 14px',
    fontSize: '15px',
    border: '1.5px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
    background: '#fff',
    cursor: 'pointer',
  },
  radioGroup: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  radioButton: (active) => ({
    padding: '8px 18px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '8px',
    border: active ? '2px solid #667eea' : '2px solid #ddd',
    background: active ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#fff',
    color: active ? '#fff' : '#555',
    cursor: 'pointer',
    transition: 'all 0.2s',
  }),
  row: {
    display: 'flex',
    gap: '16px',
  },
  halfField: {
    flex: 1,
    marginBottom: '20px',
  },
  buttonRow: {
    display: 'flex',
    gap: '12px',
    marginTop: '28px',
  },
  backButton: {
    flex: '0 0 auto',
    background: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    borderRadius: '10px',
    padding: '12px 24px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  submitButton: {
    flex: 1,
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '14px 28px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

const GOALS = [
  'Strength',
  'Hypertrophy',
  'Weight Loss',
  'Sports Performance',
  'General Fitness',
  'First Responder',
];

const EXPERIENCE_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export default function ProfileSetup({ onComplete, onBack }) {
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState('');
  const [goal, setGoal] = useState('Strength');
  const [experience, setExperience] = useState('Intermediate');
  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const [totalWeeks, setTotalWeeks] = useState(4);

  const handleSubmit = () => {
    onComplete({
      gender,
      age: parseInt(age, 10) || 0,
      goal,
      experience,
      daysPerWeek: parseInt(daysPerWeek, 10) || 4,
      totalWeeks: parseInt(totalWeeks, 10) || 4,
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Profile Setup</h2>
        <p style={styles.subtitle}>Tell us about yourself to customize your program.</p>

        {/* Gender */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Gender</label>
          <div style={styles.radioGroup}>
            {['Male', 'Female', 'Other'].map((g) => (
              <button
                key={g}
                type="button"
                style={styles.radioButton(gender === g)}
                onClick={() => setGender(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Age */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Age</label>
          <input
            type="number"
            style={styles.input}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="e.g. 30"
            min="1"
            max="120"
          />
        </div>

        {/* Goal */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Goal</label>
          <select style={styles.select} value={goal} onChange={(e) => setGoal(e.target.value)}>
            {GOALS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* Experience */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Experience Level</label>
          <div style={styles.radioGroup}>
            {EXPERIENCE_LEVELS.map((lvl) => (
              <button
                key={lvl}
                type="button"
                style={styles.radioButton(experience === lvl)}
                onClick={() => setExperience(lvl)}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Days per week & Total weeks */}
        <div style={styles.row}>
          <div style={styles.halfField}>
            <label style={styles.label}>Days Per Week</label>
            <input
              type="number"
              style={styles.input}
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(e.target.value)}
              min="1"
              max="7"
            />
          </div>
          <div style={styles.halfField}>
            <label style={styles.label}>Total Weeks</label>
            <input
              type="number"
              style={styles.input}
              value={totalWeeks}
              onChange={(e) => setTotalWeeks(e.target.value)}
              min="1"
              max="12"
            />
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonRow}>
          <button style={styles.backButton} onClick={onBack}>Back</button>
          <button style={styles.submitButton} onClick={handleSubmit}>Start Building</button>
        </div>
      </div>
    </div>
  );
}
