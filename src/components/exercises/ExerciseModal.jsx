import { useState, useMemo } from 'react';
import { exerciseCategories } from '../../data/exerciseLibrary';
import { mobilityCategories } from '../../data/mobilityExercises';
import { generalMovements } from '../../data/generalMovements';
import { martialArtsCategories } from '../../data/martialArtsLibrary';
import { poomsaeData } from '../../data/poomsaeData';
import MuscleGroupGrid from './MuscleGroupGrid';
import SubcategoryTabs from './SubcategoryTabs';
import ExerciseList from './ExerciseList';
import MovementCategoryList from './MovementCategoryList';

// Martial arts category grid items
const maGroups = [
  { key: 'tkdCurriculum', emoji: '🎓', label: 'TKD Curriculum' },
  { key: 'kicks', emoji: '🥋', label: 'Kicks' },
  { key: 'handTechniques', emoji: '👊', label: 'Hand Techniques' },
  { key: 'blocks', emoji: '🛡️', label: 'Blocks' },
  { key: 'stances', emoji: '🧍', label: 'Stances' },
  { key: 'sparring', emoji: '⚔️', label: 'Sparring' },
  { key: 'conditioning', emoji: '🔥', label: 'MA Conditioning' },
  { key: 'oneStep', emoji: '🎯', label: 'One-Step Sparring' },
  { key: 'breaking', emoji: '🪵', label: 'Board Breaking' },
  { key: 'boxing', emoji: '🥊', label: 'Boxing' },
  { key: 'stretching', emoji: '🧘', label: 'Stretching & Yoga' },
];

// TKD belt ladder — matches poomsaeData.js keys
const TKD_BELT_LADDER = [
  { key: 'white',      label: 'White Belt' },
  { key: 'high-white', label: 'High White Belt' },
  { key: 'yellow',     label: 'Yellow Belt' },
  { key: 'high-yellow',label: 'High Yellow Belt' },
  { key: 'green',      label: 'Green Belt' },
  { key: 'high-green', label: 'High Green Belt' },
  { key: 'blue',       label: 'Blue Belt' },
  { key: 'high-blue',  label: 'High Blue Belt' },
  { key: 'red',        label: 'Red Belt' },
  { key: 'high-red',   label: 'High Red Belt' },
  { key: 'deputy',     label: 'Deputy Black Belt' },
  { key: 'black',      label: 'Black Belt (1st Dan)' },
  { key: 'dan2',       label: '2nd Dan' },
  { key: 'dan3',       label: '3rd Dan' },
];

// Build curriculum payload for a given belt:
// { form:[], oneStep:[], defense:[], breaks:[] } — each exercise shape matches ExerciseList
function getTkdCurriculumForBelt(beltKey) {
  const result = { form: [], oneStep: [], defense: [], breaks: [] };

  // Forms from poomsaeData — match by `belt` field, emit one exercise per section
  Object.values(poomsaeData).forEach((f) => {
    if (f.belt !== beltKey) return;
    (f.sections || []).forEach((sec) => {
      result.form.push({
        name: sec.name,
        sets: 3,
        reps: '1',
        notes: f.coachingNotes?.[0] || 'Perform full form, clean technique',
        youtube: sec.video || '',
      });
    });
  });

  // One-step sparring — martialArtsCategories.oneStep across all subcategories
  Object.values(martialArtsCategories.oneStep?.subcategories || {}).forEach((sub) => {
    (sub.exercises || []).forEach((ex) => {
      if (ex.beltMin === beltKey) result.oneStep.push(ex);
    });
  });

  // Defense — martialArtsCategories.sparring.defensive
  const defSub = martialArtsCategories.sparring?.subcategories?.defensive;
  (defSub?.exercises || []).forEach((ex) => {
    if (ex.beltMin === beltKey) result.defense.push(ex);
  });

  // Breaks — martialArtsCategories.breaking.techniques
  const brkSub = martialArtsCategories.breaking?.subcategories?.techniques;
  (brkSub?.exercises || []).forEach((ex) => {
    if (ex.beltMin === beltKey) result.breaks.push(ex);
  });

  return result;
}

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
  const [activeTab, setActiveTab] = useState('strength'); // 'strength' | 'martialArts'
  const [maCategory, setMaCategory] = useState(null); // selected MA category key
  const [maSubcategory, setMaSubcategory] = useState(null); // selected MA subcategory key
  const [tkdBelt, setTkdBelt] = useState(null); // selected belt for TKD Curriculum view
  const [curriculumPreviewKey, setCurriculumPreviewKey] = useState(null); // `${section}-${idx}` of previewed video

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
    setActiveTab('strength');
    setMaCategory(null);
    setMaSubcategory(null);
    setTkdBelt(null);
    setCurriculumPreviewKey(null);
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

  // Search filtering — strength blocks search ALL exercise pools so you can
  // add mobility, conditioning, or warmup exercises into supersets/trisets
  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return null;
    const term = searchTerm.toLowerCase();
    let pool = [];

    if (isStrength) {
      // Search strength exercises + warmup + mobility + conditioning + general movements + martial arts
      pool = getAllStrengthExercises();
      // Add warmup/cooldown exercises
      const wuCat = exerciseCategories['warm_up'];
      if (wuCat?.subcategories) {
        Object.values(wuCat.subcategories).forEach((sub) => {
          const exs = Array.isArray(sub) ? sub : (sub.exercises || []);
          pool.push(...exs);
        });
      }
      // Add mobility exercises
      if (mobilityCategories) {
        pool.push(...getAllExercisesFromCategories(mobilityCategories));
      }
      // Add general movements (conditioning, cardio equipment, etc.)
      if (generalMovements) {
        pool.push(...getAllExercisesFromCategories(generalMovements));
      }
      // Add martial arts exercises
      if (martialArtsCategories) {
        pool.push(...getAllExercisesFromCategories(martialArtsCategories));
      }
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

    // Deduplicate by name
    const seen = new Set();
    pool = pool.filter((ex) => {
      if (!ex.name || seen.has(ex.name)) return false;
      seen.add(ex.name);
      return true;
    });

    return pool.filter((ex) => ex.name.toLowerCase().includes(term));
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

    // Martial Arts tab
    if (activeTab === 'martialArts') {
      // ── TKD Curriculum (belt-first nav) ──
      if (maCategory === 'tkdCurriculum') {
        // Belt detail: show 4 sections for selected belt
        if (tkdBelt) {
          const curr = getTkdCurriculumForBelt(tkdBelt);
          const beltLabel = TKD_BELT_LADDER.find((b) => b.key === tkdBelt)?.label || tkdBelt;
          const renderSection = (title, items) => (
            <div key={title} className="mb-4">
              <h4 className="text-sm font-bold text-gray-700 mb-2 mt-3 uppercase tracking-wide">{title}</h4>
              {items.length === 0 ? (
                <p className="text-xs italic text-gray-400 ml-1">No entries yet — film to populate.</p>
              ) : (
                <div className="flex flex-col gap-2">
                  {items.map((ex, i) => {
                    const pkey = `${title}-${i}`;
                    const isPreviewing = curriculumPreviewKey === pkey;
                    return (
                      <div key={pkey}>
                        <div
                          className="flex items-center justify-between py-3 px-4 bg-white rounded-[10px] shadow-sm cursor-pointer transition-all duration-150 hover:bg-purple-50 hover:shadow-md"
                        >
                          <div className="flex-1" onClick={() => handleSelect(ex)}>
                            <p className="text-[14px] font-semibold text-gray-700 m-0">{ex.name}</p>
                            {ex.notes && <p className="text-xs text-gray-400 mt-0.5 mb-0">{ex.notes}</p>}
                          </div>
                          {ex.youtube && (
                            <button
                              onClick={(e) => { e.stopPropagation(); setCurriculumPreviewKey(isPreviewing ? null : pkey); }}
                              className="border-none rounded-md px-2 py-1 text-[12px] cursor-pointer font-semibold text-white ml-2 shrink-0 transition-colors"
                              style={{ background: isPreviewing ? 'linear-gradient(135deg, #1565c0, #42a5f5)' : 'linear-gradient(135deg, #f5851f, #f6a623)' }}
                              title={isPreviewing ? 'Hide preview' : 'Preview video'}
                            >
                              {isPreviewing ? '✖' : '📹'}
                            </button>
                          )}
                        </div>
                        {isPreviewing && ex.youtube && (
                          <div className="mt-1 mb-1 rounded-lg overflow-hidden bg-black" style={{ position: 'relative', paddingTop: '56.25%' }}>
                            <iframe
                              src={`${ex.youtube}?preload=metadata`}
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
          return (
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <button className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition" onClick={() => setTkdBelt(null)}>←</button>
                <h3 className="text-lg font-bold text-gray-700 m-0">{beltLabel}</h3>
              </div>
              {renderSection('Form', curr.form)}
              {renderSection('One-Step Sparring', curr.oneStep)}
              {renderSection('Defense', curr.defense)}
              {renderSection('Breaks', curr.breaks)}
            </div>
          );
        }
        // Belt grid
        return (
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <button className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition" onClick={() => { setMaCategory(null); setTkdBelt(null); }}>←</button>
              <h3 className="text-lg font-bold text-gray-700 m-0">TKD Curriculum — Pick a Belt</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {TKD_BELT_LADDER.map((b) => (
                <button
                  key={b.key}
                  className="py-3 px-3 bg-white border-2 border-gray-200 rounded-[10px] cursor-pointer text-sm font-semibold text-gray-700 shadow-sm transition-all duration-150 hover:border-[#667eea] hover:text-[#667eea] hover:shadow-md"
                  onClick={() => setTkdBelt(b.key)}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        );
      }

      // Showing exercises in a subcategory
      if (maCategory && maSubcategory) {
        const cat = martialArtsCategories[maCategory];
        const sub = cat?.subcategories?.[maSubcategory];
        const exercises = sub?.exercises || [];
        const title = sub?.label || maSubcategory.replace(/_/g, ' ');
        return (
          <ExerciseList
            exercises={exercises}
            onSelect={handleSelect}
            onBack={() => setMaSubcategory(null)}
            title={title}
          />
        );
      }
      // Showing subcategories within a category
      if (maCategory) {
        const cat = martialArtsCategories[maCategory];
        const subcats = cat?.subcategories || {};
        return (
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <button className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition" onClick={() => setMaCategory(null)}>←</button>
              <h3 className="text-lg font-bold text-gray-700 m-0">{cat?.label || maCategory}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {Object.entries(subcats).map(([key, sub]) => (
                <button
                  key={key}
                  className="py-3 px-5 bg-white border-2 border-gray-200 rounded-[10px] cursor-pointer text-sm font-semibold text-gray-600 shadow-sm transition-all duration-150 hover:border-[#667eea] hover:text-[#667eea] hover:shadow-md"
                  onClick={() => setMaSubcategory(key)}
                >
                  {sub.label || key.replace(/_/g, ' ')}
                  <span className="ml-2 text-xs text-gray-400">({(sub.exercises || []).length})</span>
                </button>
              ))}
            </div>
          </div>
        );
      }
      // Showing MA category grid
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4">
          {maGroups.map((mg) => (
            <button
              key={mg.key}
              className="flex flex-col items-center justify-center py-5 px-3 bg-white border-none rounded-xl shadow-sm cursor-pointer transition-all duration-150 min-h-[90px] hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#667eea]/30"
              onClick={() => setMaCategory(mg.key)}
            >
              <span className="text-[28px] mb-2">{mg.emoji}</span>
              <span className="text-sm font-semibold text-gray-700">{mg.label}</span>
            </button>
          ))}
        </div>
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
        {/* Tab switcher — Strength | Martial Arts */}
        {isStrength && (
          <div className="flex bg-gray-100 border-b border-gray-200">
            <button
              className={`flex-1 py-2.5 text-sm font-bold border-none cursor-pointer transition-colors ${activeTab === 'strength' ? 'bg-white text-[#667eea] border-b-2 border-[#667eea]' : 'bg-transparent text-gray-500 hover:text-gray-700'}`}
              style={activeTab === 'strength' ? { borderBottom: '3px solid #667eea' } : {}}
              onClick={() => { setActiveTab('strength'); setMaCategory(null); setMaSubcategory(null); setTkdBelt(null); }}
            >
              💪 Strength
            </button>
            <button
              className={`flex-1 py-2.5 text-sm font-bold border-none cursor-pointer transition-colors ${activeTab === 'martialArts' ? 'bg-white text-[#667eea]' : 'bg-transparent text-gray-500 hover:text-gray-700'}`}
              style={activeTab === 'martialArts' ? { borderBottom: '3px solid #667eea' } : {}}
              onClick={() => { setActiveTab('martialArts'); setSelectedMuscleGroup(null); setSelectedSubcategory(null); }}
            >
              🥋 Martial Arts
            </button>
          </div>
        )}
        <div className="px-4 py-3 bg-white border-b border-gray-200">
          <input
            className="w-full px-3.5 py-2.5 border-2 border-gray-200 rounded-lg text-sm outline-none focus:border-[#667eea] transition-colors"
            type="text"
            placeholder={activeTab === 'martialArts' ? 'Search kicks, combos, techniques...' : 'Search exercises...'}
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
