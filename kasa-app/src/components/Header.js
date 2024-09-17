import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'; 
import logo from '../assets/images/logo/header_logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Kasa Logo header" />
      </div>
      <nav className="header__nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

