import React from 'react';

const PropertyHeader = ({ title, location, tags }) => (
  <div className="property-details__main">
    <h1>{title}</h1>
    <p>{location}</p>
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  </div>
);

export default PropertyHeader;