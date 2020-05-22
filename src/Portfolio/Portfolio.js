import React, { useState, useCallback, useRef } from "react";

import "./portfolio.css";

import { Slide } from "../Slide/Slide";
import { SlideList } from "../SlideList/SlideList";
import { ArrowNext } from "../Arrow/ArrowNext";
import { ArrowPrev } from "../Arrow/ArrowPrev";

export const Portfolio = (props) => {
  const [currSlide, setCurrSlide] = useState(0);
  const [moveSlide, setMoveSlide] = useState("slide-none");

  const stateRef = useRef();
  stateRef.current = currSlide;

  const recieveSlideIndexFromArrowNext = useCallback((childProps) => {
    setMoveSlide("slide-next");
    setCurrSlide(childProps);
  }, []);

  const recieveSlideIndexFromArrowPrev = useCallback((childProps) => {
    setMoveSlide("slide-prev");
    setCurrSlide(childProps);
  }, []);

  const recieveSlideIndexFromSlideList = useCallback((childProps) => {
    if (stateRef.current < childProps) {
      setMoveSlide("slide-next");
      setCurrSlide(childProps);
    } else if (stateRef.current > childProps) {
      setMoveSlide("slide-prev");
      setCurrSlide(childProps);
    }
  }, []);

  return (
    <div className="portfolio-cont">
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
        ></ArrowNext>
        <ArrowPrev
          currSlide={currSlide}
          length={slides.length}
          handleSlideIndexClick={recieveSlideIndexFromArrowPrev}
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

const slides = [
  {
    name: "Art Gallery",
    description: [
      "Developed a website in React for displaying my paintings & drawings.",
      "The data is retrieved from Firebase.",
      "Search images by keywords.",
    ],
    gitLink: "https://github.com/shir0206/ArtGallery",
    webLink: "https://shir0206.github.io/ArtGallery/",
    playStoreLink: "",
    tags: [
      "React",
      "JavaScript",
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
    image: require("../images/tropix.png"),
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
