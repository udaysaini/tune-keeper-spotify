import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';


function App() {
  const createAuthUrl = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
    const scopes = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative';
    const state = 'jasperjack';// TODO: generate a random token for state to check it later
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
    return authUrl;
  };

  const handleLogin = () => {
    window.location.href = createAuthUrl();
  };

  return (
    <>
      {/* <div className="flex justify-center space-x-4">
        <button onClick={handleLogin}>Login with Spotify</button>
        <button>
          <Link to="/home">Home</Link>
        </button>
        <button>
          <Link to="playlist">Playlist</Link>
        </button>
        <button>
          <Link to="route">Route</Link>
        </button>
      </div> */}
      <Router>
        <Header />
        <main className="p-8">
          <AppRoutes />
        </main>
      </Router>
    </>
  )
}

export default App;
