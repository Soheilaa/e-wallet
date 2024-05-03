import React from 'react';

// AddCard component responsible for rendering a form to add a new card
const AddCard = ({ onAddCard }) => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Extract form data using FormData API
    const formData = new FormData(e.target);
    // Create an object with card details from form data
    const cardDetails = {
      cardNumber: formData.get('cardNumber'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      expireDate: formData.get('expireDate'),
      cvv: formData.get('cvv'),
      validator: formData.get('validator'),
    };
    // Pass card details to parent component for adding
    onAddCard(cardDetails);
  };

  return (
    <div>
      <h2>Add a New Card</h2>
      {/* Form to collect card details */}
      <form onSubmit={handleSubmit}>
        {/* Input fields for card details */}
        <label>
          Card Number:
          <input type="text" name="cardNumber" />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>
        <br />
        <label>
          Expire Date:
          <input type="text" name="expireDate" />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" name="cvv" />
        </label>
        <br />
        <label>
          Validator:
          {/* Dropdown for selecting a validator */}
          <select name="validator">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </label>
        <br />
        {/* Submit button to add the card */}
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default AddCard;
