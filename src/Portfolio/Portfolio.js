import React, { useState } from "react";
import "./portfolio.css";

export const Portfolio = (props) => {
  return (
    <div className="portfolio-cont">
      <div className="portfolio-image-cont">
        <img
          className="portfolio-image"
          src={card[0].image}
          alt={card[0].name}
        ></img>
      </div>
      <div className="portfolio-info-cont">
        <h1>{card[0].name}</h1>
        <p>{card[0].description}</p>
        <div className="portfolio-icon-cont">
          <a
            href={card[0].gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-icon-ref"
          >
            <i className="fab fa-github portfolio-icon"></i>
          </a>
          <a
            href={card[0].webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-icon-ref"
          >
            <i className="fas fa-link portfolio-icon"></i>
          </a>
          <a
            href={card[0].playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-icon-ref"
          >
            <i className="fab fa-google-play portfolio-icon"></i>
          </a>
        </div>
        <ul>{createTagsList(card[0].tags)}</ul>
      </div>
    </div>
  );
};


const card = [
  {
    name: "Art Gallery",
    description:
      "Arg gagdf gfd gagdf gfd rat bagdf gfd gfd llery gagdf gfd rat bagdf gfd gfd llery gfd llery gagdf gfd rat bagdf gfd gfd llery",
    gitLink: "https://github.com/shir0206/ArtGallery",
    webLink: "https://csb-9sv19.now.sh/",
    playStoreLink: "#",
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
    webLink: "#",
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
    webLink: "#",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.shirzabolotnyklein.nyquistoptics&hl=en",
    tags: ["Java", "Android", "Performance Calculations", "Shared Preferance"],
    image:
      "https://lh3.googleusercontent.com/mAaSRqqx1WRkwVwNIM4jnLdQfoh6KMnWbFczL57H7qp-9zIPl6ODHpHOZ0vtAW0BKYWQ=s360-rw",
  },
];

function createTagsList(tags) {
  let tagsList = tags.map((i) => <Tag currentTag={i} key={i} />);
  return tagsList;
}

function Tag(props) {
  //const [tag, setTag] = useState(props.currentTag.toString());

  const tag = props.currentTag.toString();
  return <li className="tag">#{tag}</li>;
}
