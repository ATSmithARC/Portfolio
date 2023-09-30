import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
 "collab": ["Lance Evans", "Mike Rogers", "Manzer Mirkar", "Bryan Rincon"],
 "description": "Sofi Stadium is a 288,000m2, 70,000 seat indoor-outdoor stadium located in Inglewood, CA. The LAX airport flight path over the site was a significant design-driver of the project and required a majority of the stadium to be built underground. With the pitch at 33m below grade, most fans entering the stadium descend through a series of landscaped “canyon” spaces that provide access to the lower concourse. My day-to-day work on the project spanned three years and included maintenance of several of the project’s LOD 400 models clash detection, visualization, and assisting RFIs relating to the project’s more geometrically complex components."
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P16() {
return (
      <ProjectTypical i={16} details={details} sections={sections}/>     
  );
}
