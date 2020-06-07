import React from "react";

import "./arrow.css";

export const ArrowPrevSVG = (props) => {
  return (
    <svg className="arrow-svg" viewBox={props.viewBoxPrev}>
      <path className="arrow" d="M15.9 25.9 26 36 M26 16 16.5 26" />
      <path
        className="arrow second-arrow"
        d="M25.9 25.9 36 36 M36 16 26.5 26"
      />
    </svg>
  );
};
