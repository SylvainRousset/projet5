// src/components/AboutContent.jsx
import React from 'react';
import Banner from '../../components/common/Banner';
import Collapse from '../../components/common/Collapse';
import './AboutContent.scss';
import bannerImage from '../../assets/images/backgrounds/background_about.webp';

const AboutContent = () => {
  const categories = [
    { 
      title: 'Fiabilité', 
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' 
    },
    { 
      title: 'Respect', 
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' 
    },
    { 
      title: 'Service', 
      content: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.' 
    },
    { 
      title: 'Sécurité', 
      content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' 
    }
  ];

  return (
    <div className="about-content">
      <Banner image={bannerImage} overlayOpacity={0}/>
      <div className="about-content__categories">
        {categories.map((category, index) => (
          <Collapse key={index} title={category.title} content={category.content} />
        ))}
      </div>
    </div>
  );
};

export default AboutContent;