import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Christy Hernandez, Christina Shin, Jiawei Ji"],
  "description": "This project was the team effort of an internal design charrette held at the HKS LA office. The goal for each team was to design and pitch a piece of urban infrastructure that would make a positive cultural and environmental impact on Los Angeles as part of the 2028 Olympic Games, expected to be held in the city, and beyond the games. This proposal, in anticipation of LA’s “28 by 28” transportation initiative, acknowledges the LA Metro’s departure from a “spoke-hub” train line topology and the introduction of its first peripheral loop. This project celebrates the new loop by proposing a series of multi-modal paths and cultural attractions integrated along the new line."
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P12() {
return (
      <ProjectTypical i={12} details={details} sections={sections}/>     
  );
}
