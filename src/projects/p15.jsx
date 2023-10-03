import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Lance Evans","Mike Rogers","Michelle Stevenson","Manzer Mirkar","Bryan Rincon","Niel Prunier","Austin Ash","Zac Potts"],
  "description": "YouTube Theater is a 6,000-seat performing arts venue located beneath neighboring Sofi Stadium's roof canopy. The project faced numerous design challenges in order to seamlessly integrate with the adjacent stadium and canopy above. My involvement in the project spanned nearly four years and included all project phases. In close collaboration with the LA-based project team, my contributions focused on the design and documentation of the exterior facade and interior lobbies and included assisting with parametric 3D modeling, design refinement, rendering, interior and exterior documentation, and resolving RFI’s."
}

const sections = [
 <section></section>,
]

export default function P15() {
return (
      <ProjectTypical i={15} details={details} sections={sections}/>     
  );
}
