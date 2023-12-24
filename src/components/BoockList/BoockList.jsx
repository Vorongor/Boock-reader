import React from 'react';
import style from './BoockList.module.css';
import BoockSvg from 'layuot/svg/boockSvg';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOn } from 'redux/user/slice';
import DeleteSvg from 'layuot/svg/deleteSvg';
import { deleteBook } from 'redux/library/operations';
import { deleteBookReload, setId } from 'redux/library/slice';

function BoockList({ state, option, category }) {
  const dispatch = useDispatch();
  const liba = useSelector(state => state.liba.liba);
  const arr = liba.filter(item => item.state === state);

  function handleResume(id) {
    dispatch(setModalOn());
    dispatch(setId(id));
  }

  function handleDelete(id) {
    dispatch(deleteBook(id));
    dispatch(deleteBookReload(id));
  }

  const transparentBg = option
    ? { backgroundColor: 'transparent', boxShadow: 'none' }
    : { backgroundColor: '#fff' };
  return (
    <ul className={style.list}>
      {arr.map(boock => {
        return (
          <li className={style.card} style={transparentBg} key={boock._id}>
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
                {boock.year}
              </p>
              <p className={style.boockText}>
                <span className={style.tip}>Pages: </span>
                {boock.pagesRead || 0} / {boock.pages}
              </p>
              {boock.rating && (
                <p className={style.boockText}>
                  <span className={style.tip}>Raiting: </span>
                  {boock.rating}
                </p>
              )}
              {category && (
                <button
                  onClick={() => handleResume(boock._id)}
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
