import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Benjamin Smith"],
  "description": "This project was the outcome of my second undergraduate studio which introduced several fundamental disciplinary frameworks for designing a project at an institutional scale. These included research,  analysis, and representation of topics of site, context, program, and precedent. The project is a roughly 1,000sqm after-school facility for children and young adults located at the busy intersection of Hollywood Blvd. and Vine Street. In the case of this project, a rigorous precedent study of the Igualada Cemetary in Spain inspired many of the formal, spatial, and circulatory qualities found in the final project’s design."
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P1() {
return (
      <ProjectTypical i={1} details={details} sections={sections}/>     
  );
}
