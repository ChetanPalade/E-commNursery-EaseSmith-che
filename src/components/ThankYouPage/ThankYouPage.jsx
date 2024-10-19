
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './ThankYouPage.css'

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
 const {product} = location.state || {};

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
      
      <div className="thank-you-header">
        <h2>Your Cart</h2>
        <button onClick={handleContinueShopping} className="close-button">✖</button> 
      </div>
      <div className="thank-you-body">
          <h3>Congratulations<br />Order Placed!</h3>
        
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eJTNH3AmDoQt0_jQZllUUgJwOTdZTPEUkA&s" 
            alt="Plant Icon" 
            className="plant-icon"
          />
        
          <p>
          Thank you for your interest in {product?.name || 'the product'}
          </p>
        </div>
        <button onClick={handleContinueShopping} className="thank-you-button continue-shopping-button">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;




// import React from 'react'
// import { useLocation } from 'react-router-dom'

// const ThankYouPage = () => {
//     const location = useLocation();
//     const {product} = location.state || {};
//   return (
//     <div>
//         <h1>Thank you for your interest in {product?.name || 'the product'}</h1>
//     </div>
//   )
// }

// export default ThankYouPage