import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Tom Svilans"],
  "description": "Urban development has crucial direct and indirect impacts on biodiversity, yet it remains difficult for architects to quickly understand the impact architectural-scale design decisions have on a given site’s wildlife ecology. PLANimal explores how open-source geospatial ecological data can be accessibly generated, queried, structured, and ultimately drive early-stage conceptual design decisions by leveraging the collective specialist knowledge of citizens, scientists, and designers. Based on Animal-Aided-Design and Biodiversity Sensitive Urban Design principles."
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P23() {
return (
      <ProjectTypical i={23} details={details} sections={sections}/>     
  );
}
