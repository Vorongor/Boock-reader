import React, { useEffect, useState } from 'react';
import style from './LibraryBlock.module.css';
import CircleSvg from 'layuot/svg/moreSvg';
import { Link } from 'react-router-dom';
import Resume from 'components/Resume/Resume';
import { useDispatch, useSelector } from 'react-redux';
import NewBoock from 'components/NewBoock/NewBoock';
import BoockList from 'components/BoockList/BoockList';
import { fetchLibrary } from 'redux/library/operations';

function LibraryBlock() {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modal.showModal);
  const [library, setLibrary] = useState(false);
  const goingToRead = useSelector(state => state.liba.goingToRead);
  const currentlyReading = useSelector(state => state.liba.currentlyReading);
  const finishedReading = useSelector(state => state.liba.finishedReading);

  const fetchData = async () => {
    await dispatch(fetchLibrary());
    // console.log('🚀 ~ file: LibraryBlock.jsx:18 ~ fetchData ~ data:', data);
    if (goingToRead || currentlyReading || finishedReading) {
      setLibrary(true);
    }
  };
  useEffect(() => {
    fetchData();
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
                <BoockList arr={finishedReading} />
              </div>
            )}
            {currentlyReading.length > 0 && (
              <div className={style.block}>
                <h3 className={style.title}>Reading now</h3>
                <BoockList arr={currentlyReading} />
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
                <BoockList arr={goingToRead} />
              </div>
            )}
            <Link to="/new-training" className={style.goTraining}>
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
