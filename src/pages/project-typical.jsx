import projectList from "../data/project-list.json";
import ProjectSplash from "../components/ProjectSplash.jsx"
import RelatedProjectGallery from "../components/RelatedProjectGallery.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function ProjectTypical({i, details, sections}) {
const project = projectList[i];
  
function getRelatedProjects(i){
  let last = projectList.length - 1; 
  if (i === 0) {
    return [last, last - 1];
  } else if (i === last){
    return [last - 1, last - 2];
  } else {
    return [i + 1, i - 1];
  } 
}
  
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
      {sections}
      <h2>See more...</h2>
      <RelatedProjectGallery projectIds={getRelatedProjects(i)}/>
      <ScrollToTopButton/>
    </div>
  );
}
