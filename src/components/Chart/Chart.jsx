import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
    tooltip: {
      display: false,
    },
    Legend: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Plan',
      data: [100, 200, 300, 400, 500, 600, 700], // Ваши дані для "Plan"
      borderColor: '#091E3F',
      backgroundColor: '#091E3F',
    },
    {
      label: 'Act',
      data: [150, 250, 350, 450, 550, 650, 750], // Ваши дані для "Act"
      borderColor: '#FF6B08',
      backgroundColor: '#FF6B08',
    },
  ],
};

function Chart() {
  return <Line options={options} data={data} />;
}
export default Chart;
