import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const projectIndex = 23;
const details = {
  "collab": ["Tom Svilans"],
  "description": "Urban development has crucial direct and indirect impacts on biodiversity, yet it remains difficult for architects to quickly understand the impact architectural-scale design decisions have on a given site’s wildlife ecology. PLANimal explores how open-source geospatial ecological data can be accessibly generated, queried, structured, and ultimately drive early-stage conceptual design decisions by leveraging the collective specialist knowledge of citizens, scientists, and designers. Based on Animal-Aided-Design and Biodiversity Sensitive Urban Design principles."
}

const sectionProps = [
  {
    templateType:"img",
    title:"", 
    text:"",
    projectID:projectIndex,
    imgID:2,
    alt:"An Image Description",
    classNames:"left",
  },
  {
    templateType:"quote",
    title:"Cool Pic", 
    text:"a cool pic",
    projectID:projectIndex,
    imgID:3,
    alt:"An Image Description",
    classNames:"right med caption",
  }
  
]

const sections = [
  <section></section>
]


export default function P23() {
return (
      <ProjectTypical i={projectIndex} details={details} sections={sections}/>     
  );
}
