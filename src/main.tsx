import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ForkForest01 from './ForkForest01.tsx';
import ForkForest02 from './ForkForest02.tsx';
import ForkForest03 from './ForkForest03.tsx';
import About from './About.tsx';
import Podcast from './Podcast.tsx';
import Forum from './Forum.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ForkForest01" element={<ForkForest01 />} />
        <Route path="/ForkForest02" element={<ForkForest02 />} />
        <Route path="/ForkForest03" element={<ForkForest03 />} />
        <Route path="/about" element={<About />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
