import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Mary-Ann Ray", "Robert Mangurian"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P14() {
return (
      <ProjectTypical i={14} details={details} sections={sections}/>     
  );
}
