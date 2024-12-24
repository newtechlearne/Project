import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

import { Link } from 'react-router-dom'; // Import Link for navigation

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // Store search input

  const dispatch = useDispatch(); // Redux dispatch to trigger actions

  // Fetch product list from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch action to add the product to the cart
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Product list */}
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ marginBottom: '20px' }}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="100" />
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <br />
            <a href={`/product/${product.id}`}>View Details</a>
          </div>
        ))}
      </div>

      {/* View Cart Button */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/cart">
          <button>View Cart</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
