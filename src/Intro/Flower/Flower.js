import "./flower.css";
import React, { useEffect } from "react";
import { FlowerSVG } from "./FlowerSVG";

import anime from "animejs";

export const Flower = () => {
  function animation() {
    anime({
      targets: ".flower-cont svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 80,
      delay: function (el, i) {
        return i * 50;
      },
      loop: false,
      direction: "alternate",
      autoplay: true,
    });

    let fillColors = anime({
      targets: ".flower-cont svg path",
      easing: "easeInOutSine",
      duration: 100,
      delay: function (el, i) {
        return i * 100;
      },
      fill: function (el, i) {
        return colors[99 - i];
      },
    }).finished;
  }

  useEffect(() => {
    animation();
  });

  return (
    <div className="flower-cont">
      <FlowerSVG />
    </div>
  );
};

const colors = [
  "#cccccc57",
  "#6699cc71",
  "#669999",
  "#ccccff",
  "#9999cc91",
  "#6666995d",
  "#179e1763",
  "#1c94da9a",
  "#24dfdf81",
  "#2ac52a50",
  "#43b128a4",
  "#6666cc",
  "#33336698",
  "#336666",
  "#9966cc",
  "#cc99997e",
  "#ffcccc",
  "#ffccff",
  "#cc99cc",
  "#9966999d",
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
