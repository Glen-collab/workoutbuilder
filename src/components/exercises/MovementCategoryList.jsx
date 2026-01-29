export default function MovementCategoryList({ categories, onSelectCategory, title }) {
  if (!categories) return null;

  const keys = Object.keys(categories);

  return (
    <div className="p-4">
      {title && <h3 className="text-lg font-bold text-gray-700 mb-4 mt-0">{title}</h3>}
      <div className="flex flex-col gap-2.5">
        {keys.map((key) => {
          const cat = categories[key];
          const exerciseCount = Array.isArray(cat) ? cat.length : (cat.exercises ? cat.exercises.length : 0);
          const label = (cat && cat.label) ? cat.label : key.replace(/_/g, ' ');

          return (
            <button
              key={key}
              className="flex items-center justify-between py-4 px-[18px] bg-white border-none rounded-[10px] shadow-sm cursor-pointer w-full text-left transition-all duration-150 hover:bg-purple-50 hover:shadow-md"
              onClick={() => onSelectCategory(key)}
            >
              <span className="text-[15px] font-semibold text-gray-700 capitalize">{label}</span>
              <span className="text-[13px] font-medium text-gray-400 bg-purple-50 px-2.5 py-1 rounded-xl">{exerciseCount} exercises</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
