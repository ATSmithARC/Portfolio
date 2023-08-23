import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["None"]
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
