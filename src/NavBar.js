import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/images/logo.png";
import "./styles/NavBar.css";

const Logo = styled.img`
  height: 95px;
  width: 130px;
  margin: 10px 20px 20px 20px;
`;

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo src={logo} alt="Logo" />
      </div>
      <nav className="items">
        <ul className="ul">
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <Link to="/Art">Art</Link>
          </h1>
          <h1>
            <Link to="/Projects">Projects</Link>
          </h1>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
