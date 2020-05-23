import React, { useState, useEffect } from "react";

import "./intro.css";

import { Flower } from "../Flower/Flower";
import { Title } from "../Title/Title";

export const Intro = (props) => {
  return (
    <div className="intro-cont">
      {/* <button
        onClick={() => {
          props.setAnimationPlayed(!(props.setAnimationPlayed));
        }}
      >
        {props.setAnimationPlayed ? "Strop" : "Start"}
      </button> */}
      <Flower
        setAnimationPlayed={props.setAnimationPlayed}
        animationPlayed={props.animationPlayed}
      />
      <Title
        setAnimationPlayed={props.setAnimationPlayed}
        animationPlayed={props.animationPlayed}
      />
    </div>
  );
};
