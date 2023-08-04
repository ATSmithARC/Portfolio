import * as React from "react";
import ProjectMenu from "../components/ProjectMenu.jsx";
import ProjectMasonry from "../components/ProjectMasonry.jsx";

export default function Projects(props) {
  return (
    <React.Fragment>
      <div className="project-container">
        <ProjectMenu filter={props.filter}/>
        <ProjectMasonry category={props.filter}/>
      </div>
    </React.Fragment>
  );
}
