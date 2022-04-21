import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Gallery from './containers/Gallery/Gallery';
import Photos from './components/Photos/Photos';
import Header from './components/Header/Header';
import PhotoDetails from './components/Photos/PhotoDetails/PhotoDetails';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" exact element={<Gallery />} />
          <Route path="/photos/:id" element={<Photos />} />
          <Route path="/photo_details/:id" element={<PhotoDetails />} />
        </Routes>
    </div>
  );
}

export default App;
