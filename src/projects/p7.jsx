import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Willy Müller"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P7() {
return (
      <ProjectTypical i={7} details={details} sections={sections}/>     
  );
}
