// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SecondaryPage from './pages/SecondaryPage';
import InitialPage from './pages/InitialPage';
import Navbar from './components/NavBar';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>  
      <Navbar />

      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/InitialPage" element={<InitialPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SecondaryPage" element={<SecondaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
