import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer'
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header /> 
      <main className="layout__content">
        {children}
      </main> {/* Affichage dynamique du contenu */}
      <Footer />
    </div>
  );
};

export default Layout;
