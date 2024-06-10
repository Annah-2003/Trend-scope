import React, { useEffect, useRef, useMemo } from 'react';
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
  const chartRef = useRef(null);

  const chartData = useMemo(() => ({
    labels: data.labels,
    datasets: [
      {
        label: 'Current Price (USD)',
        data: data.values,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  }), [data]); // Only recalculate when 'data' changes

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  }, [chartData]); // Ensure chartData is included in dependencies

  return (
    <div className="chart-container">
      <Bar ref={chartRef} data={chartData} options={{ responsive: true }} />
    </div>
  );
}

export default Chart;
