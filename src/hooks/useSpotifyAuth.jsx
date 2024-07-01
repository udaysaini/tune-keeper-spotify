import { useEffect, useState } from "react";
import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

const useSpotifyAuth = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));
    const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);

    const getAuthUrl = () => {
        const scopes = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative';
        // TODO: generate a random token for state to check it later
        return `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    };

    const checkTokenExpiry = () => {
        // Implement token expiry logic here
        // For simplicity, assuming token is valid for 1 hour
        const tokenExpiryTime = localStorage.getItem('token_expiry_time');
        return tokenExpiryTime && new Date().getTime() < tokenExpiryTime;
    };

    const refreshToken = async () => {
        console.log('refreshToken Request sending');
        try {
            const response = await axios.post('https://accounts.spotify.com/api/token', {
                grant_type: 'refresh_token',
                refresh_token: localStorage.getItem('refresh_token'),
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            });
            const data = response.data;
            setAccessToken(data.access_token);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('token_expiry_time', new Date().getTime() + (data.expires_in * 1000));
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Error refreshing token', error);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        if (!checkTokenExpiry()) {
            console.log('checkTokenExpiry : TOKEN EXPIRED.');
            
            refreshToken();
        }
    }, []);

    return {
        accessToken,
        isAuthenticated,
        login: () => {
            window.location.href = getAuthUrl()
        },
        logout: () => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('token_expiry_time');
            setAccessToken(null);
            setIsAuthenticated(false);
        }
    };
}

export default useSpotifyAuth;
