import React from "react";
import "./about.css";
import { AboutSVG } from "./AboutSVG";

export const About = (props) => {
  return (
    <div className="about-cont">
      <div className="about-svg">
        <AboutSVG />
      </div>
    </div>
  );
};
