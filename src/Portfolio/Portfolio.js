import React, { useState, useCallback } from "react";
import "./portfolio.css";
import "./arrow.css";
import "./carousel.css";

export const Portfolio = (props) => {
  const [currCard, setCurrCard] = useState(0);

  return (
    <div className="portfolio-cont">
      <div className="portfolio-image-cont">
        <img
          className="portfolio-image"
          src={card[currCard].image}
          alt={card[currCard].name}
        ></img>
      </div>
      <div className="portfolio-info-cont">
        <h1>{card[currCard].name}</h1>
        <p>{card[currCard].description}</p>
        <div className="portfolio-icon-cont">
          <a
            href={card[currCard].gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-icon-ref"
          >
            <i className="fab fa-github portfolio-icon"></i>
          </a>
          {card[currCard].webLink  && (
            <a
              href={card[currCard].webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-icon-ref"
            >
              <i className="fas fa-link portfolio-icon"></i>
            </a>
          )}
          {card[currCard].playStoreLink  && (
            <a
              href={card[currCard].playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-icon-ref"
            >
              <i className="fab fa-google-play portfolio-icon"></i>
            </a>
          )}
        </div>
        <ul>{createTagsList(card[currCard].tags)}</ul>
      </div>
      <div className="portfolio-arrow-cont">
        <div
          className="right-arrow-container"
          onClick={() => {
            setCurrCard((currCard + 1) % card.length);
          }}
        >
          <div className="round">
            <p className="arrow">&gt;</p>
            <p className="arrow second-arrow">&gt;</p>
          </div>
        </div>
        <div
          className="left-arrow-container"
          onClick={() => {
            setCurrCard((currCard - 1 + card.length) % card.length);
          }}
        >
          <div className="round">
            <p className="arrow">&lt;</p>
            <p className="arrow second-arrow">&lt;</p>
          </div>
        </div>
      </div>
      <div className="portfolio-carousel-cont">
        <ul>{createCarouselList(currCard)}</ul>
      </div>
    </div>
  );
};

function createTagsList(tags) {
  let tagsList = tags.map((i) => <Tag currentTag={i} key={i} />);
  return tagsList;
}

function Tag(props) {
  const tag = props.currentTag.toString();
  return <li className="tag">#{tag}</li>;
}

function createCarouselList(currCard) {
  let carouselList = card.map((cardObj, cardIndex) => {
    return (
      <CarouselItem key={cardIndex} cardIndex={cardIndex} currCard={currCard} />
    );
  });
  return carouselList;
}

function CarouselItem(props) {
  return (
    <li
      className={
        props.cardIndex == props.currCard
          ? "portfolio-circle-icon portfolio-fill-icon"
          : "portfolio-circle-icon"
      }
    ></li>
  );
}

const card = [
  {
    name: "Art Gallery",
    description:
      "Arg gagdf gfd gagdf gfd rat bagdf gfd gfd llery gagdf gfd rat bagdf gfd gfd llery gfd llery gagdf gfd rat bagdf gfd gfd llery",
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
      "Zoom Image",
    ],
    image: "https://english.tau.ac.il/sites/default/files/galery580-330.jpg",
  },
  {
    name: "TropiX",
    description:
      "Gagdf gfd gagdfd llery gfd llery gagdf gfd rat bagdf gfd gfd llery",
    gitLink: "https://github.com/shir0206/TropiX-App",
    webLink: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.shirzabolotnyklein.tropix&hl=en",
    tags: [
      "Java",
      "Android",
      "MVC",
      "Multi-Language",
      "RecyclerView",
      "Tic-Tac-Toe",
      "Fun",
    ],
    image:
      "https://lh3.googleusercontent.com/5r-OSK7yL-p_8_qvnPrDpAWWTxeQiofdl-D8NxFotgmm_o7g-f7nmodL4MMRdTmkldo=w1440-h620-rw",
  },
  {
    name: "NyquistOptics",
    description: "Bllery gfd llery gagdf gfd rallery",
    gitLink: "https://github.com/shir0206/NyquistOptics",
    webLink: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.shirzabolotnyklein.nyquistoptics&hl=en",
    tags: ["Java", "Android", "Performance Calculations", "Shared Preferance"],
    image:
      "https://lh3.googleusercontent.com/mAaSRqqx1WRkwVwNIM4jnLdQfoh6KMnWbFczL57H7qp-9zIPl6ODHpHOZ0vtAW0BKYWQ=s360-rw",
  },
];
