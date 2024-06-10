import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart';



function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        const fetchedData = response.data.bpi.USD.rate_float;
        setData({
          labels: ['Current Price'],
          values: [fetchedData]
        });
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>; // Ensure this is properly formatted
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return <Chart data={data} />;
}

export default DataFetcher;
