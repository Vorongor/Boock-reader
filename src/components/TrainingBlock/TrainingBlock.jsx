import React from 'react';
import style from './TrainingBlock.module.css';
import GoalBlock from 'components/GoalBlock/GoalBlock';
import LastBoock from 'components/LastBoock/LastBoock';
import Chart from 'components/Chart/Chart';
import CircleSvg from 'layuot/svg/moreSvg';
import { Link } from 'react-router-dom';
function TrainingBlock() {
  return (
    <div className={style.tumb}>
      <GoalBlock />
      <LastBoock />
      <Link to="/statistic" style={{ textDecoration: 'none' }}>
        <div className={style.chartBox}>
          <h3 className={style.chartTitle}>
            Amont of pages / DA <span>0</span>
          </h3>
          <Chart />
        </div>
      </Link>
      <button className={style.btn}>
        <CircleSvg />
      </button>
    </div>
  );
}
export default TrainingBlock;
