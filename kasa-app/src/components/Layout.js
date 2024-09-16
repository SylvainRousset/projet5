// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}

export default Layout;
