import React, { useCallback } from "react";
import { SlideIndex } from "./SlideIndex";
import "./slideList.css";

export const SlideList = (props) => {
  const recieveSlideIndexFromSlideList = useCallback((childProps) => {
    props.handleSlideIndexClick(childProps);
  }, []);

  return (
    <div className="slide-list-cont">
      <ul>
        {createSlideList(
          props.currSlide,
          props.slides,
          recieveSlideIndexFromSlideList
        )}
      </ul>
    </div>
  );
};

function createSlideList(currSlide, slides, recieveSlideIndexFromSlideList) {
  let slideList = slides.map((slideObj, slideIndex) => {
    return (
      <SlideIndex
        key={slideIndex}
        slideIndex={slideIndex}
        currSlide={currSlide}
        handleSlideIndexClick={recieveSlideIndexFromSlideList}
      />
    );
  });
  return slideList;
}
