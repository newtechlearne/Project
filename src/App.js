import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/Cart';
import CheckoutPage from './components/Checkout';

const App = () => {
  return (
    <Router>
      <div>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#f8f8f8' }}>
          <h1>Shopping Cart App</h1>
          {/* Navigation Links */}
          <nav>
            <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
            <Link to="/cart">View Cart</Link> {/* View Cart link */}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} /> {/* Home (Product List) */}
          <Route path="/cart" element={<CartPage />} /> {/* Cart page */}
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Checkout page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
