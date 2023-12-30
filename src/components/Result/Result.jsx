import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Result.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTraining } from 'redux/library/operations';

function Result() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [pages, setPages] = useState(null);
  const formatDate = date => {
    return Math.floor(date.getTime() / 1000);
  };
  const handleStartDateChange = date => {
    setStartDate(date);
  };
  const pagesChange = num => {
    setPages(parseInt(num));
  };

  const liba = useSelector(state => state.liba.liba);
  const activeBook = useSelector(state => state.liba.activeBook);

  const book = liba.find(item => item._id === activeBook);

  function dateSeparator(unixDate) {
    const date = new Date(unixDate * 1000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeDate = `${day}-${month}-${year}`;
    const time = `${hours}:${minutes}`;

    return { timeDate, time };
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!startDate || isNaN(pages) || !activeBook) {
      alert('Please enter valid data and choose a training plan');
      return;
    }
    const resultObj = {
      date: formatDate(startDate),
      result: parseInt(pages),
      id: activeBook,
    };

    dispatch(addTraining(resultObj));

    const form = e.target;
    form.reset();
  }

  return (
    <div className={style.container}>
      <h3 className={style.title}>RESULT</h3>
      <form action="submit" className={style.form} onSubmit={handleSubmit}>
        <DatePicker
          className={style.date}
          selected={startDate}
          // minDate={}
          onChange={handleStartDateChange}
          dateFormat="yyyy-MM-dd HH:mm"
          name="dataStart"
          placeholderText="Start Date"
          showTimeSelect
          timeFormat="HH:mm"
          autoComplete="off"
          required
        />
        <input
          type="numeric"
          pattern="[0-9]*"
          name="pages"
          autoComplete="off"
          onChange={e => pagesChange(e.target.value)}
          className={style.page}
          required
        />
        <button type="submit" className={style.btn}>
          Add result
        </button>
      </form>
      {book && (
        <ul className={style.list}>
          <h3 className={style.title}>STATISTICS</h3>
          {book.training.map(item => {
            return (
              <li key={item.date} className={style.item}>
                <p className={style.day}>{dateSeparator(item.date).timeDate}</p>
                <p className={style.time}>{dateSeparator(item.date).time}</p>
                <p className={style.result}>
                  {item.result}
                  <span className={style.tip}> pages</span>
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default Result;
