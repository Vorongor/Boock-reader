import React, { useState } from 'react';
import style from './regForm.module.css';
import { useDispatch } from 'react-redux';
import { setLogIn, setTestIn } from 'redux/auth/slice';
import { register } from 'redux/auth/operations';

function RegForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const googleSvg = require('../../img/googleIcon.png');
  const dispatch = useDispatch();

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleGoToLog() {
    dispatch(setLogIn());
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (user.password === user.chekPassword) {
      console.log(user);
      dispatch(
        register({
          name: user.name,
          email: user.email,
          password: user.password,
        })
      );
    } else {
      alert('Your passwords don`t match');
    }
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
          name="name"
          placeholder="..."
          onChange={handleInputChange}
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
          name="email"
          placeholder="your@email.com"
          onChange={handleInputChange}
        />
      </label>
      <label className={style.lable} htmlFor="regPass">
        <p>
          Password<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="password" // Змінено тип поля на "password"
          id="regPass"
          name="password"
          placeholder="..."
          onChange={handleInputChange}
        />
      </label>
      <label className={style.lable} htmlFor="regPass2">
        <p>
          Confirm Password<span className={style.star}> *</span>
        </p>
        <input
          className={style.input}
          type="password" // Змінено тип поля на "password"
          id="regPass2"
          name="chekPassword"
          placeholder="..."
          onChange={handleInputChange}
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
