import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["None"],
  "description": "This project, part of a seminar focusing on exterior wall assemblies, was a tectonic precedent study on a corner of the SFMOMA extension by Snøhetta. At the time of this project, details of SFMOMA were not available, so the study was conducted through a combination of studying publicly available construction photos and taking notes of mockups on display at the Encols office in Los Angeles. As part of this project, a detailed 3D model was constructed to represent our understanding of the building’s exterior assembly. The exercise finished with an attempt to re-image the facade by detailing a completely different system in place of the existing one."
}

const sections = [
  <section>Content Section Coming Soon...</section>,
]

export default function P4() {
return (
      <ProjectTypical i={4} details={details} sections={sections}/>     
  );
}
