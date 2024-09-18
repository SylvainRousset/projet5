import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/logo/footer_logo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
      <img src={logo} alt="Kasa Logo footer" /> 
      </div>
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
