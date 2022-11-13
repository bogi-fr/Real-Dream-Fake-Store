import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Electronics from './Components/Electronics/Electronics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/electronics' element={<Electronics />} />

          <Route path="*" element={<Navigate to="/" replace /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
