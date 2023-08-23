import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Mira Henry"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P19() {
return (
      <ProjectTypical i={19} details={details} sections={sections}/>     
  );
}
