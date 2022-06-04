import React from "react";
import "./projects.css";
function Projects() {
  return (
    <div className="projects" id="about">
      <h2 className="project-title">Projects</h2>
      <div className="project-container">
        <div className="projects-left">
          <div className="project-left-top"></div>
          <div className="project-left-bottom"></div>
        </div>
        <div className="projects-right">
          <div className="project-right-top"></div>
          <div className="project-right-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
