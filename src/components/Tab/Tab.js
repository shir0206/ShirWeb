import React from "react";

import "./tab.css";

export const Tab = (props) => {
  return (
    <div className="tab-container">
      <div
        className={
          props.tab === 0 ? "intro-container tab-on" : "intro-container"
        }
        onClick={() => {
          props.setTab(0);
        }}
      >
        <p>Intro</p>
      </div>
      <div
        className={
          props.tab === 1 ? "project-container tab-on" : "project-container"
        }
        onClick={() => {
          props.setTab(1);
        }}
      >
        <p>Projects</p>
      </div>
      <div
        className={
          props.tab === 2 ? "about-container tab-on" : "about-container"
        }
        onClick={() => {
          props.setTab(2);
        }}
      >
        <p>About</p>
      </div>
    </div>
  );
};
