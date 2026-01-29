export default function SubcategoryTabs({ muscleGroup, exerciseCategories, onSelectSubcategory, onBack }) {
  const category = exerciseCategories[muscleGroup];
  if (!category || !category.subcategories) return null;

  const subcategoryKeys = Object.keys(category.subcategories);

  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-4">
        <button
          className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition"
          onClick={onBack}
        >
          ←
        </button>
        <h3 className="text-lg font-bold text-gray-700 m-0 capitalize">{muscleGroup.replace(/_/g, ' ')}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {subcategoryKeys.map((key) => (
          <button
            key={key}
            className="py-3 px-5 bg-white border-2 border-gray-200 rounded-[10px] cursor-pointer text-sm font-semibold text-gray-600 shadow-sm transition-all duration-150 capitalize hover:border-[#667eea] hover:text-[#667eea] hover:shadow-md"
            onClick={() => onSelectSubcategory(key)}
          >
            {key.replace(/_/g, ' ')}
          </button>
        ))}
      </div>
    </div>
  );
}
