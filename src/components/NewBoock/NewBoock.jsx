import React, { useState } from 'react';
import style from './NewBoock.module.css';
import ArrowBackSvg from 'layuot/svg/arrowBackSvg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/library/operations';

function NewBook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    year: '',
    pages: '',
  });

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  }
  function handleAddBook(e) {
    e.preventDefault();
    dispatch(addBook(book));
    console.log('🚀 ~ file: NewBoock.jsx:27 ~ handleAddBook ~ book:', book);
    console.log('func to add the book');
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
            className={style.input}
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
            className={style.input}
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
            className={style.input}
            type="text"
            id="addYear"
            placeholder="..."
            name="year"
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="addPages" className={style.label}>
          Amount of pages
          <input
            className={style.input}
            type="text"
            id="addPages"
            placeholder="..."
            name="pages"
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className={style.add}>
          Add
        </button>
      </form>
    </div>
  );
}
export default NewBook;
