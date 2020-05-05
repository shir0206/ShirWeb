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
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <i className="fab fa-github"></i> 
        <i className="fab fa-linkedin"></i>
        <i class="fab fa-codepen"></i>

      </div>
      <div className="profile-image-cont">
        <img
          className="profile-image"
          alt="Profile"
          src="https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/522977_3877750903628_1542323555_n.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=IqijnuKCntsAX8jwfXr&_nc_ht=scontent.fsdv2-1.fna&oh=9cea3e1cbd2bda1c6c5b8d391121fcc1&oe=5ED67FE9"
        ></img>
      </div>
    </div>
  );
};
