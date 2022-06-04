import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
function Home() {
  return (
    <div className="bg-img" id="home">
      <div className="text">
        <h1>Hello,</h1>

        <h1> i'm kasala umasankar.</h1>
        <h2>A Front End Developer.</h2>
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
      </div>
    </div>
  );
}

export default Home;
