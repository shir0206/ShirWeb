import React, { useState, useEffect } from "react";

import "./intro.css";

import { Flower } from "../Flower/Flower";
import { Title } from "../Title/Title";

export const Intro = (props) => {
  return (
    <div className="intro-cont">
      {props.animationPlayed && (
        <button
          onClick={() => {
            props.setAnimationPlayed(false);
          }}
        >
          RESTART
        </button>
      )}

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
