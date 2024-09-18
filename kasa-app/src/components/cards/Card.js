import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="card">
      <img src={property.cover} alt={property.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{property.title}</h2>
      </div>
    </Link>
  );
};

export default Card;