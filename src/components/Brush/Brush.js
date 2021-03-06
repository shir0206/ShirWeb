import React from "react";

import "./brush.css";

import firstImage from "../../images/yellow-pink.png";
import secondImage from "../../images/blue.png";
import thirdImage from "../../images/gold.png";

export const Brush = (props) => {
  let brushClassName;

  if (props.openReadMore) {
    brushClassName = "brush-read-more";
  } else {
    if (props.tab === 0) {
      brushClassName = "brush-intro";
    } else if (props.tab === 1) {
      brushClassName = "brush-project";
    } else if (props.tab === 2) {
      brushClassName = "brush-about";
    }
  }
  return (
    <div className="brush-container">
      <img id="first" className={brushClassName} src={firstImage} alt="first" />
      <img
        id="second"
        className={brushClassName}
        src={secondImage}
        alt="second"
      />
      <img id="third" className={brushClassName} src={thirdImage} alt="third" />
    </div>
  );
};
