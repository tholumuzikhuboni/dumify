import React from 'react';

const Playlist = ({ playlist }) => (
  <li className="playlist-item">
    <img src={playlist.images[0]?.url} alt={playlist.name} width={50} height={50} />
    <span>{playlist.name}</span>
  </li>
);

export default Playlist;

