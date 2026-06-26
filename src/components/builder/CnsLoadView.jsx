import { useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend, Filler,
} from 'chart.js';
import { cnsLoadForProgram } from '../../utils/cnsLoadCalc';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const DOT = { high: '🔴', low: '🟢', rest: '·' };

export default function CnsLoadView({ allWorkouts, totalWeeks, daysPerWeek, onBack }) {
  const [showExplainer, setShowExplainer] = useState(false);

  const { weeks, highThreshold } = useMemo(
    () => cnsLoadForProgram(allWorkouts, totalWeeks, daysPerWeek),
    [allWorkouts, totalWeeks, daysPerWeek],
  );
  const labels = weeks.map((w) => `Wk ${w.week}`);
  const hasData = weeks.some((w) => w.total > 0);

  // Modality lines so the coach sees the lift / jump / sprint mix per week.
  const sumMod = (w, m) => Math.round(w.days.reduce((s, d) => s + (d.byModality?.[m] || 0), 0));
  const chartData = {
    labels,
    datasets: [
      { label: 'Total CNS Load', data: weeks.map((w) => w.total), borderColor: '#dc2626', backgroundColor: 'rgba(220,38,38,0.10)', borderWidth: 3, pointRadius: 5, pointHoverRadius: 7, tension: 0.35, fill: true },
      { label: 'Lifting', data: weeks.map((w) => sumMod(w, 'lift')), borderColor: '#7c3aed', borderWidth: 2, pointRadius: 3, tension: 0.35, fill: false },
      { label: 'Jumps', data: weeks.map((w) => sumMod(w, 'jump')), borderColor: '#f59e0b', borderWidth: 2, pointRadius: 3, tension: 0.35, fill: false },
      { label: 'Sprints', data: weeks.map((w) => sumMod(w, 'sprint')), borderColor: '#0ea5e9', borderWidth: 2, pointRadius: 3, tension: 0.35, fill: false },
    ],
  };
  const chartOptions = {
    responsive: true, maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: { legend: { position: 'top' }, title: { display: false },
      tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${Math.round(ctx.raw).toLocaleString()} CNS` } } },
    scales: { y: { beginAtZero: true, title: { display: true, text: 'CNS load (neural units)' } }, x: { title: { display: true, text: 'Program week' } } },
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flexShrink: 0, padding: '12px 16px', borderBottom: '1px solid #e5e7eb', background: 'white' }}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[20px] font-bold bg-gradient-to-r from-[#dc2626] to-[#f59e0b] bg-clip-text text-transparent mb-0">⚡ CNS Load</h2>
            <p className="text-[12px] text-gray-400 m-0">{totalWeeks} weeks · {daysPerWeek} days/week · unified neural load (lift + jump + sprint)</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => window.print()} className="px-3 py-1.5 text-[12px] font-semibold bg-gray-800 text-white border-none rounded-lg cursor-pointer hover:bg-gray-700">Print</button>
            <button onClick={onBack} className="px-3 py-1.5 text-[12px] font-semibold bg-gradient-to-br from-[#dc2626] to-[#f59e0b] text-white border-none rounded-lg cursor-pointer hover:opacity-90">Back to Builder</button>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '16px' }}>
        {!hasData && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg font-semibold">No CNS load yet</p>
            <p className="text-sm">Add a Movement block (sprints / plyos) and lifting, then come back to see the neural-load wave + high/low day pattern.</p>
          </div>
        )}

        {hasData && (
          <>
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4" style={{ height: '360px' }}>
              <Line data={chartData} options={chartOptions} />
            </div>

            {/* High/Low day pattern — Francis: keep high days 48-72h apart */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
              <div className="text-[13px] font-bold text-gray-700 mb-1">High / Low Day Pattern</div>
              <div className="text-[11px] text-gray-400 mb-3">🔴 high CNS day · 🟢 low · · rest. Keep 🔴 days ~48–72h apart. (High = ≥ {highThreshold.toLocaleString()} CNS this program.)</div>
              <div className="overflow-x-auto">
                <table className="text-[12px]">
                  <tbody>
                    {weeks.map((w) => (
                      <tr key={w.week}>
                        <td className="pr-3 py-1 font-semibold text-gray-700 whitespace-nowrap">Wk {w.week}</td>
                        {w.days.map((d) => (
                          <td key={d.day} className="px-2 py-1 text-center" title={`Day ${d.day}: ${d.total.toLocaleString()} CNS`}>
                            <div className="text-[16px] leading-none">{DOT[d.intensity]}</div>
                            <div className="text-[9px] text-gray-400 tabular-nums">{d.total || ''}</div>
                          </td>
                        ))}
                        <td className="pl-3 py-1 text-right font-semibold text-rose-600 tabular-nums whitespace-nowrap">{w.total.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Per-week totals + native dials */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Week</th>
                    <th className="px-3 py-2 font-semibold text-right">CNS Load</th>
                    <th className="px-3 py-2 font-semibold text-right">👟 Foot Contacts</th>
                    <th className="px-3 py-2 font-semibold text-right">🏃 Sprint Vol (yd)</th>
                    <th className="px-3 py-2 font-semibold text-right">Δ vs prior</th>
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((w, i) => {
                    const prior = weeks[i - 1]?.total;
                    const delta = prior == null ? null : prior === 0 ? (w.total > 0 ? 100 : 0) : Math.round(((w.total - prior) / prior) * 100);
                    const tone = delta == null ? 'text-gray-400' : delta > 15 ? 'text-rose-600' : delta < -15 ? 'text-amber-600' : 'text-gray-500';
                    const arrow = delta == null ? '—' : delta > 0 ? '▲' : delta < 0 ? '▼' : '—';
                    return (
                      <tr key={w.week} className="border-b border-gray-100">
                        <td className="px-3 py-2 font-semibold text-gray-800">Wk {w.week}</td>
                        <td className="px-3 py-2 text-right tabular-nums font-semibold text-rose-700">{w.total.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right tabular-nums text-amber-700">{w.contacts ? w.contacts.toLocaleString() : '—'}</td>
                        <td className="px-3 py-2 text-right tabular-nums text-sky-700">{w.distance ? w.distance.toLocaleString() : '—'}</td>
                        <td className={`px-3 py-2 text-right tabular-nums font-semibold ${tone}`}>{delta == null ? '—' : `${arrow} ${Math.abs(delta)}%`}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <details open={showExplainer} onToggle={(e) => setShowExplainer(e.target.open)} className="bg-gray-50 rounded-xl border border-gray-200 p-3">
              <summary className="cursor-pointer text-[13px] font-semibold text-gray-700">How is CNS load calculated?</summary>
              <div className="mt-2 text-[12px] text-gray-600 leading-relaxed space-y-1">
                <p>Every effort costs the nervous system in proportion to its <b>CNS rating (1–5)</b>. Jumps, sprints, and lifting all use the same currency:</p>
                <ul className="ml-5 list-disc">
                  <li><b>Plyos</b> → CNS × foot contacts (depth jumps = 5, box jumps = 3, pogos = 1)</li>
                  <li><b>Sprints</b> → CNS × efforts (max-V/accel = 5, speed-end = 4)</li>
                  <li><b>Tempo</b> → CNS × (yards ÷ 100) — volume, low neural cost</li>
                  <li><b>Lifting</b> → compound = 5, accessory = 2, × work reps</li>
                </ul>
                <p className="text-gray-400">v1 weights — tunable once real weeks are logged. Δ &gt;15% week-to-week is flagged (load spike).</p>
              </div>
            </details>
          </>
        )}
      </div>
    </div>
  );
}
