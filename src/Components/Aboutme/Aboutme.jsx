import React from "react";
import "./Aboutme.css";
import profile from "./profile.jpg";
function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <h2 className="project-title">
        {"<"}About{"/>"}
      </h2>
      <div className="about-container">
        <div className="about-top">
          <picture>
            <img className="profile" src={profile} alt="profile" />
          </picture>
        </div>
        <div className="about-bottom">
          <p>
            Hello! my name is kasala umasankar, iam a software engineer
            specializing in building web applications on frontend. i enjoy
            creating things that live on the internet. my interest in web
            development started back in 2019 where i started work with an
            organization taught me a lot on real world facing application got
            drive me to explore more frontend facing technologies like react,
            HTML, CSS and Javascript.{" "}
          </p>
          <br />
          <p>
            i also recently worked on mini projects that covers a lot you need
            to build a web app. my main focus these days is building web and
            mobile apps which takes to reachability for all the end users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;