import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { calculateCardioTotals } from '../../utils/percentageCalc';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CardioGraph({ allWorkouts, totalWeeks, daysPerWeek }) {
  const labels = [];
  const timeData = [];
  const distData = [];

  for (let w = 1; w <= totalWeeks; w++) {
    labels.push(`Wk ${w}`);
    let weekMin = 0, weekMiles = 0;
    for (let d = 1; d <= daysPerWeek; d++) {
      const blocks = allWorkouts[`${w}-${d}`] || [];
      const { totalMinutes, totalMiles } = calculateCardioTotals(blocks);
      weekMin += totalMinutes;
      weekMiles += totalMiles;
    }
    timeData.push(Math.round(weekMin * 10) / 10);
    distData.push(Math.round(weekMiles * 100) / 100);
  }

  const hasTime = timeData.some((v) => v > 0);
  const hasDist = distData.some((v) => v > 0);
  if (!hasTime && !hasDist) return null;

  const datasets = [];
  if (hasTime) datasets.push({ label: 'Time (min)', data: timeData, backgroundColor: '#f59e0b', borderRadius: 4, yAxisID: 'y' });
  if (hasDist) datasets.push({ label: 'Distance (mi)', data: distData, backgroundColor: '#06b6d4', borderRadius: 4, yAxisID: hasDist && hasTime ? 'y1' : 'y' });

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Weekly Cardio', font: { size: 14, weight: 'bold' } },
    },
    scales: {
      y: { beginAtZero: true, position: 'left', title: { display: hasTime, text: 'Minutes' } },
      ...(hasTime && hasDist ? {
        y1: { beginAtZero: true, position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'Miles' } },
      } : {}),
    },
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <Bar data={{ labels, datasets }} options={options} />
    </div>
  );
}
