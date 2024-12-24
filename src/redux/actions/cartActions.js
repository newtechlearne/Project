// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

// Action to add item to cart
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

// Action to remove item from cart
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

// Action to clear the cart
export const clearCart = () => ({
  type: CLEAR_CART,
});
