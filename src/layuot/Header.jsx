import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import style from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOut } from 'redux/auth/slice';
import BoockSvg from './svg/boockSvg';
import HomeSvg from './svg/homeSvg';

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();

  const library = location.pathname === '/library' ? true : false;

  const transparentBgL = library
    ? { backgroundColor: 'transparent' }
    : { backgroundColor: '#f5f7fa' };
  const transparentBgT = !library
    ? { backgroundColor: 'transparent' }
    : { backgroundColor: '#f5f7fa' };
  function handleLogOut() {
    dispatch(setLogOut());
  }
  return (
    <div>
      <nav className={style.header}>
        <Link to="/" className={style.link}>
          BR
        </Link>
        {isLoggedIn && (
          <div className={style.userBox}>
            <Link className={style.item} to="/library" style={transparentBgL}>
              <BoockSvg />
            </Link>
            <Link className={style.item} style={transparentBgT} to="/training">
              <HomeSvg />
            </Link>
            <span className={style.breake}> </span>
            <div className={style.item}>U</div>
            <button
              className={style.logout}
              onClick={handleLogOut}
              type="button"
            >
              <Link to="/">LogOut</Link>
            </button>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
}
export default Header;
