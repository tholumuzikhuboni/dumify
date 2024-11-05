import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

export const fetchPlaylists = async (token) => {
    const response = await axios.get(`${BASE_URL}/me/playlists`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.items;
};

export const searchTracks = async (token, query) => {
    const response = await axios.get(`${BASE_URL}/search`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            q: query,
            type: 'track',
            limit: 10,
        },
    });
    return response.data.tracks.items;
};

export const fetchTopTracks = async (token) => {
    const response = await axios.get(`${BASE_URL}/me/top/tracks`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.items;
};

