import React from "react";
import "./brush.css";
import { BrushSVG } from "./BrushSVG";
import anime from "animejs";

export const Brush = (props) => {
  if (props.openReadMore) {
    // animationReadMore();
  } else {
    if (props.tab === 0) {
      //  animationIntro();
    } else if (props.tab === 1) {
      animationProject();
    } else if (props.tab === 2) {
      //  animationAbout();
    }
  }

  function animationProject() {
    anime({
      targets: "#hi",
      easing: "easeOutQuad",
      duration: 5000,
      delay: 100,
      // endDelay: 1000,
      direction: "alternate",
      loop: false,
      scale: 1.5,
      rotate: 20,
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
