import { useState } from 'react';
import { SPRINT_DISTANCES } from '../../utils/sprintTargets';

// Coach-only Sprint PBs — the velocity analog of the Bench/Squat maxes. The
// coach punches in each athlete's best time per distance; prescribed sprints
// then auto-fill their target time (PB ÷ %). Collapsible + optional so it never
// clutters the builder for coaches who don't program sprints.
const ZONE_TONE = {
  'Acceleration': { bg: '#fee2e2', fg: '#b91c1c' },
  'Max Velocity': { bg: '#ffedd5', fg: '#c2410c' },
  'Speed Endurance': { bg: '#fef9c3', fg: '#a16207' },
  'Special Endurance': { bg: '#dbeafe', fg: '#1d4ed8' },
};

export default function SprintPbsPanel({ sprintPBs, onUpdate }) {
  const [open, setOpen] = useState(false);
  const pbs = sprintPBs || {};
  const filled = SPRINT_DISTANCES.filter((d) => (pbs[d.key] || '').toString().trim() !== '').length;

  const setPB = (key, value) => onUpdate({ ...pbs, [key]: value });

  return (
    <div className="rounded-[10px] border border-gray-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-left bg-gradient-to-r from-[#dc2626]/5 to-[#f59e0b]/5 hover:from-[#dc2626]/10 hover:to-[#f59e0b]/10 transition-colors"
      >
        <span className="flex items-center gap-2 text-[13px] font-bold text-gray-700">
          🏃 Sprint PBs
          <span className="text-[11px] font-medium text-gray-400">
            {filled > 0 ? `${filled} entered — target times auto-fill` : 'optional — for sprint target times'}
          </span>
        </span>
        <span className="text-gray-400 text-[13px]">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="px-3 py-3 border-t border-gray-100">
          <p className="text-[11px] text-gray-400 mb-2.5">
            Enter the athlete's <b>best time</b> per distance (e.g. <code>4.80</code>, or <code>1:02.5</code> for 400m).
            Prescribed sprints auto-fill their target = PB ÷ intensity %. Re-test → just update the number here.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {SPRINT_DISTANCES.map((d) => {
              const tone = ZONE_TONE[d.zone] || { bg: '#f3f4f6', fg: '#374151' };
              return (
                <div key={d.key} className="flex flex-col gap-1">
                  <span className="flex items-center justify-between">
                    <span className="text-[12px] font-bold text-gray-700">{d.label}</span>
                    <span className="text-[9px] font-semibold rounded px-1 py-[1px]" style={{ background: tone.bg, color: tone.fg }} title={d.zone}>
                      {d.zone.split(' ').map((w) => w[0]).join('')}
                    </span>
                  </span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={pbs[d.key] || ''}
                    onChange={(e) => setPB(d.key, e.target.value)}
                    placeholder="time"
                    className="px-2 py-1.5 rounded-md border text-[13px] text-center outline-none"
                    style={{
                      borderColor: (pbs[d.key] || '').toString().trim() ? '#dc2626' : '#d1d5db',
                      background: (pbs[d.key] || '').toString().trim() ? '#fef2f2' : '#fff',
                      fontWeight: (pbs[d.key] || '').toString().trim() ? 700 : 400,
                    }}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-[10px] text-gray-300 mt-2">A = Acceleration · MV = Max Velocity · SE = Speed Endurance · SE = Special Endurance</p>
        </div>
      )}
    </div>
  );
}
