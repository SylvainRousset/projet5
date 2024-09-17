import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

const Banner = ({ image, text = '', size = 'medium', overlayOpacity = 0.4 }) => {
  return (
    <div className="banner-container">
      <div 
        className={`banner ${size}`} 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div 
          className="banner__overlay" 
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        ></div>
        {text && (
          <div className="banner__text-container">
            <h1 className="banner__text">{text}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  overlayOpacity: PropTypes.number,
};

export default Banner;