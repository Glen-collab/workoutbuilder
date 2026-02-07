import { useState, useMemo } from 'react';
import { calculateTonnageByCategory, calculateCardioTotals } from '../../utils/percentageCalc';

const GRAPH_METRICS = [
  { key: 'tonnage', label: 'Tonnage', color: '#667eea', suffix: ' lbs' },
  { key: 'calories', label: 'Calories', color: '#ef4444', suffix: '' },
  { key: 'core', label: 'Core', color: '#10b981', suffix: ' reps' },
  { key: 'time', label: 'Time', color: '#f59e0b', suffix: ' min' },
  { key: 'distance', label: 'Distance', color: '#3b82f6', suffix: ' mi' },
];

// Count core reps from core blocks
function countCoreReps(blocks) {
  let total = 0;
  for (const block of (blocks || [])) {
    if (block.type !== 'core') continue;
    for (const exercise of (block.exercises || [])) {
      const sets = parseInt(exercise.setsCount) || 1;
      const repsStr = String(exercise.reps || '');
      if (repsStr.includes(',')) {
        total += repsStr.split(',').reduce((sum, r) => sum + (parseFloat(r.trim()) || 0), 0);
      } else {
        total += (parseFloat(repsStr) || 0) * sets;
      }
    }
  }
  return Math.round(total);
}

// Count total working sets for calorie estimation
function countSets(blocks) {
  let strengthSets = 0;
  for (const block of (blocks || [])) {
    if (block.type === 'theme') continue;
    const isCardio = ['conditioning', 'movement', 'core'].includes(block.type);
    if (isCardio) continue;

    for (const ex of (block.exercises || [])) {
      // For percentage-based exercises, count the sets array
      if (ex.isPercentageBased && Array.isArray(ex.sets)) {
        // Count non-warmup sets
        strengthSets += ex.sets.filter(s => !s.isWarmup).length;
      } else {
        // For regular exercises, use setsCount
        strengthSets += parseInt(ex.setsCount) || 1;
      }
    }
  }
  return strengthSets;
}

// Estimate calories burned using MET formula
// Strength: MET 6, ~1.5 min per working set (includes rest)
// Cardio: MET 7.5, use actual cardio minutes or estimate from distance
function estimateCalories(blocks, cardioMinutes, cardioMiles, userWeight = 150) {
  const weightKg = userWeight * 0.453592;
  const totalSets = countSets(blocks);

  // Strength: MET 6 × weightKg × (strengthMinutes / 60)
  // ~1.5 min per set (30 sec work + 60 sec rest average)
  const strengthMinutes = totalSets * 1.5;
  const strengthCals = 6 * weightKg * (strengthMinutes / 60);

  // Cardio: MET 7.5 × weightKg × (cardioMinutes / 60)
  // If no duration set but distance exists, estimate ~10 min/mile
  let effectiveCardioMinutes = cardioMinutes;
  if (cardioMinutes === 0 && cardioMiles > 0) {
    effectiveCardioMinutes = cardioMiles * 10; // ~10 min per mile average
  } else if (cardioMinutes > 0 && cardioMiles > 0) {
    // If both are set, use the larger calorie estimate
    const minutesFromDistance = cardioMiles * 10;
    effectiveCardioMinutes = Math.max(cardioMinutes, minutesFromDistance);
  }
  const cardioCals = 7.5 * weightKg * (effectiveCardioMinutes / 60);

  return Math.round(strengthCals + cardioCals);
}

export default function ProgramPreviewGraph({ allWorkouts, mainMaxes, totalWeeks, daysPerWeek }) {
  const [selectedMetric, setSelectedMetric] = useState('tonnage');

  // Calculate weekly stats for all weeks
  const weeklyStats = useMemo(() => {
    const stats = [];
    for (let w = 1; w <= totalWeeks; w++) {
      let weekTonnage = 0, weekCore = 0, weekTime = 0, weekDistance = 0, weekCalories = 0;

      for (let d = 1; d <= daysPerWeek; d++) {
        const blocks = allWorkouts[`${w}-${d}`] || [];
        const { total } = calculateTonnageByCategory(blocks, mainMaxes);
        const { totalMinutes, totalMiles } = calculateCardioTotals(blocks);
        const coreReps = countCoreReps(blocks);
        const calories = estimateCalories(blocks, totalMinutes, totalMiles);

        weekTonnage += total;
        weekCore += coreReps;
        weekTime += totalMinutes;
        weekDistance += totalMiles;
        weekCalories += calories;
      }

      stats.push({
        week: w,
        tonnage: Math.round(weekTonnage),
        core: Math.round(weekCore),
        time: Math.round(weekTime * 10) / 10,
        distance: Math.round(weekDistance * 100) / 100,
        calories: Math.round(weekCalories),
        hasData: weekTonnage > 0 || weekCore > 0 || weekTime > 0 || weekDistance > 0,
      });
    }
    return stats;
  }, [allWorkouts, mainMaxes, totalWeeks, daysPerWeek]);

  // Check if we have any data to display
  const hasAnyData = weeklyStats.some(w => w.hasData);
  if (!hasAnyData) return null;

  // Check which metrics have data
  const hasMetric = {
    tonnage: weeklyStats.some(w => w.tonnage > 0),
    calories: weeklyStats.some(w => w.calories > 0),
    core: weeklyStats.some(w => w.core > 0),
    time: weeklyStats.some(w => w.time > 0),
    distance: weeklyStats.some(w => w.distance > 0),
  };

  const availableMetrics = GRAPH_METRICS.filter(m => hasMetric[m.key]);
  const metric = availableMetrics.find(m => m.key === selectedMetric) || availableMetrics[0];
  const maxVal = Math.max(...weeklyStats.map(w => w[metric.key] || 0), 1);

  // Program totals
  const totals = {
    tonnage: weeklyStats.reduce((sum, w) => sum + w.tonnage, 0),
    calories: weeklyStats.reduce((sum, w) => sum + w.calories, 0),
    core: weeklyStats.reduce((sum, w) => sum + w.core, 0),
    time: weeklyStats.reduce((sum, w) => sum + w.time, 0),
    distance: weeklyStats.reduce((sum, w) => sum + w.distance, 0),
  };

  const fmt = (v) => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : (Number.isInteger(v) ? v : v.toFixed(1));

  // SVG dimensions
  const pad = { top: 24, right: 16, bottom: 32, left: 44 };
  const weekWidth = 50;
  const scrollThreshold = 7;
  const useScroll = totalWeeks > scrollThreshold;
  const w = useScroll ? pad.left + pad.right + (totalWeeks - 1) * weekWidth + 20 : 320;
  const h = 140;
  const innerW = w - pad.left - pad.right;
  const innerH = h - pad.top - pad.bottom;

  const points = weeklyStats.map((wk, i) => ({
    x: pad.left + (totalWeeks > 1 ? (i / (totalWeeks - 1)) * innerW : innerW / 2),
    y: pad.top + innerH - (maxVal > 0 ? ((wk[metric.key] || 0) / maxVal) * innerH : 0),
    val: wk[metric.key] || 0,
    week: wk.week,
    hasData: wk.hasData,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaPath = linePath + ` L${points[points.length - 1].x},${pad.top + innerH} L${points[0].x},${pad.top + innerH} Z`;
  const yTicks = [0, Math.round(maxVal / 2), Math.round(maxVal)];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
      <div className="p-4">
        <h3 className="text-center text-base font-bold text-yellow-400 mb-3">
          Program Preview
        </h3>
        <p className="text-center text-xs text-white/60 mb-4">
          Projected stats if program completed as designed
        </p>

        {/* Program totals */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {hasMetric.tonnage && (
            <div className="bg-white/10 rounded-lg px-3 py-2 text-center min-w-[70px]">
              <div className="text-[10px] font-semibold text-white/60 uppercase">Tonnage</div>
              <div className="text-sm font-extrabold text-white">{totals.tonnage.toLocaleString()}</div>
            </div>
          )}
          {hasMetric.calories && (
            <div className="bg-white/10 rounded-lg px-3 py-2 text-center min-w-[70px]">
              <div className="text-[10px] font-semibold text-white/60 uppercase">Calories</div>
              <div className="text-sm font-extrabold text-white">{totals.calories.toLocaleString()}</div>
            </div>
          )}
          {hasMetric.core && (
            <div className="bg-white/10 rounded-lg px-3 py-2 text-center min-w-[70px]">
              <div className="text-[10px] font-semibold text-white/60 uppercase">Core</div>
              <div className="text-sm font-extrabold text-white">{totals.core.toLocaleString()}</div>
            </div>
          )}
          {hasMetric.time && (
            <div className="bg-white/10 rounded-lg px-3 py-2 text-center min-w-[70px]">
              <div className="text-[10px] font-semibold text-white/60 uppercase">Time</div>
              <div className="text-sm font-extrabold text-white">{totals.time} min</div>
            </div>
          )}
          {hasMetric.distance && (
            <div className="bg-white/10 rounded-lg px-3 py-2 text-center min-w-[70px]">
              <div className="text-[10px] font-semibold text-white/60 uppercase">Distance</div>
              <div className="text-sm font-extrabold text-white">{totals.distance.toFixed(1)} mi</div>
            </div>
          )}
        </div>

        {/* Metric tabs */}
        <div className="flex justify-center gap-1.5 mb-3 flex-wrap">
          {availableMetrics.map(m => (
            <button
              key={m.key}
              onClick={() => setSelectedMetric(m.key)}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold cursor-pointer border-none transition-colors ${
                selectedMetric === m.key
                  ? 'text-yellow-400 bg-yellow-400/15'
                  : 'text-white/50 bg-white/5 hover:bg-white/10'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Graph label */}
        <div className="text-[11px] font-semibold text-white/40 text-center mb-2">
          WEEKLY {metric.label.toUpperCase()}
        </div>

        {/* SVG Line Chart */}
        <div className={useScroll ? 'overflow-x-auto pb-2' : ''} style={{ WebkitOverflowScrolling: 'touch' }}>
          <svg viewBox={`0 0 ${w} ${h}`} style={{ width: useScroll ? w : '100%', height: 'auto', minWidth: useScroll ? w : 'auto' }}>
            {/* Grid lines */}
            {yTicks.map((t, i) => {
              const y = pad.top + innerH - (maxVal > 0 ? (t / maxVal) * innerH : 0);
              return (
                <g key={i}>
                  <line x1={pad.left} y1={y} x2={w - pad.right} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  <text x={pad.left - 4} y={y + 3} fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="end">{fmt(t)}</text>
                </g>
              );
            })}

            {/* Area fill */}
            <path d={areaPath} fill={`${metric.color}22`} />

            {/* Line */}
            <path d={linePath} fill="none" stroke={metric.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Dots + labels */}
            {points.map((p, i) => (
              <g key={i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={4}
                  fill={p.hasData ? metric.color : 'rgba(255,255,255,0.2)'}
                  stroke={p.hasData ? '#fff' : 'rgba(255,255,255,0.3)'}
                  strokeWidth="1.5"
                />
                {p.val > 0 && (
                  <text x={p.x} y={p.y - 8} fill="rgba(255,255,255,0.9)" fontSize="9" textAnchor="middle" fontWeight="600">
                    {fmt(p.val)}
                  </text>
                )}
                <text
                  x={p.x}
                  y={h - 8}
                  fill={p.hasData ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)'}
                  fontSize="10"
                  textAnchor="middle"
                  fontWeight="500"
                >
                  W{p.week}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
