import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["None"],
  "description": "StadiumTools is a ground-up, open-source geometry object library, written in C# and for the .NET framework, aimed at making it easier for anyone to develop computational tools for the cross-platform, parametric modeling and analysis of stadium seating bowl geometries and their associated BIM elements. In addition to the C# object library, StadiumTools has been implemented into a Grasshopper Plugin and a forthcoming Revit Addon. StadiumTools accelerates the iterative process of stadium bowl design and implements several novel features for developing seating bowl geometries from irregular plan configurations."
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P22() {
return (
      <ProjectTypical i={22} details={details} sections={sections}/>     
  );
}
