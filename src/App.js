import React from "react";
import "./App.css";
import { Intro } from "./Intro/Intro";
import Demo from "./Demo";

function App() {
  // <Intro/>
  //      <Demo/>

  return (
    <div className="app">
      <div className="card">
        
        <div className="content-container"></div>
        <div className="button-container">
          <div className="intro-container">
            <p>Intro</p>
          </div>
          <div className="project-container">
            <p>Projects</p>
          </div>
          <div className="about-container">
            <p>About</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
