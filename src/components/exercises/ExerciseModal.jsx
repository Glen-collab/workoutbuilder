import React, { useState, useMemo } from 'react';
import { exerciseCategories } from '../../data/exerciseLibrary';
import { warmupCategories } from '../../data/warmupExercises';
import { mobilityCategories } from '../../data/mobilityExercises';
import { generalMovements } from '../../data/generalMovements';
import MuscleGroupGrid from './MuscleGroupGrid';
import SubcategoryTabs from './SubcategoryTabs';
import ExerciseList from './ExerciseList';
import MovementCategoryList from './MovementCategoryList';

const strengthTypes = ['straight-set', 'superset', 'triset', 'circuit'];

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '16px',
  },
  modal: {
    background: '#f5f3ff',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '520px',
    maxHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '18px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: '700',
    margin: 0,
  },
  closeBtn: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: '#fff',
    fontSize: '18px',
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchWrap: {
    padding: '12px 16px',
    background: '#fff',
    borderBottom: '1px solid #eee',
  },
  searchInput: {
    width: '100%',
    padding: '10px 14px',
    border: '2px solid #e8e8e8',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  body: {
    flex: 1,
    overflowY: 'auto',
  },
};

function getAllExercisesFromCategories(cats) {
  const results = [];
  if (!cats) return results;
  Object.values(cats).forEach((cat) => {
    if (Array.isArray(cat)) {
      results.push(...cat);
    } else if (cat.exercises) {
      results.push(...cat.exercises);
    }
    if (cat && cat.subcategories) {
      Object.values(cat.subcategories).forEach((sub) => {
        if (Array.isArray(sub)) {
          results.push(...sub);
        } else if (sub && sub.exercises) {
          results.push(...sub.exercises);
        }
      });
    }
  });
  return results;
}

function getAllStrengthExercises() {
  const results = [];
  if (!exerciseCategories) return results;
  Object.values(exerciseCategories).forEach((mg) => {
    if (mg.subcategories) {
      Object.values(mg.subcategories).forEach((sub) => {
        if (Array.isArray(sub)) {
          results.push(...sub);
        } else if (sub && sub.exercises) {
          results.push(...sub.exercises);
        }
      });
    }
  });
  return results;
}

export default function ExerciseModal({ isOpen, onClose, blockType, onSelectExercise }) {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const isStrength = strengthTypes.includes(blockType);

  const handleClose = () => {
    setSelectedMuscleGroup(null);
    setSelectedSubcategory(null);
    setSelectedCategory(null);
    setSearchTerm('');
    onClose();
  };

  const handleSelect = (exercise) => {
    onSelectExercise(exercise);
    handleClose();
  };

  // Determine which categories to use for non-strength blocks
  let nonStrengthCategories = null;
  let nonStrengthTitle = '';
  if (blockType === 'warmup') {
    nonStrengthCategories = warmupCategories;
    nonStrengthTitle = 'Warmup Categories';
  } else if (blockType === 'mobility') {
    nonStrengthCategories = mobilityCategories;
    nonStrengthTitle = 'Mobility Categories';
  } else if (blockType === 'movement') {
    nonStrengthCategories = generalMovements;
    nonStrengthTitle = 'Movement Categories';
  } else if (blockType === 'conditioning') {
    // Filter generalMovements to conditioning-related categories
    const conditioningKeys = ['conditioning_general', 'cardio_equipment'];
    const filtered = {};
    if (generalMovements) {
      conditioningKeys.forEach((k) => {
        if (generalMovements[k]) filtered[k] = generalMovements[k];
      });
    }
    nonStrengthCategories = Object.keys(filtered).length > 0 ? filtered : generalMovements;
    nonStrengthTitle = 'Conditioning';
  }

  // Search filtering
  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return null;
    const term = searchTerm.toLowerCase();
    let pool = [];

    if (isStrength) {
      pool = getAllStrengthExercises();
    } else if (nonStrengthCategories) {
      pool = getAllExercisesFromCategories(nonStrengthCategories);
    }

    return pool.filter((ex) => ex.name && ex.name.toLowerCase().includes(term));
  }, [searchTerm, blockType]);

  if (!isOpen) return null;

  // Render body content
  const renderContent = () => {
    // Search results override everything
    if (searchResults) {
      return (
        <ExerciseList
          exercises={searchResults}
          onSelect={handleSelect}
          title={`Results (${searchResults.length})`}
        />
      );
    }

    // Non-strength blocks: category list -> exercise list
    if (!isStrength) {
      if (selectedCategory && nonStrengthCategories && nonStrengthCategories[selectedCategory]) {
        const cat = nonStrengthCategories[selectedCategory];
        const exercises = Array.isArray(cat) ? cat : (cat.exercises || []);
        const title = (cat && cat.label) ? cat.label : selectedCategory.replace(/_/g, ' ');
        return (
          <ExerciseList
            exercises={exercises}
            onSelect={handleSelect}
            onBack={() => setSelectedCategory(null)}
            title={title}
          />
        );
      }
      return (
        <MovementCategoryList
          categories={nonStrengthCategories}
          onSelectCategory={setSelectedCategory}
          title={nonStrengthTitle}
        />
      );
    }

    // Strength blocks: muscle group -> subcategory -> exercise list
    if (!selectedMuscleGroup) {
      return <MuscleGroupGrid onSelect={setSelectedMuscleGroup} />;
    }

    if (!selectedSubcategory) {
      return (
        <SubcategoryTabs
          muscleGroup={selectedMuscleGroup}
          exerciseCategories={exerciseCategories}
          onSelectSubcategory={setSelectedSubcategory}
          onBack={() => setSelectedMuscleGroup(null)}
        />
      );
    }

    // Show exercises for the selected subcategory
    const mg = exerciseCategories[selectedMuscleGroup];
    let exercises = [];
    if (mg && mg.subcategories && mg.subcategories[selectedSubcategory]) {
      const sub = mg.subcategories[selectedSubcategory];
      exercises = Array.isArray(sub) ? sub : sub.exercises || [];
    }

    return (
      <ExerciseList
        exercises={exercises}
        onSelect={handleSelect}
        onBack={() => setSelectedSubcategory(null)}
        title={selectedSubcategory.replace(/_/g, ' ')}
      />
    );
  };

  return (
    <div style={styles.overlay} onClick={handleClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h3 style={styles.headerTitle}>Select Exercise</h3>
          <button style={styles.closeBtn} onClick={handleClose}>✕</button>
        </div>
        <div style={styles.searchWrap}>
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={(e) => (e.target.style.borderColor = '#667eea')}
            onBlur={(e) => (e.target.style.borderColor = '#e8e8e8')}
          />
        </div>
        <div style={styles.body}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
