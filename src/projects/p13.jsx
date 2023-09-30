import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Heath May", "Jon Bailey", "James Warton", "Chad Porter"],
  "description": "This project is the design for an innovation center located at Redstone Arsenal where the FBI is building a 243-acre campus to build its capabilities, enhance its training programs, and tap into regional talent. As the flagship building of the new Science and Technology District, the 250,000-square-foot building will be a first-of-its-kind facility dedicated to cyber threat intelligence, data analytics, and training to combat emerging threats. My participation in the project was limited to the concept phase, where I helped the exterior design team integrate their parametric grasshopper model into Revit for documentation using (then new) Rhino.Inside.Revit."
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P13() {
return (
      <ProjectTypical i={13} details={details} sections={sections}/>     
  );
}
