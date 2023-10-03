import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Lance Evans", "Trip Boswell"],
  "description": "This project explores the automation and visualization of diagramming building program data with the help of Rhino+Grasshopper and Excel. Its ambition is to evolve the industry standard of manually tracking and diagramming program data. This work also reveals how formatting program data in a standard fashion can enable architects to utilize other interdisciplinary tools such as a bioinformatics platform like Cytoscape to visualize the complex networks of relationships that underpin the programming and space planning effort of large architectural projects like stadiums, hospitals, and airports. "
}

const sections = [
 <section></section>,
]

export default function P11() {
return (
      <ProjectTypical i={11} details={details} sections={sections}/>     
  );
}
