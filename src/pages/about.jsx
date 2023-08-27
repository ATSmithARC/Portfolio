import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import DropdownList from "../components/DropdownList.jsx";
import GridCV from "../components/GridCV.jsx";
import a from "../data/about-data.json";

function randomLanguage() {
  return a.greetings[Math.floor(Math.random() * a.greetings.length)];
}

export default function About() {
  const [hello, setHello] = React.useState(a.greetings[0]);
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  return (
    <React.Fragment>
      <script src="https://www.google.com/recaptcha/api.js"></script>
      <div className="about-container">
        <h1>Developer, Designer, & Human</h1>
        <h2>I love to design, build, and program things.</h2>
        <div className="three-columns-flex">
          <div id="right" className="about-column">
            <DropdownList profile={a.human}/>
          </div>
          <div id="middle" className="about-column">
            <DropdownList profile={a.designer} />
          </div>
          <div id="left" className="about-column">
            <DropdownList profile={a.developer} />
          </div>
          <div className="image-slider">
            <div id="bg" className="image-bg">
              <div id="mg" className="image-mg"></div>
              <div id="fg" className="image-fg"></div>
            </div>
          </div>
        </div>
        
        <GridCV /> 
        
      </div>
    </React.Fragment>
  );
}
