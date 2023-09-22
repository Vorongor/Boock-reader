import React, { useState } from 'react';
import style from './NewBoock.module.css';
import ArrowBackSvg from 'layuot/svg/arrowBackSvg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/library/operations';

function NewBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    publishYear: '',
    pagesTotal: '',
  });

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: `${value}`,
    });
  }
  function handleAddBook(e) {
    e.preventDefault();
    const form = e.target;
    dispatch(addBook(book));
    form.reset();
    navigate('/library');
  }
  return (
    <div className={style.container}>
      <button className={style.back}>
        <Link to="/library">
          <ArrowBackSvg />
        </Link>
      </button>
      <form action="submit" className={style.form} onSubmit={handleAddBook}>
        <label htmlFor="addTitle" className={style.label}>
          Book title
          <input
            className={style.inputTite}
            type="text"
            id="addTitle"
            placeholder="..."
            name="title"
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="addAuthor" className={style.label}>
          Author
          <input
            className={style.inputAuthor}
            type="text"
            id="addAuthor"
            placeholder="..."
            name="author"
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="addYear" className={style.label}>
          Publication date
          <input
            className={style.inputYear}
            type="text"
            id="addYear"
            placeholder="..."
            name="publishYear"
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="addPages" className={style.label}>
          Amount of pages
          <input
            className={style.inputPages}
            type="text"
            id="addPages"
            placeholder="..."
            name="pagesTotal"
            onChange={handleInputChange}
            required
          />
        </label>
        <div className={style.btnBox}>
          <button type="submit" className={style.add}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default NewBook;
