import React from "react";
import "./intro.css";

import { Flower } from "./Flower/Flower";
import { Title } from "./Title/Title";

export const Intro = props => {
  return (
    <div className="intro-cont">
      <Flower />
      <Title />
    </div>
  );
};
