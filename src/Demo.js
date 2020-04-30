import React from "react";
import "./demo.css";

function Demo() {
  // <Intro/>

  return (
    <div className="demo">
      <div className="card">
        <input checked="checked" id="rad1" name="rad" type="radio"></input>
        <div for="rad1">
          <h1>1</h1>
          <div className="btn"></div>
        </div>
        <input id="rad2" name="rad" type="radio"></input>
        <div for="rad2">
          <h1>2</h1>
          <div className="btn"></div>
        </div>
        <input id="rad3" name="rad" type="radio"></input>
        <div for="rad3">
          <h1>3</h1>
          <div className="btn"></div>
        </div>
        <input type="checkbox"></input>
        <a>Read More</a>
        <p>
          Phasellus nec sem in justo pellentesque facilisis. In hac habitasse
          platea dictumst. Praesent metus tellus, elementum eu, semper a,
          adipiscing nec, purus. Maecenas tempus, tellus eget condimentum
          rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
          ipsum. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu.
        </p>
        <div className="shapes"></div>
        <div className="photo"></div>
        <div className="blob">
          <div className="glob"></div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
