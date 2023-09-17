import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
function Header() {
  return (
    <nav className={style.header}>
      <Link className={style.link}>BR</Link>
    </nav>
  );
}
export default Header;
