import React from 'react';
import style from './Intro.module.css';
// import { Link } from 'react-router-dom';
import Header from 'layuot/Header';
import RegForm from 'components/regForm/regForm';
import LogForm from 'components/logForm/logForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogIn, setRegIn } from 'redux/auth/slice';
import ItroText from 'components/introText/IntroText';
import Quote from 'components/quote/quote';

function Intro() {
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
      {userExist ? <Quote /> : <ItroText />}

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
export default Intro;
