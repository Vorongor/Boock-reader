import React from 'react';
import style from './FirstModal.module.css';
import BoockSvg from 'layuot/svg/bookSvg';
import VectorSvg from 'layuot/svg/VectorSvg';
import { useDispatch } from 'react-redux';
import { setUsualIn } from 'redux/user/slice';

function FirstIn() {
  const dispatch = useDispatch();
  function handleGotIt() {
    dispatch(setUsualIn());
  }
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.step}>
          <h4 className={style.title}>Step 1.</h4>
          <div className={style.ruleTumb}>
            <BoockSvg />
            <h5 className={style.rule}>Create your own library</h5>
          </div>
          <div className={style.textTumb}>
            <VectorSvg />
            <p className={style.text}>
              Add there books which you are going to read.
            </p>
          </div>
        </div>
        <div className={style.step}>
          <h4 className={style.title}>Step 2.</h4>
          <div className={style.ruleTumb}>
            <BoockSvg />
            <h5 className={style.rule}>Create your first training</h5>
          </div>
          <div className={style.textTumb}>
            <VectorSvg />
            <p className={style.text}>
              Set a goal, choose period, start training.
            </p>
          </div>
        </div>
        <button className={style.btn} onClick={handleGotIt} type="button">
          OK
        </button>
      </div>
    </div>
  );
}
export default FirstIn;
