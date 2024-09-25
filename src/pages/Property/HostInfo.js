import React from 'react';

const HostInfo = ({ host, rating }) => (
  <div className="property-details__host">
    <div className="host-info">
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} />
    </div>
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  </div>
);

export default HostInfo;