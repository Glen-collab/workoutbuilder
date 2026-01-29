import React from 'react';
import BlockCard from './BlockCard';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
    background: '#fff',
    borderRadius: '14px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  emptyIcon: {
    fontSize: '48px',
    marginBottom: '12px',
  },
  emptyTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#555',
    margin: '0 0 6px 0',
  },
  emptyDesc: {
    fontSize: '14px',
    color: '#999',
    margin: 0,
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '14px',
    fontSize: '15px',
    fontWeight: '600',
    background: '#fff',
    color: '#667eea',
    border: '2px dashed #ccc',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
  },
};

export default function BlockList({
  blocks,
  onAddBlock,
  onDeleteBlock,
  onToggleCollapse,
  onInsertAbove,
  onInsertBelow,
  onUpdateBlock,
  onAddExercise,
  onRemoveExercise,
  onUpdateExercise,
  onUpdateSet,
  onAddSet,
  onRemoveSet,
  onDuplicateSet,
  mainMaxes,
}) {
  if (!blocks || blocks.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>{'\ud83c\udfcb\ufe0f'}</div>
          <h3 style={styles.emptyTitle}>No blocks yet</h3>
          <p style={styles.emptyDesc}>Add your first block to start building the workout.</p>
        </div>
        <button
          style={styles.addButton}
          onClick={onAddBlock}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#667eea')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#ccc')}
        >
          + Add Block
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {blocks.map((block, index) => (
        <BlockCard
          key={block.id || index}
          block={block}
          onDelete={onDeleteBlock}
          onToggleCollapse={onToggleCollapse}
          onInsertAbove={onInsertAbove}
          onInsertBelow={onInsertBelow}
          onUpdateBlock={onUpdateBlock}
          onAddExercise={onAddExercise}
          onRemoveExercise={onRemoveExercise}
          onUpdateExercise={onUpdateExercise}
          onUpdateSet={onUpdateSet}
          onAddSet={onAddSet}
          onRemoveSet={onRemoveSet}
          onDuplicateSet={onDuplicateSet}
          mainMaxes={mainMaxes}
        />
      ))}
      <button
        style={styles.addButton}
        onClick={onAddBlock}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#667eea')}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#ccc')}
      >
        + Add Block
      </button>
    </div>
  );
}
