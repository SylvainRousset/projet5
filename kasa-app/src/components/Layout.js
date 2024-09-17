import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header /> {/* Le Header sera affiché sur toutes les pages */}
      <main>{children}</main> {/* Affichage dynamique du contenu */}
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default Layout;
