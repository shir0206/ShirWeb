import React from "react";

import "./description.css";

export const Description = (props) => {
  const description = props.currentDescription.toString();
  return <li className="description">{description}</li>;
};
