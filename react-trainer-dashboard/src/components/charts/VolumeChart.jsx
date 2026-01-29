import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const COLORS = ['#667eea', '#4caf50', '#f44336', '#ff9800'];

export default function VolumeChart({ exerciseVolume = {} }) {
  const exercises = Object.keys(exerciseVolume).slice(0, 4);

  if (!exercises.length) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
          Total Volume (Tonnage)
        </h3>
        <p className="text-gray-400 text-sm text-center py-8">No volume data yet</p>
      </div>
    );
  }

  // Collect all week labels across exercises
  const weekSet = new Set();
  exercises.forEach((ex) => {
    const weekly = exerciseVolume[ex]?.weekly || {};
    Object.keys(weekly).forEach((w) => weekSet.add(w));
  });
  const labels = Array.from(weekSet).sort((a, b) => {
    const na = parseInt(a.replace(/\D/g, '')) || 0;
    const nb = parseInt(b.replace(/\D/g, '')) || 0;
    return na - nb;
  });

  const datasets = exercises.map((ex, i) => {
    const weekly = exerciseVolume[ex]?.weekly || {};
    return {
      label: ex,
      data: labels.map((w) => weekly[w] || 0),
      borderColor: COLORS[i],
      backgroundColor: COLORS[i],
      tension: 0.3,
      pointRadius: 4,
      pointHoverRadius: 6,
      borderWidth: 2,
    };
  });

  const data = { labels, datasets };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyleWidth: 10,
          padding: 16,
          font: { size: 11 },
          color: '#6b7280',
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()} lbs`,
        },
        backgroundColor: '#1f2937',
        titleFont: { size: 12 },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#9ca3af',
          font: { size: 11 },
          callback: (v) => v.toLocaleString(),
        },
        grid: { color: 'rgba(0,0,0,0.05)' },
      },
      x: {
        ticks: {
          color: '#9ca3af',
          font: { size: 11 },
        },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
        Total Volume (Tonnage)
      </h3>
      <Line data={data} options={options} />
    </div>
  );
}
