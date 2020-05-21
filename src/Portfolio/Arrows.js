import React from "react";
import "./arrow.css";

export const Arrows = (props) => {
  function updateNext(event) {
    event.preventDefault();
    let next = (props.currSlide + 1) % props.length;
    props.handleSlideIndexClick(next);
  }

  function updatePrev(event) {
    event.preventDefault();
    let prev = (props.currSlide - 1 + props.length) % props.length;
    props.handleSlideIndexClick(prev);
  }

  return (
    <div className="portfolio-arrow-cont">
      <div className="right-arrow-container" onClick={updateNext}>
        <div className="round">
          <p className="arrow">&gt;</p>
          <p className="arrow second-arrow">&gt;</p>
        </div>
      </div>
      <div className="left-arrow-container" onClick={updatePrev}>
        <div className="round">
          <p className="arrow">&lt;</p>
          <p className="arrow second-arrow">&lt;</p>
        </div>
      </div>
    </div>
  );
};
