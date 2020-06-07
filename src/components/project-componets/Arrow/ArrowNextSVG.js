import React from "react";

import "./arrow.css";

export const ArrowNextSVG = (props) => {
  return (
    <svg className="arrow-svg" viewBox={props.viewBoxNext}>
      <path className="arrow" d="M26 16 35.9 25.9 M36.5 25.8 26 36" />
      <path
        className="arrow second-arrow"
        d="M16 16 25.9 25.9 M26.5 25.8 16 36"
      />
    </svg>
  );
};
