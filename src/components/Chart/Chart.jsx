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
import { useSelector } from 'react-redux';

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

const list = [
  { day: '19.09.23', time: '10:50', result: '56' },
  { day: '20.09.23', time: '23:44', result: '125' },
  { day: '21.09.23', time: '8:45', result: '30' },
  { day: '22.09.23', time: '15:20', result: '42' },
  { day: '23.09.23', time: '10:50', result: '56' },
  { day: '24.09.23', time: '23:44', result: '125' },
  { day: '25.09.23', time: '8:45', result: '30' },
  { day: '26.09.23', time: '15:20', result: '42' },
  { day: '27.09.23', time: '10:50', result: '56' },
  { day: '28.09.23', time: '23:44', result: '125' },
  { day: '29.09.23', time: '8:45', result: '30' },
  { day: '30.09.23', time: '15:20', result: '42' },
];
const planList = [
  { day: '19.09.23', time: '10:50', result: '60' },
  { day: '20.09.23', time: '23:44', result: '62' },
  { day: '21.09.23', time: '8:45', result: '64' },
  { day: '22.09.23', time: '15:20', result: '66' },
  { day: '23.09.23', time: '10:50', result: '68' },
  { day: '24.09.23', time: '23:44', result: '80' },
  { day: '25.09.23', time: '8:45', result: '82' },
  { day: '26.09.23', time: '15:20', result: '84' },
  { day: '27.09.23', time: '10:50', result: '86' },
  { day: '28.09.23', time: '23:44', result: '86' },
  { day: '29.09.23', time: '8:45', result: '86' },
  { day: '30.09.23', time: '15:20', result: '88' },
];

const planData = list.map(item => item.result);
const planGoal = planList.map(item => item.result);
const labels = list.map(item => item.day);

export const data = {
  labels: labels,
  datasets: [
    {
      label: 'Plan',
      data: planData,
      borderColor: '#091E3F',
      backgroundColor: '#091E3F',
    },
    {
      label: 'Act',
      data: planGoal, 
      borderColor: '#FF6B08',
      backgroundColor: '#FF6B08',
    },
  ],
};

function Chart({data}) {

  return <Line options={options} data={data} />;
}

export default Chart;
