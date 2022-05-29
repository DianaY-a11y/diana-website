import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Art from "./Art";
import Home from "./Home";
import NavBar from "./NavBar";
import Projects from "./Projects";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Art" element={<Art />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
