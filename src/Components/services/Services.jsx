import React from "react";
import "./services.css";
import jslogo from "./javascript-logo.png";
import html from "./html.png";
import css from "./css.png";
import reactlogo from "./logo-react-icon.png";
import typelogo from "./typescript.png";
import material from "./Material-UI.png";
import Slide from "react-reveal/Slide";

function Services() {
  return (
    <div className="skills" id="skill">
      <Slide left>
        <h2 className="project-title">
          {"<"}Skills{"/>"}
        </h2>
      </Slide>
      <Slide right>
        <div className="skills-box">
          <div className="skills-container">
            <div className="skills-left">
              <div className="skills-javascript">
                <img className="skills-img" src={jslogo} alt="javascript" />
                <div className="skills-bar-wrap">
                  <h6 className="skills-h6">JavaScript</h6>
                  <div className="skills-bar-container">
                    <div className="skills-bar-javascript"></div>
                  </div>
                </div>
              </div>
              <div className="skills-html">
                <img className="skills-img" src={html} alt="html" />
                <div className="skills-bar-wrap">
                  <h6 className="skills-h6">HTML5</h6>
                  <div className="skills-bar-container">
                    <div className="skills-bar-html"></div>
                  </div>
                </div>
              </div>
              <div className="skills-css">
                <img className="skills-img" src={css} alt="css" />
                <div className="skills-bar-wrap">
                  <h6 className="skills-h6">CSS3</h6>
                  <div className="skills-bar-container">
                    <div className="skills-bar-css"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-right">
              <div className="skills-typescript">
                <img className="skills-img" src={typelogo} alt="typescript" />
                <div className="skills-bar-wrap-1">
                  <h6 className="skills-h6">Typescript</h6>
                  <div className="skills-bar-container-1">
                    <div className="skills-bar-typescript"></div>
                  </div>
                </div>
              </div>
              <div className="skills-react">
                <img className="skills-img" src={reactlogo} alt="react" />
                <div className="skills-bar-wrap-1">
                  <h6 className="skills-h6">React JS</h6>
                  <div className="skills-bar-container-1">
                    <div className="skills-bar-react"></div>
                  </div>
                </div>
              </div>
              <div className="skills-materialui">
                <img className="skills-img" src={material} alt="materialui" />
                <div className="skills-bar-wrap-1">
                  <h6 className="skills-h6">Material UI</h6>
                  <div className="skills-bar-container-1">
                    <div className="skills-bar-materialui"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Services;
