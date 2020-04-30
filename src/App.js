import React, { useState } from "react";
import "./App.css";
import { Intro } from "./Intro/Intro";
import Demo from "./Demo";

function App() {
  const [buttonClicked, setButtonClicked] = useState(0);
  // <Intro/>
  //      <Demo/>

  let cardContent;
  if (buttonClicked === 0) {
    cardContent = <Intro />;
  } else if (buttonClicked === 1) {
    cardContent = <p>hi im 2</p>;
  } else if (buttonClicked === 2) {
    cardContent = <p>hi im 3</p>;
  }

  return (
    <div className="app">
      <div className="card">
        <div className="content-container">{cardContent}</div>
        <div className="button-container">
          <div
            className="intro-container"
            onClick={() => {
              setButtonClicked(0);
            }}
          >
            <p>Intro</p>
          </div>
          <div
            className="project-container"
            onClick={() => {
              setButtonClicked(1);
            }}
          >
            <p>Projects</p>
          </div>
          <div
            className="about-container"
            onClick={() => {
              setButtonClicked(2);
            }}
          >
            <p>About</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
