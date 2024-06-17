import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './error-page.jsx'
import './index.css'
import Playlist from './routes/Playlist.jsx'
import Header from './components/Header';
import RedirectLogin from './RedirectLogin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className="p-8">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<RedirectLogin />} />
          <Route path="/playlist" element={<Playlist />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* Add more Route components as needed */}
        </Routes>
      </main>
    </Router>
  </React.StrictMode>,
)
