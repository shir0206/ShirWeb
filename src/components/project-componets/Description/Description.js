import React from "react";

import "./description.css";

export const Description = (props) => {
  const description = props.currentDescription.toString();
  return <li className="description">{description}</li>;

  let descriptionContent = "";

  let stringFlag = true;
  let stringContent = "";
  let codeFlag = false;
  let codeContent = "";
  let boldFlag = false;
  let boldContent = "";
  let char = "";

  for (let i = 0; i < description.length; i++) {
    char = description[i];

    if (char === "`") {
      codeFlag = !codeFlag;

      if (codeFlag) {
        stringFlag = false;
        descriptionContent += stringContent;
        stringContent = "";
      } else {
        descriptionContent += <code>{codeContent}</code>;
        stringFlag = true;
        codeContent = "";
      }
    } else if (char === "*") {
      boldFlag = !boldFlag;

      if (boldFlag) {
        stringFlag = false;
        descriptionContent += stringContent;
        stringContent = "";
      } else {
        descriptionContent += <b>{boldContent}</b>;
        stringFlag = true;
        boldContent = "";
      }
    } else {
      if (codeFlag) {
        codeContent += char;
      }

      if (boldFlag) {
        boldContent += char;
      }

      if (stringFlag) {
        stringContent += char;
      }
    }
  }
  stringFlag = false;
  descriptionContent += stringContent;
  stringContent = "";

  return <li className="description">{descriptionContent}</li>;
};

// ``
// **
