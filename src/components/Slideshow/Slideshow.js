import React, { useState, } from 'react';
import './Slideshow.scss';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length <= 1) {
    return (
      <div className="slideshow">
        <img src={images[0]} alt="Property" className="slideshow__image" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <button className="slideshow__arrow slideshow__arrow--left" onClick={goToPrevious}>
        &#8249;
      </button>
      <button className="slideshow__arrow slideshow__arrow--right" onClick={goToNext}>
        &#8250;
      </button>
      <div 
        className="slideshow__image-container" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Property ${index + 1}`} className="slideshow__image" />
        ))}
      </div>
      <div className="slideshow__counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Slideshow;