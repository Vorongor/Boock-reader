import React from 'react';
import style from './regForm.module.css';
import { useDispatch } from 'react-redux';
import { setLogIn, setTestIn } from 'redux/auth/slice';

function RegForm() {
  const googleSvg = require('../../img/googleIcon.png');
  const dispatch = useDispatch();

  function handleGoToLog() {
    dispatch(setLogIn());
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setTestIn());
  }

  return (
    <form className={style.form} action="submit" onSubmit={handleSubmit}>
      <button type="button" className={style.googleBtn}>
        <img src={googleSvg} alt="google item" className={style.icon} />
        Google
      </button>
      <label className={style.lable} htmlFor="regName">
        <p>
          Name<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="text"
          id="regName"
          placeholder="..."
        />
      </label>
      <label className={style.lable} htmlFor="regEmail">
        <p>
          Email<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="text"
          id="regEmail"
          placeholder="your@email.com"
        />
      </label>
      <label className={style.lable} htmlFor="regPass">
        <p>
          Password<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="text"
          id="regPass"
          placeholder="..."
        />
      </label>
      <label className={style.lable} htmlFor="regPass2">
        <p>
          Confirm Password<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="text"
          id="regPass2"
          placeholder="..."
        />
      </label>
      <div className={style.botGrup}>
        <button className={style.regBtn} type="submit">
          Register
        </button>
        <p className={style.changeText}>
          Already have an account?
          <button
            type="button"
            onClick={handleGoToLog}
            className={style.logText}
          >
            Log in
          </button>
        </p>
      </div>
    </form>
  );
}
export default RegForm;
