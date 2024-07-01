// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useSpotifyAuth from '../hooks/useSpotifyAuth';

const Header = () => {
  const { logout } = useSpotifyAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md text-white w-full py-4 px-8 flex justify-between items-center">
      <div>
        <Link to="/">
            <div className="font-bold text-2xl text-green-500">TuneKeeper</div>
        </Link>
      </div>
      <nav className="space-x-4">
        <Link to="/" className="text-green-500 hover:text-gray-300">Home</Link>
        <Link to="/playlist" className="text-green-500 hover:text-gray-300">Playlist</Link>
        {
          localStorage.getItem('access_token') && (
            <Link onClick={() => handleLogout()} className="text-green-500 hover:text-gray-300">Log Out</Link>
          )
        }
        
      </nav>
    </header>
  );
};

export default Header;
