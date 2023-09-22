import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import style from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOut } from 'redux/auth/slice';
import BoockSvg from './svg/boockSvg';
import HomeSvg from './svg/homeSvg';
import { logOut } from 'redux/auth/operations';

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.liba.user);
  const location = useLocation();
  const library = location.pathname === '/library' ? true : false;

  const userName = user.name;

  const leter = userName.slice(0, 1);

  const transparentBgL = library
    ? { backgroundColor: 'transparent' }
    : { backgroundColor: '#f5f7fa' };
  const transparentBgT = !library
    ? { backgroundColor: 'transparent' }
    : { backgroundColor: '#f5f7fa' };
  function handleLogOut() {
    dispatch(logOut());
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
            <div className={style.navBox}>
              <Link className={style.item} to="/library" style={transparentBgL}>
                <BoockSvg />
              </Link>
              <Link
                className={style.item}
                style={transparentBgT}
                to="/training"
              >
                <HomeSvg />
              </Link>
            </div>
            <span className={style.breake}> </span>
            <div className={style.userTumb}>
              <span className={style.userItem}>{leter}</span>
              <span className={style.fullname}>{userName}</span>
            </div>
            <button
              className={style.logout}
              onClick={handleLogOut}
              type="button"
            >
              <Link className={style.linkOut} to="/">
                LogOut
              </Link>
            </button>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
}
export default Header;
