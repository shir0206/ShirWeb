import React from "react";

export const SlideIndex = (props) => {
  function updateSlide(event) {
    event.preventDefault();
    props.handleSlideIndexClick(props.slideIndex);
  }

  return (
    <li
      className={
        props.slideIndex === props.currSlide
          ? "portfolio-circle-icon portfolio-fill-icon"
          : "portfolio-circle-icon"
      }
      onClick={updateSlide}
    ></li>
  );
};
