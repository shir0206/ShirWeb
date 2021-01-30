import React, { useState, useCallback, useRef } from "react";
import { useSwipeable } from "react-swipeable";

import "./portfolio.css";

import { Slide } from "../Slide/Slide";
import { SlideList } from "../SlideList/SlideList";
import { ArrowNext } from "../Arrow/ArrowNext";
import { ArrowPrev } from "../Arrow/ArrowPrev";

import { slides } from "./slides.js";

export const Portfolio = (props) => {
  const [currSlide, setCurrSlide] = useState(0); // The current slide
  const [moveSlide, setMoveSlide] = useState("slide-none"); // The animation movement

  const stateRef = useRef();
  stateRef.current = currSlide;

  // When click on the arrow button "Next" (Callback recieved from ArrowNext),
  // set "Next" slide as current & set animation movement as Next
  const recieveSlideIndexFromArrowNext = useCallback((childProps) => {
    setMoveSlide("slide-next");
    setCurrSlide(childProps);
  }, []);

  // When click on the arrow button "Prev" (Callback recieved from ArrowPrev),
  // set "Prev" slide as current & set animation movement as Prev
  const recieveSlideIndexFromArrowPrev = useCallback((childProps) => {
    setMoveSlide("slide-prev");
    setCurrSlide(childProps);
  }, []);

  // When click on the a certain slide button in the bottom (Callback recieved from  SlideList),
  // check if the clicked slide is next of prev relative to the current.
  // set "Clicked" slide as current & set animation movement as Prev/Next
  const recieveSlideIndexFromSlideList = useCallback((childProps) => {
    if (stateRef.current < childProps) {
      setMoveSlide("slide-next");
      setCurrSlide(childProps);
    } else if (stateRef.current > childProps) {
      setMoveSlide("slide-prev");
      setCurrSlide(childProps);
    }
  }, []);

  // When swipe right/left on mobile, update current
  // set swiped slide as current & set animation movement
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setMoveSlide("slide-next");
      setCurrSlide((currSlide + 1) % slides.length);
    },
    onSwipedRight: () => {
      setMoveSlide("slide-prev");
      setCurrSlide((currSlide - 1 + slides.length) % slides.length);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="portfolio-cont" {...handlers}>
      <div
        className={moveSlide}
        onAnimationEnd={() => setMoveSlide("slide-none")}
      >
        <Slide
          slide={slides[(currSlide - 1 + slides.length) % slides.length]}
          position="prev"
        ></Slide>
        <Slide slide={slides[currSlide]} position="curr"></Slide>
        <Slide
          slide={slides[(currSlide + 1) % slides.length]}
          position="next"
        ></Slide>
      </div>
      <div className="portfolio-arrow-cont">
        <ArrowNext
          currSlide={currSlide}
          length={slides.length}
          handleSlideIndexClick={recieveSlideIndexFromArrowNext}
          width={props.width}
        ></ArrowNext>
        <ArrowPrev
          currSlide={currSlide}
          length={slides.length}
          handleSlideIndexClick={recieveSlideIndexFromArrowPrev}
          width={props.width}
        ></ArrowPrev>
      </div>
      <SlideList
        currSlide={currSlide}
        slides={slides}
        handleSlideIndexClick={recieveSlideIndexFromSlideList}
      ></SlideList>
    </div>
  );
};
