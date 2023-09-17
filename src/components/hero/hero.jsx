import React from 'react';
import style from './hero.module.css';
// import { Link } from 'react-router-dom';
import Header from 'layuot/Header';
import RegForm from 'components/regForm/regForm';
import LogForm from 'components/logForm/logForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogIn, setRegIn } from 'redux/auth/slice';

function Hero() {
  const dispatch = useDispatch();
  const userExist = useSelector(state => state.auth.userExist);

  function goToLog() {
    dispatch(setLogIn());
  }
  function goToReg() {
    dispatch(setRegIn());
  }
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
        <Link to="mobile">
          <button type="button" className={style.btnL} onClick={goToLog}>
            Log in
          </button>
        </Link>
        <Link to="mobile">
          <button type="button" className={style.btnR} onClick={goToReg}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Hero;
