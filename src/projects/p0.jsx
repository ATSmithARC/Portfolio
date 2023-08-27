import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const projectID = 0;
const details = {
  "collab": ["Lance Evans", "Mike Rogers", "Andrew Colling", "Bryan Rincon"]
}

const pageSectionContents = [
  {
    template: "img",
    projectID: projectID,
    imgID: "01",
    alt: "Concourse Construction",
    className: "block-align-left"
  },
  {
    template: "img",
    projectID: projectID,
    imgID: "02",
    alt: "Oculus Videoboard Construction",
    className: "block-align-right"
  },
  
]

const sections = [
  <section>this is a test section</section>,
  <ContentSection content={pageSectionContents[0]}/>
]

export default function P0() {
return (
      <ProjectTypical id={projectID} details={details} sections={sections}/>     
  );
}
