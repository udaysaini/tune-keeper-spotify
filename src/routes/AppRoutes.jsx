import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RedirectLogin from '../RedirectLogin';
import PlaylistPage from '../pages/PlaylistPage';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage'
import TracksTable from '../components/TracksTable';

const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<RedirectLogin />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          {/* <Route path="/playlist/:playlistId" element={<TracksTable />} /> */}

          {/* Error Page */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* Add more Route components as needed */}
        </Routes>
    )
}

export default AppRoutes;