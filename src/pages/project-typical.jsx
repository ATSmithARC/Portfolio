import projects from "../data/project-data.json";

export default function ProjectTypical(props) {
return (
      <div className="page">
      <h2> This project has not been added to the site yet </h2>
      <p>{projects[props.i].title}</p>
      <p>{projects[props.i].desc}</p>
      {props.sections}
      <p>Details: {JSON.stringify(props.details)}</p>
    </div>
  );
}
