import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["HKS Line", "Thorton Tomasetti"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P6() {
return (
      <ProjectTypical i={6} details={details} sections={sections}/>     
  );
}
