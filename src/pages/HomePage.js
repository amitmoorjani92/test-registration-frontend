import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => navigate('/customer-register')}>Customer Registration</button>
      <button onClick={() => navigate('/admin-register')}>Admin Registration</button>
      <button onClick={() => navigate('/admin-login')}>Admin Login</button>
    </div>
  );
};

export default HomePage;