import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Add the product to the cart
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id)); // Remove the product from the cart
  };

  return (
    <div className="product-item">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="100" />
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
};

export default ProductItem;
