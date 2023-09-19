import Header from 'layuot/Header';
import React, { useState } from 'react';
import style from './LibraryBlock.module.css';
import CircleSvg from 'layuot/svg/moreSvg';
import BoockSvg from 'layuot/svg/boockSvg';
import { Link } from 'react-router-dom';
import Resume from 'components/Resume/Resume';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOn } from 'redux/interFace/slice';

function LibraryBlock() {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modal.showModal);

  const boocksHasReaded = [
    {
      title: 'Scrum. A revolutionary method of project management.',
      author: 'Jeff Sutherland',
      year: 2014,
      pages: 25,
      raiting: 4,
    },
  ];
  const boocksReadNow = [
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
  const boocksToRead = [
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

  function handleResume() {
    dispatch(setModalOn());
  }

  return (
    <div>
      {showModal && <Resume />}
      <div className={style.bookList}>
        <div className={style.block}>
          <h3 className={style.title}>Already read</h3>
          {boocksHasReaded.map(boock => {
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
                  <p className={style.boockText}>
                    <span className={style.tip}>Raiting: </span>
                    {boock.raiting}
                  </p>
                  <button
                    onClick={handleResume}
                    type="button"
                    className={style.resume}
                  >
                    Resume
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.block}>
          <h3 className={style.title}>Reading now</h3>
          {boocksReadNow.map(boock => {
            return (
              <div className={style.card} key={boock.title}>
                <BoockSvg color={'#FF6B08} '} />
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
        </div>
        <div className={style.block}>
          <h3 className={style.title}>Going to read</h3>
          {boocksToRead.map(boock => {
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
        </div>
        <button type="button" className={style.start}>
          My training
        </button>
        <button type="button" className={style.add}>
          <Link to="/new-book">
            <CircleSvg />
          </Link>
        </button>
      </div>
    </div>
  );
}
export default LibraryBlock;
