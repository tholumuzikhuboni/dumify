import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = ({ token }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query || !token) return;

    try {
      const response = await axios.get(`https://api.spotify.com/v1/search`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: query,
          type: 'track,artist',
          limit: 10,
        },
      });
      setResults(response.data.tracks.items);
    } catch (error) {
      console.error("Error searching Spotify:", error);
    }
  };

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs or artists"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((track) => (
          <li key={track.id}>
            <img src={track.album.images[0]?.url} alt={track.name} width="50" />
            <p>{track.name} by {track.artists[0].name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;

