import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./navbar.css";
function Navbar() {
  // const [name, setName] = useState(null);
  // const handelClass = (data) => {
  //   setName(data);
  // };
  return (
    <div className="navbar">
      <h3 className="logo">.developer</h3>
      <ul className="nav-links">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={100}
            // className={`${name === "home" ? "active" : ""}`}
            // onClick={() => handelClass("home")}
          >
            Home
          </Link>
          {/* <Link to="#home">Home</Link> */}
        </li>
        <li>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            duration={100}
            // className={`${name === "home" ? "active" : ""}`}
            // onClick={() => handelClass("home")}
          >
            About
          </Link>
          {/* <Link to="#home">Home</Link> */}
        </li>

        <li>
          <Link
            to="skill"
            spy={true}
            smooth={true}
            duration={100}
            // className={`${name === "skill" ? "active" : ""}`}
            // onClick={() => handelClass("skill")}
          >
            Skills
          </Link>
          {/* <Link to="#services">Skills</Link> */}
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={100}
            // className={`${name === "about" ? "active" : ""}`}
            // onClick={() => handelClass("about")}
          >
            Projects
          </Link>
          {/* <Link to="#about">About</Link> */}
        </li>

        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={100}
            // className={`${name === "contact" ? "active" : ""}`}
            // onClick={() => handelClass("contact")}
          >
            Contact
          </Link>
          {/* <Link to="#contact">Contact</Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
