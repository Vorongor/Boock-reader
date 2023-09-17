import React from 'react';
import style from './quote.module.css';
function Quote() {
  return (
    <div className={style.quote}>
      <p className={style.top}>“</p>
      <p className={style.text}>
        Books are the ships of thoughts, wandering through the waves of time.
      </p>
      <span className={style.underline}></span>
      <p className={style.underText}>Francis Bacon</p>
    </div>
  );
}
export default Quote;
