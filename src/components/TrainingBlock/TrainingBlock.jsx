import React, { useEffect } from 'react';
import style from './TrainingBlock.module.css';
import GoalBlock from 'components/GoalBlock/GoalBlock';
import TrainingList from 'components/TrainingList/TrainingList';
import Chart from 'components/Chart/Chart';
import CircleSvg from 'layuot/svg/moreSvg';
import { Link } from 'react-router-dom';
import CountDown from 'components/CountDown/CountDown';
import Result from 'components/Result/Result';
import { fetchPlanning } from 'redux/user/operations';
import { useDispatch, useSelector } from 'react-redux';
function TrainingBlock() {
  const dispatch = useDispatch();
  // const plan = useSelector(state => state.modal.planingData);

  async function fetchData() {
    const plan = await dispatch(fetchPlanning());
    console.log(plan);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function showFetch() {}

  showFetch();

  return (
    <div className={style.tumb}>
      <div className={style.box}>
        <div className={style.optBox}>
          <CountDown />
        </div>
        <GoalBlock />
        <TrainingList />
      </div>
      <div className={style.tumbBot}>
        <div className={style.chartBox}>
          <h3 className={style.chartTitle}>
            Amont of pages / DA <span>0</span>
          </h3>
          <Chart />
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
