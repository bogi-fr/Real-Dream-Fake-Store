import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />

          <Route path="*" element={<Navigate to="/" replace /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
