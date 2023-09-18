import React from 'react';
import style from './LastBoock.module.css';
import BoockSvg from 'layuot/svg/boockSvg';
function LastBoock() {
  const boock = {
    title: '...',
    author: '...',
    year: '...',
    pages: '...',
  };

  return (
    <section className={style.container}>
      <div className={style.box}>
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
        </div>
      </div>
    </section>
  );
}
export default LastBoock;
