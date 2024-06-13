import { useEffect, useState } from 'react'
import './App.css'
import Spotify from './Spotify'
import { getAuth } from './spotify-axios';
import axios from 'axios';

const clientId = '708626a94e0747b0b03cd7f9e5c1be35';
const clientSecret = '04563e29fa004828859e734b23db0006';
const redirect_uri = 'http://localhost:5173/';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const scopes = ['user-read-private', 'user-read-email']; // Example scopes

function App() {
  
  const handleLogin = () => {
    const params = {
      client_id: clientId,
      redirect_uri,
      scope: scopes.join(' '),
      response_type: 'code'
    }
    const parse = new URLSearchParams(params).toString();
    const url = `${authEndpoint}?${parse}`;

    console.log('Parsed', parse);

    axios.get(url).then((res) => {
      console.log({res})
    });
  }

  return (
    <>
      <h1>Vite + React</h1>

      {/* <Spotify /> */}

      <button onClick={() => handleLogin()}>Login</button>
      {/* <button onClick={() => handleLogin()}>Get Track</button> */}

    </>
  )
}

export default App


// useEffect(() => {
//   async function getToken() {
//     const token = await getAuth();
//     localStorage.setItem('access_token', token);
//     console.log('auth run', token);
//   }
//   getToken();
// }, []);

// async function getProfile() {
//   let accessToken = localStorage.getItem('access_token');

//   console.log({accessToken});

//   const response = await fetch('https://api.spotify.com/v1/me', {
//     headers: {
//       Authorization: 'Bearer ' + accessToken
//     }
//   });

//   const data = await response.json();
//   console.log({data});
// }