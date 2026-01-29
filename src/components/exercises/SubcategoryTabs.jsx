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
    textTransform: 'capitalize',
  },
  tabsWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tab: {
    padding: '12px 20px',
    background: '#ffffff',
    border: '2px solid #e8e8e8',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    color: '#555',
    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    transition: 'all 0.15s',
    textTransform: 'capitalize',
  },
};

export default function SubcategoryTabs({ muscleGroup, exerciseCategories, onSelectSubcategory, onBack }) {
  const category = exerciseCategories[muscleGroup];
  if (!category || !category.subcategories) return null;

  const subcategoryKeys = Object.keys(category.subcategories);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button
          style={styles.backButton}
          onClick={onBack}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f0f0')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
        >
          ←
        </button>
        <h3 style={styles.title}>{muscleGroup.replace(/_/g, ' ')}</h3>
      </div>
      <div style={styles.tabsWrap}>
        {subcategoryKeys.map((key) => (
          <button
            key={key}
            style={styles.tab}
            onClick={() => onSelectSubcategory(key)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#667eea';
              e.currentTarget.style.color = '#667eea';
              e.currentTarget.style.boxShadow = '0 3px 10px rgba(102,126,234,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e8e8e8';
              e.currentTarget.style.color = '#555';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)';
            }}
          >
            {key.replace(/_/g, ' ')}
          </button>
        ))}
      </div>
    </div>
  );
}
