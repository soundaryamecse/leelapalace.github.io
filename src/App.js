import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
// import './App.css';
import HotelSystem from './Components/HotelSystem'

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <HotelSystem/>
      </BrowserRouter>
    </div>
  );
}

export default App;
