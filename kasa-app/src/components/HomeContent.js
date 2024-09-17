import React from 'react';
import Banner from '../components/Banner';
import './HommeContent.scss';
import bannerImage from '../assets/images/backgrounds/background-home.png';  

const HomeContent = () => {
  return (
    <div className="home-content">
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" overlayOpacity={0.5}/>

    </div>
  );
};

export default HomeContent;