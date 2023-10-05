import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["HKS Line", "Thorton Tomasetti", "Altair"],
  "description": "This project was the result of a three-day workshop held at the 2019 ACADIA Conference. The focus of the workshop was presenting topological optimization workflows of shell structures using Altair’s OptiStruct Software. Specifically, we explored several processes of translating a 2D mesh-edge network into a 3D shell using a mesh relaxation technique. The relaxed 3D meshes then underwent several discretization and sub-division routines to prepare them for FE analysis in Optistruct. Throughout the workshop, we were able to work between Optistruct and Grasshopper with the help of a proprietary Rhino plugin that supported Optistruct’s data types."
}

const sections = [
  <section></section>,
]

export default function P9() {
return (
      <ProjectTypical i={9} details={details} sections={sections}/>     
  );
}
