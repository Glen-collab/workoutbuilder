import { useState } from 'react';

const MAX_DAYS = 7;

export default function WeekDaySelector({
  currentWeek,
  currentDay,
  totalWeeks,
  daysPerWeek,
  hiddenDays = [],
  onSwitchDay,
  onSwitchWeek,
  onCopyWeek,
  onCopyAllWeeks,
  onCopyDay,
  onToggleDayHidden,
  onInsertWeek,
  onAddWeeks,
}) {
  const [copyMenuOpen, setCopyMenuOpen] = useState(false);
  const [copyDayMenuOpen, setCopyDayMenuOpen] = useState(false);
  const [insertMenuOpen, setInsertMenuOpen] = useState(false);
  const [addWeeksMenuOpen, setAddWeeksMenuOpen] = useState(false);

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
    <div className="bg-white rounded-xl shadow-md p-3.5 mb-5">
      {/* Action buttons — uniform 2-col grid: Add Weeks | Insert Week, then
          Copy Day | Copy Week. Each menu drops as a full-width panel below. */}
      <div className="relative mb-3">
        <div className="grid grid-cols-2 gap-2.5">
          {onAddWeeks && (
            <button
              className="w-full px-3 py-2.5 text-[13px] font-semibold bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] text-white border-none rounded-lg cursor-pointer"
              onClick={() => { setAddWeeksMenuOpen(!addWeeksMenuOpen); setCopyMenuOpen(false); setCopyDayMenuOpen(false); setInsertMenuOpen(false); }}
            >
              + Add Weeks ▾
            </button>
          )}
          {onInsertWeek && (
            <button
              className="w-full px-3 py-2.5 text-[13px] font-semibold bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white border-none rounded-lg cursor-pointer"
              onClick={() => { setInsertMenuOpen(!insertMenuOpen); setCopyMenuOpen(false); setCopyDayMenuOpen(false); setAddWeeksMenuOpen(false); }}
            >
              + Insert Week ▾
            </button>
          )}
          {onCopyDay && daysPerWeek > 1 && (
            <button
              className="w-full px-3 py-2.5 text-[13px] font-semibold bg-gradient-to-br from-[#0ea5e9] to-[#0369a1] text-white border-none rounded-lg cursor-pointer"
              onClick={() => { setCopyDayMenuOpen(!copyDayMenuOpen); setCopyMenuOpen(false); setInsertMenuOpen(false); setAddWeeksMenuOpen(false); }}
            >
              Copy Day ▾
            </button>
          )}
          {remainingWeeks > 0 && (
            <button
              className="w-full px-3 py-2.5 text-[13px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer"
              onClick={() => { setCopyMenuOpen(!copyMenuOpen); setCopyDayMenuOpen(false); setInsertMenuOpen(false); setAddWeeksMenuOpen(false); }}
            >
              Copy Week ▾
            </button>
          )}
        </div>

        {/* Insert Week menu */}
        {insertMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-[10px] shadow-lg overflow-hidden z-[200] max-h-[300px] overflow-y-auto border border-gray-100">
            {Array.from({ length: totalWeeks + 1 }, (_, i) => i + 1).map((pos) => (
              <button
                key={pos}
                className="block w-full px-4 py-2.5 text-sm text-gray-700 bg-none border-none text-left cursor-pointer hover:bg-green-50"
                onClick={() => { setInsertMenuOpen(false); onInsertWeek(pos); }}
              >
                {pos === 1 ? 'Insert as Week 1 (before current Week 1)' :
                 pos === totalWeeks + 1 ? `Insert as Week ${pos} (at end)` :
                 `Insert before Week ${pos}`}
              </button>
            ))}
          </div>
        )}

        {/* Add Weeks menu */}
        {addWeeksMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-[10px] shadow-lg overflow-hidden z-[200] max-h-[300px] overflow-y-auto border border-gray-100">
            {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((count) => (
              <button
                key={count}
                className="block w-full px-4 py-2.5 text-sm text-gray-700 bg-none border-none text-left cursor-pointer hover:bg-blue-50"
                onClick={() => { setAddWeeksMenuOpen(false); onAddWeeks(count); }}
              >
                Add {count} week{count > 1 ? 's' : ''} (→ {totalWeeks + count} total)
              </button>
            ))}
          </div>
        )}

        {/* Copy Week menu */}
        {copyMenuOpen && remainingWeeks > 0 && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-[10px] shadow-lg overflow-hidden z-[200] border border-gray-100">
            {remainingWeeks >= 1 && (
              <button className="block w-full px-4 py-2.5 text-sm text-gray-700 bg-none border-none text-left cursor-pointer hover:bg-purple-50" onClick={() => handleCopy(1)}>
                Copy This Day to Next Week
              </button>
            )}
            {remainingWeeks >= 2 && (
              <button className="block w-full px-4 py-2.5 text-sm text-gray-700 bg-none border-none text-left cursor-pointer hover:bg-purple-50" onClick={() => handleCopy(2)}>
                Copy to Next 2 Weeks
              </button>
            )}
            {remainingWeeks >= 3 && (
              <button className="block w-full px-4 py-2.5 text-sm text-gray-700 bg-none border-none text-left cursor-pointer hover:bg-purple-50" onClick={() => handleCopy(3)}>
                Copy This Day to Next 3 Weeks
              </button>
            )}
            <button className="block w-full px-4 py-2.5 text-sm font-semibold text-[#667eea] bg-none border-none text-left cursor-pointer hover:bg-purple-50" onClick={() => handleCopy('all')}>
              Copy This Day to All Weeks
            </button>
          </div>
        )}

        {/* Copy Day menu */}
        {copyDayMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-[10px] shadow-lg overflow-hidden z-[200] max-h-[300px] overflow-y-auto border border-gray-100">
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 border-b border-gray-100">
              Copy Day {currentDay} to…
            </div>
            {Array.from({ length: MAX_DAYS }, (_, i) => i + 1)
              .filter((d) => d !== currentDay)
              .map((d) => (
                <button
                  key={d}
                  className="block w-full px-4 py-2.5 text-sm text-gray-700 bg-none border-none text-left cursor-pointer hover:bg-sky-50"
                  onClick={() => { setCopyDayMenuOpen(false); onCopyDay(d); }}
                >
                  Copy to Day {d}{hiddenDays.includes(d) ? ' (hidden)' : ''}
                </button>
              ))}
          </div>
        )}
      </div>

      {/* Week picker — sits above the day picker */}
      <select
        className="w-full px-3.5 py-2.5 text-sm font-semibold border-[1.5px] border-gray-300 rounded-lg bg-white cursor-pointer outline-none mb-2.5"
        value={currentWeek}
        onChange={(e) => onSwitchWeek(parseInt(e.target.value, 10))}
      >
        {Array.from({ length: totalWeeks }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            Week {i + 1}
          </option>
        ))}
      </select>

      {/* Day pills — always MAX_DAYS slots. Tap the day to edit it; tap the eye to
          hide/show it. Hidden days are grayed + struck through and are dropped from
          the client tracker and the gym TV. */}
      <div className="flex gap-2 flex-wrap items-center">
        {Array.from({ length: MAX_DAYS }, (_, i) => i + 1).map((day) => {
          const selected = currentDay === day;
          const hidden = hiddenDays.includes(day);
          return (
            <div
              key={day}
              className={`flex items-stretch rounded-lg overflow-hidden border-[1.5px] transition-all duration-150 ${
                selected ? 'border-[#667eea]' : 'border-gray-300'
              } ${hidden ? 'opacity-60' : ''}`}
            >
              <button
                className={`pl-3 pr-2 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-150 ${
                  selected
                    ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white'
                    : 'bg-white text-gray-600 hover:text-purple-500'
                } ${hidden ? 'line-through' : ''}`}
                onClick={() => onSwitchDay(day)}
                title={`Edit Day ${day}`}
              >
                Day {day}
              </button>
              {onToggleDayHidden && (
                <button
                  className={`px-2 py-2 text-[13px] cursor-pointer border-l ${
                    selected ? 'border-white/30' : 'border-gray-200'
                  } ${selected ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2]' : 'bg-white'} hover:opacity-80`}
                  onClick={() => onToggleDayHidden(day)}
                  title={hidden ? `Show Day ${day} to client + TV` : `Hide Day ${day} from client + TV`}
                >
                  {hidden ? '🙈' : '👁'}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-gray-400 mt-2 mb-0">
        Tap a day to edit it · tap 👁 to hide a day from the client &amp; gym TV (grayed = hidden)
      </p>
    </div>
  );
}
