import React, { useEffect, useState } from 'react';
import style from './LibraryBlock.module.css';
import CircleSvg from 'layuot/svg/moreSvg';
import { Link } from 'react-router-dom';
import Resume from 'components/Resume/Resume';
import { useDispatch, useSelector } from 'react-redux';
import NewBoock from 'components/NewBook/NewBook';
import BoockList from 'components/BoockList/BookList';
import { fetchLibrary } from 'redux/library/operations';

function LibraryBlock() {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modal.showModal);
  const [library, setLibrary] = useState(false);
  const liba = useSelector(state => state.liba.liba);

  const finishedReading = liba.filter(item => item.state === 'finished');
  const currentlyReading = liba.filter(item => item.state === 'reading');
  const goingToRead = liba.filter(item => item.state === 'new');

  useEffect(() => {
    if (goingToRead || currentlyReading || finishedReading) {
      setLibrary(true);
    }
  });

  return (
    <div>
      {showModal && <Resume />}
      {library ? (
        <div>
          <div className={style.optionBox}>
            <NewBoock />
          </div>
          <div className={style.bookList}>
            {finishedReading.length > 0 && (
              <div className={style.block}>
                <h3 className={style.title}>Already read</h3>
                <BoockList state={'finished'} category={true} />
              </div>
            )}
            {currentlyReading.length > 0 && (
              <div className={style.block}>
                <h3 className={style.title}>Reading now</h3>
                <BoockList state={'reading'} />
              </div>
            )}
            {goingToRead.length > 0 && (
              <div className={style.block}>
                <h3 className={style.title}>Going to read</h3>
                <ul className={style.tip}>
                  <span className={style.tiptext}>Book title</span>
                  <span className={style.tiptext}>Author</span>
                  <span className={style.tiptext}>Year</span>
                  <span className={style.tiptext}>Pages</span>
                </ul>
                <BoockList state={'new'} />
              </div>
            )}
            <Link to="/training" className={style.goTraining}>
              <button type="button" className={style.start}>
                My training
              </button>
            </Link>
            <button type="button" className={style.add}>
              <Link to="/new-book">
                <CircleSvg />
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <NewBoock />
      )}
    </div>
  );
}
export default LibraryBlock;
