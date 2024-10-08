import React from 'react';
import Banner from '../../components/common/Banner';
import properties from '../../data/properties.json'; 
import './HomeContent.scss';
import Card from '../../components/cards/Card';
import bannerImage from '../../assets/images/backgrounds/background-home.webp';  

const HomeContent = () => {
  return (
    <div className="home-content">
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" overlayOpacity={0.5}/>
      <div className="home-content__grid">
        
        {properties.map(property => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;