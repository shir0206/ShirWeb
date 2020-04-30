import React from "react";

import { Flower } from "./Flower/Flower";
import { Title } from "./Title/Title";

export const Intro = props => {
  return (
    <div className="cont">
      <Flower />
      <Title />
    </div>
  );
};
