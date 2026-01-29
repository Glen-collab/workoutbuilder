import React from 'react';
import WeekDaySelector from './WeekDaySelector';
import BlockList from './BlockList';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 4px 0',
  },
  subtitle: {
    fontSize: '13px',
    color: '#999',
    margin: 0,
  },
  bottomBar: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginTop: '28px',
    padding: '20px 0',
    borderTop: '1px solid #eee',
  },
  saveButton: {
    flex: 1,
    minWidth: '140px',
    padding: '14px 24px',
    fontSize: '15px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  manageButton: {
    padding: '14px 24px',
    fontSize: '15px',
    fontWeight: '600',
    background: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  backButton: {
    padding: '14px 24px',
    fontSize: '15px',
    fontWeight: '600',
    background: 'transparent',
    color: '#999',
    border: '2px solid #ddd',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default function BuilderScreen({ workoutState, onBack, onSave, onManage }) {
  const {
    currentWeek,
    currentDay,
    totalWeeks,
    daysPerWeek,
    blocks,
    mainMaxes,
    switchDay,
    switchWeek,
    copyWeek,
    copyAllWeeks,
    addBlock,
    deleteBlock,
    toggleCollapse,
    insertAbove,
    insertBelow,
    updateBlock,
    addExercise,
    removeExercise,
    updateExercise,
    updateSet,
    addSet,
    removeSet,
    duplicateSet,
  } = workoutState;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Workout Builder</h2>
        <p style={styles.subtitle}>
          Week {currentWeek} &middot; Day {currentDay}
        </p>
      </div>

      <WeekDaySelector
        currentWeek={currentWeek}
        currentDay={currentDay}
        totalWeeks={totalWeeks}
        daysPerWeek={daysPerWeek}
        onSwitchDay={switchDay}
        onSwitchWeek={switchWeek}
        onCopyWeek={copyWeek}
        onCopyAllWeeks={copyAllWeeks}
      />

      <BlockList
        blocks={blocks}
        onAddBlock={addBlock}
        onDeleteBlock={deleteBlock}
        onToggleCollapse={toggleCollapse}
        onInsertAbove={insertAbove}
        onInsertBelow={insertBelow}
        onUpdateBlock={updateBlock}
        onAddExercise={addExercise}
        onRemoveExercise={removeExercise}
        onUpdateExercise={updateExercise}
        onUpdateSet={updateSet}
        onAddSet={addSet}
        onRemoveSet={removeSet}
        onDuplicateSet={duplicateSet}
        mainMaxes={mainMaxes}
      />

      <div style={styles.bottomBar}>
        <button style={styles.saveButton} onClick={onSave}>
          Save Program
        </button>
        <button style={styles.manageButton} onClick={onManage}>
          Manage Programs
        </button>
        <button style={styles.backButton} onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}
