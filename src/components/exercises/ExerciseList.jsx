export default function ExerciseList({ exercises, onSelect, onBack, title }) {
  if (!exercises || exercises.length === 0) {
    return (
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          {onBack && (
            <button className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition" onClick={onBack}>←</button>
          )}
          <h3 className="text-lg font-bold text-gray-700 m-0">{title || 'Exercises'}</h3>
        </div>
        <p className="text-gray-400 text-center py-5">No exercises found.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-4">
        {onBack && (
          <button
            className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition"
            onClick={onBack}
          >
            ←
          </button>
        )}
        <h3 className="text-lg font-bold text-gray-700 m-0">{title || 'Exercises'}</h3>
      </div>
      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {exercises.map((exercise, idx) => (
          <button
            key={exercise.name + idx}
            className="flex items-center justify-between py-3.5 px-4 bg-white border-none rounded-[10px] shadow-sm cursor-pointer text-left w-full transition-all duration-150 hover:bg-purple-50 hover:shadow-md"
            onClick={() => onSelect(exercise)}
          >
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-gray-700 m-0">{exercise.name}</p>
              {exercise.description && (
                <p className="text-xs text-gray-400 mt-1 mb-0">{exercise.description}</p>
              )}
            </div>
            {exercise.youtube && <span className="text-lg ml-2.5 shrink-0">🎥</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
