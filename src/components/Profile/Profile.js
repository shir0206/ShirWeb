import React from "react";
// import image from "../../public/images/profile.png";
import profileImage from "../../images/profile.png";

import "./profile.css";

export const Profile = (props) => {
  return (
    <div className="profile-cont">
      <div className="profile-info-cont">
        <h1 className="profile-info-name">Shir Zabolotny</h1>
        <p>
          Hey there! :)
          <br />
          I am a developer striving for pixel perfect design and not
          compromising on less.
          <br />I enjoy creating beautiful designs and exploring the world of
          <i className="fab fa-html5 profile-info-icon html-icon"></i>
          <i className="fab fa-css3-alt profile-info-icon css-icon"></i>
          <i className="fab fa-js-square profile-info-icon js-icon"></i>
          <i className="fab fa-react profile-info-icon react-icon"></i>
          <i className="fab fa-java profile-info-icon java-icon"></i>
          <i className="fab fa-android profile-info-icon android-icon"></i>
          <i className="fas fa-database profile-info-icon db-icon"></i> !
          <br />
          You can check out my other works and some other links down below.
        </p>

        <span className="profile-icon-cont">
          <a
            href="https://github.com/shir0206/"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-icon-ref"
          >
            <i className="fab fa-github profile-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shir-zabolotny-a83b18109/"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-icon-ref"
          >
            <i className="fab fa-linkedin profile-icon"></i>
          </a>
          <a
            href="https://codesandbox.io/u/shir0206"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-icon-ref"
          >
            <i className="fab fa-codepen profile-icon"></i>
          </a>
          <a href="mailto:shir0206@gmail.com" className="profile-icon-ref">
            <i className="far fa-envelope profile-icon"></i>
          </a>
        </span>
      </div>
      <div className="profile-image-cont">
        <img className="profile-image" alt="Profile" src={profileImage}></img>
      </div>
    </div>
  );
};
