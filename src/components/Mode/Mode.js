import React, { useState } from "react";

import { ExitSVG } from "./ExitSVG";

import "./mode.css";

export const Mode = (props) => {
  return (
    <>
      {props.tab !== 0 && (
        <button
          className={
            props.width <= 500 && props.openReadMore
              ? "exit-read-more-btn"
              : "read-more-btn"
          }
          onClick={() => {
            props.setOpenReadMore(!props.openReadMore);
          }}
        >
          {props.width > 500 ? (
            props.openReadMore ? (
              "Back"
            ) : (
              "Read More"
            )
          ) : props.openReadMore ? (
            <ExitSVG></ExitSVG>
          ) : (
            "Read More"
          )}
        </button>
      )}
    </>
  );
};
