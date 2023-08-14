import * as React from "react";
import ImageOverlap from "../components/ImageOverlap.jsx";

export default function About() {
  return (
    <React.Fragment>
      <div className="about-container">
        <h1>Computational Designer & Programmer</h1>
        <h2>I design, fabricate, and program things.</h2>
        <ImageOverlap />
        <br/>
        <div className="parts-container">
          <div className="parts-left">
            <h2>Part Designer</h2>
            <h3> 
            - Architect (MAA)
            </h3><br/>
            <h3> 
            - Fabrication
            </h3><br/>
            <h3> 
            - Rationalization
            </h3><br/>
            <h3> 
            - Visualization
            </h3><br/>
          </div>
          <div className="parts-center"></div>
          <div className="parts-right">
            <h2>
              {" "}
              {"{"}Part Programmer{"}"}
            </h2>
            <h3> 
            - Software Plugins
            </h3><br/>
            <h3> 
            - Frontend Web
            </h3><br/>
            <h3> 
            - Backend Web
            </h3><br/>
            <h3> 
            - GIS
            </h3><br/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
