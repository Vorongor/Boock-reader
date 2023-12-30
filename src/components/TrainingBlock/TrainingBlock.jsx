import React, { useEffect } from 'react';
import style from './TrainingBlock.module.css';
import GoalBlock from 'components/GoalBlock/GoalBlock';
import TrainingList from 'components/TrainingList/TrainingList';
import CircleSvg from 'layuot/svg/moreSvg';
import { Link } from 'react-router-dom';
import Result from 'components/Result/Result';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLibrary } from 'redux/library/operations';
import BookChart from 'components/Chart/Chart';
import chartImg from '../../img/chart.jpg';
function TrainingBlock() {
  const dispatch = useDispatch();
  const liba = useSelector(state => state.liba.liba);

  async function fetchData() {
    await dispatch(fetchLibrary());
  }

  const trainingLiba = liba.filter(item => item.state === 'reading');

  useEffect(() => {
    fetchData();
  });

  return (
    <div className={style.tumb}>
      <div className={style.box}>
        <GoalBlock />
        <TrainingList />
      </div>
      <div className={style.tumbBot}>
        <div className={style.chartBox}>
          <h3 className={style.chartTitle}>
            Here your statistic chart <span></span>
          </h3>
          {trainingLiba.length > 0 ? (
            <BookChart />
          ) : (
            <img
              src={chartImg}
              alt="BookReader Chart"
              width={340}
              height={310}
            />
          )}
          <button className={style.btn}>
            <Link to="/statistic">
              <CircleSvg />
            </Link>
          </button>
        </div>
        <div className={style.resultBox}>
          <Result />
        </div>
      </div>
    </div>
  );
}
export default TrainingBlock;
