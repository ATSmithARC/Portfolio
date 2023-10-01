import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Dwayne Oyler"],
  "description": "Named and inspired by safe-haven cities called “Sietches” from the science function novel Dune, this undergraduate project was an exploration into developing a design narrative as the basis for an architectural brief. Situated in Palm Springs, California, this speculative residential project responds to the likely future of catastrophic water scarcity in American Southwest region by burrowing itself into the ground to both protect and celebrate its grotesque mechanical systems that work to provide the property with its precious supply of water. The only visible hint of the residence below is framework of photovoltaic panels that power the mechanisms below."
}

const sections = [
  <section>Content Section Coming Soon...</section>
]

export default function P6() {
return (
      <ProjectTypical i={6} details={details} sections={sections}/>     
  );
}
