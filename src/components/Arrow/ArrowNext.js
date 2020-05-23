import React from "react";

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
        <p className="arrow">&gt;</p>
        <p className="arrow second-arrow">&gt;</p>
      </div>
    </div>
  );
};
