import Chart from 'components/Chart/Chart';
import CountDown from 'components/CountDown/CountDown';
import GoalBlock from 'components/GoalBlock/GoalBlock';
import LibraryBlock from 'components/LibraryBlock/LibraryBlock';
import React from 'react';

function Statistic() {
  return (
    <div>
      <CountDown />
      <GoalBlock />
      <LibraryBlock />
      <Chart />
    </div>
  );
}
export default Statistic;
