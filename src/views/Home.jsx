
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCards, deleteCard } from '../app/slices/cardsSlice';
import './home.css';
import Card from '../components/Card';

const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const [activeCard, setActiveCard] = useState(null);

  const handleCardSelection = (card) => {
    setActiveCard(card === activeCard ? null : card);
  };

  const handleDelete = (index) => {
    if (activeCard === cards[index]) {
      setActiveCard(null); // Reset active card if the deleted card is active
    }
    dispatch(deleteCard(index));
  };

  useEffect(() => {
    console.log('Active card:', activeCard);
  }, [activeCard]);

  useEffect(() => {
    console.log('All cards:', cards);
  }, [cards]);

  return (
    <div className='main-container'>
      <h2 className="title">E-Wallet</h2>

      <div className="default-card-container">
        {!activeCard && (
          <Card
            card={{
              cardNumber: 'XXXX XXXX XXXX XXXX',
              fullName: '',
              expiryDate: 'XX/XX',
              cvv: 'XXX',
              vendor: 'Vendor',
            }}
          />
        )}
      </div>

      {activeCard && (
        <div className="active-card-container" style={{ position: 'relative', marginTop: '20px' }}>
          <Card card={activeCard} />
          <button onClick={() => handleDelete(cards.indexOf(activeCard))}>Delete</button>
        </div>
      )}

      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardSelection(card)}
            style={{
              position: 'absolute',
              top: `calc(${activeCard ? 440 : 220}px + ${index * 90}px)` // Adjust the value based on your design
            }}
          >
            {activeCard !== card && <Card card={card} />}
          </div>
        ))}
      </div>

      <button style={{ marginTop: `calc(${activeCard ? 440 : 220}px + ${cards.length * 90}px + 20px)` }}>
        <Link to="/add-new-card">Add a New Card</Link>
      </button>
    </div>
  );
};

export default Home;








