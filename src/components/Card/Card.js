import React from "react";

import "./card.css";

import { Intro } from "../intro-components/Intro/Intro";
import { About } from "../about-componets/About/About";
import { Project } from "../project-componets/Project/Project";
import { Tab } from "../Tab/Tab";
import { Mode } from "../Mode/Mode";

export const Card = (props) => {
  return (
    <div className="card">
      <Mode
        tab={props.tab}
        width={props.width}
        openReadMore={props.openReadMore}
        setOpenReadMore={props.setOpenReadMore}
      ></Mode>
      <div className="content-container">
        {(props.tab === 0 && (
          <Intro
            animationPlayed={props.animationPlayed}
            setAnimationPlayed={props.setAnimationPlayed}
          />
        )) ||
          (props.tab === 1 && <Project />) ||
          (props.tab === 2 && <About />)}
      </div>

      <Tab tab={props.tab} setTab={props.setTab}></Tab>
    </div>
  );
};
