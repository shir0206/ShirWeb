import React, { useState, useCallback } from "react";

import "./tag.css";

export const Tag = (props) => {
  const tag = props.currentTag.toString();
  return <li className="tag">#{tag}</li>;
};
