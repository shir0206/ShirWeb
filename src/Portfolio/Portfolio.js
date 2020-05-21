import React, { useState, useCallback } from "react";

import "./portfolio.css";
import "./arrow.css";
import "./carousel.css";
import { Slide } from "./Slide";
import { SlideIndex } from "./SlideIndex";
import { ArrowNext } from "./ArrowNext";
import { ArrowPrev } from "./ArrowPrev";

export const Portfolio = (props) => {
  const [currSlide, setCurrSlide] = useState(0);
  const [moveSlide, setMoveSlide] = useState("slide-none");

  const recieveSlideIndexFromArrowNext = useCallback((childProps) => {
    animSlideRight();

    setCurrSlide(childProps);
  }, []);

  const recieveSlideIndexFromArrowPrev = useCallback((childProps) => {
    animSlideLeft();

    setCurrSlide(childProps);
  }, []);

  const recieveSlideIndexFromSlideList = useCallback((childProps) => {
    if (currSlide < childProps) animSlideRight();
    else animSlideLeft();

    setCurrSlide(childProps);
  }, []);

  function animSlideLeft() {
    setMoveSlide("slide-prev");
    console.log("left");
  }
  function animSlideRight() {
    setMoveSlide("slide-next");
    console.log("right");
  }

  return (
    <div className="portfolio-cont">
      <div
        className={moveSlide}
        onAnimationEnd={() => setMoveSlide("slide-none")}
      >
        <Slide
          slide={slides[(currSlide - 1 + slides.length) % slides.length]}
          position="prev"
          // moveSlide={moveSlide}
        ></Slide>
        <Slide
          slide={slides[currSlide]}
          position="curr"
          // moveSlide={moveSlide}
        ></Slide>
        <Slide
          slide={slides[(currSlide + 1) % slides.length]}
          position="next"
          // moveSlide={moveSlide}
        ></Slide>
      </div>
      <div className="portfolio-arrow-cont">
        <ArrowNext
          currSlide={currSlide}
          length={slides.length}
          handleSlideIndexClick={recieveSlideIndexFromArrowNext}
        ></ArrowNext>
        <ArrowPrev
          currSlide={currSlide}
          length={slides.length}
          handleSlideIndexClick={recieveSlideIndexFromArrowPrev}
        ></ArrowPrev>
      </div>
      <div className="portfolio-carousel-cont ">
        <ul>{createSlideList(currSlide, recieveSlideIndexFromSlideList)}</ul>
      </div>
    </div>
  );
};

function createSlideList(currSlide, recieveSlideIndexFromSlideList) {
  let carouselList = slides.map((slideObj, slideIndex) => {
    return (
      <SlideIndex
        key={slideIndex}
        slideIndex={slideIndex}
        currSlide={currSlide}
        handleSlideIndexClick={recieveSlideIndexFromSlideList}
      />
    );
  });
  return carouselList;
}

const slides = [
  {
    name: "Art Gallery",
    description: [
      "Developed a website in React that displays my paintings & drawings.",
      "The data is retrieved from Firebase.",
      "Search images by keywords.",
    ],
    gitLink: "https://github.com/shir0206/ArtGallery",
    webLink: "https://shir0206.github.io/ArtGallery/",
    playStoreLink: "",
    tags: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Firebase",
      "Search",
      "ImageZoom",
      "ScrollLock",
    ],
    image: require("../images/art-gallery.png"),
  },
  {
    name: "TropiX",
    description: [
      "Developed an Android game inspired by Tic-Tac-Toe.",
      "The development was planned and executed by using the MVC model.",
      "Unlockable characters.",
    ],
    gitLink: "https://github.com/shir0206/TropiX-App",
    webLink: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.shirzabolotnyklein.tropix&hl=en",
    tags: [
      "Java",
      "Android",
      "MVC",
      "MultiLanguage",
      "RecyclerView",
      "SharedPreference",
      "UX/UI",
      "TicTacToe",
      "Fun",
    ],
    image: require("../images/tropix.jpeg"),
  },
  {
    name: "NyquistOptics",
    description: [
      "Developed a native Android app for evaluating camera performances",
      "Collected, defined and translated user requirements into implementation.",
      "Approximately 50 active users worldwide (2020).",
    ],
    gitLink: "https://github.com/shir0206/NyquistOptics",
    webLink: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.shirzabolotnyklein.nyquistoptics&hl=en",
    tags: ["Java", "Android", "PerformanceCalculator", "SharedPreferance"],
    image: require("../images/nyquist-optics.png"),
  },
];

//https://blog.logrocket.com/building-carousel-component-react-hooks/
