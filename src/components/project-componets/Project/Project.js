import React from "react";

import "./project.css";

import { ProjectSVG } from "./ProjectSVG";

export const Project = (props) => {
  return (
    <div className="project-cont">
      <div className="project-svg">
        <ProjectSVG />
      </div>
    </div>
  );
};
