import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Heath May", "Jon Bailey", "James Warton", "Chad Porter"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P3() {
return (
      <ProjectTypical i={3} details={details} sections={sections}/>     
  );
}
