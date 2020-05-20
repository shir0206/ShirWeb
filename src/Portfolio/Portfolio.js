import React, { useState, useCallback } from "react";
import "./portfolio.css";
import "./arrow.css";
import "./carousel.css";
import { Slide } from "./Slide";
import { SlideIndex } from "./SlideIndex";
import { Arrows } from "./Arrows";

export const Portfolio = (props) => {
  const [currSlide, setCurrSlide] = useState(0);

  const recieveSlideIndex = useCallback((childProps) => {
    setCurrSlide(childProps);
  }, []);

  return (
    <div className="portfolio-cont">
      <Slide slide={slides[currSlide]}></Slide>
      <Arrows
        currSlide={currSlide}
        length={slides.length}
        handleSlideIndexClick={recieveSlideIndex}
      ></Arrows>
      <div className="portfolio-carousel-cont ">
        <ul>{createSlideList(currSlide, recieveSlideIndex)}</ul>
      </div>
    </div>
  );
};

function createSlideList(currSlide, recieveSlideIndex) {
  let carouselList = slides.map((slideObj, slideIndex) => {
    return (
      <SlideIndex
        key={slideIndex}
        slideIndex={slideIndex}
        currSlide={currSlide}
        handleSlideIndexClick={recieveSlideIndex}
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
      "Search images according to keywords.",
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
