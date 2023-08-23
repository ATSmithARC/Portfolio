import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Lance Evans", "Dan Trafford"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P18() {
return (
      <ProjectTypical i={18} details={details} sections={sections}/>     
  );
}
