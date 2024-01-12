import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Sean Justin","Russell Thompson"],
  "description": "This project is a proposal for a seven-story, 10,000 sqm. school of architecture based on a spherical building typology. The design began with a formal exploration into how aggregations of discrete parts can, at times, appear as heterogeneous wholes using gestures of “cutting”, and with the application of graphic textures. In this case, a simple rectangular prism was aggregated into larger clusters, that were sliced and textured to reappear solid. The whole remained flexible in its tectonic as it began to receive spatial and functional roles. The organization of this school stacks itself around a central, outdoor cavity, designed to illuminate and ventilate the core."
}

const sections = [
  <section></section>,
]

export default function P5() {
return (
      <ProjectTypical i={5} details={details} sections={sections}/>     
  );
}
