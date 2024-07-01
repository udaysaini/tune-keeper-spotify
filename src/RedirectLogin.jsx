import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RedirectLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTokenFromCode = async (code) => {
            const access_token = localStorage.getItem('access_token')
            console.log('Access TOKEN FROM LOCAL', { access_token });
            if (access_token) {
                navigate('/playlist');
                return;
            }
            const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
            const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

            const params = new URLSearchParams();
            params.append('grant_type', 'authorization_code');
            params.append('code', code);
            params.append('redirect_uri', redirectUri);
            params.append('client_id', clientId);
            params.append('client_secret', clientSecret);

            try {
                // Fetch the token, store it in local storage and then redirect to dashboard/playlist page
                const response = await axios.post('https://accounts.spotify.com/api/token', params);
                localStorage.setItem('access_token', response?.data?.access_token);
                localStorage.setItem('refresh_token', response?.data?.refresh_token);
                localStorage.setItem('token_expiry_time', new Date().getTime() + (response?.data?.expires_in * 1000));
                console.log('Access token', response.data);
                navigate('/playlist');
            } catch (error) {
                // console.error('Error exchanging code for token', error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error('Error response data:', error.response.data);
                    console.error('Error response status:', error.response.status);
                    console.error('Error response headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Error request:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error message:', error.message);
                }
                console.error('Error config:', error.config);
            }
        };

        const getCodeFromURL = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (code) {
                await fetchTokenFromCode(code);
            }
        }

        getCodeFromURL();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-xl text-gray-700">Logging in, please wait...</div>
        </div>
    );
};

export default RedirectLogin;
