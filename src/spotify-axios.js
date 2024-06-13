import axios from 'axios';
import qs from 'qs';

export const getAuth = async () => {
  const clientId = '708626a94e0747b0b03cd7f9e5c1be35';
  const clientSecret = '04563e29fa004828859e734b23db0006';
  
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