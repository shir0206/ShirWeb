import React, { useState, useEffect, useCallback } from "react";

import "./App.css";

import { Card } from "./components/Card/Card";
import { Profile } from "./components/about-componets/Profile/Profile";
import { Portfolio } from "./components/project-componets/Portfolio/Portfolio";
import { Brush } from "./components/Brush/Brush";

export default function App() {
  const { height, width } = useWindowDimensions();
  const [tab, setTab] = useState(0);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [openReadMore, setOpenReadMore] = useState(false);

  let vh = window.innerHeight * 0.01;
  vh = height * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <div className="app">
      <Brush tab={tab} openReadMore={openReadMore}></Brush>
      <Card
        tab={tab}
        setTab={setTab}
        animationPlayed={animationPlayed}
        setAnimationPlayed={setAnimationPlayed}
        width={width}
        openReadMore={openReadMore}
        setOpenReadMore={setOpenReadMore}
      ></Card>
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
