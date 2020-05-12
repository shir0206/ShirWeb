import React from "react";
import "./brush.css";
import { BrushSVG } from "./BrushSVG";
import anime from "animejs";

export const Brush = (props) => {
  if (props.openReadMore) {
    animationReadMore();
  } else {
    if (props.tab === 0) {
      animationIntro();
    } else if (props.tab === 1) {
      animationProject();
    } else if (props.tab === 2) {
      animationAbout();
    }
  }

  function animationIntro() {
    anime({
      targets: "#brush-svg path",
      easing: "easeOutQuad",
      duration: 0.5,
      direction: "alternate",
      loop: false,
      //   delay: function(el, i) {
      //     return i ;
      //   },
      scale: 0,
      translateX: 0,
      rotate: 0,
      opacity: 0,
    });
  }
  function animationProject() {
    anime({
      targets: "#brush-svg path",
      easing: "easeOutQuad",
      duration: 0.5,
      direction: "alternate",
      loop: false,
      delay: function (el, i) {
        return i;
      },
      scale: 1,
      translateX: 100,
      rotate: -20,
      opacity: 1,
    });
  }
  function animationAbout() {
    anime({
      targets: "#brush-svg path",
      easing: "easeOutQuad",
      duration: 0.5,
      direction: "alternate",
      loop: false,
      delay: function (el, i) {
        return i;
      },
      scale: 1,
      translateX: 0,
      rotate: 0,
      opacity: 1,
    });
  }

  function animationReadMore() {
    anime({
      targets: "#brush-svg path",
      easing: "easeOutQuad",
      duration: 0.5,
      direction: "alternate",
      loop: false,
      delay: function (el, i) {
        return i;
      },
      scale: 2,
      translateX: 0,
      rotate: 0,
      opacity: 1,
    });
  }
  return (
    <div className="brush-cont">
      <div className="brush-svg-cont">
        <BrushSVG />
      </div>
    </div>
  );
};
