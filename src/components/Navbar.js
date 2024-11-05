import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = ({ token, handleLogin, handleLogout }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/search">Search</Link>
    {!token ? (
      <Button onClick={handleLogin}>Login to Spotify</Button>
    ) : (
      <Button onClick={handleLogout}>Logout</Button>
    )}
  </nav>
);

export default Navbar;

