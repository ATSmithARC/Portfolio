import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Heath May", "Jon Bailey", "James Warton", "Chad Porter"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P13() {
return (
      <ProjectTypical i={13} details={details} sections={sections}/>     
  );
}
