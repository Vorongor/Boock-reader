import React from 'react';
import style from './hero.module.css';
import { Link } from 'react-router-dom';
import Header from 'layuot/Header';

function Hero() {
  return (
    <div className={style.container}>
      <Header />
      <section className={style.section}>
        <div className={style.tableBox}>
          <form className={style.form} action="submit">
            <button type="button" className={style.googleBtn}>
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
                <span className={style.logText}>Log in</span>
              </p>
            </div>
          </form>
        </div>
      </section>
      <div className={style.texBox}>
        <h1 className={style.title}>Books Reading</h1>
        <div className={style.listBox}>
          <h2 className={style.listTitle}>Will help you to</h2>
          <ul className={style.list}>
            <li className={style.item}>
              Create your goal faster and proceed to read
            </li>
            <li className={style.item}>
              Divide process proportionally for each day
            </li>
            <li className={style.item}>Track your success</li>
          </ul>
        </div>
        <div className={style.listBox}>
          <h2 className={style.listTitle}>You may also</h2>
          <ul className={style.list}>
            <li className={style.item}>
              Pose your own independent point of view
            </li>
            <li className={style.item}>
              Improve your professional skills according to new knowledge
            </li>
            <li className={style.item}>Become an interesting interlocutor</li>
          </ul>
        </div>
      </div>
      <div className={style.btnGrup}>
        <button type="button" className={style.btnL}>
          Log in
        </button>
        <button type="button" className={style.btnR}>
          Register
        </button>
      </div>
    </div>
  );
}
export default Hero;
