import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Chart({ data }) {
  const chartData = useMemo(() => {
    if (!data || !data.labels || !data.values) {
      return {
        labels: [],
        datasets: [
          {
            label: 'Current Price (USD)',
            data: [],
            backgroundColor: 'rgba(75,192,192,0.6)',
          },
        ],
      };
    }

    return {
      labels: data.labels,
      datasets: [
        {
          label: 'Current Price (USD)',
          data: data.values,
          backgroundColor: 'rgba(75,192,192,0.6)',
        },
      ],
    };
  }, [data]); // Only recalculate when 'data' changes

  return (
    <div className="chart-container">
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
}

export default Chart;
