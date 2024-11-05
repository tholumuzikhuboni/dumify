import React from 'react';

const Track = ({ track }) => {
    return (
        <li>
            <img src={track.album.images[0]?.url} alt={track.name} width="50" />
            <p>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</p>
        </li>
    );
};

export default Track;

