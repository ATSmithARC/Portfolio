import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Mira Henry"],
  "description": "This project was the outcome of my first undergraduate studio and served as an introduction to the means and manners of working spatially and abstractly in relation to the human scale. Regardless of the size of an architectural intervention, the body is a fundamental aspect of space, form, and experience that traverses all scales. Developing an ability to manipulate form towards a desired intent was the broad focus of this project while specifically, the project brief was to design a parking-space-sized pavilion tailored to our own bodily proportions. The pavilion was required to accommodate activities like studying, sleeping, exercising, and sunbathing."
}


const sections = [
  <section></section>,
]

export default function P0() {
return (
      <ProjectTypical  i={0} details={details} sections={sections}/>     
  );
}
