import Chart from 'components/Chart/Chart';
import CountDown from 'components/CountDown/CountDown';
import GoalBlock from 'components/GoalBlock/GoalBlock';
import StatistickBlock from 'components/StatisticBlock/StatistickBlock';
import React from 'react';

function Statistic() {
  return (
    <div style={{ backgroundColor: '#F6F7FB' }}>
      <CountDown />
      <GoalBlock />
      <StatistickBlock />
      <Chart />
    </div>
  );
}
export default Statistic;
