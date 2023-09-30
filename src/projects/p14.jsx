import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Lance Evans", "Mike Rogers", "Andrew Colling", "Bryan Rincon"],
  "description": "The Barangaroo Pier Pavilion competition asked entrants to propose a prominent covered public space that would serve as a visually iconic landmark, designed to accommodate a broad range of programmed events while also offering a protective space to dwell and contemplate 365 days of the year. The conceptual narrative for this proposal emerged out of interest in the cultural significance of storytelling as it relates to both indigenous and immigrated Australians. The pavilion’s design is comprised of a ribbed metallic shell, clad in copper that rests on a reflective slate plinth. The shell’s shape itself carefully responds in several ways to its context."
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
