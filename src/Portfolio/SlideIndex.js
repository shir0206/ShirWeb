import React, { useState, useCallback } from "react";

export const SlideIndex = (props) => {
  function updateCarousel(event) {
    event.preventDefault();
    props.handleSlideIndexClick(props.slideIndex);
  }

  return (
    <li
      className={
        props.slideIndex == props.currSlide
          ? "portfolio-circle-icon portfolio-fill-icon"
          : "portfolio-circle-icon"
      }
      onClick={updateCarousel}
    ></li>
  );
};
