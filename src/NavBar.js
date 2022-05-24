import React from "react";
import {Link} from "react-router-dom";
import './styles/NavBar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        Diana
      </div>
      <nav className="items">
        <ul className='ul'>
          <h1>
          <Link to="/">Home</Link>
          </h1>
          <h1>
          <Link to="/Art">Art</Link>
          </h1>
        </ul>
      </nav>
      </div>

  );
}

export default Navbar;