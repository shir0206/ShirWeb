import React, { useState, useEffect, useCallback } from "react";

import "./App.css";

import { Intro } from "../Intro/Intro";
import { Project } from "../Project/Project";
import { About } from "../About/About";
import { Profile } from "../Profile/Profile";
import { Portfolio } from "../Portfolio/Portfolio";
import { Cloud } from "../Cloud/Cloud";
import { Brush } from "../Brush/Brush";
import { Tab } from "../Tab/Tab";

export default function App() {
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

  const recieveTab = useCallback((childProps) => {
    setTab(childProps);
  }, []);

  return (
    <div className="app">
      <Brush tab={tab} openReadMore={openReadMore}></Brush>
      <div className="card">
        <div className="content-container">{cardContent}</div>
        {tab !== 0 && (
          <button
            className={
              width <= 500 && openReadMore
                ? "exit-read-more-btn"
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
        <Tab handleTabClick={recieveTab}></Tab>
      </div>
      {openReadMore && tab === 1 ? <Portfolio></Portfolio> : null}
      {openReadMore && tab === 2 ? <Profile></Profile> : null}
    </div>
  );
}

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
