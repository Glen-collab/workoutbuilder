const UPPER_BODY_PARTS = ['chest', 'back', 'shoulders', 'arms'];
const LOWER_BODY_PARTS = ['legs', 'core'];

// Virtual categories that aggregate subcategories from body parts
const VIRTUAL_CATEGORIES = {
  functional: { label: 'Functional', subKey: 'functional' },
  corrective: { label: 'Corrective', subKey: 'corrective' },
};

// Redirect categories that map to different library keys
const REDIRECT_MAP = {
  olympic_lifting: 'oly_complexes',
  first_responder: 'tactical',
};

function buildVirtualSubcategories(subKey, exerciseCategories) {
  const upperExercises = [];
  const lowerExercises = [];

  for (const part of UPPER_BODY_PARTS) {
    const cat = exerciseCategories[part];
    const sub = cat?.subcategories?.[subKey];
    if (sub) {
      const exs = Array.isArray(sub) ? sub : sub.exercises || [];
      upperExercises.push(...exs);
    }
  }

  for (const part of LOWER_BODY_PARTS) {
    const cat = exerciseCategories[part];
    const sub = cat?.subcategories?.[subKey];
    if (sub) {
      const exs = Array.isArray(sub) ? sub : sub.exercises || [];
      lowerExercises.push(...exs);
    }
  }

  return {
    upper_body: { label: 'Upper Body', exercises: upperExercises },
    lower_body: { label: 'Lower Body', exercises: lowerExercises },
  };
}

export default function SubcategoryTabs({ muscleGroup, exerciseCategories, onSelectSubcategory, onBack }) {
  // Handle redirects (olympic_lifting → oly_complexes, first_responder → tactical)
  const resolvedKey = REDIRECT_MAP[muscleGroup] || muscleGroup;

  // Handle virtual categories (functional, corrective)
  const isVirtual = VIRTUAL_CATEGORIES[muscleGroup];

  let subcategoryKeys;
  let subcategoryData;
  let displayLabel;

  if (isVirtual) {
    subcategoryData = buildVirtualSubcategories(isVirtual.subKey, exerciseCategories);
    subcategoryKeys = Object.keys(subcategoryData);
    displayLabel = isVirtual.label;
  } else {
    const category = exerciseCategories[resolvedKey];
    if (!category || !category.subcategories) return null;
    subcategoryData = category.subcategories;
    subcategoryKeys = Object.keys(subcategoryData);
    displayLabel = category.label || muscleGroup.replace(/_/g, ' ');
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-4">
        <button
          className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition"
          onClick={onBack}
        >
          ←
        </button>
        <h3 className="text-lg font-bold text-gray-700 m-0 capitalize">{displayLabel}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {subcategoryKeys.map((key) => {
          const sub = subcategoryData[key];
          const label = (sub && sub.label) ? sub.label : key.replace(/_/g, ' ');
          return (
            <button
              key={key}
              className="py-3 px-5 bg-white border-2 border-gray-200 rounded-[10px] cursor-pointer text-sm font-semibold text-gray-600 shadow-sm transition-all duration-150 capitalize hover:border-[#667eea] hover:text-[#667eea] hover:shadow-md"
              onClick={() => onSelectSubcategory(key)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
