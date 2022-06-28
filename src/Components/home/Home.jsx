import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import Bounce from "react-reveal/Bounce";

function Home() {
  return (
    <div className="bg-img" id="home">
      <Bounce top>
        <div className="text">
          <h1 className="hello">Hello,</h1>

          <h1 className="animate-charcter"> i'm kasala umasankar.</h1>
          <h2 className="home-text">A Front End Developer.</h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("Welcome ,")

                .pauseFor(1000)
                .deleteAll()
                .typeString(" I build things for the web.")
                .start();
            }}
          />
          {/* <p> I build things for the web.</p> */}
          {/* <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
      </Bounce>
    </div>
  );
}

export default Home;
