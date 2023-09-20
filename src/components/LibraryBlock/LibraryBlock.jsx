import React, { useEffect, useState } from 'react';
import style from './LibraryBlock.module.css';
import CircleSvg from 'layuot/svg/moreSvg';
import { Link } from 'react-router-dom';
import Resume from 'components/Resume/Resume';
import { useDispatch, useSelector } from 'react-redux';
import NewBoock from 'components/NewBoock/NewBoock';
import BoockList from 'components/BoockList/BoockList';
import { fetchLibrary } from 'redux/user/operations';

function LibraryBlock() {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modal.showModal);
  const liba = useSelector(state => state.liba.list);
  console.log('🚀 ~ file: LibraryBlock.jsx:15 ~ LibraryBlock ~ liba:', liba);
  const [boocksHasReaded, setBoocksHasReaded] = useState([]);
  const [boocksReadingNow, setBoocksReadingNow] = useState([]);
  const [boocksToRead, setBoocksToRead] = useState([]);
  const [emptyLiba, setEmptyLiba] = useState(false);
  const [boocks, setBoocks] = useState([]);
  useEffect(() => {
    dispatch(fetchLibrary());
  }, [dispatch]);
  fetchLibrary();

  return (
    <div>
      {showModal && <Resume />}
      {emptyLiba ? (
        <NewBoock />
      ) : (
        <div className={style.bookList}>
          <div className={style.block}>
            <h3 className={style.title}>Already read</h3>
            <BoockList arr={boocks} />
          </div>
          <div className={style.block}>
            <h3 className={style.title}>Reading now</h3>
            <BoockList arr={boocks} />
          </div>
          <div className={style.block}>
            <h3 className={style.title}>Going to read</h3>
            <BoockList arr={boocks} />
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
      )}
    </div>
  );
}
export default LibraryBlock;
