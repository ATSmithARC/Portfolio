import * as React from "react";
import Avatar from "../components/Avatar.jsx";

export default function About() {
  return (
    <React.Fragment>
      <div className="about-container">
        <h1>Designer, Programmer, & Human</h1>
        <h2>I love to design, build, and program things.</h2>
        <div className="three-columns-flex">
          <div id="right" className="about-column">
            <h2> Human </h2>
          </div>
          <div id="middle" className="about-column">
            <h2>Designer</h2>
            <ul>
              <li>
                <h3>Architecture</h3>
              </li>
              <li>
                <h3>Digital Fab.</h3>
              </li>
              <li>
                <h3>3D Modeling</h3>
              </li>
              <li>
                <h3>Graphic Design</h3>
              </li>
              <li>
                <h3>UI/UX Design</h3>
              </li>
            </ul>
          </div>
          <div id="left" className="about-column">
            <h2>
              {"{"}Programmer{"}"}
            </h2>
            <ul>
              <li>
                <h3>Software Plugins</h3>
              </li>
              <li>
                <h3>Maps & GIS</h3>
              </li>
              <li>
                <h3>Web Development</h3>
              </li>
              <li>
                <h3>Data Wrangling</h3>
              </li>
              <li>
                <h3>Algorithms</h3>
              </li>
            </ul>
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
