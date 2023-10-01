import * as React from "react";
import ProjectMenu from "../components/ProjectMenu.jsx";
import ProjectMasonry from "../components/ProjectMasonry.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"

export default function Projects(props) {
  return (
    <React.Fragment>
      <div className="projects-container">
        <ProjectMenu filter={props.filter}/>
        <ProjectMasonry category={props.filter}/>
      </div>
      <ScrollToTopButton />
    </React.Fragment>
  );
}
