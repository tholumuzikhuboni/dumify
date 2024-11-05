
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import Navbar from './components/Navbar';
import Button from './components/Button';
import './styles.css';

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let storedToken = window.localStorage.getItem("token");

    if (!storedToken && hash) {
      storedToken = hash
        .substring(1)
        .split("&")
        .find(elem => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", storedToken);
    }

    setToken(storedToken);
  }, []);

  const handleLogin = () => {
    const authEndpoint = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
    const scopes = process.env.REACT_APP_SPOTIFY_SCOPE;
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;
  };

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Dumify</h1>
          <Navbar token={token} handleLogin={handleLogin} handleLogout={handleLogout} />
        </header>
        <Routes>
          <Route path="/" element={<HomePage token={token} />} />
          <Route path="/profile" element={<ProfilePage token={token} />} />
          <Route path="/search" element={<SearchPage token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

