import React from 'react';
import Gallery from './Gallery';
import Navbar from './NavBar';
import './styles/App.css';

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