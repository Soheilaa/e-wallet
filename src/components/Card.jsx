import React from 'react';
import './card.css';

const Card = ({ card }) => {
  // Function to format the card number with spaces every four characters
  const formatCardNumber = (cardNumber) => {
    const strippedNumber = cardNumber.replace(/\s/g, '');   // Remove any existing spaces from the card number
    return strippedNumber.replace(/(.{4})/g, '$1 ');    // Insert a space after every four characters
  };

  // Define a mapping between vendor options and their corresponding colors
  const vendorColors = {
    'BITCOIN INC': 'rgba(255, 174, 52, 1)',
    'EVIL CORP': 'rgba(243, 51, 85, 1)',
    'BLOCK CHAIN INC': 'rgba(139, 88, 249, 1)',
    'NINJA BANK': 'rgba(34, 34, 34, 1)',
  };

 
  const cardColor = vendorColors[card.vendor] || 'rgb(168, 168, 168)'; // get the color based on the card's vendor, default to grey if vendor not found

  return (
    <div className="credit-card" style={{ backgroundColor: cardColor }}>
    <div className="card-front">
      
      {/* Conditionally render the vendor image or the chip image */}
      <div className="vendor-image">
        <img src={card.vendorImage || "../src/assets/chipdark.svg"} alt="Chip" className="card-chip" />
      </div>
      <div className="card-number">{formatCardNumber(card.cardNumber) || 'XXXX XXXX XXXX XXXX'}</div>
      <div className="card-details">
        <div className="card-holder">CARDHOLDER NAME <br/>{card.fullName}</div>
        <div className="card-expiry">VALID UNTIL <br/>{card.expiryDate}</div>
      </div>
    </div>
  </div>
  
  );
};

export default Card;

