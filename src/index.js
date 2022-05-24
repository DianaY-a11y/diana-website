import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Art from './Art';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';


ReactDOM.render(
  <Router>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/Art" element={<Art/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
