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

function buildDayProgression(day, totalWeeks, allWorkouts) {
  // Seed the canonical (left-column) block list from the FIRST non-empty week.
  // Later weeks fill in by position; if an exercise name differs in week N,
  // the cell renders with the red `.changed-name` highlight so the swap is
  // obvious without duplicating rows. (Older logic deduped by name+type and
  // produced repeat rows for programs like Hyrox that rotate exercises.)
  const canonicalBlocks = [];
  let seedWeek = 0;
  for (let w = 1; w <= totalWeeks; w++) {
    const key = `${w}-${day}`;
    const blocks = allWorkouts[key] || [];
    const usable = blocks.filter(
      (b) => !EXCLUDED_TYPES.has(b.type) && (b.exercises?.length || b.type === 'theme'),
    );
    if (usable.length) {
      seedWeek = w;
      for (const block of usable) {
        canonicalBlocks.push({
          type: block.type,
          label: BLOCK_LABELS[block.type] || block.type,
          circuitType: block.circuitType,
          exercises: (block.exercises || []).map((e) => e.name),
        });
      }
      break;
    }
  }
  if (!seedWeek) return [];

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
            name: ex.name,
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
    <div className="progression-view" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .progression-view, .progression-view * { visibility: visible; }
          .progression-view { position: absolute; left: 0; top: 0; width: 100%; height: auto !important; }
          .progression-view .no-print { display: none !important; }
          .progression-view .scroll-viewport { overflow: visible !important; height: auto !important; flex: none !important; }
          .progression-view table { font-size: 7px; }
          .progression-view th, .progression-view td { padding: 1px 3px; }
          .progression-view .frozen-col { position: static !important; }
        }
        .progression-view table {
          border-collapse: separate;
          border-spacing: 0;
          table-layout: auto;
        }
        .progression-view th, .progression-view td {
          border: 1px solid #d1d5db;
          padding: 3px 6px;
          text-align: left;
          font-size: 11px;
          white-space: nowrap;
        }
        .progression-view .frozen-col {
          position: sticky;
          left: 0;
          z-index: 3;
          background: white;
          border-right: 2px solid #9ca3af;
        }
        .progression-view th.frozen-col {
          z-index: 4;
        }
        .progression-view .day-header {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          font-size: 13px;
          font-weight: 700;
          padding: 6px 8px;
        }
        .progression-view .block-label {
          background: #eef2ff;
          font-size: 10px;
          font-weight: 600;
          color: #4338ca;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .progression-view .exercise-name {
          font-weight: 500;
          min-width: 160px;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .progression-view .changed-name {
          font-size: 9px;
          color: #dc2626;
          font-weight: 600;
          display: block;
          line-height: 1.1;
        }
        .progression-view .spacer-col {
          width: 6px;
          min-width: 6px;
          max-width: 6px;
          background: #e5e7eb;
          padding: 0 !important;
          border-left: none;
          border-right: none;
        }
        .progression-view .week-header {
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          background: #1f2937;
          color: white;
        }
        .progression-view .sub-header {
          text-align: center;
          font-size: 9px;
          font-weight: 600;
          background: #374151;
          color: #d1d5db;
        }
        .progression-view .sets-col { text-align: center; min-width: 32px; }
        .progression-view .reps-col { text-align: center; min-width: 40px; }
        .progression-view .extra-col { text-align: center; min-width: 50px; font-size: 9px; color: #6b7280; }
      `}</style>

      {/* Header — fixed at top */}
      <div className="no-print" style={{ flexShrink: 0, padding: '12px 16px', borderBottom: '1px solid #e5e7eb', background: 'white' }}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[20px] font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-0">
              Program Progressions
            </h2>
            <p className="text-[12px] text-gray-400 m-0">
              {totalWeeks} weeks &middot; {daysPerWeek} days/week
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-[12px] font-semibold bg-gray-800 text-white border-none rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200"
            >
              Print
            </button>
            <button
              onClick={onBack}
              className="px-3 py-1.5 text-[12px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200"
            >
              Back to Builder
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable viewport — both axes, fills remaining screen */}
      <div className="scroll-viewport" style={{ flex: 1, overflow: 'auto', padding: '8px' }}>
        {progression.map(({ day, blocks }) => {
          if (!blocks.length) return null;

          const weekColCount = 3; // sets, reps, extra

          return (
            <div key={day} style={{ marginBottom: '24px' }}>
              <table>
                <thead>
                  <tr>
                    <th className="day-header frozen-col" rowSpan={2}>Day {day}</th>
                    {weekNums.map((w, wi) => (
                      <Fragment key={w}>
                        {wi > 0 && <th className="spacer-col" rowSpan={2}></th>}
                        <th className="week-header" colSpan={weekColCount}>Wk {w}</th>
                      </Fragment>
                    ))}
                  </tr>
                  <tr>
                    {weekNums.map((w, wi) => (
                      <Fragment key={w}>
                        {wi > 0 && null}
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
                      <tr>
                        <td className="block-label frozen-col">
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
                      {block.exerciseData.map((ex, ei) => (
                        <tr key={ei}>
                          <td className="exercise-name frozen-col" title={ex.name}>{ex.name}</td>
                          {weekNums.map((w, wi) => {
                            const data = ex.weeks[w];
                            const nameChanged = data && data.name && data.name !== ex.name;
                            return (
                              <Fragment key={w}>
                                {wi > 0 && <td className="spacer-col"></td>}
                                {nameChanged ? (
                                  <>
                                    <td colSpan={weekColCount} style={{ textAlign: 'center', padding: '2px 4px' }}>
                                      <span className="changed-name">{data.name}</span>
                                      <span style={{ fontSize: '9px', color: '#6b7280' }}>
                                        {data.sets}s x {data.reps}r {data.extra}
                                      </span>
                                    </td>
                                  </>
                                ) : (
                                  <>
                                    <td className="sets-col">{data?.sets || '-'}</td>
                                    <td className="reps-col">{data?.reps || '-'}</td>
                                    <td className="extra-col">{data?.extra || ''}</td>
                                  </>
                                )}
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
