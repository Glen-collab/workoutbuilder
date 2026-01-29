import { useState, useRef, useEffect } from 'react';

const TENS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ONES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const DECIMALS = [0, 5];

const ITEM_HEIGHT = 48;
const VISIBLE_ITEMS = 5;
const PICKER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

function parsePercentage(pct) {
  const val = pct || 70;
  const tens = Math.floor(val / 10);
  const ones = Math.floor(val % 10);
  const dec = Math.round((val % 1) * 10);
  return {
    tens: Math.max(1, Math.min(10, tens)),
    ones: Math.max(0, Math.min(9, ones)),
    decimal: dec === 5 ? 5 : 0,
  };
}

function buildPercentage(tens, ones, decimal) {
  return tens * 10 + ones + decimal / 10;
}

function PickerColumn({ items, selected, onChange, label }) {
  const listRef = useRef(null);
  const selectedIndex = items.indexOf(selected);

  useEffect(() => {
    if (listRef.current && selectedIndex >= 0) {
      listRef.current.scrollTop = selectedIndex * ITEM_HEIGHT;
    }
  }, []);

  const handleScroll = () => {
    if (!listRef.current) return;
    const scrollTop = listRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    if (items[clamped] !== selected) {
      onChange(items[clamped]);
    }
  };

  const handleItemClick = (item, index) => {
    onChange(item);
    if (listRef.current) {
      listRef.current.scrollTo({ top: index * ITEM_HEIGHT, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-[10px] font-semibold text-gray-400 uppercase mb-1.5 tracking-wide">{label}</div>
      <div className="relative overflow-hidden rounded-xl bg-[#f8f7ff]" style={{ height: `${PICKER_HEIGHT}px`, width: '60px' }}>
        {/* Selection highlight */}
        <div
          className="absolute left-1 right-1 rounded-lg border-2 border-[#667eea] bg-gradient-to-br from-[#667eea]/15 to-[#764ba2]/15 pointer-events-none z-[1]"
          style={{ top: `${ITEM_HEIGHT * 2}px`, height: `${ITEM_HEIGHT}px` }}
        />
        <div
          ref={listRef}
          className="h-full overflow-y-auto snap-y snap-mandatory scrollbar-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
          onScroll={handleScroll}
        >
          {/* Top padding so first item can center */}
          <div style={{ height: ITEM_HEIGHT * 2 }} />
          {items.map((item, index) => {
            const isSelected = item === selected;
            return (
              <div
                key={item}
                onClick={() => handleItemClick(item, index)}
                className={`flex items-center justify-center cursor-pointer snap-start select-none transition-colors duration-150 ${
                  isSelected ? 'text-gray-800 text-[26px] font-extrabold' : 'text-gray-400 text-[22px] font-semibold'
                }`}
                style={{ height: `${ITEM_HEIGHT}px` }}
              >
                {String(item)}
              </div>
            );
          })}
          {/* Bottom padding so last item can center */}
          <div style={{ height: ITEM_HEIGHT * 2 }} />
        </div>
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

  const quickPresets = [40, 50, 60, 65, 70, 75, 80, 85, 90, 95];

  const handleQuickSelect = (pct) => {
    const p = parsePercentage(pct);
    setTens(p.tens);
    setOnes(p.ones);
    setDecimal(p.decimal);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-[380px] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] px-4.5 py-3.5 flex items-center justify-between">
          <span className="text-white text-base font-bold">Set Percentage</span>
          <button className="bg-white/20 border-none text-white text-base w-[30px] h-[30px] rounded-full cursor-pointer flex items-center justify-center" onClick={onClose}>✕</button>
        </div>

        {/* Preview */}
        <div className="text-center pt-4.5 pb-2">
          <span className="text-[42px] font-extrabold bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">{previewValue}%</span>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap gap-1.5 px-4 pb-3.5 justify-center">
          {quickPresets.map((pct) => (
            <button
              key={pct}
              className={`px-3 py-1.5 text-[13px] font-semibold rounded-full cursor-pointer transition-all duration-150 ${
                previewValue === pct
                  ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-2 border-[#667eea]'
                  : 'bg-white text-gray-600 border-2 border-[#e0dff5]'
              }`}
              onClick={() => handleQuickSelect(pct)}
            >
              {pct}%
            </button>
          ))}
        </div>

        {/* Ticker Columns */}
        <div className="flex items-center justify-center gap-1 px-5 pb-4">
          <PickerColumn items={TENS} selected={tens} onChange={setTens} label="Tens" />
          <PickerColumn items={ONES} selected={ones} onChange={setOnes} label="Ones" />
          <div className="text-[32px] font-extrabold text-[#667eea] pt-5">.</div>
          <PickerColumn items={DECIMALS} selected={decimal} onChange={setDecimal} label="Dec" />
          <div className="text-2xl font-bold text-gray-400 pt-5">%</div>
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
