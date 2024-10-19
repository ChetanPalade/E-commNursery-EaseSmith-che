
import React from 'react';

const AddToCartModal = ({ onAddToCart,product, isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add to Cart</h2>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddToCartModal;


// import React from 'react'
// import {Modal} from "@mui/material"

// const AddToCartModal = ({product, isOpen, onClose}) => {
//     if (!product) return null;

//   return (
//     <Modal open={isOpen} onClose={onClose}>
//         <div className="modal-content">
//             <h2>{product.name}</h2>
//             <p>Price:${product.price}</p>
//             <button onClick={onClose}>Confirm Add To Cart</button>
//         </div>
//     </Modal>
  
//   )
// }

// export default AddToCartModal