import * as React from "react";
import ProjectMenu from "../components/ProjectMenu.jsx";
import ProjectMasonry from "../components/ProjectMasonry.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function Projects(props) {
  const category = () => {
    switch (props.filter) {
      case "all":
        return "All";
      case "professional":
        return "Professional";
      case "pro-bono":
        return "Pro Bono";
      case "undergraduate":
        return "Undergraduate";
      case "graduate":
        return "Graduate";
    }
  };
  return (
    <React.Fragment>
      <h1 className="heading-primary">{`${category()} Projects`}</h1>
      <div className="projects-container">
        <ProjectMenu filter={props.filter} />
        <ProjectMasonry category={props.filter} />
      </div>
      <ScrollToTopButton />
    </React.Fragment>
  );
}
