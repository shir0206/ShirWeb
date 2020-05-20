import React, { useState, useCallback } from "react";
import "./portfolio.css";
import "./arrow.css";
import "./carousel.css";
import "./card.css";
import "./tag.css";

export const Portfolio = (props) => {
  const [currCard, setCurrCard] = useState(0);

  const recieveCardIndex = useCallback((childProps) => {
    setCurrCard(childProps);
  }, []);

  return (
    <div className="portfolio-cont">
      <Card card={cards[currCard]}></Card>
      <Arrows
        currCard={currCard}
        length={cards.length}
        handleCarouselItemClick={recieveCardIndex}
      ></Arrows>
      <div className="portfolio-carousel-cont ">
        <ul>{createCarouselList(currCard, recieveCardIndex)}</ul>
      </div>
    </div>
  );
};

function Card(props) {
  let card = props.card;
  return (
    <div className="card-cont">
      <img className="portfolio-image" src={card.image} alt={card.name}></img>
      <h1 className="name">{card.name}</h1>
      <ul className="descriptionList">
        {createDescriptionList(card.description)}
      </ul>

      {/* <p className="description">{card.description}</p> */}
      <div className="portfolio-icon-cont">
        <a
          href={card.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-icon-ref"
        >
          <i className="fab fa-github portfolio-icon"></i>
        </a>
        {card.webLink && (
          <a
            href={card.webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-icon-ref"
          >
            <i className="fas fa-link portfolio-icon"></i>
          </a>
        )}
        {card.playStoreLink && (
          <a
            href={card.playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-icon-ref"
          >
            <i className="fab fa-google-play portfolio-icon"></i>
          </a>
        )}
      </div>
      <ul className="tagList">{createTagsList(card.tags)}</ul>
    </div>
  );
}

function Arrows(props) {
  function updateNext(event) {
    event.preventDefault();
    let next = (props.currCard + 1) % props.length;
    props.handleCarouselItemClick(next);
  }
  function updatePrev(event) {
    event.preventDefault();
    let prev = (props.currCard - 1 + props.length) % props.length;
    props.handleCarouselItemClick(prev);
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
}

function createDescriptionList(descriptions) {
  let descriptionList = descriptions.map((i) => (
    <Description currentDescription={i} key={i} />
  ));
  return descriptionList;
}

function Description(props) {
  const description = props.currentDescription.toString();
  return <li className="description">{description}</li>;
}

function createTagsList(tags) {
  let tagsList = tags.map((i) => <Tag currentTag={i} key={i} />);
  return tagsList;
}

function Tag(props) {
  const tag = props.currentTag.toString();
  return <li className="tag">#{tag}</li>;
}

function createCarouselList(currCard, recieveCardIndex) {
  let carouselList = cards.map((cardObj, cardIndex) => {
    return (
      <CarouselItem
        key={cardIndex}
        cardIndex={cardIndex}
        currCard={currCard}
        handleCarouselItemClick={recieveCardIndex}
      />
    );
  });
  return carouselList;
}

function CarouselItem(props) {
  function updateCarousel(event) {
    event.preventDefault();
    props.handleCarouselItemClick(props.cardIndex);
  }

  return (
    <li
      className={
        props.cardIndex == props.currCard
          ? "portfolio-circle-icon portfolio-fill-icon"
          : "portfolio-circle-icon"
      }
      onClick={updateCarousel}
    ></li>
  );
}

const cards = [
  {
    name: "Art Gallery",
    description: [
      "Developed a website in React that is used as a gallery for my paintings & drawings.",
    ],
    gitLink: "https://github.com/shir0206/ArtGallery",
    webLink: "https://csb-9sv19.now.sh/",
    playStoreLink: "",
    tags: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Firebase",
      "Search",
      "ImageZoom",
    ],
    image: require("../images/art-gallery.png"),
  },
  {
    name: "TropiX",
    description: [
      "Developed game inspired from Tic-Tac-Toe.",
      "The development was planned and executed by using the MVC model.",
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
      "TicTacToe",
      "Fun",
    ],
    image: require("../images/tropix.jpeg"),
  },
  {
    name: "NyquistOptics",
    description: [
      "Developed a native Android mobile app for cameras performance evaluation, used by a global company.",
      "Collected, defined and translated user requirements into project designs and implementation plans.",
    ],
    gitLink: "https://github.com/shir0206/NyquistOptics",
    webLink: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.shirzabolotnyklein.nyquistoptics&hl=en",
    tags: ["Java", "Android", "PerformanceCalculator", "SharedPreferance"],
    image: require("../images/nyquist-optics.png"),
  },
];
