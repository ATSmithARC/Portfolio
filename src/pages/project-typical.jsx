import projectList from "../data/project-list.json";

export default function ProjectTypical(props) {
  const project = projectList[props.i];

  if (!project) {
    return (
      <div className="page">
        <h2> This project doesnt appear to exist.</h2>
        <img src="https://media.tenor.com/aTB70bcZZKcAAAAd/obi-wan-perhaps-the-archives-are-incomplete.gif" 
             alt="If it's not in the Jedi archive, it probably doesnt exist."/>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Project Pages are in Development</h2>
      <h2>{project.name}</h2>
      <p>{project.desc}</p>
      {props.sections}
      <p>Details: {JSON.stringify(props.details)}</p>
    </div>
  );
}
