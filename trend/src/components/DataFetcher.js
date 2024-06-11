import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Chart from './Chart';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        const fetchedData = response.data.bpi.USD.rate_float;
        setData({
          labels: ['Current Price'],
          values: [fetchedData]
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Chart data={data} />
      <button onClick={fetchData}>Refresh</button>
    </div>
  );
}

export default DataFetcher;
