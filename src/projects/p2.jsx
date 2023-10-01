import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Mary-Ann Ray", "Robert Mangurian"],
  "description": "This project was the outcome of my third undergraduate studio which introduced programming and conceptual narratives as a means of generating organizational models of architecture. The studio emphasized that the formal choices we make as architects impact a range of behavioral outcomes that a building can invoke. The program developed for this project focused on teaching and celebrating the cultural importance of street food, home cooking, and other informal cuisines within the multi-ethnic context of downtown Los Angeles. The architectural result was a serrated tower that acted as part museum, part culinary school, and part market."
}

const sections = [
  <section>Content Section Coming Soon...</section>,
]

export default function P2() {
return (
      <ProjectTypical i={2} details={details} sections={sections}/>     
  );
}
