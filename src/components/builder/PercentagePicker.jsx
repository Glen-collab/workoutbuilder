import { useState, useEffect } from 'react';

const TENS_ROW = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const ONES_ROW = [0, 2, 5, 7];
const DECIMAL_ROW = [0, 5];

function parsePercentage(pct) {
  const val = pct || 70;
  const tensVal = Math.floor(val / 10) * 10;
  const onesVal = Math.floor(val % 10);
  const decVal = Math.round((val % 1) * 10);
  return {
    tens: Math.max(10, Math.min(100, tensVal || 70)),
    ones: onesVal,
    decimal: decVal === 5 ? 5 : 0,
  };
}

function buildPercentage(tens, ones, decimal) {
  return tens + ones + decimal / 10;
}

function ButtonRow({ items, selected, onChange, label, format }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => {
          const isSelected = item === selected;
          return (
            <button
              key={item}
              onClick={() => onChange(item)}
              className={`min-w-[44px] px-2.5 py-2 text-[14px] font-bold rounded-lg cursor-pointer transition-all duration-150 ${
                isSelected
                  ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-md'
                  : 'bg-[#f0eeff] text-gray-600 hover:bg-[#e0ddf8]'
              }`}
            >
              {format ? format(item) : item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PercentagePicker({ isOpen, currentPercentage, onSelect, onClose }) {
  const parsed = parsePercentage(currentPercentage);
  const [tens, setTens] = useState(parsed.tens);
  const [ones, setOnes] = useState(parsed.ones);
  const [decimal, setDecimal] = useState(parsed.decimal);

  useEffect(() => {
    if (isOpen) {
      const p = parsePercentage(currentPercentage);
      setTens(p.tens);
      setOnes(p.ones);
      setDecimal(p.decimal);
    }
  }, [isOpen, currentPercentage]);

  if (!isOpen) return null;

  const previewValue = buildPercentage(tens, ones, decimal);

  const handleConfirm = () => {
    onSelect(previewValue);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-[420px] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] px-4.5 py-3.5 flex items-center justify-between">
          <span className="text-white text-base font-bold">Set Percentage</span>
          <button className="bg-white/20 border-none text-white text-base w-[30px] h-[30px] rounded-full cursor-pointer flex items-center justify-center" onClick={onClose}>✕</button>
        </div>

        {/* Preview */}
        <div className="text-center pt-4 pb-3">
          <span className="text-[46px] font-extrabold bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">{previewValue}%</span>
        </div>

        {/* Tap Rows */}
        <div className="flex flex-col gap-3.5 px-4 pb-4">
          <ButtonRow items={TENS_ROW} selected={tens} onChange={setTens} label="Tens" />
          <ButtonRow items={ONES_ROW} selected={ones} onChange={setOnes} label="Ones" format={(v) => `+${v}`} />
          <ButtonRow items={DECIMAL_ROW} selected={decimal} onChange={setDecimal} label="Decimal" format={(v) => `.${v}`} />
        </div>

        {/* Footer */}
        <div className="flex gap-2.5 p-4 border-t border-gray-200">
          <button className="flex-1 py-3 text-[15px] font-semibold bg-gray-100 text-gray-500 border-none rounded-[10px] cursor-pointer" onClick={onClose}>Cancel</button>
          <button className="flex-[2] py-3 text-[15px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-[10px] cursor-pointer" onClick={handleConfirm}>
            Set {previewValue}%
          </button>
        </div>
      </div>
    </div>
  );
}
