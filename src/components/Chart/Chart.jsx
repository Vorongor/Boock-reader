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
    // No book chosen, show a default chart with no data
    return <Line options={options} data={{}} />;
  }

  const book = liba.find(item => item._id === activeBook);

  function countDaysFromPlan(plan) {
    const dayInMillis = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const daysArray = [];

    // Convert plan's start and finish times to Date objects
    const startTime = new Date(plan.startTime * 1000); // Convert from Unix timestamp
    const finishTime = new Date(plan.finishTime * 1000); // Convert from Unix timestamp

    // Iterate from start date to finish date
    let currentDate = startTime;
    while (currentDate <= finishTime) {
      const timestamp = Math.floor(currentDate.getTime() / 1000); // Convert to Unix timestamp
      const formattedDate = formatDate(currentDate); // Format date as "dd-mm-yyyy"
      daysArray.push({ timestamp, formattedDate });
      currentDate = new Date(currentDate.getTime() + dayInMillis);
    }

    return daysArray;
  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const labels = countDaysFromPlan(book.plan).map(day => day.formattedDate);
  const plannedPages = calculatePlannedPages(book);
  const realResult = calculateRealResult(book);

  // Filter out days for which no results exist
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
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Real Result',
        data: realResult,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
