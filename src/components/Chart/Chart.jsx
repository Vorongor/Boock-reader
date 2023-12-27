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
      display: true,
      text: 'Book Reading Progress',
    },
  },
};

function BookChart() {
  const liba = useSelector(state => state.liba.liba);
  const activeBook = useSelector(state => state.liba.activeBook);

  if (!activeBook) {
    return <Line options={options} data={{}} />;
  }

  const book = liba.find(item => item._id === activeBook);

  function countDaysFromPlan(plan) {
    const dayInMillis = 24 * 60 * 60 * 1000; //
    const daysArray = [];

    const startTime = new Date(plan.startTime * 1000);
    const finishTime = new Date(plan.finishTime * 1000);

    let currentDate = startTime;
    while (currentDate <= finishTime) {
      const timestamp = Math.floor(currentDate.getTime() / 1000);
      const formattedDate = formatDate(currentDate);
      daysArray.push({ timestamp, formattedDate });
      currentDate = new Date(currentDate.getTime() + dayInMillis);
    }

    return daysArray;
  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const labels = countDaysFromPlan(book.plan).map(day => day.formattedDate);
  const plannedPages = calculatePlannedPages(book);
  const realResult = calculateRealResult(book);

  const filteredLabels = labels.filter(
    label => realResult[labels.indexOf(label)] !== undefined
  );
  const filteredPlannedPages = plannedPages.filter(
    (_, index) => realResult[index] !== undefined
  );

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        label: 'Planned Pages per Day',
        data: filteredPlannedPages,
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
      },
      {
        label: 'Real Result',
        data: realResult,
        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
      },
    ],
  };
  // Function to calculate planned pages per day
  function calculatePlannedPages(book) {
    const plan = book.plan;
    const totalDays = countDaysFromPlan(plan).length;
    const totalPages = book.pages;
    const pagesPerDay = totalPages / totalDays;
    return new Array(totalDays).fill(pagesPerDay);
  }

  // Function to calculate real result per day
  function calculateRealResult(book) {
    const training = book.training;
    const daysArray = countDaysFromPlan(book.plan);
    const realResult = new Array(daysArray.length).fill(0);

    training.forEach(entry => {
      const date = new Date(entry.date * 1000);
      const formattedDate = formatDate(date);
      const index = labels.indexOf(formattedDate);
      if (index !== -1) {
        realResult[index] += entry.result;
      }
    });

    return realResult;
  }

  return <Line options={options} data={data} />;
}

export default BookChart;
