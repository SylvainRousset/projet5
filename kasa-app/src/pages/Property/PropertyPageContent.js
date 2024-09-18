import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import PropertyHeader from './PropertyHeader';
import HostInfo from './HostInfo';
import PropertyDescription from './PropertyDescription';
import './PropertyPageContent.scss';
import properties from '../../data/properties.json';

const PropertyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);

  useEffect(() => {
   
  }, [property, navigate]);

  if (!property) {
    return null;
  }

  return (
    <div className="property-page">
      <Slideshow images={property.pictures} />
      
      <div className="property-details">
        <PropertyHeader title={property.title} location={property.location} tags={property.tags} />
        <HostInfo host={property.host} rating={property.rating} />
      </div>

      <PropertyDescription description={property.description} equipments={property.equipments} />
    </div>
  );
};

export default PropertyPage;