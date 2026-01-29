import { useState, useMemo } from 'react';
import { calculateTonnageByCategory, calculateCardioTotals } from '../../utils/percentageCalc';
import WeeklyVolumeGraph from './WeeklyVolumeGraph';
import CardioGraph from './CardioGraph';

export default function DailySummary({ blocks, mainMaxes, currentDay, currentWeek, daysPerWeek, totalWeeks, allWorkouts }) {
  const [showGraphs, setShowGraphs] = useState(false);

  const { upper, lower, total } = calculateTonnageByCategory(blocks, mainMaxes);
  const { totalMinutes, totalMiles } = calculateCardioTotals(blocks);

  // Merge current day's blocks into allWorkouts so graphs include live edits
  const mergedWorkouts = useMemo(() => {
    const key = `${currentWeek}-${currentDay}`;
    return { ...allWorkouts, [key]: blocks };
  }, [allWorkouts, blocks, currentWeek, currentDay]);

  const hasVolume = total > 0;
  const hasCardio = totalMinutes > 0 || totalMiles > 0;

  if (!hasVolume && !hasCardio) return null;

  return (
    <div className="mt-5">
      {/* Daily stats */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-4 mb-4">
        <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-wide mb-3">
          Day {currentDay} Summary
        </h3>

        {hasVolume && (
          <div className="flex flex-wrap gap-3 mb-2">
            <div className="flex-1 min-w-[100px] bg-white rounded-lg border border-gray-200 px-3 py-2.5 text-center">
              <div className="text-[11px] font-semibold text-gray-400 uppercase">Total</div>
              <div className="text-[18px] font-extrabold text-[#a855f7]">{total.toLocaleString()}</div>
              <div className="text-[10px] text-gray-400">lbs</div>
            </div>
            <div className="flex-1 min-w-[100px] bg-white rounded-lg border border-gray-200 px-3 py-2.5 text-center">
              <div className="text-[11px] font-semibold text-gray-400 uppercase">Upper</div>
              <div className="text-[18px] font-extrabold text-[#3b82f6]">{upper.toLocaleString()}</div>
              <div className="text-[10px] text-gray-400">lbs</div>
            </div>
            <div className="flex-1 min-w-[100px] bg-white rounded-lg border border-gray-200 px-3 py-2.5 text-center">
              <div className="text-[11px] font-semibold text-gray-400 uppercase">Lower</div>
              <div className="text-[18px] font-extrabold text-[#22c55e]">{lower.toLocaleString()}</div>
              <div className="text-[10px] text-gray-400">lbs</div>
            </div>
          </div>
        )}

        {hasCardio && (
          <div className="flex flex-wrap gap-3">
            {totalMinutes > 0 && (
              <div className="flex-1 min-w-[100px] bg-white rounded-lg border border-gray-200 px-3 py-2.5 text-center">
                <div className="text-[11px] font-semibold text-gray-400 uppercase">Time</div>
                <div className="text-[18px] font-extrabold text-[#f59e0b]">{totalMinutes}</div>
                <div className="text-[10px] text-gray-400">min</div>
              </div>
            )}
            {totalMiles > 0 && (
              <div className="flex-1 min-w-[100px] bg-white rounded-lg border border-gray-200 px-3 py-2.5 text-center">
                <div className="text-[11px] font-semibold text-gray-400 uppercase">Distance</div>
                <div className="text-[18px] font-extrabold text-[#06b6d4]">{totalMiles}</div>
                <div className="text-[10px] text-gray-400">miles</div>
              </div>
            )}
          </div>
        )}

        {/* Toggle weekly graphs */}
        <button
          onClick={() => setShowGraphs(!showGraphs)}
          className="mt-3 text-[12px] font-semibold text-[#667eea] bg-transparent border border-[#667eea]/30 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-[#667eea]/10 transition-colors"
        >
          {showGraphs ? 'Hide Weekly Graphs' : 'Show Weekly Graphs'}
        </button>
      </div>

      {/* Weekly graphs */}
      {showGraphs && (
        <div className="flex flex-col gap-4 mb-4">
          <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-wide">
            Program Volume Overview
          </h3>
          <WeeklyVolumeGraph
            allWorkouts={mergedWorkouts}
            mainMaxes={mainMaxes}
            totalWeeks={totalWeeks}
            daysPerWeek={daysPerWeek}
          />
          <CardioGraph
            allWorkouts={mergedWorkouts}
            totalWeeks={totalWeeks}
            daysPerWeek={daysPerWeek}
          />
        </div>
      )}
    </div>
  );
}
