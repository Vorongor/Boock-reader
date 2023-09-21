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

  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(fetchLibrary());
      console.log('🚀 ~ file: LibraryBlock.jsx:18 ~ fetchData ~ data:', data);
      if (goingToRead || currentlyReading || finishedReading) {
        setLibrary(true);
      }
    };
    fetchData();
  }, [dispatch, goingToRead, currentlyReading, finishedReading]);

  return (
    <div>
      {showModal && <Resume />}
      {library ? (
        <div className={style.bookList}>
          <div className={style.block}>
            <h3 className={style.title}>Already read</h3>
            <BoockList arr={finishedReading} />
          </div>
          <div className={style.block}>
            <h3 className={style.title}>Reading now</h3>
            <BoockList arr={currentlyReading} />
          </div>
          <div className={style.block}>
            <h3 className={style.title}>Going to read</h3>
            <BoockList arr={goingToRead} />
          </div>
          <Link to="/new-training" style={{ textDecoration: 'none' }}>
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
      ) : (
        <NewBoock />
      )}
    </div>
  );
}
export default LibraryBlock;
