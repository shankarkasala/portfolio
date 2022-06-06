import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const [name, setName] = useState("home");
  const handelClass = (data) => {
    setName(data);
  };
  return (
    <div className="navbar">
      <h3 className="logo">.developer</h3>
      <ul className="nav-links">
        <li>
          <a
            href="#home"
            smooth="true"
            className={`${name === "home" ? "active" : ""}`}
            onClick={() => handelClass("home")}
          >
            Home
          </a>
          {/* <Link to="#home">Home</Link> */}
        </li>
        <li>
          <a
            href="#skill"
            smooth="true"
            className={`${name === "skill" ? "active" : ""}`}
            onClick={() => handelClass("skill")}
          >
            Skills
          </a>
          {/* <Link to="#services">Skills</Link> */}
        </li>
        <li>
          <a
            href="#about"
            smooth="true"
            className={`${name === "about" ? "active" : ""}`}
            onClick={() => handelClass("about")}
          >
            Projects
          </a>
          {/* <Link to="#about">About</Link> */}
        </li>

        <li>
          <a
            href="#contact"
            smooth="true"
            className={`${name === "contact" ? "active" : ""}`}
            onClick={() => handelClass("contact")}
          >
            Contact
          </a>
          {/* <Link to="#contact">Contact</Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
