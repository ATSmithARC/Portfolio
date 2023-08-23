import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Ryan Griffin (Co-Author)", "Julie Hiromoto", "Cory Brugger"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P4() {
return (
      <ProjectTypical i={4} details={details} sections={sections}/>     
  );
}
