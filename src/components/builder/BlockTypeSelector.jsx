const BLOCK_TYPES = [
  { key: 'theme', icon: '\ud83d\udccb', label: 'Theme / Notes' },
  { key: 'warmup', icon: '\ud83d\udd25', label: 'Warm Up' },
  { key: 'mobility', icon: '\ud83e\uddd8', label: 'Mobility' },
  { key: 'movement', icon: '\u26a1', label: 'Movement' },
  { key: 'straight-set', icon: '\ud83d\udcaa', label: 'Straight Set' },
  { key: 'superset', icon: '\ud83d\udd04', label: 'Superset' },
  { key: 'triset', icon: '\ud83d\udd01', label: 'Triset' },
  { key: 'circuit', icon: '\ud83c\udfaf', label: 'Circuit / MetCon' },
  { key: 'conditioning', icon: '\ud83c\udfc3', label: 'Conditioning' },
];

export default function BlockTypeSelector({ isOpen, onClose, onSelect, insertPosition }) {
  if (!isOpen) return null;

  const handleSelect = (key) => {
    onSelect(key);
  };

  return (
    <div
      className="fixed inset-0 bg-black/45 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 max-w-md w-[92%] max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold text-gray-800">Add Block</h3>
          <button
            className="bg-transparent border-none text-2xl text-gray-400 cursor-pointer px-2 py-1 hover:text-gray-600"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {BLOCK_TYPES.map((bt) => (
            <div
              key={bt.key}
              className="flex flex-col items-center justify-center p-4 sm:p-4 rounded-xl border border-gray-200 bg-gray-50 cursor-pointer text-center transition-all hover:border-[#667eea] hover:bg-indigo-50"
              onClick={() => handleSelect(bt.key)}
            >
              <span className="text-[28px] mb-1.5">{bt.icon}</span>
              <span className="text-xs font-semibold text-gray-700">{bt.label}</span>
            </div>
          ))}
        </div>

        <button
          className="w-full py-3.5 text-[15px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-xl cursor-pointer mt-1 hover:opacity-90 transition-opacity"
          onClick={() => handleSelect('premade')}
        >
          {'\ud83d\udce6'} Pre-Made Workouts
        </button>
      </div>
    </div>
  );
}
