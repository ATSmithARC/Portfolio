import projectList from "../data/project-list.json";
import ProjectSplash from "../components/ProjectSplash.jsx"
import RelatedProjectGallery from "../components/RelatedProjectGallery.jsx"


export default function ProjectTypical({i, details, sections}) {
const project = projectList[i];
  
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
    <div className="project-container">
      <ProjectSplash project={project} details={details}/>
      <div className="wrapper">
      <h2>Sorry, project page content is under construction.</h2>
      <h1 className="about-section-header">See more...</h1>
      {sections}
      <RelatedProjectGallery projectIds={[0,1,2,3]}/>
      </div>
      
    </div>
  );
}
