import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Lance Evans","Dan Trafford","Heath May"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P11() {
return (
      <ProjectTypical i={11} details={details} sections={sections}/>     
  );
}
