// src/components/Collapse.jsx
import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}>&#9650;</span>
      </div>
      {isOpen && (
        <div className="collapse__content">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
      )}
    </div>
  );
};

export default Collapse;