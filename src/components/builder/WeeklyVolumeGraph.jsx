import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { calculateTonnageByCategory } from '../../utils/percentageCalc';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function WeeklyVolumeGraph({ allWorkouts, mainMaxes, totalWeeks, daysPerWeek }) {
  const labels = [];
  const upperData = [];
  const lowerData = [];
  const totalData = [];

  for (let w = 1; w <= totalWeeks; w++) {
    labels.push(`Wk ${w}`);
    let weekUpper = 0, weekLower = 0, weekTotal = 0;
    for (let d = 1; d <= daysPerWeek; d++) {
      const blocks = allWorkouts[`${w}-${d}`] || [];
      const { upper, lower, total } = calculateTonnageByCategory(blocks, mainMaxes);
      weekUpper += upper;
      weekLower += lower;
      weekTotal += total;
    }
    upperData.push(Math.round(weekUpper));
    lowerData.push(Math.round(weekLower));
    totalData.push(Math.round(weekTotal));
  }

  const hasData = totalData.some((v) => v > 0);
  if (!hasData) return null;

  const data = {
    labels,
    datasets: [
      { label: 'Upper', data: upperData, backgroundColor: '#3b82f6', borderRadius: 4 },
      { label: 'Lower', data: lowerData, backgroundColor: '#22c55e', borderRadius: 4 },
      { label: 'Total', data: totalData, backgroundColor: '#a855f7', borderRadius: 4 },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Weekly Volume (lbs)', font: { size: 14, weight: 'bold' } },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.raw.toLocaleString()} lbs`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (v) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <Bar data={data} options={options} />
    </div>
  );
}
