import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './Pages/Home'; // Import Home component
import About from './Pages/About'; // Import About component

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Remove "exact" for cleaner routing */}
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

