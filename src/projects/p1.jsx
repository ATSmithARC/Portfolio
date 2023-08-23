import ProjectTypical from "../pages/project-typical.jsx";

const details = {
 "collab": ["Lance Evans", "Mike Rogers", "Manzer Mirkar", "Bryan Rincon"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P1() {
return (
      <ProjectTypical i={1} details={details} sections={sections}/>     
  );
}
