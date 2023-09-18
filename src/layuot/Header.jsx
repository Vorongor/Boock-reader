import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import { useDispatch } from 'react-redux';
import { setLogOut } from 'redux/auth/slice';
function Header() {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(setLogOut());
  }
  return (
    <nav className={style.header}>
      <Link to="/" className={style.link}>
        BR
      </Link>
      <Link to="library">Liba</Link>
      <Link to="training">Train</Link>
      <div>
        <span>user</span>
        <button onClick={handleLogOut} type="button">
          LogOut
        </button>
      </div>
    </nav>
  );
}
export default Header;
