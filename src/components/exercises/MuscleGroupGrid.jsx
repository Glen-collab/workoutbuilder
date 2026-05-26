const muscleGroups = [
  { key: 'chest', emoji: '🏋️', label: 'Chest' },
  { key: 'back', emoji: '🔙', label: 'Back' },
  { key: 'legs', emoji: '🦵', label: 'Legs' },
  { key: 'shoulders', emoji: '💪', label: 'Shoulders' },
  { key: 'biceps', emoji: '💪', label: 'Biceps' },
  { key: 'triceps', emoji: '💪', label: 'Triceps' },
  { key: 'core', emoji: '🎯', label: 'Core' },
  { key: 'functional', emoji: '⚡', label: 'Functional' },
  { key: 'corrective', emoji: '🔧', label: 'Corrective' },
  { key: 'olympic_lifting', emoji: '🏅', label: 'Olympic' },
  { key: 'first_responder', emoji: '🐸', label: 'Tactical' },
  { key: 'conditioning', emoji: '🏃', label: 'Conditioning' },
];

export default function MuscleGroupGrid({ onSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4">
      {muscleGroups.map((mg) => (
        <button
          key={mg.key}
          className="flex flex-col items-center justify-center py-5 px-3 bg-white border-none rounded-xl shadow-sm cursor-pointer transition-all duration-150 min-h-[90px] hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#667eea]/30"
          onClick={() => onSelect(mg.key)}
        >
          <span className="text-[28px] mb-2">{mg.emoji}</span>
          <span className="text-sm font-semibold text-gray-700">{mg.label}</span>
        </button>
      ))}
    </div>
  );
}
