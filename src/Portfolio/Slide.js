import React from "react";
import "./slide.css";
import { Description } from "./Description";
import { Tag } from "./Tag";

export const Slide = (props) => {
  let slide = props.slide;
  return (
    <div className="slide-cont">
      <img className="portfolio-image" src={slide.image} alt={slide.name}></img>
      <h1 className="name">{slide.name}</h1>
      <ul className="descriptionList">
        {createDescriptionList(slide.description)}
      </ul>
      <div className="portfolio-icon-cont">
        <a
          href={slide.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-icon-ref"
        >
          <i className="fab fa-github portfolio-icon"></i>
        </a>
        {slide.webLink && (
          <a
            href={slide.webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-icon-ref"
          >
            <i className="fas fa-link portfolio-icon"></i>
          </a>
        )}
        {slide.playStoreLink && (
          <a
            href={slide.playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-icon-ref"
          >
            <i className="fab fa-google-play portfolio-icon"></i>
          </a>
        )}
      </div>
      <ul className="tagList">{createTagsList(slide.tags)}</ul>
    </div>
  );
};

function createDescriptionList(descriptions) {
  let descriptionList = descriptions.map((i) => (
    <Description currentDescription={i} key={i} />
  ));
  return descriptionList;
}

function createTagsList(tags) {
  let tagsList = tags.map((i) => <Tag currentTag={i} key={i} />);
  return tagsList;
}
