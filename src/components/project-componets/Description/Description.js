import React from "react";

import "./description.css";

export const Description = (props) => {
  const description = props.currentDescription.toString();

  const generateReplacer = (regex, element) => (match) => {
    const fixedWord = match.replaceAll(regex, "");
    return `<${element}>${fixedWord}</${element}>`;
  };

  return (
    <li className="description">
      <span
        dangerouslySetInnerHTML={{
          __html: description
          .replace(/\*\*.+\*\*/, generateReplacer("**", "strong"))
          .replace(/\*.+\*/, generateReplacer("*", "em"))
          .replace(/`.+`/, generateReplacer("`", "code")),
        }}
      />
    </li>
  );
};
