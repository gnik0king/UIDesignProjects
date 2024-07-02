import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or use mock data
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="homepage">
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
