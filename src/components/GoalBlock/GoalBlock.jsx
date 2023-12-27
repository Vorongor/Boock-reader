import React, { useEffect, useState } from 'react';
import style from './GoalBlock.module.css';
import { useSelector } from 'react-redux';
function GoalBlock() {
  const amountOfBooks = useSelector(state => state.liba.liba);
  const startDay = useSelector(state => state.auth.startDay);
  const booksLeft = amountOfBooks.filter(item => item.state === 'reading');

  const [daysCount, setDaysCount] = useState(null);

  useEffect(() => {
    const startDate = new Date(startDay);
    const currentDate = new Date();

    const timeDifference = currentDate - startDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    setDaysCount(days);
  }, []);

  return (
    <div className={style.container}>
      <h3 className={style.goal}>My goals</h3>
      <div className={style.counter}>
        <div className={style.tumb}>
          <span className={style.count}>{amountOfBooks.length}</span>
          <p className={style.text}>Amount of books</p>
        </div>
        <div className={style.tumb}>
          <span className={style.count}>{daysCount}</span>
          <p className={style.text}>Amount of days</p>
        </div>
        <div className={style.tumb}>
          <span className={style.count}>
            <span style={{ color: '#FF6B08' }}>{booksLeft.length}</span>
          </span>
          <p className={style.text}>Books left</p>
        </div>
      </div>
    </div>
  );
}
export default GoalBlock;
