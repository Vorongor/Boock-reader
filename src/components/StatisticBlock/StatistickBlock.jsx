import React from 'react';
import style from './StatistickBlock.module.css';
import { useSelector } from 'react-redux';
import BoockList from 'components/BoockList/BookList';
import { Link } from 'react-router-dom';
import NewTraining from 'components/NewTraining/NewTraining';

function StatistickBlock() {
  const arr = useSelector(state => state.liba.goingToRead);
  return (
    <div className={style.box}>
      <div className={style.addTraining}>
        <NewTraining />
      </div>
      <BoockList arr={arr} option={true} />
      <Link
        to="/new-training"
        state={{ from: '/statistic' }}
        className={style.link}
      >
        <button className={style.btn}>Start Training</button>
      </Link>
    </div>
  );
}
export default StatistickBlock;
