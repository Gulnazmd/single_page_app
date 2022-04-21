import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Gallery from './containers/Gallery/Gallery';
import Photos from './components/Photos/Photos';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Gallery />} />
          <Route path="/photos/:id" element={<Photos/>}/>
        </Routes>
    </div>
  );
}

export default App;
