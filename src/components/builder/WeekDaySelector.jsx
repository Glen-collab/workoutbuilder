import { useState } from 'react';

export default function WeekDaySelector({
  currentWeek,
  currentDay,
  totalWeeks,
  daysPerWeek,
  onSwitchDay,
  onSwitchWeek,
  onCopyWeek,
  onCopyAllWeeks,
}) {
  const [copyMenuOpen, setCopyMenuOpen] = useState(false);

  const remainingWeeks = totalWeeks - currentWeek;

  const handleCopy = (count) => {
    setCopyMenuOpen(false);
    if (count === 'all') {
      onCopyAllWeeks();
    } else {
      onCopyWeek(count);
    }
  };

  return (
    <div className="sticky top-0 z-[100] bg-white rounded-xl shadow-md p-3.5 mb-5">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2.5">
        <select
          className="px-3.5 py-2 text-sm font-semibold border-[1.5px] border-gray-300 rounded-lg bg-white cursor-pointer outline-none"
          value={currentWeek}
          onChange={(e) => onSwitchWeek(parseInt(e.target.value, 10))}
        >
          {Array.from({ length: totalWeeks }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Week {i + 1}
            </option>
          ))}
        </select>

        {remainingWeeks > 0 && (
          <div className="relative">
            <button
              className="px-4 py-2 text-[13px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer"
              onClick={() => setCopyMenuOpen(!copyMenuOpen)}
            >
              Copy Week ▾
            </button>
            {copyMenuOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white rounded-[10px] shadow-lg min-w-[240px] overflow-hidden z-[200]">
                {remainingWeeks >= 1 && (
                  <button
                    className="block w-full px-4 py-2.5 text-sm text-gray-700 bg-none border-none text-left cursor-pointer hover:bg-purple-50"
                    onClick={() => handleCopy(1)}
                  >
                    Copy to Next Week
                  </button>
                )}
                {remainingWeeks >= 2 && (
                  <button
                    className="block w-full px-4 py-2.5 text-sm text-gray-700 bg-none border-none text-left cursor-pointer hover:bg-purple-50"
                    onClick={() => handleCopy(2)}
                  >
                    Copy to Next 2 Weeks
                  </button>
                )}
                {remainingWeeks >= 3 && (
                  <button
                    className="block w-full px-4 py-2.5 text-sm text-gray-700 bg-none border-none text-left cursor-pointer hover:bg-purple-50"
                    onClick={() => handleCopy(3)}
                  >
                    Copy to Next 3 Weeks
                  </button>
                )}
                <button
                  className="block w-full px-4 py-2.5 text-sm font-semibold text-[#667eea] bg-none border-none text-left cursor-pointer hover:bg-purple-50"
                  onClick={() => handleCopy('all')}
                >
                  Copy to All Remaining Weeks
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: daysPerWeek }, (_, i) => (
          <button
            key={i + 1}
            className={`px-4 py-2 text-[13px] font-semibold rounded-lg cursor-pointer transition-all duration-150 ${
              currentDay === i + 1
                ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none'
                : 'bg-white border-[1.5px] border-gray-300 text-gray-600 hover:border-purple-300'
            }`}
            onClick={() => onSwitchDay(i + 1)}
          >
            Day {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
