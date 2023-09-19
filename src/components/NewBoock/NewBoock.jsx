import React from 'react';
import style from './NewBoock.module.css';
import ArrowBackSvg from 'layuot/svg/arrowBackSvg';
import { Link } from 'react-router-dom';

function NewBoock() {

    function handleAddBoock () {
        console.log ('func to add the boock')
    }
  return (
    <div className={style.container}>
      <button className={style.back}>
        <Link to="/library">
          <ArrowBackSvg />
        </Link>
      </button>
      <form action="submit" className={style.form}>
        <label htmlFor="addTitle" className={style.label}>
          Book title
          <input
            className={style.input}
            type="text"
            id="addTitle"
            placeholder="..."
          />
        </label>
        <label htmlFor="addAuthor" className={style.label}>
          Author
          <input
            className={style.input}
            type="text"
            id="addAuthor"
            placeholder="..."
          />
        </label>
        <label htmlFor="addYear" className={style.label}>
          Publication date
          <input
            className={style.input}
            type="text"
            id="addYear"
            placeholder="..."
          />
        </label>
        <label htmlFor="addPages" className={style.label}>
          Amount of pages
          <input
            className={style.input}
            type="text"
            id="addPages"
            placeholder="..."
          />
        </label>
      </form>
      <button onClick={handleAddBoock} className={style.add}>
        Add
      </button>
    </div>
  );
}
export default NewBoock;
