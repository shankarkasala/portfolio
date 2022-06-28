import React from "react";
import "./Aboutme.css";
import profile from "./profile.jpg";
import Slide from "react-reveal/Slide";

function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <Slide left>
        <h2 className="project-title">
          {"<"}About{"/>"}
        </h2>
      </Slide>
      <Slide right>
        <div className="about-container">
          <div className="about-top">
            <picture>
              <img className="profile" src={profile} alt="profile" />
            </picture>
          </div>
          <div className="about-bottom">
            <p>
              Hello! my name is Kasala Umasankar, Iam a software engineer
              specializing in building web applications on frontend. I enjoy
              creating things that live on the internet. my interest in web
              development started back in 2019 where i started work with an
              organization taught me a lot on real world facing application got
              drive me to explore more frontend facing technologies like React,
              HTML, CSS and Javascript.{" "}
            </p>
            <br />
            <p>
              I also recently worked on mini projects that covers a lot you need
              to build a web app. My main focus these days is building web and
              mobile apps which takes to reachability for all the end users.
            </p>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Aboutme;
