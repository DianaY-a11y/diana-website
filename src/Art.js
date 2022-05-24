import React from 'react';
import './styles/App.css';
import Navbar from './NavBar';
import Gallery from './Gallery'

function Art() {
  return (
    <div className='App'>
        <Navbar />
        <div className='Main'>
            <Gallery />
        </div>
    </div>
  ); 
}

export default Art;