import React from 'react';
import style from './BoockList.module.css';
import BoockSvg from 'layuot/svg/boockSvg';
import { useDispatch } from 'react-redux';
import { setModalOn } from 'redux/user/slice';
import DeleteSvg from 'layuot/svg/deleteSvg';
import { deleteBook } from 'redux/library/operations';
import { deleteBookReload } from 'redux/library/slice';

function BoockList({ arr }) {
  const dispatch = useDispatch();

  function handleResume() {
    dispatch(setModalOn());
  }

  function handleDelete(id) {
    dispatch(deleteBook(id));
    dispatch(deleteBookReload(id));
  }
  return (
    <ul className={style.list}>
      {arr.map(boock => {
        return (
          <li className={style.card} key={boock._id}>
            <div className={style.btnBox}>
              <BoockSvg />
              <button
                className={style.deleteBtn}
                type="button"
                onClick={() => handleDelete(boock._id)}
              >
                <DeleteSvg />
              </button>
            </div>
            <div className={style.tumb}>
              <p className={style.boockText}>{boock.title}</p>
              <p className={style.boockText}>
                <span className={style.tip}>Author: </span>
                {boock.author}
              </p>
              <p className={style.boockText}>
                <span className={style.tip}>Year: </span>
                {boock.publishYear}
              </p>
              <p className={style.boockText}>
                <span className={style.tip}>Pages: </span>
                {boock.pagesTotal}
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
