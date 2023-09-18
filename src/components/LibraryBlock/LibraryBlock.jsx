import Header from 'layuot/Header';
import React from 'react';
import style from './LibraryBlock.module.css';
import CircleSvg from 'layuot/svg/moreSvg';
import BoockSvg from 'layuot/svg/boockSvg';

function LibraryBlock() {
  const boocks = [
    {
      title: 'Scrum. A revolutionary method of project management.',
      author: 'Jeff Sutherland',
      year: 2014,
      pages: 25,
    },
    {
      title: 'Deadline. A novel about project management.',
      author: 'Tom DeMarko',
      year: 2006,
      pages: 188,
    },
    {
      title: '5 Defects of the team. Proverbs about leadership.',
      author: 'Patrick Lencioni',
      year: 2011,
      pages: 125,
    },
  ];

  return (
    <div>
      <Header />
      <div className={style.bookList}>
        <h3 className={style.title}>Going to read</h3>
        {boocks.map(boock => {
          return (
            <div className={style.card} key={boock.title}>
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
          );
        })}

        <button type="button" className={style.start}>
          My training
        </button>
        <button type="button" className={style.add}>
          <CircleSvg />
        </button>
      </div>
    </div>
  );
}
export default LibraryBlock;
