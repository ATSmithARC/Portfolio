import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Luciano Mengini"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P16() {
return (
      <ProjectTypical i={16} details={details} sections={sections}/>     
  );
}
