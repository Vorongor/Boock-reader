import React, { useState } from 'react';
import style from './logForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setRegIn } from 'redux/auth/slice';
import { googleSignIn, logIn } from 'redux/auth/operations';

function LogForm() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const googleSvg = require('../../img/googleIcon.png');
  const dispatch = useDispatch();
  const userExist = useSelector(state => state.auth.userExist);

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleGoToReg() {
    dispatch(setRegIn());
    console.log('🚀 ~ file: regForm.jsx:8 ~ RegForm ~ userExist:', userExist);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    dispatch(
      logIn({
        email: user.email,
        password: user.password,
      })
    );
  }
  function handleGoogleIn() {
    dispatch(googleSignIn());
  }
  return (
    <form className={style.form} action="submit" onSubmit={handleSubmit}>
      <button
        onClick={handleGoogleIn}
        type="button"
        className={style.googleBtn}
      >
        <img src={googleSvg} alt="google item" className={style.icon} />
        Google
      </button>

      <label className={style.lable} htmlFor="logEmail">
        <p>
          Email<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="email"
          id="logEmail"
          name="email"
          placeholder="your@email.com"
          onChange={handleInputChange}
        />
      </label>
      <label className={style.lable} htmlFor="logPass">
        <p>
          Password<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="password"
          id="logPass"
          name="password"
          placeholder="..."
          onChange={handleInputChange}
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
