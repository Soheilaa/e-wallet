import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addCard } from '../app/slices/cardsSlice';
import './addnewcardpage.css'; 
import Card from '../components/Card'; 

import vendorBitcoinImage from '../assets/vendor-bitcoin.svg';
import vendorEvilImage from '../assets/vendor-evil.svg'; 
import vendorBlockchainImage from '../assets/vendor-blockchain.svg'; 
import vendorNinjaImage from '../assets/vendor-ninja.svg'; 

// Define the vendor image URLs
const vendorImages = {
  'BITCOIN INC': vendorBitcoinImage,
  'EVIL CORP': vendorEvilImage,
  'BLOCK CHAIN INC': vendorBlockchainImage,
  'NINJA BANK': vendorNinjaImage,
};

const AddNewCardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: '',
    fullName: '',
    expiryDate: '',
    vendor: '',
    vendorImage: '', // Add vendorImage field to store the URL of the selected vendor image
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCard(formData));
    navigate('/');
  };

// Function to handle changes in form inputs
const handleChange = (event) => {
  const { name, value } = event.target;
  
  if (name === 'expiryDate') {
    // Restricting non-numeric input and limiting length
    const newValue = value.replace(/\D/g, '').slice(0, 4); 
    if (newValue.length <= 2) {
      // Automatically insert a slash after the first two characters
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: newValue,
      }));
    } else {
      // Format as XX/XX
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: `${newValue.slice(0, 2)}/${newValue.slice(2)}`,
      }));
    }
  } else if (name === 'cardNumber') {
    // Restricting non-numeric input in the card number input
    if (/^\d+$/.test(value) || value === '') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  } else if (name === 'fullName') {
    // Restricting numeric input in the cardholder name input
    if (!/\d/.test(value) || value === '') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  } else if (name === 'vendor') {
    // Update the vendor image URL based on the selected vendor
    const vendorImage = vendorImages[value];
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      vendorImage,
    }));
  } else {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
};

  return (
    <div className="container">
      <Card card={formData} />
      <h2>Add a New Card</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="XXXX XXXX XXXX XXXX"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="16"
          />
        </div>
        <div className="input-row">

          <div className="input-group" id="input-name">
            <label id='fullName-label' htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group" id="input-exdate">
            <label id='expiryDate-label' htmlFor="expiryDate">Expiry Date (MM/YY):</label>

            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              maxLength="5"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="vendor">Vendor:</label>

          <select id="vendor" name="vendor" value={formData.vendor} onChange={handleChange}>
            <option value="">Select a vendor</option>
            <option value="BITCOIN INC">BITCOIN INC</option>
            <option value="NINJA BANK">NINJA BANK</option>
            <option value="BLOCK CHAIN INC">BLOCK CHAIN INC</option>
            <option value="EVIL CORP">EVIL CORP</option>
          </select>
        </div>

        <button id="form_btn" type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default AddNewCardPage;




