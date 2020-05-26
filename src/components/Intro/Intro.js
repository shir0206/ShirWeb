import React, { useState, useEffect } from "react";

import "./intro.css";

import { Flower } from "../Flower/Flower";
import { Title } from "../Title/Title";

export const Intro = (props) => {
  const [displayRestart, setDisplayRestart] = useState(false);

  console.log(props.animationPlayed);
  return (
    <div className="intro-cont">
      {props.animationPlayed && (
        <button
        className="restart-anim-cont"
          onClick={() => {
            props.setAnimationPlayed(false);
            setDisplayRestart(!displayRestart);
            
          }}
        >
          <i className="fas fa-redo restart-anim-icon"></i>
        </button>
      )}

      <Flower
        setAnimationPlayed={props.setAnimationPlayed}
        animationPlayed={props.animationPlayed}
        displayRestart={displayRestart}
      />
      <Title
        setAnimationPlayed={props.setAnimationPlayed}
        animationPlayed={props.animationPlayed}
      />
    </div>
  );
};
