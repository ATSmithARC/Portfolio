import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Mira Henry"],
  "description": "This project was the outcome of my first undergraduate studio and served as an introduction to the means and manners of working spatially and abstractly in relation to the human scale. Regardless of the size of an architectural intervention, the body is a fundamental aspect of space, form, and experience that traverses all scales. Developing an ability to manipulate form towards a desired intent was the broad focus of this project while specifically, the project brief was to design a parking-space-sized pavilion tailored to our own bodily proportions. The pavilion was required to accommodate activities like studying, sleeping, exercising, and sunbathing."
}

const sectionProps = [
  {
    templateType:"img",
    title:"", 
    text:"",
    projectID:0,
    imgID:0,
    alt:"An Image Description",
    classNames:"left",
  },
  {
    templateType:"quote",
    title:"Cool Pic", 
    text:"a cool pic",
    projectID:23,
    imgID:3,
    alt:"An Image Description",
    classNames:"right med caption",
  }
  
]

const sections = [
  <>
  <section>this is a test section</section>,
  <section>this is also a test section</section>
  <ContentSection properties={sectionProps[0]}/>
  </>
]

export default function P0() {
return (
      <ProjectTypical  i={0} details={details} sections={sections}/>     
  );
}
