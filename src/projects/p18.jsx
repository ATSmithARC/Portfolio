import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Jacob Riiber","Claudia Colmo"],
  "description": "Passive Thermally Actuated Space Frames was a design-led research project focusing on the architectural applications, behavior, tectonics, and mechanical challenges of simulating and fabricating passively actuated space frame systems. The purpose of this project was to test the limits of the space frame system by exploring the integration of actuating struts and omnidirectional nodes that together drive a passive, mechanical response to changes in ambient temperature and solar radiation. Two large-scale prototypes were fabricated and sensed to understand and measure the performance and physical behavior of the PTASF system."
}

const sections = [
 <section>Content Section Coming Soon...</section>,
]

export default function P18() {
return (
      <ProjectTypical i={18} details={details} sections={sections}/>     
  );
}
