import React from 'react';
import { Link } from 'react-router-dom'; 

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main> {/* Affichage  dynamique */}
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}

export default Layout;
