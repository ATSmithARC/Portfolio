import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Willy Müller"],
  "description": "This undergraduate project, operating at the scale of the city, is based on the speculative creation of a new city center on the periphery of downtown Los Angeles. Dodger’s Stadium, opened in 1962, and built on forcibly taken land, is currently surrounded by roughly 2,000 sqm. surface-level parking. Used only on game-days, this land has increasingly been the subject of prospective development plans. With that history in mind, this project reimagines a portion of this prime real estate as a master-planned, mixed-use, and mid-rise residential community that formally and operationally identifies as an extension of the existing ballpark’s outfield."
}

const sections = [
 <section></section>,
]

export default function P7() {
return (
      <ProjectTypical i={7} details={details} sections={sections}/>     
  );
}
