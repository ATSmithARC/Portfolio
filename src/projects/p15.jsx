import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Lance Evans","Mike Rogers","Michelle Stevenson","Manzer Mirkar","Bryan Rincon","Niel Prunier","Austin Ash","Zac Potts"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P15() {
return (
      <ProjectTypical i={15} details={details} sections={sections}/>     
  );
}
