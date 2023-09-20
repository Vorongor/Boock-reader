import React from 'react';
import style from './NewTraining.module.css';
import ArrowBackSvg from 'layuot/svg/arrowBackSvg';
import { Link } from 'react-router-dom';

function NewTraining() {
  return (
    <div className={style.container}>
      <Link to="/training" className={style.link}>
        <ArrowBackSvg />
      </Link>
      <form className={style.form} action="submit">
        <h3 className={style.title}>My training</h3>
        <input className={style.date} type="text" />
        <input className={style.date} type="text" />
        <input className={style.book} type="text" />
        <button className={style.btn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
export default NewTraining;
