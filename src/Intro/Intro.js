import React, { useState, useEffect } from "react";

import "./intro.css";

import { Flower } from "../Flower/Flower";
import { Title } from "../Title/Title";

export const Intro = (props) => {
  const [play, setPlay] = useState(true);
  console.log(props.play);
  // onAnimationEnd={setPlay(false)}

  // useEffect(() => {
  //   localStorage.setItem("play", play);
  //   setPlay(false);
  // }, []);

  return (
    <div className="intro-cont">
      <Flower />
      {/* <Title play={play} /> */}
    </div>
  );
};
