import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import './ProductPage.css';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from an API or use mock data
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="productpage">
      {product ? <ProductDetail product={product} addToCart={addToCart} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductPage;
