import { Fragment, useMemo } from 'react';

// Block types to exclude from the progression grid
const EXCLUDED_TYPES = new Set(['warmup', 'mobility', 'cooldown', 'movement']);

// Friendly labels for block types
const BLOCK_LABELS = {
  'straight-set': 'Straight Set',
  superset: 'Superset',
  triset: 'Triset',
  circuit: 'Circuit',
  conditioning: 'Conditioning',
  theme: 'Theme',
};

/**
 * Summarise sets + reps into a single short string per column.
 * Percentage-based exercises store sets in exercise.sets[].
 * Non-percentage exercises use exercise.setsCount / exercise.reps.
 */
function summariseSets(exercise) {
  if (exercise.isPercentageBased && exercise.sets?.length) {
    const count = exercise.sets.filter((s) => !s.isWarmup).length;
    return String(count);
  }
  return exercise.setsCount || '-';
}

function summariseReps(exercise) {
  if (exercise.isPercentageBased && exercise.sets?.length) {
    const workSets = exercise.sets.filter((s) => !s.isWarmup);
    const reps = workSets.map((s) => s.reps);
    const unique = [...new Set(reps)];
    if (unique.length === 1) return String(unique[0]);
    return reps.join(', ');
  }
  return exercise.reps || exercise.duration ? exercise.reps || `${exercise.duration}${exercise.durationUnit || 's'}` : '-';
}

function summariseExtra(exercise) {
  const parts = [];
  if (exercise.qualifier && exercise.qualifier !== '') parts.push(exercise.qualifier);
  if (exercise.isPercentageBased && exercise.sets?.length) {
    const workSets = exercise.sets.filter((s) => !s.isWarmup);
    const pcts = [...new Set(workSets.map((s) => s.percentage))];
    if (pcts.length === 1) parts.push(`${pcts[0]}%`);
    else if (pcts.length > 1) parts.push(`${Math.min(...pcts)}-${Math.max(...pcts)}%`);
  }
  if (exercise.weight) parts.push(`${exercise.weight}lbs`);
  if (exercise.distance) parts.push(`${exercise.distance}${exercise.distanceUnit || 'm'}`);
  if (exercise.duration && !exercise.isPercentageBased) parts.push(`${exercise.duration}${exercise.durationUnit || 's'}`);
  return parts.join(' ');
}

/**
 * Build a structured array for one day across all weeks:
 * [{ blockLabel, exercises: [{ name, weeks: { [weekNum]: { sets, reps, extra } } }] }]
 */
function buildDayProgression(day, totalWeeks, allWorkouts) {
  // First pass: collect all blocks across all weeks for this day to build a canonical row order
  // Use week 1 as the template, then fill in from other weeks
  const canonicalBlocks = [];
  const seen = new Set();

  for (let w = 1; w <= totalWeeks; w++) {
    const key = `${w}-${day}`;
    const blocks = allWorkouts[key] || [];
    for (const block of blocks) {
      if (EXCLUDED_TYPES.has(block.type)) continue;
      if (!block.exercises?.length && block.type !== 'theme') continue;

      // Build a fingerprint for this block position
      const exerciseNames = (block.exercises || []).map((e) => e.name).join('|');
      const fp = `${block.type}::${exerciseNames}`;

      if (!seen.has(fp)) {
        seen.add(fp);
        canonicalBlocks.push({
          type: block.type,
          label: BLOCK_LABELS[block.type] || block.type,
          circuitType: block.circuitType,
          exercises: (block.exercises || []).map((e) => e.name),
        });
      }
    }
  }

  // Second pass: fill in sets/reps per week
  const result = canonicalBlocks.map((cb) => ({
    ...cb,
    exerciseData: cb.exercises.map((name) => ({
      name,
      weeks: {},
    })),
  }));

  for (let w = 1; w <= totalWeeks; w++) {
    const key = `${w}-${day}`;
    const blocks = allWorkouts[key] || [];

    let blockIdx = 0;
    for (const block of blocks) {
      if (EXCLUDED_TYPES.has(block.type)) continue;
      if (!block.exercises?.length && block.type !== 'theme') continue;

      // Match to canonical block by index within filtered blocks
      if (blockIdx >= result.length) break;
      const target = result[blockIdx];
      blockIdx++;

      for (let ei = 0; ei < (block.exercises || []).length; ei++) {
        const ex = block.exercises[ei];
        if (ei < target.exerciseData.length) {
          target.exerciseData[ei].weeks[w] = {
            sets: summariseSets(ex),
            reps: summariseReps(ex),
            extra: summariseExtra(ex),
            name: ex.name, // actual name this week (may differ)
          };
        }
      }
    }
  }

  return result;
}

export default function ProgressionView({ allWorkouts, totalWeeks, daysPerWeek, onBack }) {
  const progression = useMemo(() => {
    const days = [];
    for (let d = 1; d <= daysPerWeek; d++) {
      days.push({
        day: d,
        blocks: buildDayProgression(d, totalWeeks, allWorkouts),
      });
    }
    return days;
  }, [allWorkouts, totalWeeks, daysPerWeek]);

  const weekNums = Array.from({ length: totalWeeks }, (_, i) => i + 1);

  return (
    <div className="progression-view">
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .progression-view, .progression-view * { visibility: visible; }
          .progression-view { position: absolute; left: 0; top: 0; width: 100%; }
          .progression-view .no-print { display: none !important; }
          .progression-view table { font-size: 8px; }
          .progression-view th, .progression-view td { padding: 2px 4px; }
        }
        .progression-view table {
          border-collapse: collapse;
          width: 100%;
          table-layout: auto;
        }
        .progression-view th, .progression-view td {
          border: 1px solid #d1d5db;
          padding: 4px 8px;
          text-align: left;
          font-size: 12px;
          white-space: nowrap;
        }
        .progression-view th {
          background: #f3f4f6;
          font-weight: 600;
          position: sticky;
          top: 0;
          z-index: 2;
        }
        .progression-view .day-header {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          font-size: 14px;
          font-weight: 700;
          padding: 8px;
        }
        .progression-view .block-label {
          background: #eef2ff;
          font-size: 11px;
          font-weight: 600;
          color: #4338ca;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .progression-view .exercise-name {
          font-weight: 500;
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .progression-view .spacer-col {
          width: 8px;
          min-width: 8px;
          background: #f9fafb;
          border-left: 2px solid #e5e7eb;
          border-right: 2px solid #e5e7eb;
        }
        .progression-view .week-header {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          background: #1f2937;
          color: white;
        }
        .progression-view .sub-header {
          text-align: center;
          font-size: 10px;
          font-weight: 600;
          background: #374151;
          color: #d1d5db;
        }
        .progression-view .sets-col { text-align: center; min-width: 40px; }
        .progression-view .reps-col { text-align: center; min-width: 50px; }
        .progression-view .extra-col { text-align: center; min-width: 60px; font-size: 10px; color: #6b7280; }
      `}</style>

      {/* Header */}
      <div className="max-w-full mx-auto px-4 py-4 no-print">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-[22px] font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-1">
              Program Progressions
            </h2>
            <p className="text-[13px] text-gray-400 m-0">
              {totalWeeks} weeks &middot; {daysPerWeek} days/week
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-[13px] font-semibold bg-gray-800 text-white border-none rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200"
            >
              Print
            </button>
            <button
              onClick={onBack}
              className="px-4 py-2 text-[13px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200"
            >
              Back to Builder
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable table container */}
      <div className="overflow-x-auto px-2 pb-8">
        {progression.map(({ day, blocks }) => {
          if (!blocks.length) return null;

          // Count total columns: exercise col + (sets + reps + extra) per week + spacers between weeks
          const weekColCount = 3; // sets, reps, extra

          return (
            <div key={day} className="mb-8">
              <table>
                <thead>
                  {/* Week number header row */}
                  <tr>
                    <th className="day-header" rowSpan={2}>Day {day}</th>
                    {weekNums.map((w, wi) => (
                      <Fragment key={w}>
                        {wi > 0 && <th className="spacer-col" rowSpan={2}></th>}
                        <th className="week-header" colSpan={weekColCount}>Wk {w}</th>
                      </Fragment>
                    ))}
                  </tr>
                  {/* Sub-header row: Sets / Reps / Info */}
                  <tr>
                    {weekNums.map((w, wi) => (
                      <Fragment key={w}>
                        {wi > 0 && null /* spacer already placed */}
                        <th className="sub-header">Sets</th>
                        <th className="sub-header">Reps</th>
                        <th className="sub-header">Info</th>
                      </Fragment>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {blocks.map((block, bi) => (
                    <Fragment key={bi}>
                      {/* Block type label row */}
                      <tr>
                        <td className="block-label">
                          {block.label}
                          {block.circuitType ? ` (${block.circuitType})` : ''}
                        </td>
                        {weekNums.map((w, wi) => (
                          <Fragment key={w}>
                            {wi > 0 && <td className="spacer-col"></td>}
                            <td className="block-label" colSpan={weekColCount}></td>
                          </Fragment>
                        ))}
                      </tr>
                      {/* Exercise rows */}
                      {block.exerciseData.map((ex, ei) => (
                        <tr key={ei}>
                          <td className="exercise-name" title={ex.name}>{ex.name}</td>
                          {weekNums.map((w, wi) => {
                            const data = ex.weeks[w];
                            return (
                              <Fragment key={w}>
                                {wi > 0 && <td className="spacer-col"></td>}
                                <td className="sets-col">{data?.sets || '-'}</td>
                                <td className="reps-col">{data?.reps || '-'}</td>
                                <td className="extra-col">{data?.extra || ''}</td>
                              </Fragment>
                            );
                          })}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}

        {progression.every((d) => !d.blocks.length) && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg font-semibold">No workout data to display</p>
            <p className="text-sm">Build out your program in the builder first, then come here to see progressions.</p>
          </div>
        )}
      </div>
    </div>
  );
}
