import React from "react";
import shopping from "./shopping-app.jpg";
import todo from "./todo-list.JPG";
import chat from "./chat-app-register.jpg";
import portfolio from "./portfoli.jpg";
import "./projects.css";
import Slide from "react-reveal/Slide";

function Projects() {
  return (
    <div className="projects" id="about">
      <Slide left>
        <h2 className="project-title">
          {"<"}Projects{"/>"}
        </h2>
      </Slide>
      <Slide right>
        <div className="project-container">
          <div className="projects-left">
            <div className="card">
              <img src={shopping} className="card__img" alt="shopping" />
              <div className="card__data">
                <h2 className="card__title">shopping App</h2>
                <p className="card__description">
                  it is a simple shopping application build on top of
                  technologies like React, HTML, CSS and JavaScript.{" "}
                </p>
              </div>
            </div>
            <div className="card">
              <img src={portfolio} className="card__img" alt="portfolio" />
              <div className="card__data">
                <h2 className="card__title">Poetfolio</h2>
                <p className="card__description">
                  it is a demo portfolio buid on simple HTML, CSS and JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="projects-right">
            <div className="card">
              <img src={todo} className="card__img" alt="todo" />
              <div className="card__data">
                <h2 className="card__title">Todo List</h2>
                <p className="card__description">
                  it is a todolist app developed on HTML, CSS and JavaScript
                </p>
              </div>
            </div>
            <div className="card">
              <img src={chat} className="card__img" alt="chat" />
              <div className="card__data">
                <h2 className="card__title">Chat App</h2>
                <p className="card__description">
                  it is a chat application register and login which developed on
                  React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Projects;
