import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["HKS Line", "Thorton Tomasetti", "Altair"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P5() {
return (
      <ProjectTypical i={5} details={details} sections={sections}/>     
  );
}
