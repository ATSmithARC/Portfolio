import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["HKS Line", "Thorton Tomasetti"],
  "description": "This project was the result of a three-day workshop held at the 2018 ACADIA Conference. The focus of this workshop was on the structural mechanics and architectural principles of both reciprocal frame and grid shell structures, as well as methods of generating, relaxing, and optimizing FE models of both structural systems using Rhino+Grasshopper and Revit+Dynamo. One and a half days of instruction and computational design was followed by an equal period of fabrication wherein a group-generated computational model was used to fabricate two long-span, self-supporting structures, built from locally acquired wood laminate."
}

const sections = [
  <section></section>,
]

export default function P8() {
return (
      <ProjectTypical i={8} details={details} sections={sections}/>     
  );
}
