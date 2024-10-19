
import React from 'react'
import {useNavigate} from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  return (
  <div className="product-card">
    <div className='product-image-card'>
    <img src={product.image} alt={product.name}  className='image-p' />
        <button className="view-btn" onClick={() => navigate('/thank-you', {state:{product}})}>View Product</button>
      </div>
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>
        
    <button className="cart-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
  </div>
);
  };

export default ProductCard;

// const ProductCard = ({product,openModal}) => {
//     const navigate = useNavigate();
//   return (
//     <div className='product-card'>
//         <div className='product-image-card'>
//         <img src={product.image} alt={product.name} className='image-p' />
//         <button  className="view-btn" onClick={() => navigate('/thank-you', {state:{product}})}>View Product</button>
//         </div>
        
//         <h3>{product.name}</h3>
//         <p>Price: ₹{product.price}</p>
//         <button className="cart-btn">Add to Cart</button>
//     </div>
//   )
// }

// export default ProductCard
