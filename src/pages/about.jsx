import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import DropdownList from "../components/DropdownList.jsx";
import GridCV from "../components/GridCV.jsx";
import a from "../data/about-data.json";

export default function About() {
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  return (
    <React.Fragment>
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
