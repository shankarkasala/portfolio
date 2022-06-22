import React from "react";
import { Link } from "react-scroll";

import "./feater.css";
function Feater() {
  return (
    <div className="footer">
      <p>
        {" "}
        <Link to="home" smooth={true} duration={100}>
          Home
        </Link>{" "}
        |{" "}
        <Link to="aboutme" smooth={true} duration={100}>
          About
        </Link>{" "}
        |{" "}
        <Link to="skill" smooth={true} duration={100}>
          Skills
        </Link>{" "}
        |{" "}
        <Link to="about" smooth={true} duration={100}>
          Projects
        </Link>{" "}
        |{" "}
        <Link to="contact" smooth={true} duration={100}>
          Contact
        </Link>
      </p>
      <p>&copy; 2022 Kasala.umasankar</p>
    </div>
  );
}

export default Feater;
