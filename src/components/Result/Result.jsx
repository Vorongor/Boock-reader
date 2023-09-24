import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Result.module.css';
import { useDispatch } from 'react-redux';
import { patchPlanning } from 'redux/user/operations';

function Result() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [pages, setPages] = useState('');

  const handleStartDateChange = date => {
    setStartDate(date);
  };
  const pagesChange = number => {
    setPages(number);
  };

  const list = [
    { day: '19.09.23', time: '10:50', result: '56' },
    { day: '20.09.23', time: '23:44', result: '125' },
    { day: '21.09.23', time: '8:45', result: '30' },
    { day: '22.09.23', time: '15:20', result: '42' },
    { day: '23.09.23', time: '10:50', result: '56' },
    { day: '24.09.23', time: '23:44', result: '125' },
    { day: '25.09.23', time: '8:45', result: '30' },
    { day: '26.09.23', time: '15:20', result: '42' },
    { day: '27.09.23', time: '10:50', result: '56' },
    { day: '28.09.23', time: '23:44', result: '125' },
    { day: '29.09.23', time: '8:45', result: '30' },
    { day: '30.09.23', time: '15:20', result: '42' },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(patchPlanning({ pages }));
    setPages('');
  }
  return (
    <div className={style.container}>
      <h3 className={style.title}>RESULT</h3>
      <form action="submit" className={style.form} onSubmit={handleSubmit}>
        <DatePicker
          className={style.date}
          selected={startDate}
          minDate={new Date()}
          onChange={handleStartDateChange}
          dateFormat="yyyy-MM-dd HH:mm"
          name="dataStart"
          placeholderText="Start Date"
          showTimeSelect
          timeFormat="HH:mm"
          required
        />
        <input
          type="number"
          name="pages"
          onChange={pagesChange}
          className={style.page}
        />
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
                <span className={style.tip}> pages</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Result;
