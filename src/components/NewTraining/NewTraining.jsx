import React, { useState } from 'react';
import style from './NewTraining.module.css';
import ArrowBackSvg from 'layuot/svg/arrowBackSvg';
import { Link } from 'react-router-dom';
import CalendarSvg from 'layuot/svg/calendarSvg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DropDownSvg from 'layuot/svg/DropDownSvg';
import { useDispatch, useSelector } from 'react-redux';
import { addPlanning } from 'redux/library/operations';

function NewTraining() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.liba.liba);
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [selectedBook, setSelectedBook] = useState('');

  const filterdList = list.filter(item => item.state === 'new');
  const books = filterdList.map(item => item.title);

  function findBookDataByTitle(title) {
    return list.find(book => book.title === title);
  }
  const formatDate = date => {
    return Math.floor(date.getTime() / 1000);
  };

  const handleBookChange = e => {
    setSelectedBook(e.target.value);
  };

  const handleStartDateChange = date => {
    setStartDate(date);
  };
  const handleFinishDateChange = date => {
    setFinishDate(date);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (startDate < finishDate) {
      const newTraining = {
        startTime: formatDate(startDate),
        finishTime: formatDate(finishDate),
        id: findBookDataByTitle(selectedBook)._id,
      };

      dispatch(addPlanning(newTraining));
      form.reset();
    } else {
      alert(
        'You can`t move back in the timeline, sorry choose the finish date further in the future'
      );
    }
  }
  return (
    <div className={style.container}>
      <Link to="/statistic" className={style.link}>
        <ArrowBackSvg />
      </Link>
      <form className={style.form} action="submit" onSubmit={handleSubmit}>
        <h3 className={style.title}>My training</h3>
        <label className={style.labelStart} htmlFor="startTr">
          <span className={style.start}>
            <CalendarSvg />
          </span>
          <DatePicker
            className={style.date}
            selected={startDate}
            minDate={new Date()}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            id="startTr"
            name="dataStart"
            placeholderText="Start Date"
            autoComplete="off"
            required
          />
          <span className={style.drop}>
            <DropDownSvg />
          </span>
        </label>
        <label className={style.labelFinish} htmlFor="finishTr">
          <span className={style.start}>
            <CalendarSvg />
          </span>
          <DatePicker
            className={style.date}
            selected={finishDate}
            minDate={new Date()}
            onChange={handleFinishDateChange}
            dateFormat="yyyy-MM-dd"
            id="finishTr"
            name="dataFinish"
            placeholderText="Finish Date"
            autoComplete="off"
            required
          />
          <span className={style.drop}>
            <DropDownSvg />
          </span>
        </label>
        <label className={style.label} htmlFor="book">
          <select
            className={style.book}
            id="book"
            name="book"
            onChange={handleBookChange}
            value={selectedBook}
            required
          >
            <option className={style.text} value="">
              Choose book from the library
            </option>
            {books.map((book, index) => (
              <option key={index} value={book}>
                {book}
              </option>
            ))}
          </select>
        </label>
        <button className={style.btn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default NewTraining;
