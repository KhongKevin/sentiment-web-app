// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SecondaryPage from './pages/SecondaryPage';
import InitialPage from './pages/InitialPage'

function App() {
  return (
    <Router>        
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SecondaryPage" element={<SecondaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
