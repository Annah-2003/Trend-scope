// src/components/DataFetcher.js
import React, { useState, useEffect } from 'react';
import Chart from './Chart';

function DataFetcher() {
  const [data, setData] = useState({ labels: [], values: [] });

  useEffect(() => {
    fetch('https://api.example.com/data') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);
        setData({ labels, values });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <Chart data={data} />;
}

export default DataFetcher;
