import React from 'react';
import style from './BookList.module.css';
import BookSvg from 'layuot/svg/bookSvg';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOn } from 'redux/user/slice';
import DeleteSvg from 'layuot/svg/deleteSvg';
import { deleteBook } from 'redux/library/operations';
import { deleteBookReload, setActiveBook, setId } from 'redux/library/slice';

function BookList({ state, option, category }) {
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

  function handleChooseBook(book) {
    if (book.state === 'reading') {
      dispatch(setActiveBook(book._id));
    }
  }
  const transparentBg = option
    ? { backgroundColor: 'transparent', boxShadow: 'none' }
    : { backgroundColor: '#fff' };
  return (
    <ul className={style.list}>
      {arr.map(book => {
        return (
          <li
            className={style.card}
            style={transparentBg}
            key={book._id}
            onClick={() => handleChooseBook(book)}
          >
            <div className={style.btnBox}>
              <BookSvg />
              <button
                className={style.deleteBtn}
                type="button"
                onClick={() => handleDelete(book._id)}
              >
                <DeleteSvg />
              </button>
            </div>
            <div className={style.tumb}>
              <p className={style.bookText}>{book.title}</p>
              <p className={style.bookText}>
                <span className={style.tip}>Author: </span>
                {book.author}
              </p>
              <p className={style.bookText}>
                <span className={style.tip}>Year: </span>
                {book.year}
              </p>
              <p className={style.bookText}>
                <span className={style.tip}>Pages: </span>
                {book.pagesRead || 0} / {book.pages}
              </p>
              {book.rating && (
                <p className={style.bookText}>
                  <span className={style.tip}>Raiting: </span>
                  {book.rating}
                </p>
              )}
              {category && (
                <button
                  onClick={() => handleResume(book._id)}
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
export default BookList;
