import React, { useState, useEffect } from "react";

import "./intro.css";

import { Flower } from "../Flower/Flower";
import { Title } from "../Title/Title";

export const Intro = (props) => {
  console.log('render intro')
  return (
    <div className="intro-cont">
      <Flower setAnimationPlayed={props.setAnimationPlayed} animationPlayed={props.animationPlayed} />
      <Title setAnimationPlayed={props.setAnimationPlayed} animationPlayed={props.animationPlayed}  />
    </div>
  );
};
