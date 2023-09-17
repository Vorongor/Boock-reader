import React from 'react';
import style from './logForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setRegIn } from 'redux/auth/slice';

function LogForm() {
  const dispatch = useDispatch();
  const userExist = useSelector(state => state.auth.userExist);

  function handleGoToReg() {
    dispatch(setRegIn());
    console.log('🚀 ~ file: regForm.jsx:8 ~ RegForm ~ userExist:', userExist);
  }

  return (
    <form className={style.form} action="submit">
      <button type="button" className={style.googleBtn}>
        Google
      </button>

      <label className={style.lable} htmlFor="logEmail">
        <p>
          Email<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="text"
          id="logEmail"
          placeholder="your@email.com"
        />
      </label>
      <label className={style.lable} htmlFor="logPass">
        <p>
          Password<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="text"
          id="logPass"
          placeholder="..."
        />
      </label>

      <div className={style.botGrup}>
        <button className={style.regBtn} type="submit">
          Log In
        </button>

        <button type="button" onClick={handleGoToReg} className={style.logText}>
          Register
        </button>
      </div>
    </form>
  );
}
export default LogForm;
