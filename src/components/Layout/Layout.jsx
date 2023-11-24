import { NavLink } from 'react-router-dom';
import React from 'react';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <NavLink
          className={({ isActive }) =>
            `${css.navlink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navlink} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navlink} ${isActive ? css.active : ''}`
          }
          to="/favorites"
        >
          Favorites
        </NavLink>
      </header>
      <main className={css.wrapper}>{children}</main>
    </div>
  );
};

export default Layout;
