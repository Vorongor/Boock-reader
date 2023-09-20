import React from 'react';
import style from './BoockList.module.css';
import BoockSvg from 'layuot/svg/boockSvg';
import { useDispatch } from 'react-redux';
import { setModalOn } from 'redux/user/slice';

function BoockList({ arr }) {
  const dispatch = useDispatch();
  function handleResume() {
    dispatch(setModalOn());
  }
  return (
    <ul className={style.list}>
      {arr.map(boock => {
        return (
          <li className={style.card} key={boock.title}>
            <BoockSvg />
            <div className={style.tumb}>
              <p className={style.boockText}>{boock.title}</p>
              <p className={style.boockText}>
                <span className={style.tip}>Author: </span>
                {boock.author}
              </p>
              <p className={style.boockText}>
                <span className={style.tip}>Year: </span>
                {boock.year}
              </p>
              <p className={style.boockText}>
                <span className={style.tip}>Pages: </span>
                {boock.pages}
              </p>
              {boock.raiting && (
                <p className={style.boockText}>
                  <span className={style.tip}>Raiting: </span>
                  {boock.raiting}
                </p>
              )}
              {boock.raiting && (
                <button
                  onClick={handleResume}
                  type="button"
                  className={style.resume}
                >
                  Resume
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default BoockList;
