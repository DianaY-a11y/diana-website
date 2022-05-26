import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import "./styles/App.css";
import Art from "./Art";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Art" element={<Art />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
