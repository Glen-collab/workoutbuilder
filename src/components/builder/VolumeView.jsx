import { useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend, Filler,
} from 'chart.js';
import { cnsVolumeForProgram } from '../../utils/volumeCalc';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function VolumeView({ allWorkouts, totalWeeks, daysPerWeek, onBack }) {
  const [showExplainer, setShowExplainer] = useState(false);

  const rows = useMemo(
    () => cnsVolumeForProgram(allWorkouts, totalWeeks, daysPerWeek),
    [allWorkouts, totalWeeks, daysPerWeek],
  );

  const labels = rows.map((r) => `Wk ${r.week}`);
  const hasData = rows.some((r) => r.total > 0);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Compound (1.0×)',
        data: rows.map((r) => r.compound),
        borderColor: '#7c3aed',
        backgroundColor: 'rgba(124, 58, 237, 0.15)',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.35,
        fill: false,
      },
      {
        label: 'Auxiliary (0.4×)',
        data: rows.map((r) => r.auxiliary),
        borderColor: '#94a3b8',
        backgroundColor: 'rgba(148, 163, 184, 0.15)',
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.35,
        fill: false,
      },
      {
        label: 'Total',
        data: rows.map((r) => r.total),
        borderColor: '#0f766e',
        backgroundColor: 'rgba(15, 118, 110, 0.10)',
        borderWidth: 2,
        borderDash: [6, 4],
        pointRadius: 3,
        pointHoverRadius: 5,
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { position: 'top' },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.raw.toLocaleString()} lbs`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'CNS-weighted volume (lbs)' },
        ticks: { callback: (v) => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v },
      },
      x: { title: { display: true, text: 'Program week' } },
    },
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ flexShrink: 0, padding: '12px 16px', borderBottom: '1px solid #e5e7eb', background: 'white' }}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[20px] font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-0">
              Program Volume
            </h2>
            <p className="text-[12px] text-gray-400 m-0">
              {totalWeeks} weeks &middot; {daysPerWeek} days/week &middot; CNS-weighted reference volume
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

      {/* Body */}
      <div style={{ flex: 1, overflow: 'auto', padding: '16px' }}>
        {!hasData && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg font-semibold">No volume to show yet</p>
            <p className="text-sm">Build out your program in the builder, then come here to see the supercompensation curve.</p>
          </div>
        )}

        {hasData && (
          <>
            {/* Line chart */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4" style={{ height: '380px' }}>
              <Line data={chartData} options={chartOptions} />
            </div>

            {/* Explainer */}
            <details
              open={showExplainer}
              onToggle={(e) => setShowExplainer(e.target.open)}
              className="bg-gray-50 rounded-xl border border-gray-200 p-3 mb-4"
            >
              <summary className="cursor-pointer text-[13px] font-semibold text-gray-700">
                How is this calculated?
              </summary>
              <div className="mt-2 text-[12px] text-gray-600 leading-relaxed space-y-1">
                <p><b>Reference load:</b> every set assumes 100 lbs, so volume isn't skewed by a client's actual numbers.</p>
                <p><b>Bucket coefficient:</b></p>
                <ul className="ml-5 list-disc">
                  <li><b>Compound (×1.0)</b> — barbell + Push/Pull/Squat/Hinge/Hip. Back squat, bench, deadlift, OHP, rows, cleans, etc.</li>
                  <li><b>Auxiliary (×0.4)</b> — everything else: dumbbell, machine, cable, isolation, accessories.</li>
                </ul>
                <p><b>Formula:</b> <code>totalReps × 100 × bucket × qualifier</code>. So 3×10 compound = 3,000 lbs, 3×10 auxiliary = 1,200 lbs, 3×10 DB curl "each arm" = 2,400 lbs.</p>
              </div>
            </details>

            {/* Per-week table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Week</th>
                    <th className="px-3 py-2 font-semibold text-right">Compound</th>
                    <th className="px-3 py-2 font-semibold text-right">Auxiliary</th>
                    <th className="px-3 py-2 font-semibold text-right">Total</th>
                    <th className="px-3 py-2 font-semibold text-right">Δ vs prior</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => {
                    const prior = rows[i - 1]?.total;
                    const delta = prior == null ? null
                      : prior === 0 ? (r.total > 0 ? 100 : 0)
                      : Math.round(((r.total - prior) / prior) * 100);
                    const tone = delta == null ? 'text-gray-400'
                      : delta > 5  ? 'text-emerald-600'
                      : delta < -5 ? 'text-rose-600'
                      : 'text-gray-500';
                    const arrow = delta == null ? '—' : delta > 0 ? '▲' : delta < 0 ? '▼' : '—';
                    return (
                      <tr key={r.week} className="border-b border-gray-100">
                        <td className="px-3 py-2 font-semibold text-gray-800">Wk {r.week}</td>
                        <td className="px-3 py-2 text-right tabular-nums text-purple-700">{r.compound.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right tabular-nums text-gray-600">{r.auxiliary.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right tabular-nums font-semibold text-gray-900">{r.total.toLocaleString()}</td>
                        <td className={`px-3 py-2 text-right tabular-nums font-semibold ${tone}`}>
                          {delta == null ? '—' : `${arrow} ${Math.abs(delta)}%`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
