import React from 'react';

const styles = {
  container: {
    padding: '16px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 16px 0',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 18px',
    background: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    transition: 'all 0.15s',
  },
  label: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#333',
    textTransform: 'capitalize',
  },
  count: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#999',
    background: '#f3f0ff',
    padding: '4px 10px',
    borderRadius: '12px',
  },
};

export default function MovementCategoryList({ categories, onSelectCategory, title }) {
  if (!categories) return null;

  const keys = Object.keys(categories);

  return (
    <div style={styles.container}>
      {title && <h3 style={styles.title}>{title}</h3>}
      <div style={styles.list}>
        {keys.map((key) => {
          const cat = categories[key];
          const exerciseCount = Array.isArray(cat) ? cat.length : (cat.exercises ? cat.exercises.length : 0);
          const label = (cat && cat.label) ? cat.label : key.replace(/_/g, ' ');

          return (
            <button
              key={key}
              style={styles.button}
              onClick={() => onSelectCategory(key)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f7f5ff';
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(102,126,234,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.08)';
              }}
            >
              <span style={styles.label}>{label}</span>
              <span style={styles.count}>{exerciseCount} exercises</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
