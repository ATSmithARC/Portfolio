import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
 "collab": ["Lance Evans", "Mike Rogers", "Manzer Mirkar", "Bryan Rincon"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P16() {
return (
      <ProjectTypical i={16} details={details} sections={sections}/>     
  );
}
