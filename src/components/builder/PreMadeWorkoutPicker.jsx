import { useState } from 'react';
import { preMadeWorkouts } from '../../data/preMadeWorkouts';

export default function PreMadeWorkoutPicker({ isOpen, onClose, onSelectWorkout }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!isOpen) return null;

  const categories = Object.entries(preMadeWorkouts);

  const handleClose = () => {
    setSelectedCategory(null);
    onClose();
  };

  const handleSelect = (workout) => {
    onSelectWorkout(workout);
    handleClose();
  };

  const renderContent = () => {
    if (!selectedCategory) {
      return (
        <div className="grid grid-cols-2 gap-3 p-4">
          {categories.map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className="flex flex-col items-center justify-center py-5 px-3 bg-white border-none rounded-xl shadow-sm cursor-pointer transition-all min-h-[90px] hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#667eea]/30"
            >
              <span className="text-[28px] mb-2">{cat.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{cat.label}</span>
              <span className="text-[11px] text-gray-400 mt-1">{Object.keys(cat.workouts).length} workouts</span>
            </button>
          ))}
        </div>
      );
    }

    const cat = preMadeWorkouts[selectedCategory];
    const workouts = Object.entries(cat.workouts);

    return (
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition"
            onClick={() => setSelectedCategory(null)}
          >
            ←
          </button>
          <h3 className="text-lg font-bold text-gray-700 m-0">{cat.icon} {cat.label}</h3>
        </div>
        <div className="flex flex-col gap-2.5">
          {workouts.map(([key, workout]) => (
            <button
              key={key}
              onClick={() => handleSelect(workout)}
              className="flex flex-col items-start text-left p-3.5 bg-white border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-[#667eea] hover:shadow-md"
            >
              <span className="text-[14px] font-bold text-gray-800">{workout.name}</span>
              {workout.description && (
                <span className="text-[12px] text-gray-400 mt-1">{workout.description}</span>
              )}
              <span className="text-[11px] text-[#667eea] font-semibold mt-1.5">
                {workout.blocks.length} block{workout.blocks.length !== 1 ? 's' : ''} · {workout.blocks.reduce((n, b) => n + (b.exercises?.length || 0), 0)} exercises
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4" onClick={handleClose}>
      <div className="bg-purple-50 rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] px-5 py-4 flex items-center justify-between">
          <h3 className="text-white text-lg font-bold m-0">Pre-Made Workouts</h3>
          <button className="bg-white/20 border-none text-white text-lg w-[34px] h-[34px] rounded-full cursor-pointer flex items-center justify-center hover:bg-white/30 transition" onClick={handleClose}>✕</button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
