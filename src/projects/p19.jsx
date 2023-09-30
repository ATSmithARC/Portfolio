import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["None"],
  "description": "'Sammen,' derived from the Danish word for “together,” is meant to capture the essence of this three-piece, nesting candle holder. The candle holder has an interlocking, minimalist design meant to embody the idea that beauty emerges when individuals come together as one. Inspired by the geometry of Japanese Tsugite joinery, subtle details in the form were developed to ensure a successful sand casting process. Limits of the sand casting process meant that the draft angles, tolerances, mold parting lines, material volume, and material distribution were all considered, physically tested, and validated to arrive at the final pattern used in this design."
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P19() {
return (
      <ProjectTypical i={19} details={details} sections={sections}/>     
  );
}
