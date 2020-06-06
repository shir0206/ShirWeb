import React, { useState } from "react";

import "./card.css";

import { Intro } from "../intro-components/Intro/Intro";
import { About } from "../about-componets/About/About";
import { Project } from "../project-componets/Project/Project";
import { Tab } from "../Tab/Tab";

export const Card = (props) => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  return (
    <div className="card">
      <div className="content-container">
        {(props.tab === 0 && (
          <Intro
            animationPlayed={animationPlayed}
            setAnimationPlayed={setAnimationPlayed}
          />
        )) ||
          (props.tab === 1 && <Project />) ||
          (props.tab === 2 && <About />)}
      </div>

      <Tab tab={props.tab} setTab={props.setTab}></Tab>
    </div>
  );
};
