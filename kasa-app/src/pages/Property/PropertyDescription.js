import React from 'react';
import Collapse from '../../components/common/Collapse';

const PropertyDescription = ({ description, equipments }) => (
  <div className="property-description">
    <div className="property-description__item">
      <Collapse title="Description" content={description} />
    </div>
    <div className="property-description__item">
      <Collapse 
        title="Équipements" 
        content={
          <ul>
            {equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        } 
      />
    </div>
  </div>
);

export default PropertyDescription;