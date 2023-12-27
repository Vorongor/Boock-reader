import React from 'react';
import { useSelector } from 'react-redux';
import Chart from './Chart';

function ChartComponent() {
  const data = useSelector(state => state.modal.planingData);
  console.log('🚀 ~ file: ChartComponent.jsx:8 ~ ChartComponent ~ data:', data);
  const planData = [];
  const realData = [];
  const labels = [];
  const formatDate = date => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}-${day}`;
  };
  function planMaking() {
    const duration = data.planning.duration;
    const pagesPerDay = data.planning.pagesPerDay;
    const realPagePerDay = data.planning.books[0].pagesFinished;
    const endDate = data.planning.pagesPerDay;
    let startDate = data.planning.pagesPerDay;
    let currentDate = new Date(startDate);
    for (let i = 0; i < duration; i += 1) {
      planData.push(pagesPerDay);
      realData.push(realPagePerDay / duration);
      labels.push(formatDate(new Date(currentDate)));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return { duration, pagesPerDay, endDate, startDate };
  }
  const chartData = {
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
        data: realData,
        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
      },
    ],
  };
  planMaking();
  return (
    <div style={{ width: '100%', height: '340px' }}>
      <Chart />
    </div>
  );
}
export default ChartComponent;
