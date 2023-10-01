import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Luciano Menghini"],
  "description": "This project was the outcome of my fourth undergraduate studio which attempted to situate processes of expression alongside the magnitudes that control the economies of high-rise towers. The goal of this studio was to articulate design proposals that fulfill the different performative criteria of the contemporary high-rise while also contesting its presumed identity. This proposal is for a 20-story high-rise, situated adjacent to Highline Park in New York City. The form of the tower was reached through a formal exploration into ‘profiling’ where two corners of the tower remain vertical, while the remaining two corners follow a more expressive vertical path."
}

const sections = [
  <section>Content Section Coming Soon...</section>,
]

export default function P3() {
return (
      <ProjectTypical i={3} details={details} sections={sections}/>     
  );
}
