import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Tom Svilans"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P23() {
return (
      <ProjectTypical i={23} details={details} sections={sections}/>     
  );
}
