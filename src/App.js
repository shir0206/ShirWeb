import React, { useState } from "react";

import "./App.css";
import "./cloud.css";

import { Intro } from "./Intro/Intro";
import { Project } from "./Project/Project";
import { About } from "./About/About";

function App() {
  const [tab, setTab] = useState(0);
  const [openReadMore, setOpenReadMore] = useState(false);

  let cardContent;
  if (tab === 0) {
    cardContent = <Intro />;
  } else if (tab === 1) {
    cardContent = <Project />;
  } else if (tab === 2) {
    cardContent = <About />;
  }

  return (
    <div className="app">
      <div className="card">
        <div className="content-container">
          <Cloud tab={tab} openReadMore={openReadMore}></Cloud>
          {cardContent}
          {tab !== 0 && (
            <button
              className="read-more-btn"
              onClick={() => {
                setOpenReadMore(!openReadMore);
              }}
            >
              Read More
            </button>
          )}
        </div>
        <div className="button-container">
          <div
            className={tab === 0 ? "intro-container tab-on" : "intro-container"}
            onClick={() => {
              setTab(0);
            }}
          >
            <p>Intro</p>
          </div>
          <div
            className={
              tab === 1 ? "project-container tab-on" : "project-container"
            }
            onClick={() => {
              setTab(1);
            }}
          >
            <p>Projects</p>
          </div>
          <div
            className={tab === 2 ? "about-container tab-on" : "about-container"}
            onClick={() => {
              setTab(2);
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

function Cloud(props) {
  let shape;

  if (props.openReadMore) {
    shape = (
      <div className="change-shape cloudD" style={{ top: 10, left: 10 }} />
    );
  } else {
    if (props.tab === 0) {
      shape = (
        <div className="change-shape cloudA" style={{ top: 20, left: 20 }} />
      );
    } else if (props.tab === 1) {
      shape = (
        <div className="change-shape cloudB" style={{ top: 30, left: 30 }} />
      );
    } else if (props.tab === 2) {
      shape = (
        <div className="change-shape cloudC" style={{ top: 40, left: 40 }} />
      );
    }
  }
  return <div className="cloud-container">{shape} </div>;
}
