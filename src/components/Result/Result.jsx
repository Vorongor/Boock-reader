import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Result.module.css';

function Result() {
  const [startDate, setStartDate] = useState(null);

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const list = [
    { day: '19.09.23', time: '10:50', result: '56' },
    { day: '20.09.23', time: '23:44', result: '125' },
    { day: '21.09.23', time: '8:45', result: '30' },
    { day: '22.09.23', time: '15:20', result: '42' },
  ];
  return (
    <div className={style.container}>
      <h3 className={style.title}>RESULT</h3>
      <form action="submit" className={style.form}>
        <DatePicker
          className={style.date}
          selected={startDate}
          minDate={new Date()}
          onChange={handleStartDateChange}
          dateFormat="yyyy-MM-dd HH:mm" // Змінено формат для включення годин і хвилин
          name="dataStart"
          placeholderText="Start Date"
          showTimeSelect // Вмикає вибір годин і хвилин
          timeFormat="HH:mm" // Формат годин і хвилин
          required
        />
        <input type="number" className={style.page} />
        <button type="submit" className={style.btn}>
          Add result
        </button>
      </form>
      <ul className={style.list}>
        <h3 className={style.title}>STATISTICS</h3>
        {list.map(item => {
          return (
            <li key={item.day} className={style.item}>
              <p className={style.day}>{item.day}</p>
              <p className={style.time}>{item.time}</p>
              <p className={style.result}>
                {item.result}
                <span className={style.tip}>  pages</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Result;
