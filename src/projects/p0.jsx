import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Lance Evans", "Mike Rogers", "Andrew Colling", "Bryan Rincon"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P0() {
return (
      <ProjectTypical i={0} details={details} sections={sections}/>     
  );
}
