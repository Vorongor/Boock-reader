import React, { useEffect, useState } from 'react';
import style from './CountDown.module.css';

function CountDown() {
  const currentYear = new Date().getFullYear(); // Отримуємо поточний рік
  const startOfYear = new Date(currentYear, 0, 1); // Початок поточного року (січень 1)
  const startOfProject = new Date(currentYear, 8, 12); // Початок проекту (грудень 9)

  const [currentTime, setCurrentTime] = useState(new Date()); // Поточний час

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // Оновлюємо поточний час кожну секунду
    }, 1000);

    // Пам'ятайте про очищення інтервалу після завершення компонента
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function calculateElapsedTime(startDate, currentTime) {
    const elapsedTime = currentTime - startDate;
    const totalSeconds = Math.floor(elapsedTime / 1000);

    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);

    return { days, hours, minutes, seconds };
  }

  const firstTimer = calculateElapsedTime(startOfYear, currentTime);
  const secondTimer = calculateElapsedTime(startOfProject, currentTime);

  return (
    <div className={style.container}>
      <div className={style.box}>
        <p className={style.title}>Years countdown</p>
        {
          // first timer
          <div className={style.timer}>
            <ul className={style.list}>
              <li className={style.item}>
                <p className={style.number}>{firstTimer.days} :</p>
                <p className={style.subtitle}>DAYS</p>
              </li>
              <li className={style.item}>
                <p className={style.number}>{firstTimer.hours} :</p>
                <p className={style.subtitle}>HRS</p>
              </li>
              <li className={style.item}>
                <p className={style.number}>{firstTimer.minutes} :</p>
                <p className={style.subtitle}>MINS</p>
              </li>
              <li className={style.item}>
                <p className={style.number}>{firstTimer.seconds}</p>
                <p className={style.subtitle}>SECS</p>
              </li>
            </ul>
          </div>
        }
      </div>
      <div className={style.box}>
        <p className={style.title}>Goals countdown</p>
        {
          // Second timer
          <div className={style.timer}>
            <ul className={style.list}>
              <li className={style.item}>
                <p className={style.number}>{secondTimer.days} :</p>
                <p className={style.subtitle}>DAYS</p>
              </li>
              <li className={style.item}>
                <p className={style.number}>{secondTimer.hours} :</p>
                <p className={style.subtitle}>HRS</p>
              </li>
              <li className={style.item}>
                <p className={style.number}>{secondTimer.minutes} :</p>
                <p className={style.subtitle}>MINS</p>
              </li>
              <li className={style.item}>
                <p className={style.number}>{secondTimer.seconds}</p>
                <p className={style.subtitle}>SECS</p>
              </li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default CountDown;
