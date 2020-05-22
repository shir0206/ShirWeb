import React, { useState, useEffect } from "react";

import "./App.css";

import { Intro } from "./Intro/Intro";
import { Project } from "./Project/Project";
import { About } from "./About/About";
import { Profile } from "./Profile/Profile";
import { Portfolio } from "./Portfolio/Portfolio";
import { Cloud } from "./Cloud/Cloud";
import { Brush } from "./Brush/Brush";

function App() {
  const { height, width } = useWindowDimensions();
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
      {/* <Cloud tab={tab} openReadMore={openReadMore}></Cloud> */}
      <Brush tab={tab} openReadMore={openReadMore}></Brush>
      <div className="card">
        <div className="content-container">{cardContent}</div>
        {tab !== 0 && (
          <button
            className={
              width <= 500 && openReadMore
                ? "hide-read-more-btn"
                : "read-more-btn"
            }
            onClick={() => {
              setOpenReadMore(!openReadMore);
            }}
          >
            {width > 500
              ? openReadMore
                ? "Back"
                : "Read More"
              : openReadMore
              ? "x"
              : "Read More"}
          </button>
        )}
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
      {openReadMore && tab === 1 ? <Portfolio></Portfolio> : null}
      {openReadMore && tab === 2 ? <Profile></Profile> : null}
    </div>
  );
}

export default App;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
