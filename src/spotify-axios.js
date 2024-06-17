import axios from 'axios';
import qs from 'qs';

export const getAuthToken = async () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };

  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const res = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    console.log('access token', res.data.access_token);
    return res.data.access_token;
  } catch (error) {
    console.log(error);
  }
};