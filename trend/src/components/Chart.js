// src/components/Chart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

function Chart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Dataset',
        data: data.values,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
}

export default Chart;
