import React from "react";
import { ArrowPrevSVG } from "./ArrowPrevSVG";

import "./arrow.css";

export const ArrowPrev = (props) => {
  function updatePrev(event) {
    event.preventDefault();
    let prev = (props.currSlide - 1 + props.length) % props.length;
    props.handleSlideIndexClick(prev);
  }

  return (
    <div className="left-arrow-container" onClick={updatePrev}>
      <div className="round">
        <ArrowPrevSVG
          viewBoxPrev={props.width <= 500 ? "15 5 30 30" : "15 5 40 40"}
        ></ArrowPrevSVG>
      </div>
    </div>
  );
};
