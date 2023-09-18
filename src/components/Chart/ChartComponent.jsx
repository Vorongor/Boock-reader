import React from 'react';
import Chart from './Chart';

const XYZ = () => {
  const chartData = {
    labels: ['Time'],
    values: [],
  };

  return (
    <div>
      <h5>Amont of pages / DA <span>0</span> </h5>
      <Chart data={chartData} />
    </div>
  );
};

export default XYZ;
