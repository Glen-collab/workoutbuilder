import { useState, useMemo } from 'react';
import { exerciseCategories } from '../../data/exerciseLibrary';
import { mobilityCategories } from '../../data/mobilityExercises';
import { generalMovements } from '../../data/generalMovements';
import MuscleGroupGrid from './MuscleGroupGrid';
import SubcategoryTabs from './SubcategoryTabs';
import ExerciseList from './ExerciseList';
import MovementCategoryList from './MovementCategoryList';

const strengthTypes = ['straight-set', 'superset', 'triset', 'circuit'];
const warmupCooldownTypes = ['warmup', 'cooldown'];

const VIRTUAL_CATEGORIES = { functional: 'functional', corrective: 'corrective' };
const REDIRECT_MAP = { olympic_lifting: 'oly_complexes', first_responder: 'tactical' };
const UPPER_PARTS = ['chest', 'back', 'shoulders', 'biceps', 'triceps'];
const LOWER_PARTS = ['legs', 'core'];

function getExercisesForSelection(muscleGroup, subcategory) {
  // Virtual categories (functional/corrective → upper_body/lower_body)
  if (VIRTUAL_CATEGORIES[muscleGroup]) {
    const subKey = VIRTUAL_CATEGORIES[muscleGroup];
    const parts = subcategory === 'upper_body' ? UPPER_PARTS : LOWER_PARTS;
    const results = [];
    for (const part of parts) {
      const cat = exerciseCategories[part];
      const sub = cat?.subcategories?.[subKey];
      if (sub) {
        const exs = Array.isArray(sub) ? sub : sub.exercises || [];
        results.push(...exs);
      }
    }
    return results;
  }

  // Redirected categories (olympic_lifting → oly_complexes, first_responder → tactical)
  const resolvedKey = REDIRECT_MAP[muscleGroup] || muscleGroup;
  const mg = exerciseCategories[resolvedKey];
  if (mg?.subcategories?.[subcategory]) {
    const sub = mg.subcategories[subcategory];
    return Array.isArray(sub) ? sub : sub.exercises || [];
  }
  return [];
}

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
  const isWarmupCooldown = warmupCooldownTypes.includes(blockType);

  // For cooldown, resolve shared_with to pull from warm_up exercises
  const warmupCooldownKey = (() => {
    if (blockType === 'warmup') return 'warm_up';
    if (blockType === 'cooldown') {
      const cd = exerciseCategories['cool_down'];
      return cd?.shared_with || 'warm_up';
    }
    return null;
  })();

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
  if (blockType === 'mobility') {
    nonStrengthCategories = mobilityCategories;
    nonStrengthTitle = 'Mobility Categories';
  } else if (blockType === 'movement') {
    nonStrengthCategories = generalMovements;
    nonStrengthTitle = 'Movement Categories';
  } else if (blockType === 'conditioning') {
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
    } else if (isWarmupCooldown && warmupCooldownKey) {
      const wuCat = exerciseCategories[warmupCooldownKey];
      if (wuCat?.subcategories) {
        Object.values(wuCat.subcategories).forEach((sub) => {
          const exs = Array.isArray(sub) ? sub : (sub.exercises || []);
          pool.push(...exs);
        });
      }
    } else if (nonStrengthCategories) {
      pool = getAllExercisesFromCategories(nonStrengthCategories);
    }

    return pool.filter((ex) => ex.name && ex.name.toLowerCase().includes(term));
  }, [searchTerm, blockType]);

  if (!isOpen) return null;

  // Render body content
  const renderContent = () => {
    if (searchResults) {
      return (
        <ExerciseList
          exercises={searchResults}
          onSelect={handleSelect}
          title={`Results (${searchResults.length})`}
        />
      );
    }

    // Warmup / Cooldown: use SubcategoryTabs from exerciseLibrary.warm_up
    if (isWarmupCooldown && warmupCooldownKey) {
      if (!selectedSubcategory) {
        return (
          <SubcategoryTabs
            muscleGroup={warmupCooldownKey}
            exerciseCategories={exerciseCategories}
            onSelectSubcategory={setSelectedSubcategory}
            onBack={handleClose}
          />
        );
      }
      const wuCat = exerciseCategories[warmupCooldownKey];
      const sub = wuCat?.subcategories?.[selectedSubcategory];
      const exercises = Array.isArray(sub) ? sub : (sub?.exercises || []);
      const title = sub?.label || selectedSubcategory.replace(/_/g, ' ');
      return (
        <ExerciseList
          exercises={exercises}
          onSelect={handleSelect}
          onBack={() => setSelectedSubcategory(null)}
          title={title}
        />
      );
    }

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

    const exercises = getExercisesForSelection(selectedMuscleGroup, selectedSubcategory);

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4" onClick={handleClose}>
      <div className="bg-purple-50 rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] px-5 py-4 flex items-center justify-between">
          <h3 className="text-white text-lg font-bold m-0">Select Exercise</h3>
          <button className="bg-white/20 border-none text-white text-lg w-[34px] h-[34px] rounded-full cursor-pointer flex items-center justify-center hover:bg-white/30 transition" onClick={handleClose}>✕</button>
        </div>
        <div className="px-4 py-3 bg-white border-b border-gray-200">
          <input
            className="w-full px-3.5 py-2.5 border-2 border-gray-200 rounded-lg text-sm outline-none focus:border-[#667eea] transition-colors"
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
