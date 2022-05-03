import React from "react";
import "./services.css";
import jslogo from "./javascript-logo.png";
import html from "./html.png";
import css from "./css.png";
import reactlogo from "./logo-react-icon.png";
import typelogo from "./typescript.png";
// import bootstrap from "./bootstrap-log.png";
import material from "./Material-UI.png";
function Services() {
  return (
    <div className="skills-box">
      <div className="skills-container">
        <div className="skills-left">
          <img src={jslogo} alt="javascript" />
          <img src={html} alt="html" />
          <img src={css} alt="css" />
        </div>
        <div className="skills-right">
          <img src={typelogo} alt="typescript" />
          <img src={reactlogo} alt="react" />
          <img src={material} alt="materialui" />
        </div>
      </div>
    </div>
  );
}

export default Services;
