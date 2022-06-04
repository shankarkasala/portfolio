import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <h3 className="logo">.developer</h3>
      <ul className="nav-links">
        <li>
          <a href="#home" smooth="true">
            Home
          </a>
          {/* <Link to="#home">Home</Link> */}
        </li>
        <li>
          <a href="#skill" smooth="true">
            Skills
          </a>
          {/* <Link to="#services">Skills</Link> */}
        </li>
        <li>
          <a href="#about" smooth="true">
            About
          </a>
          {/* <Link to="#about">About</Link> */}
        </li>

        <li>
          <a href="#contact" smooth="true">
            Contact
          </a>
          {/* <Link to="#contact">Contact</Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
