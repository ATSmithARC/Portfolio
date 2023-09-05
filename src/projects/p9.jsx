import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["HKS Line", "Thorton Tomasetti", "Altair"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P9() {
return (
      <ProjectTypical i={9} details={details} sections={sections}/>     
  );
}
