import React from "react";
import { Link } from 'react-router-dom';
import './NotFoundContent.scss';


const NotFoundContent = () => {

    return (
        <div className="error-page-container">
          <main className="error-content">
            <h1 className="error-content__title">404</h1>
            <p className="error-content__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error-content__link">Retourner sur la page d'acceuil</Link>
          </main>
        </div>
      );
};

export default NotFoundContent