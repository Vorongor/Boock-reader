import React from 'react';
import style from './hero.module.css';
// import { Link } from 'react-router-dom';
import Header from 'layuot/Header';
import RegForm from 'components/regForm/regForm';
import LogForm from 'components/logForm/logForm';
import { useSelector } from 'react-redux';

function Hero() {
  const userExist = useSelector(state => state.auth.userExist);

  return (
    <div className={style.container}>
      <Header />
      <section className={style.section}>
        <div className={style.tableBox}>
          {userExist ? <LogForm /> : <RegForm />}
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
