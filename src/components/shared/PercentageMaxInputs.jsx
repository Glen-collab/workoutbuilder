const MAXES_CONFIG = [
  { key: 'bench', label: 'Bench', gradient: 'from-[#4a90d9] to-[#357abd]' },
  { key: 'squat', label: 'Squat', gradient: 'from-[#27ae60] to-[#1e8c4c]' },
  { key: 'powerClean', label: 'Clean', gradient: 'from-[#e67e22] to-[#d35400]' },
  { key: 'deadlift', label: 'Deadlift', gradient: 'from-[#8e44ad] to-[#732d91]' },
];

export default function PercentageMaxInputs({ mainMaxes, onUpdate }) {
  const handleChange = (key, value) => {
    const num = value === '' ? '' : Number(value);
    onUpdate({ ...mainMaxes, [key]: num });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      {MAXES_CONFIG.map(({ key, label, gradient }) => (
        <div key={key} className={`bg-gradient-to-br ${gradient} rounded-[10px] px-3 py-2.5 flex flex-col items-center gap-1.5 shadow-md`}>
          <span className="text-white font-bold text-[13px] uppercase tracking-wide">{label}</span>
          <div className="flex items-center gap-1">
            <input
              type="number"
              step={5}
              min={0}
              value={mainMaxes[key] ?? ''}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-[70px] px-2 py-1.5 rounded-md border border-white/25 bg-black/25 text-white text-[15px] font-semibold text-center outline-none focus:border-white/50 transition-colors"
            />
            <span className="text-white/70 text-xs font-semibold">lbs</span>
          </div>
        </div>
      ))}
    </div>
  );
}
