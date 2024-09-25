import React from 'react';
import Header from '../global/Header';
import Footer from '../global/Footer'
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
