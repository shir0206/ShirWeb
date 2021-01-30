import React, { useState, useCallback, useRef } from "react";
import { useSwipeable } from "react-swipeable";

import "./portfolio.css";

import { Slide } from "../Slide/Slide";
import { SlideList } from "../SlideList/SlideList";
import { ArrowNext } from "../Arrow/ArrowNext";
import { ArrowPrev } from "../Arrow/ArrowPrev";

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

const slides = [
  {
    name: "Uninav",
    description: [
      "*Developed* mobile web application for a guided tour at Haifa University campus, written in `React.JS` (hooks).",
      "The map is provided and manipulated via OpenStreetMap & Leaflet API's.",
      "The points of interest & tracks are received from Firebase.",
      "The current location of the user is obtained through the Geolocation.",
      "When the app detects that the user is near a point of interest, it recommends that he read more detailed information about that point.",
      "The URL's are manipulated via React Router.",
    ],
    gitLink: "https://github.com/shir0206/uninav",
    webLink: "https://shir0206.github.io/uninav/",
    playStoreLink: "",
    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Firebase",
      "OpenStreetMaps",
      "Geolocation",
      "Leaflet",
      "Router",
      "GraphicDesign",
      "Locale",
    ],

    image:
      "https://res.cloudinary.com/doywfjryu/image/upload/v1612012470/shir-web/uninav_eqnatg.png",
  },
  {
    name: "Radial Menu",
    description: [
      "Developed a recursive & responsive radial menu, that retrieves from a server the structure of folders & images.",
      "When a folder is clicked, displayed the next level of it's folders and images.",
      "When an image is clicked, it is displayed below, along with a gallery of all the rest of the images at the current level.",
      "The code is written in React.js, the data is retrived using axios & server token.",
      "The button is built recursively so that each button in the menu is represented as a Node component.",
      "The position of the button on the screen is dynamically changing, using Trigonometric calculations.",
    ],
    gitLink: "https://github.com/shir0206/radial-menu",
    webLink: "https://shir0206.github.io/radial-menu/",
    playStoreLink: "",
    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Axios",
      "Recursion",
      "trigonometry",
      "Responsive",
    ],

    image:
      "https://res.cloudinary.com/doywfjryu/image/upload/v1612014002/shir-web/radial_menu_myfxd6.png",
  },
  {
    name: "Art Gallery",
    description: [
      "Developed a website in React.js for displaying my paintings & drawings.",
      "The data is retrieved from Firebase.",
      "Search images by keywords.",
      "This project is my first React.js web, the development took a month, while learning the most basic topics from the docs.",
      "I tried to build the site while maintaining a responsive design in different sizes of screens.",
      "The most challenging concept was to represent the image cards responsibly so that the amount of columns would be updated according to the screen width.",
    ],
    gitLink: "https://github.com/shir0206/ArtGallery",
    webLink: "https://shir0206.github.io/ArtGallery/",
    playStoreLink: "",
    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Firebase",
      "Search",
      "ImageZoom",
      "ScrollLock",
    ],

    image:
      "https://res.cloudinary.com/doywfjryu/image/upload/v1591429275/shir-web/art-gallery_dnnzna.png",
  },
  {
    name: "TropiX",
    description: [
      "TropiX is a Mobile App Game designed for children, inspired by Tic-Tac-Toe.",
      "The app was written in Java for Android devices.",
      "The architecture of the app was designed using MVC model.",
      "Permanent data is stored on the device using SharedPreferance.",
      "The app supports different languages (Hebrew & English).",
      "The screens, icons and colors were designed by mockups.",
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
      "UX/UI",
      "SharedPreference",
      "TicTacToe",
      "UnlockableCharacters",
    ],
    image:
      "https://res.cloudinary.com/doywfjryu/image/upload/v1591429271/shir-web/tropix_fkexxi.png",
  },
  {
    name: "NyquistOptics",
    description: [
      "*Developed* an `Android` app for evaluating camera performances",
      "The calculations are calculated by the user's input via Nyquist formulas",
      "Translated user requirements into implementation.",
      "The app was released in Google Play and there are ~50 active users worldwide as of 2021.",
      "The app is the first Android app I developed and currently under refractor process, in order to meet additional requirements and additional calculations.",
    ],
    gitLink: "https://github.com/shir0206/NyquistOptics",
    webLink: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.shirzabolotnyklein.nyquistoptics&hl=en",
    tags: ["Java", "Android", "PerformanceCalculator", "SharedPreferance"],
    image:
      "https://res.cloudinary.com/doywfjryu/image/upload/v1591429270/shir-web/nyquist-optics_kzeurl.png",
  },
];
