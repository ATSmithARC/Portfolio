import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Lance Evans","Mike Rogers","Michelle Stevenson","Manzer Mirkar"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P2() {
return (
      <ProjectTypical i={2} details={details} sections={sections}/>     
  );
}
