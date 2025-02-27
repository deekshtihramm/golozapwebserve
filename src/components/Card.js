// src/Card.js
import React from 'react';
import './Cardstyle.css';  // Assuming you have a separate CSS file for styling

const Card = ({ serviceName, description }) => {
  return (
    <div className="card">
      <h3>{serviceName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
