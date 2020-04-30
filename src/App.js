import React, { useState } from "react";
import "./App.css";
import { Intro } from "./Intro/Intro";
import { Project } from "./Project/Project";
import Demo from "./Demo";

function App() {
  const [buttonClicked, setButtonClicked] = useState(0);
  // <Intro/>
  //      <Demo/>

  let cardContent;
  if (buttonClicked === 0) {
    cardContent = <Intro />;
  } else if (buttonClicked === 1) {
    cardContent = <Project />;;
  } else if (buttonClicked === 2) {
    cardContent = <p>hi im 3</p>;
  }

  return (
    <div className="app">
      <div className="card">
        <div className="content-container">{cardContent}</div>
        <div className="button-container">
          <div
            className={
              buttonClicked === 0 ? "intro-container tab-on" : "intro-container"
            }
            onClick={() => {
              setButtonClicked(0);
            }}
          >
            <p>Intro</p>
          </div>
          <div
            className={
              buttonClicked === 1
                ? "project-container tab-on"
                : "project-container"
            }
            onClick={() => {
              setButtonClicked(1);
            }}
          >
            <p>Projects</p>
          </div>
          <div
            className={
              buttonClicked === 2 ? "about-container tab-on" : "about-container"
            }
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
