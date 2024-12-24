import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions/cartActions';

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(product.id)); // Remove product by ID
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} width="100" />
      <div>
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
