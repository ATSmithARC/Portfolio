import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import DropdownList from "../components/DropdownList";
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
        <h1>Designer, Programmer, & Human</h1>
        <h2>I love to design, build, and program things.</h2>
        <div className="three-columns-flex">
          <div id="right" className="about-column">
            <DropdownList title="Human" tagline={a.human.tagline} items={a.human.skills} />
          </div>
          <div id="middle" className="about-column">
            <DropdownList title="Designer" tagline={a.designer.tagline}items={a.designer.skills} />
          </div>
          <div id="left" className="about-column">
            <DropdownList title="Developer" tagline={a.developer.tagline} items={a.developer.skills} />
          </div>
          <div className="image-slider">
            <div id="bg" className="image-bg">
              <div id="mg" className="image-mg"></div>
              <div id="fg" className="image-fg"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
