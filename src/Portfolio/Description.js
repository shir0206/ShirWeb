import React, { useState, useCallback } from "react";

export const Description = (props) => {
  const description = props.currentDescription.toString();
  return <li className="description">{description}</li>;
};
