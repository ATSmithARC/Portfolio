import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Lance Evans", "Mike Rogers", "Andrew Colling", "Bryan Rincon"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P14() {
return (
      <ProjectTypical i={14} details={details} sections={sections}/>     
  );
}
