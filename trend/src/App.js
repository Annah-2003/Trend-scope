// src/App.js
import React from 'react';
import Header from './components/Header';
import Chart from './components/Chart';
import DataFetcher from './components/DataFetcher';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <DataFetcher />
      <Chart />
    </div>
  );
}

export default App;
