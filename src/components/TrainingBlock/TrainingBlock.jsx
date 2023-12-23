import React, { useEffect } from 'react';
import style from './TrainingBlock.module.css';
import GoalBlock from 'components/GoalBlock/GoalBlock';
import TrainingList from 'components/TrainingList/TrainingList';
import CircleSvg from 'layuot/svg/moreSvg';
import { Link } from 'react-router-dom';
import CountDown from 'components/CountDown/CountDown';
import Result from 'components/Result/Result';
// import { refreshUser } from 'redux/auth/operations';
import { fetchPlanning } from 'redux/user/operations';
import { useDispatch } from 'react-redux';
import ChartComponent from 'components/Chart/ChartComponent';
import { fetchLibrary } from 'redux/library/operations';
function TrainingBlock() {
  const dispatch = useDispatch();

  async function fetchData() {
    await dispatch(fetchPlanning());
    await dispatch(fetchLibrary());
  }

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <div className={style.tumb}>
      <div className={style.box}>
        <div className={style.optBox}>
          <CountDown />
        </div>
        <GoalBlock />
        <TrainingList />
      </div>
      {/* <div className={style.tumbBot}>
        <div className={style.chartBox}>
          <h3 className={style.chartTitle}>
            Amont of pages / DA <span>0</span>
          </h3>
          <ChartComponent />
          <button className={style.btn}>
            <Link to="/statistic">
              <CircleSvg />
            </Link>
          </button>
        </div>
        <div className={style.resultBox}>
          <Result />
        </div>
      </div> */}
    </div>
  );
}
export default TrainingBlock;
