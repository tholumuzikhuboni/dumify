import React from 'react';

const HomePage = ({ token }) => (
  <div>
    <h2>Welcome to Dumify</h2>
    {token ? <p>You are logged in</p> : <p>Please log in to view playlists</p>}
  </div>
);

export default HomePage;

