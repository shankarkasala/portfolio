import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <h3 className="logo">.developer</h3>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Skills</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
