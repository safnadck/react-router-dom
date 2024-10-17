// src/components/Home.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const goToNotFound = () => {
    navigate('/this-route-does-not-exist');
  };

  const goToAbout = () => {
    navigate('./About');
  };

  return (
    <div className="container">
      <h1>Welcome to the Product App</h1>
      <h2>Available Products</h2>
      <ul>
        <li><Link to="/product/1">Product 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
        <li><Link to="/product/3">Product 3</Link></li>
      </ul>
      <button onClick={goToNotFound}>Go to NotFound Page</button>
      <button onClick={goToAbout}>About page</button>
    </div>
  );
};

export default Home;
