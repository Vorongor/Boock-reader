import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOut } from 'redux/auth/slice';
import BoockSvg from './svg/boockSvg';
import HomeSvg from './svg/homeSvg';
function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const hp = true;
  const transparentBg = hp
    ? { backgroundColor: 'transparent' }
    : { backgroundColor: '#f5f7fa' };
  function handleLogOut() {
    dispatch(setLogOut());
  }
  return (
    <nav className={style.header}>
      <Link to="/" className={style.link}>
        BR
      </Link>
      {isLoggedIn && (
        <div className={style.userBox}>
          <Link className={style.item} to="/library">
            <BoockSvg />
          </Link>
          <Link className={style.item} style={transparentBg} to="/training">
            <HomeSvg />
          </Link>
          <span className={style.breake}> </span>
          <div className={style.item}>U</div>
          <button className={style.logout} onClick={handleLogOut} type="button">
            LogOut
          </button>
        </div>
      )}
    </nav>
  );
}
export default Header;
