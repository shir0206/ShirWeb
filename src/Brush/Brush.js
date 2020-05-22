import React from "react";

import "./brush.css";

export const Brush = (props) => {
  let brushClassName;

  if (props.openReadMore) {
    brushClassName = "change-shape brush-read-more";
  } else {
    if (props.tab === 0) {
      brushClassName = "change-shape brush-intro";
    } else if (props.tab === 1) {
      brushClassName = "change-shape brush-project";
    } else if (props.tab === 2) {
      brushClassName = "change-shape brush-about";
    }
  }
  return (
    <div className="brush-container">
      <img
        id="first"
        className={brushClassName}
        src={require("../images/yellow-pink.png")}
        alt="first"
      />
      <img
        id="second"
        className={brushClassName}
        src={require("../images/blue.png")}
        alt="second"
      />
      <img
        id="third"
        className={brushClassName}
        src={require("../images/gold.png")}
        alt="third"
      />
    </div>
  );
};
