const CIRCUIT_TYPES = [
  { key: 'amrap', label: 'AMRAP', desc: 'As Many Rounds As Possible' },
  { key: 'fortime', label: 'For Time', desc: 'Complete as fast as possible' },
  { key: 'emom', label: 'EMOM', desc: 'Every Minute On the Minute' },
  { key: 'tabata', label: 'Tabata', desc: '20s work, 10s rest' },
  { key: 'chipper', label: 'Chipper', desc: 'Work through exercises sequentially' },
  { key: 'rounds', label: 'Rounds', desc: 'Specific number of rounds' },
];

export default function CircuitTypeSelector({ isOpen, onClose, onSelect }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/45 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 max-w-[440px] w-[92%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold text-gray-800">Select Circuit Type</h3>
          <button
            className="bg-transparent border-none text-2xl text-gray-400 cursor-pointer px-2 py-1 hover:text-gray-600"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {CIRCUIT_TYPES.map((ct) => (
            <div
              key={ct.key}
              className="flex flex-col py-3.5 px-4 rounded-xl border border-gray-200 bg-gray-50 cursor-pointer transition-all hover:border-[#667eea] hover:bg-indigo-50"
              onClick={() => onSelect(ct.key)}
            >
              <span className="text-[15px] font-bold text-gray-800 mb-0.5">{ct.label}</span>
              <span className="text-[13px] text-gray-500">{ct.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
