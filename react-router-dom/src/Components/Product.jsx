// src/components/Product.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = {
  1: { name: 'Product 1', description: 'Description of Product 1' },
  2: { name: 'Product 2', description: 'Description of Product 2' },
  3: { name: 'Product 3', description: 'Description of Product 3' },
};

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[id];

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default Product;
