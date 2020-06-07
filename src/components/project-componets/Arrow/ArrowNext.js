import React from "react";

import { ArrowNextSVG } from "./ArrowNextSVG";

import "./arrow.css";

export const ArrowNext = (props) => {
  function updateNext(event) {
    event.preventDefault();
    let next = (props.currSlide + 1) % props.length;
    props.handleSlideIndexClick(next);
  }

  return (
    <div className="right-arrow-container" onClick={updateNext}>
      <div className="round">
        <ArrowNextSVG
          viewBoxNext={props.width <= 500 ? "10 5 30 30" : "10 5 40 40"}
        ></ArrowNextSVG>
      </div>
    </div>
  );
};
