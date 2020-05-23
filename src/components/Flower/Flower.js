import React, { useEffect, useState } from "react";

import "./flower.css";

import anime from "animejs";
import { FlowerSVG } from "./FlowerSVG";

export const Flower = (props) => {
  function animation() {
    console.log("run animation");
    anime({
      targets: ".flower-cont svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 200,
      delay: function (el, i) {
        return i * 50 + 1500;
      },
      loop: false,
      direction: "alternate",
      autoplay: true,
      fill: function (el, i) {
        return colors[99 - i];
      },
    });
  }

  useEffect(() => {
    if (!props.animationPlayed) {
      animation();
      props.setAnimationPlayed(true);
    }
  });

  return (
    <div
      className={
        props.animationPlayed
          ? "flower-cont with-fill"
          : "flower-cont without-fill"
      }
    >
      <FlowerSVG />
    </div>
  );
};

const colors = [
  "#cccccc",
  "#6699cc",
  "#669999",
  "#ccccff",
  "#9999cc",
  "#666699",
  "#179e17",
  "#1c94da",
  "#24dfdf",
  "#2ac52a",
  "#43b128",
  "#6666cc",
  "#333366",
  "#336666",
  "#9966cc",
  "#cc9999",
  "#ffcccc",
  "#ffccff",
  "#cc99cc",
  "#996699",
  "#330066",
  "#333399",
  "#339966",
  "#339933",
  "#333333",
  "#663366",
  "#663399",
  "#336633",
  "#003333",
  "#330033",
  "#000033",
  "#000000",
  "#663333",
  "#996666",
  "#330000",
  "#996633",
  "#cc6666",
  "#cc9966",
  "#993333",
  "#993366",
  "#66cc99",
  "#66cc66",
  "#666633",
  "#ff9966",
  "#999966",
  "#669933",
  "#cccc99",
  "#660066",
  "#cc6699",
  "#660000",
  "#ffffcc",
  "#ffcc99",
  "#990066",
  "#cc3333",
  "#cc0066",
  "#ff9933",
  "#ff6699",
  "#cccc66",
  "#ffff33",
  "#663300",
  "#cc6633",
  "#cc6600",
  "#ff6600",
  "#ffff66",
  "#cc3300",
  "#990033",
  "#ff6633",
  "#ff9999",
  "#ffff99",
  "#cccc33",
  "#996600",
  "#cc9933",
  "#999933",
  "#ff3399",
  "#660033",
  "#ffff00",
  "#ffcc33",
  "#990000",
  "#cc66cc",
  "#cc3399",
  "#cccc00",
  "#cc9900",
  "#ff6666",
  "#ff3333",
  "#cc3366",
  "#cc0033",
  "#ff3366",
  "#ff99ff",
  "#ffcc66",
  "#cc99ff",
  "#cc0099",
  "#ff0066",
  "#993300",
  "#cc0000",
  "#ffcc00",
  "#993399",
  "#ff3300",
  "#ff66cc",
  "#ff99cc",
  "#ff0000",
];
