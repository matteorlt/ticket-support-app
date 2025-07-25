import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Ticket Support App</h1>
      <p>This is the internal platform for managing support tickets.</p>
      <div>
        <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Home; 