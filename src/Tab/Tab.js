import React, { useState } from "react";

import "./tab.css";

export const Tab = ({tab, setTab, }) => {
  return (
    <div className="tab-container">
      <div
        className={tab === 0 ? "intro-container tab-on" : "intro-container"}
        onClick={() => {
          setTab(0);
        }}
      >
        <p>Intro</p>
      </div>
      <div
        className={tab === 1 ? "project-container tab-on" : "project-container"}
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
  );
};