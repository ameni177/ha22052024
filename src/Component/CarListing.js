import React from 'react';
import './CarListing.css';

const CarListing = ({ name, image }) => {
  return (
    <div className="car-listing">
      <img src={image} alt={name} className="car-image" />
      <h3 className="car-name">{name}</h3>
      <div style={{ border: "10px solid grey" }} />
      <div style={{ border: "10px solid white" }} />
    </div>
  );
};

export default CarListing;
