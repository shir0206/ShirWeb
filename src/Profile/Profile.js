import React from "react";
import "./profile.css";


export const Profile = (props) => {
  return (
    <div className="profile-cont">
      <div className="profile-info-cont">
        <h1>Shir Zabolotny</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="profile-icon-cont">
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
        </div>
      </div>
      <div className="profile-image-cont">
        <img
          className="profile-image"
          alt="Profile"
          src={require('../images/profile.png')}

        ></img>
      </div>
    </div>
  );
};
