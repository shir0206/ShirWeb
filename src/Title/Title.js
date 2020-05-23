import React, { useEffect } from "react";

import "./title.css";

import anime from "animejs";
import { TitleSVG } from "./TitleSVG";

export const Title = (props) => {
  function animation() {
    anime({
      targets: ".title-cont svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 500,
      delay: function (el, i) {
        return i * 100 + 1500;
      },
      loop: false,
      direction: "alternate",
      autoplay: true,
    });
  }

  useEffect(() => {
    if(!props.animationPlayed){
      animation();
      props.setAnimationPlayed(true);
    }
  });

  return (
    <div className="title-cont">
      <TitleSVG />
    </div>
  );
};
