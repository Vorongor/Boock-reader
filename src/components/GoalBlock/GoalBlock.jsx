import React from 'react';
import style from './GoalBlock.module.css';
import { useSelector } from 'react-redux';
function GoalBlock() {
  const amountOfBooks = useSelector(state => state.liba.currentlyReading)
  return (
    <div className={style.container}>
      <h3 className={style.goal}>My goals</h3>
      <div className={style.counter}>
        <div className={style.tumb}>
          <span className={style.count}>{amountOfBooks.length}</span>
          <p className={style.text}>Amount of books</p>
        </div>
        <div className={style.tumb}>
          <span className={style.count}>0</span>
          <p className={style.text}>Amount of days</p>
        </div>
      </div>
    </div>
  );
}
export default GoalBlock;
