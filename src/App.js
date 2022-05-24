import React from 'react';
import './styles/App.css';
import Home from './Home';
import Art from './Art';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (

      <div className="App">
        <NavBar />
        <Home />
      </div>

  ); 
}

export default App;