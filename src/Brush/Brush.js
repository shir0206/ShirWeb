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
      duration: 500,
      direction: "alternate",
      loop: false,
      delay: function (el, i) {
        return i * 5;
      },
      scale:0,
      translateX: 0,
      rotate: 0,
      opacity:0,
    });
  }
  function animationProject() {
    anime({
      targets: "#brush-svg path",
      easing: "easeOutQuad",
      duration: 500,
      direction: "alternate",
      loop: false,
      delay: function (el, i) {
        return i * 5;
      },
      scale:1.1,
    //   translateX: 100,
      rotate: 20,
      opacity:1,

    });
  }
  function animationAbout() {
    anime({
      targets: "#brush-svg path",
      easing: "easeOutQuad",
      duration: 500,
      direction: "alternate",
      loop: false,
      delay: function (el, i) {
        return i * 5;
      },
      scale:1,
      translateX: 0,
      rotate: 0,
      opacity:1,

    });
  }

  function animationReadMore() {
    anime({
      targets: "#brush-svg path",
      easing: "easeOutQuad",
      duration: 500,
      direction: "alternate",
      loop: false,
      delay: function (el, i) {
        return i * 5;
      },
      scale:2,
      translateX: 0,
      rotate: 0,
      opacity:1,

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

function Cloud(props) {
  let cloudClassName;
  let cloudStyle;

  if (props.openReadMore) {
    cloudClassName = "change-shape cloud-read-more";
    cloudStyle = { top: "50%", left: "50%" };
  } else {
    if (props.tab === 0) {
      cloudClassName = "change-shape cloud-intro";
      cloudStyle = { top: "20%", left: "80%" };
    } else if (props.tab === 1) {
      cloudClassName = "change-shape cloud-project";
      cloudStyle = { top: "-5%", left: "30%" };
    } else if (props.tab === 2) {
      cloudClassName = "change-shape cloud-about";
      cloudStyle = { top: "5%", left: "60%" };
    }
  }
  return (
    <div className="cloud-container">
      <div className={cloudClassName} style={cloudStyle} />
    </div>
  );
}
