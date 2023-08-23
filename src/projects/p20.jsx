import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Jacob Riiber","Claudia Colmo"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P20() {
return (
      <ProjectTypical i={20} details={details} sections={sections}/>     
  );
}
