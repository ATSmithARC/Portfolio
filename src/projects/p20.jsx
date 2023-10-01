import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": [
      "Sandro Siefert",
      "Søren Henning",
      "Camila Alarcon",
      "Daniel Bilesky",
      "Yuliya Sinke"
    ],
  "description": "Graded Knitted Membranes was the output of a three-week workshop held at the Royal Danish Academy which explored digital-to-physical workflows fabricating CNC-knitted tensile panels. This project in particular focused on pushing the limits of the existing methodology introduced in the workshop by exploring the implications of diagonal loading (loads with both vertical & horizontal components). An initial design was developed first using simulations, then prototype panels were CNC-knit, loaded, and compared with the simulated model. The model was then tuned based on the prototypes’ behaviors, and a final set of 8 panels were knitted and installed."
}

const sections = [
 <section>Content Section Coming Soon...</section>,
]

export default function P20() {
return (
      <ProjectTypical i={20} details={details} sections={sections}/>     
  );
}
