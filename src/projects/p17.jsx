import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["TBD"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P17() {
return (
      <ProjectTypical i={17} details={details} sections={sections}/>     
  );
}
