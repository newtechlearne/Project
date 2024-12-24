import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions/cartActions';


const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux
  const dispatch = useDispatch();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Cart is empty! Add items to proceed.');
      return;
    }

    // Proceed to checkout logic here
    alert('Checkout successful!');

    // Clear cart after checkout
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CheckoutPage;
