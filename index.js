import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './DownloadCss.css';
import './Manus.css';
import './Startsiden.css';
import Manus from './Manus';
import Download from './Download';
import Profil from './Profil';
import reportWebVitals from './reportWebVitals';
import GoLive from './GoLive';
import Startsiden from './Startsiden';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Download" element={<Download />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/GoLive" element={<GoLive />} />
        <Route path="/Manus" element={<Manus />} />
        <Route path="/Startsiden" element={<Startsiden />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
