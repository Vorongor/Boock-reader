import React from 'react';
import style from './TrainingBlog.module.css';
import GoalBlock from 'components/GoalBlock/GoalBlock';
import LastBoock from 'components/LastBoock/LastBoock';
import Chart from 'components/Chart/Chart';
function TrainingBlock() {
  return (
    <div className={style.tumb}>
      <GoalBlock />
      <LastBoock />
      <Chart />
    </div>
  );
}
export default TrainingBlock;
